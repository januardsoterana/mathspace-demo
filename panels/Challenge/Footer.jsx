// @flow

import React, { Fragment } from 'react';
import Link from 'next/link';

import Anchor from 'components/Anchor';
import { breakPoints, colors } from 'utils/theme';
import { urls } from 'utils/urls';

const Footer = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="copyrightWrapper">
          <span className="copyrightLabel">
            © Mathspace {new Date().getFullYear()}
          </span>{' '}
          <span className="contactLinks">
            <Link
              as={urls.privacyUS}
              href={{
                pathname: urls.privacyUS,
                query: 'US',
              }}
              passHref
            >
              <Anchor color="regentGray">Privacy Policy</Anchor>
            </Link>{' '}
            |{' '}
            <Link href={urls.terms} passHref>
              <Anchor color="regentGray">Terms &amp; Conditions</Anchor>
            </Link>
          </span>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 40px 24px;
        background-color: ${colors.cloudBurst};
      }
      .wrapper {
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        justify-content: center;
        text-align: center;
      }
      .imageWrapper {
        max-width: 150px;
      }
      .image {
        width: 100%;
      }
      .copyrightWrapper {
        display: flex;
        flex-direction: column;
      }
      .copyrightLabel {
        color: ${colors.white};
      }
      .contactLinks {
        color: ${colors.regentGray};
      }
      .rulesWrapper {
        color: ${colors.white};
        text-transform: capitalize;
      }

      @media (min-width: ${breakPoints.medium}px) {
      }
    `}</style>
  </Fragment>
);

export default Footer;
