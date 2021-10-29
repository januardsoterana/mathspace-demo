// @flow

import React, { Fragment } from 'react';
import Router from 'next/router';

import Button from 'components/Button';

import { urls } from 'utils/urls';
import sendCTAClickEvent from 'utils/analytics';
import {
  colors,
  desktopFontSizes,
  mobileFontSizes,
  lineHeights,
  fontWeights,
  breakPoints,
} from 'utils/theme';

const BODY_LOGIN = 'body-login';

const Action = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="title">Experience the New Workbook</div>
        <div className="description">
          Login to your Mathspace account and try out a question
        </div>
        <div className="buttonWrapper">
          <Button
            isBlock
            isFilled
            color="lochmara"
            href={urls.login}
            onClick={event => {
              event.preventDefault();
              sendCTAClickEvent(BODY_LOGIN).then(() => {
                Router.push(urls.login);
              });
            }}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 100px 24px;
      }
      .wrapper {
        max-width: 900px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }
      .title {
        color: ${colors.cloudBurst};
        font-size: ${mobileFontSizes.h2}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.h2};
        margin-bottom: 20px;
      }
      .description {
        color: ${colors.cloudBurst};
        font-size: ${mobileFontSizes.body}px;
        font-weight: ${fontWeights.regular};
        line-height: ${lineHeights.body};
        margin-bottom: 30px;
      }
      .buttonWrapper {
        max-width: 180px;
        margin: 0 auto;
        width: 100%;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .title {
          font-size: ${desktopFontSizes.h2}px;
        }
        .description {
          font-size: ${desktopFontSizes.subInfo}px;
        }
      }
    `}</style>
  </Fragment>
);

export default Action;
