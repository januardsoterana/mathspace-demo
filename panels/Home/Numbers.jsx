// @flow

import React, { Fragment } from 'react';

import StatisticFeature from 'components/Homepage/StatisticFeature';
import VideoNumbers from 'components/Homepage/SVG/VideoNumbers';
import QuestionNumbers from 'components/Homepage/SVG/QuestionNumbers';
import TextbookNumbers from 'components/Homepage/SVG/TextbookNumbers';
import HintNumbers from 'components/Homepage/SVG/HintNumbers';

import {
  colors,
  breakPoints,
  fontSizes,
  fontWeights,
  lineHeights,
} from 'utils/theme';

const Numbers = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <h5 className="title">Mathspace by numbers</h5>
        <div className="numbersWrapper">
          <div className="statsWrapper">
            <StatisticFeature
              title="Videos"
              stat="14,000+"
              icon={VideoNumbers}
            />
          </div>
          <div className="statsWrapper">
            <StatisticFeature
              title="Interactive questions"
              stat="60,000+"
              icon={QuestionNumbers}
            />
          </div>
          <div className="statsWrapper">
            <StatisticFeature
              title="Digital textbooks"
              stat="600+"
              icon={TextbookNumbers}
            />
          </div>
          <div className="statsWrapper">
            <StatisticFeature
              title="Step-by-step hints"
              stat="292,000+"
              icon={HintNumbers}
            />
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 70px 24px;
      }
      .wrapper {
        max-width: 1110px;
        margin: 0 auto;
      }
      .title {
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
        font-size: ${fontSizes.mobile.h2}px;
        color: ${colors.cloudBurst};
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.body};
      }
      .numbersWrapper {
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      .statsWrapper {
        flex: 0 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .title {
          font-size: ${fontSizes.desktop.h2}px;
        }
        .statsWrapper {
          margin-top: 0;
          flex: 0 25%;
        }
      }
    `}</style>
  </Fragment>
);

export default Numbers;
