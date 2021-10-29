// @flow

import React, { Fragment } from 'react';
import Link from 'next/link';

import Anchor from 'components/Anchor';
import { urls } from 'utils/urls';
import { colors, fontSizes } from 'utils/theme';

const Footer = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <em className="disclaimer">
          Free access is available to any school that is not already on a
          contract. If a school is already on a Mathspace contract, and they
          want to extend to access to more grade levels, we will also offer the
          additional students that were not already covered in the agreement
          free of charge.
        </em>
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
        padding: 50px 24px;
        background-color: ${colors.white};
      }
      .wrapper {
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        color: ${colors.santasGray};
      }
      .disclaimer {
        font-size: ${fontSizes.desktop.bodySM}px;
        color: ${colors.cloudBurst};
        margin-bottom: 30px;
      }
      .copyright {
        max-width: 350px;
        margin: 0 auto;
      }
    `}</style>
  </Fragment>
);

export default Footer;
