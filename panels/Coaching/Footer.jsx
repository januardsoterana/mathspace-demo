// @flow

import React, { Fragment } from 'react';
import Link from 'next/link';

import Anchor from 'components/Anchor';

import { colors } from 'utils/theme';
import { urlBuilders, urls } from 'utils/urls';

const Footer = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div>
          <div className="imageWrapper">
            <Link href={urls.homepageAU} passHref>
              <Anchor>
                <img
                  className="image"
                  src={urlBuilders.imageUrl(
                    'common/Mathspace-logo-flat-reversed.svg',
                  )}
                  alt="Mathspace"
                />
              </Anchor>
            </Link>
          </div>
          <div className="copyrightWrapper">
            <span className="copyrightLabel">
              © Mathspace {new Date().getFullYear()}
            </span>
            <span className="contactLinks">
              <Link
                as={urls.terms}
                href={{
                  pathname: urls.terms,
                  query: 'AU',
                }}
                passHref
              >
                <Anchor color="regentGray">Terms and conditions</Anchor>
              </Link>{' '}
              |{' '}
              <Link
                as={urls.privacyAU}
                href={{
                  pathname: urls.privacyAU,
                  query: 'AU',
                }}
                passHref
              >
                <Anchor color="regentGray">Privacy Policy</Anchor>
              </Link>{' '}
            </span>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 80px 24px;
        background-color: ${colors.pickledBluewood};
      }
      .wrapper {
        max-width: 850px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      }
      .imageWrapper {
        max-width: 150px;
      }
      .image {
        width: 100%;
      }
      .copyrightWrapper {
        margin-top: 25px;
        display: flex;
        flex-direction: column;
      }
      .copyrightLabel {
        color: ${colors.white};
      }
      .contactLinks {
        color: ${colors.regentGray};
      }
    `}</style>
  </Fragment>
);

export default Footer;
