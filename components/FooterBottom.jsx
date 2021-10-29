// @flow

import React, { Fragment, type Node } from 'react';
import Link from 'next/link';
import Anchor from 'components/Anchor';
import { urlBuilders, urls, getUrlsForCounty } from 'utils/urls';
import {
  desktopFontSizes,
  mobileFontSizes,
  fontWeights,
  colors,
  breakPoints,
  lineHeights,
} from 'utils/theme';
import { type CountryRoutes, type CountryCodes } from 'utils/types';

type FooterAnchorProps = {
  href: string,
  children: Node,
  noClientSideRouting?: boolean,
};

const getPhoneNumberByCountry = (country?: CountryCodes) => {
  switch (country) {
    case 'AU':
    case 'US':
    default:
      return '+61 1300 833 194';
  }
};

const FooterAnchor = ({
  href,
  children,
  noClientSideRouting,
}: FooterAnchorProps) => (
  <Fragment>
    <div className="linkWrapper">
      {noClientSideRouting ? (
        <Anchor href={href} color="regentGray">
          {children}
        </Anchor>
      ) : (
        <Link href={href} passHref>
          <Anchor color="regentGray">{children}</Anchor>
        </Link>
      )}
    </div>
    <style jsx>{`
      .linkWrapper {
        margin-bottom: 15px;
      }
    `}</style>
  </Fragment>
);

type Props = {|
  country?: CountryCodes,
|};

const FooterBottom = ({ country }: Props) => {
  const countryRoutes: CountryRoutes = getUrlsForCounty(country);
  return (
    <Fragment>
      <div className="bottom-section">
        <div className="Logo-container">
          <Link href={countryRoutes.homepage} passHref>
            <Anchor>
              <img
                className="mathspaceLogoReversed"
                src={urlBuilders.imageUrl(
                  'common/Mathspace-logo-flat-reversed.svg',
                )}
                alt="Mathspace"
              />
            </Anchor>
          </Link>
          <div className="contactDetails">
            <div className="contactEmail">hello@mathspace.co</div>
            <div className="contactNumber">
              {getPhoneNumberByCountry(country)}
            </div>
            <nav className="contactLinks">
              <Link
                as={urls.terms}
                href={{
                  pathname: urls.terms,
                  query: { country },
                }}
                passHref
              >
                <Anchor color="regentGray">Terms and conditions</Anchor>
              </Link>{' '}
              |{' '}
              <Link
                as={countryRoutes.privacy}
                href={{
                  pathname: countryRoutes.privacy,
                  query: { country },
                }}
                passHref
              >
                <Anchor color="regentGray">Privacy Policy</Anchor>
              </Link>
            </nav>
          </div>
          <span className="CopyrightLabel">
            © Mathspace {new Date().getFullYear()}
          </span>
        </div>
        <div className="linkSection">
          <div className="linkWrapper">
            <div className="LinkGroup">
              <span className="LinkGroup-title">About</span>
              <nav className="LinkGroup-list">
                <FooterAnchor href={countryRoutes.homepage}>Home</FooterAnchor>
                {countryRoutes.teachers && (
                  <FooterAnchor href={countryRoutes.teachers}>
                    Teachers
                  </FooterAnchor>
                )}
                <FooterAnchor href={urls.careers} noClientSideRouting>
                  Careers
                </FooterAnchor>
                <FooterAnchor href={urls.mathspaceStatus}>Status</FooterAnchor>
              </nav>
            </div>
            <div className="LinkGroup">
              <span className="LinkGroup-title">Extras</span>
              <nav className="LinkGroup-list">
                <FooterAnchor href={urls.blog}>Blog</FooterAnchor>
                {/* <FooterAnchor href="">Press</FooterAnchor> */}
                <FooterAnchor href={urls.facebook}>Facebook</FooterAnchor>
                <FooterAnchor href={urls.twitter}>Twitter</FooterAnchor>
              </nav>
            </div>
            <div className="LinkGroup">
              <span className="LinkGroup-title">Users</span>
              <nav className="LinkGroup-list">
                <FooterAnchor href={urls.login}>Login</FooterAnchor>
                <FooterAnchor href={urls.joinClass}>Join class</FooterAnchor>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bottom-section {
          max-width: 840px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          flex-direction: column-reverse;
        }
        .Logo-container {
          display: flex;
          flex-direction: column;
          flex: 1;
          align-items: center;
          text-align: center;
        }
        .CopyrightLabel {
          font-size: ${mobileFontSizes.subInfo}px;
          font-weight: ${fontWeights.regular};
          line-height: ${lineHeights.subInfo};
          color: ${colors.regentGray};
          margin-top: 20px;
        }
        .linkSection {
          display: flex;
          max-width: 400px;
          width: 100%;
          margin: 0 auto 50px;
          flex-direction: column;
          align-items: center;
        }
        .linkSection > .linkWrapper + .linkWrapper {
          margin-top: 15px;
          margin-bottom: 15px;
        }
        .LinkGroup {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .LinkGroup-title {
          font-size: ${mobileFontSizes.body}px;
          font-weight: ${fontWeights.regular};
          line-height: ${lineHeights.body};
          color: ${colors.white};
          text-transform: capitalize;
        }
        .LinkGroup-list {
          margin-top: 30px;
          display: flex;
          flex-direction: column;
        }
        .linkWrapper {
          font-size: ${mobileFontSizes.subInfo}px;
          font-weight: ${fontWeights.regular};
          line-height: ${lineHeights.subInfo};
          display: flex;
          flex-direction: row;
          width: 100%;
        }
        .mathspaceLogoReversed {
          max-width: 144px;
        }
        .contactDetails {
          font-size: ${mobileFontSizes.subInfo}px;
          font-weight: ${fontWeights.regular};
          line-height: ${lineHeights.body};
          margin-top: 20px;
          color: ${colors.white};
        }
        .contactLinks {
          color: ${colors.regentGray};
        }

        @media (min-width: ${breakPoints.medium}px) {
          .bottom-section {
            flex-direction: row;
          }
          .linkSection {
            flex-direction: row;
            align-items: flex-start;
            margin-bottom: 0;
          }
          .linkSection > .linkWrapper + .linkWrapper {
            margin: 0 0 0 15px;
          }
          .imageContainer {
            margin-top: 0;
            margin-bottom: 0;
          }
          .appStoreImageWrapper {
            justify-content: center;
            flex-direction: row;
            align-items: center;
          }
          .appStoreImageWrapper > :global(a) + :global(a) {
            margin-left: 10px;
          }
          .Logo-container {
            align-items: flex-start;
            text-align: left;
          }
          .title {
            font-size: ${desktopFontSizes.h3}px;
          }
          .tagLine {
            font-size: ${desktopFontSizes.body}px;
            font-weight: ${fontWeights.regular};
            line-height: ${lineHeights.body};
          }
          .CopyrightLabel {
            font-size: ${desktopFontSizes.subInfo}px;
            font-weight: ${fontWeights.regular};
            line-height: ${lineHeights.subInfo};
          }
          .LinkGroup-title {
            font-size: ${desktopFontSizes.body}px;
            font-weight: ${fontWeights.regular};
            line-height: ${lineHeights.body};
          }
          .linkWrapper {
            font-size: ${desktopFontSizes.subInfo}px;
            font-weight: ${fontWeights.regular};
            line-height: ${lineHeights.subInfo};
          }
          .contactDetails {
            font-size: ${desktopFontSizes.subInfo}px;
            font-weight: ${fontWeights.regular};
            line-height: ${lineHeights.body};
          }
        }
      `}</style>
    </Fragment>
  );
};

export default FooterBottom;
