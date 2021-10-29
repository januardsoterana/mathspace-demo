// @flow

import React, { Fragment } from 'react';

import FooterTop from 'panels/Home/FooterTop';
import FooterBottom from 'panels/Home/FooterBottom';
import { type CountryCodes } from 'utils/types';
import { breakPoints, colors } from 'utils/theme';
import { urlBuilders } from 'utils/urls';

type Props = {|
  backgroundColor: String,
  country: CountryCodes,
|};

const Footer = ({ backgroundColor = 'transparent', country }: Props) => {
  const footerTitle =
    country === 'US'
      ? 'Access the Power of Personalized Math Teaching'
      : 'Access the Power of Personalised Maths Teaching';
  return (
    <Fragment>
      <div className="footerWrapper">
        <img
          className="blobImage"
          src={urlBuilders.imageUrl('homepage/footer-blob.svg')}
          alt=""
        />
        <FooterTop localeData={footerTitle} country={country} />
        <div className="dividerWrapper">
          <div className="divider" />
        </div>
        <FooterBottom country={country} />
      </div>
      <style jsx>{`
        .dividerWrapper {
          padding: 0 24px;
        }
        .divider {
          border-top: 1px solid ${colors.iron};
          max-width: 1110px;
          margin: 0 auto;
        }
        .blobImage {
          display: none;
          position: absolute;
          left: 20px;
          top: -75px;
          z-index: -1;
        }
        .footerWrapper {
          position: relative;
          padding: 0 0 70px;
          background-color: ${backgroundColor};
          background-image: url(${urlBuilders.imageUrl(
            'homepage/footer-background.svg',
          )});
          background-size: cover;
          background-position: top right;
          background-repeat: no-repeat;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .blobImage {
            display: block;
          }
          .footerWrapper {
            padding: 0;
            background-position: top center;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Footer;
