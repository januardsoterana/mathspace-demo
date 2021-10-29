// @flow

import React, { Fragment } from 'react';

import {
  mobileFontSizes,
  fontWeights,
  lineHeights,
  colors,
  desktopFontSizes,
  breakPoints,
} from 'utils/theme';

const Hero = () => (
  <Fragment>
    <section className="container">
      <h1 className="main">Newsroom</h1>
      <p className="sub">
        All the latest Mathspace news in one spot - articles, awards, press
        releases, and more
      </p>
    </section>
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        padding: 60px 24px;
        max-width: 500px;
        text-align: center;
      }
      .main {
        font-size: ${mobileFontSizes.h1}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.h1};
        color: ${colors.cloudBurst};
      }
      .sub {
        font-size: ${desktopFontSizes.h4}px;
        font-weight: ${fontWeights.light};
        line-height: ${lineHeights.body};
        color: ${colors.grayChateau};
        margin-top: 15px;
      }
      @media (min-width: ${breakPoints.medium}px) {
        .container {
          margin: 0 auto;
          padding: 100px 0;
        }
        .main {
          font-size: ${desktopFontSizes.h1}px;
        }
        .sub {
          font-size: ${mobileFontSizes.h4}px;
        }
      }
    `}</style>
  </Fragment>
);

export default Hero;
