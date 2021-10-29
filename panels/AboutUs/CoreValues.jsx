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
const CoreValues = ({ country }: Props) => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="topSection">
          <h3 className="title">Our Core Values</h3>
          <p className="description">
            At Mathspace, we work with these 5 Core Values as guiding
            principles.
          </p>
        </div>
        <div className="bottomSection">
          <div className="row">
            <div className="feature">
              <div className="imageWrapper">
                <img
                  className="image"
                  src={urlBuilders.imageUrl('aboutUs/purpose.png')}
                  alt=""
                />
              </div>
              <h4 className="featureTitle">Purpose</h4>
              <p className="valueDesc">
                We strive for excellence, with a strong passion for improving{' '}
                {country === 'AU' ? 'maths' : 'math'} education at our core. We
                believe in the Mathspace mission - that any student can excel at{' '}
                {country === 'AU' ? 'maths' : 'math'} with the right help at the
                right time.
              </p>
            </div>
            <div className="feature">
              <div className="imageWrapper">
                <img
                  className="image"
                  src={urlBuilders.imageUrl('aboutUs/impact.png')}
                  alt=""
                />
              </div>
              <h4 className="featureTitle">Impact</h4>
              <p className="valueDesc">
                We work to create high-quality features and products that bring
                benefits and add value for our users. We innovate and lead in
                the field of {country === 'AU' ? 'maths' : 'math'} education
                technology.
              </p>
            </div>
            <div className="feature">
              <div className="imageWrapper">
                <img
                  className="image"
                  src={urlBuilders.imageUrl('aboutUs/selfless.png')}
                  alt=""
                />
              </div>
              <h4 className="featureTitle">Selflessness</h4>
              <p className="valueDesc">
                We support one another and work as a whole, rather than the
                individual. We share knowledge, insights, and skills to help
                each other grow.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="feature">
              <div className="imageWrapper">
                <img
                  className="image"
                  src={urlBuilders.imageUrl('aboutUs/cont-improv.png')}
                  alt=""
                />
              </div>
              <h4 className="featureTitle">Continuous Improvement</h4>
              <p className="valueDesc">
                Learning never stops. We constantly learn from each other as a
                team, and from our users. Our products are brought to life
                through a continuous cycle of ideation, experimentation,
                feedback and refinement.
              </p>
            </div>
            <div className="feature">
              <div className="imageWrapper">
                <img
                  className="image"
                  src={urlBuilders.imageUrl('aboutUs/cust-love.png')}
                  alt=""
                />
              </div>
              <h4 className="featureTitle">Customer Love</h4>
              <p className="valueDesc">
                We listen and put the needs of our users first. Through constant
                communication and collaboration with our teaching community, we
                aim to support our users where we can, to make their lives
                easier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 63px 24px 40px;
        background: ${colors.athensGray};
      }
      .wrapper {
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
        color: ${colors.santasGray};
        margin: 0 0 50px;
      }
      .row {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: start;
      }
      .row + .row {
        margin-top: 20px;
      }
      .feature {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .feature + .feature {
        margin-top: 20px;
      }
      .imageWrapper {
        margin-bottom: 10px;
      }
      .image {
        width: 65px;
        width: 65px;
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
      .valueDesc {
        font-size: 14px;
        margin-top: -14px;
        line-height: 1.58;
        text-align: center;
        color: ${colors.santasGray};
      }

      @media (min-width: ${breakPoints.medium}px) {
        .wrapper {
          max-width: 904px;
        }
        .container {
          padding: 63px 24px 90px;
        }
        .topSection {
          margin-bottom: 46px;
        }
        .title {
          font-size: ${fontSizes.desktop.h2}px;
          margin-bottom: -5px;
        }
        .description {
          font-size: ${fontSizes.desktop.bodyLG}px;
          max-width: 400px;
          margin: 0 auto;
        }
        .feature {
          max-width: 272px;
        }
        .feature + .feature {
          margin-top: 0;
        }
        .row {
          flex-direction: row;
          justify-content: space-between;
        }
        .row + .row {
          margin: 60px auto 0;
          max-width: 588px;
        }
        .featureTitle {
          font-size: ${fontSizes.desktop.h3}px;
        }
      }
    `}</style>
  </Fragment>
);

export default CoreValues;
