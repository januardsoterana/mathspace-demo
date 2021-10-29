// @flow

import React, { Fragment } from 'react';

import {
  colors,
  mobileFontSizes,
  fontWeights,
  lineHeights,
  breakPoints,
  desktopFontSizes,
} from 'utils/theme';
import { urlBuilders } from 'utils/urls';

const Insights = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="leftSection">
          <img
            className="image"
            src={urlBuilders.imageUrl('weeklyInsights/magnify-glass.svg')}
            alt=""
          />
          <h3 className="title">
            Smart technology, delivering even smarter insights
          </h3>
          <p className="description">
            Our algorithms scan your class data from the past week for you and
            surface the most important information you should focus on each
            lesson.
          </p>
        </div>
        <div className="rightSection">
          <img
            className="image"
            src={urlBuilders.imageUrl('weeklyInsights/aid.svg')}
            alt=""
          />
          <h3 className="title">Your personal teaching aid</h3>
          <p className="description">
            Think of Weekly Insights as being your personal teaching aid,
            bringing the most important data from the last week together in one
            place.
          </p>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        background-color: ${colors.pickledBluewood};
        padding: 15px 24px 50px;
      }
      .wrapper {
        max-width: 900px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .leftSection {
        max-width: 440px;
        margin-right: 0;
        margin-bottom: 20px;
      }
      .rightSection {
        max-width: 440px;
      }
      .title {
        font-size: ${mobileFontSizes.h4}px;
        font-weight: ${fontWeights.regular};
        line-height: ${lineHeights.h3};
        color: ${colors.white};
        margin: 20px 0;
      }
      .description {
        color: ${colors.iron};
        font-size: ${mobileFontSizes.body}px;
        font-weight: ${fontWeights.regular};
        line-height: ${lineHeights.body};
      }

      @media (min-width: ${breakPoints.medium}px) {
        .wrapper {
          flex-direction: row;
          align-items: flex-start;
        }
        .leftSection {
          margin-right: 20px;
          margin-bottom: 0px;
        }
        .title {
          font-size: ${desktopFontSizes.h4}px;
        }
      }
    `}</style>
  </Fragment>
);

export default Insights;
