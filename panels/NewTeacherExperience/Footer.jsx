// @flow

import React, { Fragment } from 'react';
import Link from 'next/link';

import Anchor from 'components/Anchor';
import { urls } from 'utils/urls';
import { colors } from 'utils/theme';

const Footer = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="copyright">
          <div className="copyrightWrapper">
            <div className="copyrightLabel">
              © Mathspace {new Date().getFullYear()}
            </div>
            <span className="contactLinks">
              <Link href={urls.privacy} passHref>
                <Anchor color="santasGray">Privacy Policy</Anchor>
              </Link>{' '}
              |{' '}
              <Link href={urls.terms} passHref>
                <Anchor color="santasGray">Terms &amp; Conditions</Anchor>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 0 24px 50px;
        background-color: ${colors.white};
      }
      .wrapper {
        max-width: 350px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        text-align: center;
        color: ${colors.santasGray};
      }
    `}</style>
  </Fragment>
);

export default Footer;
