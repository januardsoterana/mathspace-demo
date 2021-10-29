// @flow
import React, { Fragment } from 'react';

import FooterTop from 'components/FooterTop';
import FooterBottom from 'components/FooterBottom';
import { colors, breakPoints } from 'utils/theme';
import { type CountryCodes } from 'utils/types';

const Divider = () => (
  <Fragment>
    <div className="divider" />
    <style jsx>{`
      .divider {
        margin: 50px auto;
        max-width: 840px;
        border-bottom: 1px solid ${colors.pickledBluewood};
      }
    `}</style>
  </Fragment>
);

type Props = {
  title: string,
  tagline: string,
  country?: CountryCodes,
  ctaButton?: 'demo' | 'chat',
  ctaLink?: 'join' | 'info',
};

const Footer = ({ title, tagline, country, ctaLink, ctaButton }: Props) => (
  <Fragment>
    <footer className="Footer">
      <FooterTop
        title={title}
        tagline={tagline}
        ctaButton={ctaButton}
        ctaLink={ctaLink}
        country={country}
      />
      <Divider />
      <FooterBottom country={country} />
    </footer>
    <style jsx>{`
      .Footer {
        background-color: ${colors.cloudBurst};
        padding: 0 24px 70px;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .Footer {
          padding-top: 0;
        }
      }
    `}</style>
  </Fragment>
);

export default Footer;
