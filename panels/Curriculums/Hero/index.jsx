// @flow

import React, { Fragment } from 'react';

import {
  breakPoints,
  colors,
  fontWeights,
  mobileFontSizes,
  desktopFontSizes,
  lineHeights,
} from 'utils/theme';

const Hero = () => (
  <Fragment>
    <section className="container">
      <h1 className="main">Our Curriculum Coverage</h1>
      <p className="sub">See how Mathspace is mapped to your curriculum</p>
    </section>
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 60px auto;
        padding: 0 24px;
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
        line-height: ${lineHeights.h4};
        color: ${colors.grayChateau};
        margin-top: 15px;
      }
      @media (min-width: ${breakPoints.medium}px) {
        .container {
          margin: 100px auto;
          text-align: left;
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
