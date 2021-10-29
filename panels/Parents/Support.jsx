// @flow

import React, { Fragment } from 'react';
import {
  breakPoints,
  fontSizes,
  fontWeights,
  colors,
  lineHeights,
} from 'utils/theme';
import { urlBuilders } from 'utils/urls';

type Props = { country: 'AU' | 'US' };
const Support = ({ country }: Props) => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="topSection">
          <h3 className="title">We&apos;re here to support you</h3>
          <p className="description">
            With schools closing across the globe, it&apos;s important to equip
            parents and students with the best tools for at home learning.
          </p>
        </div>
        <div className="bottomSection">
          <div className="row">
            <div className="feature">
              <div className="imageWrapper">
                <img
                  className="image"
                  src={urlBuilders.imageUrl('parents/step-by-step.svg')}
                  alt=""
                />
              </div>
              <h4 className="featureTitle">Step-by-step support</h4>
            </div>
            <div className="feature">
              <div className="imageWrapper">
                <img
                  className="image"
                  src={urlBuilders.imageUrl(
                    'parents/personalised-learning.svg',
                  )}
                  alt=""
                />
              </div>
              <h4 className="featureTitle">
                {country === 'AU'
                  ? 'Personalised learning'
                  : 'Personalized learning'}
              </h4>
            </div>
            <div className="feature">
              <div className="imageWrapper">
                <img
                  className="image"
                  src={urlBuilders.imageUrl('parents/video-lessons.svg')}
                  alt=""
                />
              </div>
              <h4 className="featureTitle">
                {country === 'AU'
                  ? 'Video lessons made by maths teachers'
                  : 'Video lessons made by math teachers'}
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="feature">
              <div className="imageWrapper">
                <img
                  className="image"
                  src={urlBuilders.imageUrl('parents/interactive-textbook.svg')}
                  alt=""
                />
              </div>
              <h4 className="featureTitle">Interactive textbooks</h4>
            </div>
            <div className="feature">
              <div className="imageWrapper">
                <img
                  className="image"
                  src={urlBuilders.imageUrl('parents/curriculum-aligned.svg')}
                  alt=""
                />
              </div>
              <h4 className="featureTitle">
                {country === 'AU' ? 'Curriculum-aligned' : 'Standards-aligned'}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 70px 24px;
      }
      .wrapper {
        max-width: 800px;
        margin: 0 auto;
      }
      .topSection {
        max-width: 600px;
        margin: auto;
        text-align: center;
      }
      .title {
        font-size: ${fontSizes.mobile.h2}px;
        font-weight: ${fontWeights.semibold};
        color: ${colors.cloudBurst};
        margin: 0 0 30px;
      }
      .description {
        font-size: ${fontSizes.mobile.bodyLG}px;
        font-weight: ${fontWeights.regular};
        color: ${colors.cloudBurst};
        margin: 0 0 50px;
      }
      .row {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
      .row + .row {
        margin-top: 20px;
      }
      .feature {
        max-width: 250px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .feature + .feature {
        margin-top: 20px;
      }
      .imageWrapper {
        max-width: 60px;
        width: 100%;
        margin-bottom: 10px;
      }
      .image {
        width: 100%;
      }
      .featureTitle {
        font-size: ${fontSizes.mobile.h3}px;
        font-weight: ${fontWeights.semibold};
        color: ${colors.cloudBurst};
        line-height: ${lineHeights.h4};
        margin: 0;
        text-align: center;
        min-height: 36px;
      }
      .comingSoonWrapper {
        min-height: 36px;
        text-align: center;
      }
      .comingSoonTitle {
        font-size: ${fontSizes.mobile.h3}px;
        font-weight: ${fontWeights.semibold};
        color: ${colors.santasGray};
        line-height: ${lineHeights.h4};
        margin: 0;
      }
      .comingSoonText {
        margin: 0;
        font-size: ${fontSizes.mobile.bodySM}px;
        font-weight: ${fontWeights.regular};
        line-height: ${lineHeights.h4};
        color: ${colors.santasGray};
      }

      @media (min-width: ${breakPoints.medium}px) {
        .title {
          font-size: ${fontSizes.desktop.h2}px;
        }
        .description {
          font-size: ${fontSizes.desktop.bodyLG}px;
        }
        .feature + .feature {
          margin-top: 0;
        }
        .row {
          flex-direction: row;
        }
        .featureTitle {
          font-size: ${fontSizes.desktop.h3}px;
        }
        .comingSoonTitle {
          font-size: ${fontSizes.desktop.h3}px;
        }
      }
    `}</style>
  </Fragment>
);

export default Support;
