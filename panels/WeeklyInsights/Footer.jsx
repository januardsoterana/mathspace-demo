// @flow

import React, { Fragment } from 'react';
import Link from 'next/link';

import Anchor from 'components/Anchor';

import { colors, mobileFontSizes } from 'utils/theme';
import { urls } from 'utils/urls';

const Footer = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="copyright">&copy; Mathspace 2019</div>
        <div className="linkWrapper">
          <Link href={urls.privacy} passHref>
            <Anchor color="cloudBurst">Privacy Policy</Anchor>
          </Link>
          <div className="divider">|</div>
          <Link href={urls.terms} passHref>
            <Anchor color="cloudBurst">Terms & Conditions</Anchor>
          </Link>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 50px 24px 30px;
      }
      .wrapper {
        max-width: 250px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: ${mobileFontSizes.description}px;
      }
      .copyright {
        color: ${colors.cloudBurst};
      }
      .linkWrapper {
        display: flex;
        justify-content: center;
      }
      .divider {
        margin: 0 5px;
      }
    `}</style>
  </Fragment>
);

export default Footer;
