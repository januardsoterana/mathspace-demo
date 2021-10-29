// @flow

import React, { Fragment } from 'react';
import Link from 'next/link';

import Anchor from 'components/Anchor';
import sendCTAClickEvent from 'utils/analytics';
import { colors, breakPoints } from 'utils/theme';
import { urls, urlBuilders, getUrlsForCounty } from 'utils/urls';
import { type CountryCodes } from 'utils/types';

const DOWNLOAD_APP_STORE = 'download-app-store';
const DOWNLOAD_GOOGLE_PLAY = 'download-google-play';

const getPhoneNumberByCountry = (country?: CountryCodes) => {
  switch (country) {
    case 'US':
      return '+1 480-630-6425';
    case 'AU':
    default:
      return '+61 1300 833 194';
  }
};

const getHomepageUrl = (country: CountryCodes) => {
  switch (country) {
    case 'AU':
      return urls.homepageAU;
    case 'US':
      return urls.homepageUS;
    default:
      return urls.homeRedirect;
  }
};

type Props = {| country: CountryCodes |};
const FooterBottom = ({ country }: Props) => (
  <Fragment>
    <footer className="container">
      <div className="wrapper">
        <div className="leftSection">
          <div className="logoWrapper">
            <img
              className="logo"
              src={urlBuilders.imageUrl(
                'common/Mathspace-logo-flat-reversed.svg',
              )}
              alt=""
            />
          </div>
          <div className="contactWrapper">
            <div className="email">hello@mathspace.co</div>
            <div className="phone">{getPhoneNumberByCountry(country)}</div>
          </div>
          <div className="copywriteWrapper">
            <div className="copywriteLinks">
              <Link href={urls.terms} passHref>
                <Anchor color="santasGray">Terms and conditions</Anchor>
              </Link>{' '}
              |{' '}
              <Link href={getUrlsForCounty(country).privacy} passHref>
                <Anchor color="santasGray">Privacy Policy</Anchor>
              </Link>
            </div>
            <div className="copywrite">
              © Mathspace {new Date().getFullYear()}
            </div>
          </div>
        </div>
        <div className="rightSection">
          <div className="linksWrapper">
            <div className="linkCategory">
              <div className="categoryTitle">About</div>
              <Link href={getHomepageUrl(country)} passHref>
                <Anchor color="santasGray">Home</Anchor>
              </Link>
              {country === 'AU' && (
                <Link href={urls.teachersAU} passHref>
                  <Anchor color="santasGray">Teachers</Anchor>
                </Link>
              )}

              <Anchor href={urls.careers} color="santasGray">
                Careers
              </Anchor>
              <Anchor href={urls.mathspaceStatus} color="santasGray">
                Status
              </Anchor>
            </div>
            <div className="linkCategory">
              <div className="categoryTitle">Extras</div>
              <Anchor href={urls.blog} color="santasGray">
                Blog
              </Anchor>
              <Anchor href={urls.facebook} color="santasGray">
                Facebook
              </Anchor>
              <Anchor href={urls.twitter} color="santasGray">
                Twitter
              </Anchor>
            </div>
            <div className="linkCategory">
              <div className="categoryTitle">Users</div>
              <Anchor href={urls.login} color="santasGray">
                Login
              </Anchor>
              <Anchor href={urls.joinClass} color="santasGray">
                Join a class
              </Anchor>
            </div>
          </div>
          <div className="appstoreWrapper">
            <Anchor
              href={urls.appleAppForStudents}
              data-event-label={DOWNLOAD_APP_STORE}
              onClick={event => {
                event.preventDefault();
                sendCTAClickEvent(DOWNLOAD_APP_STORE).then(() => {
                  window.location.assign(urls.appleAppForStudents);
                });
              }}
            >
              <img
                className="appStoreImage"
                src={urlBuilders.imageUrl('common/apple_app_store.svg')}
                alt=""
              />
            </Anchor>
            <Anchor
              href={urls.androidApp}
              data-event-label={DOWNLOAD_GOOGLE_PLAY}
              onClick={event => {
                event.preventDefault();
                sendCTAClickEvent(DOWNLOAD_GOOGLE_PLAY).then(() => {
                  window.location.assign(urls.androidApp);
                });
              }}
            >
              <img
                className="appStoreImage"
                src={urlBuilders.imageUrl('common/google_play_store.svg')}
                alt=""
              />
            </Anchor>
          </div>
        </div>
      </div>
    </footer>
    <style jsx>{`
      .container {
        padding: 50px 24px;
      }
      .wrapper {
        max-width: 1110px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column-reverse;
      }
      .leftSection {
        margin-top: 50px;
        text-align: center;
      }
      .logoWrapper {
        max-width: 150px;
        margin: 0 auto;
      }
      .logo {
        width: 100%;
      }
      .contactWrapper {
        margin: 50px 0 20px;
        color: ${colors.white};
      }
      .copywriteWrapper {
        color: ${colors.santasGray};
      }
      .rightSection {
        max-width: 300px;
        width: 100%;
      }
      .linksWrapper {
        display: flex;
        justify-content: space-between;
      }
      .linkCategory {
        display: flex;
        flex-direction: column;
      }
      .categoryTitle {
        color: ${colors.white};
        margin-bottom: 15px;
      }
      .appstoreWrapper {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
      }
      @media (min-width: ${breakPoints.medium}px) {
        .wrapper {
          flex-direction: row;
        }
        .leftSection {
          margin-top: 0;
          text-align: left;
        }
        .logoWrapper {
          margin: 0;
        }
      }
    `}</style>
  </Fragment>
);

export default FooterBottom;
