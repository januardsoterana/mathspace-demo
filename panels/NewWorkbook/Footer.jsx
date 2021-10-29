// @flow

import React, { Fragment } from 'react';
import Router from 'next/router';

import Anchor from 'components/Anchor';

import { urls } from 'utils/urls';
import sendCTAClickEvent from 'utils/analytics';
import {
  colors,
  mobileFontSizes,
  lineHeights,
  fontWeights,
  breakPoints,
} from 'utils/theme';

const PRIVACY = 'privacy';
const TERMS = 'terms';

const Footer = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="trademark">© Mathspace {new Date().getFullYear()}</div>
        <div className="links">
          <Anchor
            href={urls.privacy}
            color="grayChateau"
            onClick={event => {
              event.preventDefault();
              sendCTAClickEvent(PRIVACY).then(() => {
                Router.push(urls.privacy);
              });
            }}
          >
            Privacy Policy
          </Anchor>
          <span className="pipeDivider">|</span>
          <Anchor
            href={urls.terms}
            color="grayChateau"
            onClick={event => {
              event.preventDefault();
              sendCTAClickEvent(TERMS).then(() => {
                Router.push(urls.terms);
              });
            }}
          >
            Terms & Conditions
          </Anchor>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        display: flex;
        justify-content: flex-end;
        padding: 10px 24px 50px;
      }
      .wrapper {
        text-align: right;
      }
      .trademark {
        color: ${colors.grayChateau};
        font-size: ${mobileFontSizes.body};
        font-weight: ${fontWeights.regular};
        line-height: ${lineHeights.body};
      }
      .links {
        color: ${colors.grayChateau};
      }
      .pipeDivider {
        margin: 0 5px;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .container {
          padding: 10px 40px 50px;
        }
      }
    `}</style>
  </Fragment>
);

export default Footer;
