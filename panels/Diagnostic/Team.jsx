// @flow

import React, { Fragment } from 'react';
import {
  colors,
  breakPoints,
  mobileFontSizes,
  desktopFontSizes,
  fontWeights,
  lineHeights,
} from 'utils/theme';

const Team = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <h2 className="title">Built by our team of engineers</h2>
        <p className="body">
          We use our knowledge graph and probabilistic models to create our
          diagnostic reports. You can get detailed information about student
          performance, accurately inferred from just one single test.
        </p>
      </div>
    </div>
    <style jsx>{`
      .container {
        position: relative;
        padding-bottom: 50px;
      }
      .wrapper {
        padding: 0 24px;
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
        color: ${colors.cloudBurst};
      }
      .title {
        margin: 0;
        margin-bottom: 20px;
        font-size: ${mobileFontSizes.h2}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.body};
      }
      .body {
        line-height: ${lineHeights.body};
        color: ${colors.grayChateau};
      }
      .blob {
        display: block;
        position: absolute;
        bottom: -650px;
        z-index: -1;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .title {
          font-size: ${desktopFontSizes.h2}px;
        }
      }
    `}</style>
  </Fragment>
);

export default Team;
