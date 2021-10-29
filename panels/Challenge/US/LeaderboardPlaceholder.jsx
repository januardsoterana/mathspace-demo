// @flow

import React, { Fragment } from 'react';
import {
  colors,
  borderRadius,
  fontSizes,
  breakPoints,
  lineHeights,
} from 'utils/theme';

const LeaderboardPlaceholder = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="placeholder">
          <h4 className="title">Leaderboard</h4>
          <p className="comingSoon">
            This leaderboard will go live after the first week of the Challenge.
            <br />
            <br />
            Keep an eye on the leaderboard to see if your school made it to the
            top 10 - we will also send you a weekly email update too!
          </p>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 0 24px 50px;
      }
      .wrapper {
        max-width: 550px;
        margin: 0 auto;
      }
      .placeholder {
        color: ${colors.white};
        text-align: center;
      }
      .title {
        margin: 30px 0;
        font-size: ${fontSizes.mobile.h2}px;
      }
      .comingSoon {
        background-color: ${colors.pickledBluewood};
        border-radius: ${borderRadius.default}px;
        padding: 50px;
        line-height: ${lineHeights.body};
      }

      @media (min-width: ${breakPoints.medium}px) {
        .title {
          font-size: ${fontSizes.desktop.h2}px;
        }
      }
    `}</style>
  </Fragment>
);

export default LeaderboardPlaceholder;
