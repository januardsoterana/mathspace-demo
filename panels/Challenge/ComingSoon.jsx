// @flow

import React, { Fragment } from 'react';

import { urlBuilders } from 'utils/urls';
import {
  colors,
  fontWeights,
  fontSizes,
  breakPoints,
  lineHeights,
} from 'utils/theme';

const ComingSoon = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="imageWrapper">
          <img
            className="image"
            src={urlBuilders.imageUrl('challenge/grand-prize.svg')}
            alt=""
          />
        </div>
        <h3 className="main">Leaderboard will go live at the end of week 1</h3>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 70px 24px;
        background-color: ${colors.athensGray};
      }
      .wrapper {
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .imageWrapper {
        width: 150px;
        height: 189px;
      }
      .main {
        margin-top: 40px;
        color: ${colors.cloudBurst};
        font-weight: ${fontWeights.semibold};
        font-size: ${fontSizes.mobile.h2}px;
        text-align: center;
        line-height: ${lineHeights.body};
      }
      @media (min-width: ${breakPoints.medium}px) {
        .main {
          font-size: ${fontSizes.desktop.h2}px;
        }
      }
    `}</style>
  </Fragment>
);

export default ComingSoon;
