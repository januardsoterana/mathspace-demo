// @flow

import React, { Fragment } from 'react';

import { urlBuilders } from 'utils/urls';
import { breakPoints, colors, fontWeights, fontSizes } from 'utils/theme';

type Props = { country: 'AU' | 'US' };
const Mission = ({ country }: Props) => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="leftSection">
          <h2 className="title2">OUR MISSION</h2>
          <h1 className="title1">
            Every student can excel at {country === 'AU' ? 'maths' : 'math'}{' '}
            with the right help at the right time
          </h1>
          <p className="description">
            We built Mathspace 10 years ago with the vision of using technology
            to replicate the benefits of one-to-one teaching. Our step-by-step
            support helps students at the exact moment of misconception, helping
            them to learn and ultimately develop a growth mindset.
          </p>
        </div>
        <div className="rightSection">
          <div className="imageWrapper">
            <img
              className="image"
              src={urlBuilders.imageUrl('aboutUs/mission.svg')}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 70px 24px 37px;
        overflow: hidden;
      }
      .wrapper {
        margin: 0 auto;
        max-width: 1110px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
      }
      .leftSection {
        max-width: 500px;
        width: 100%;
      }
      .title1 {
        margin: 0 0 20px;
        color: ${colors.cloudBurst};
        line-height: 1.02;
        font-weight: ${fontWeights.semibold};
        font-size: ${fontSizes.mobile.h1}px;
      }
      .title2 {
        color: ${colors.saffron};
        margin: 0 0 10px;
        font-weight: ${fontWeights.semibold};
        font-size: ${fontSizes.mobile.h3}px;
      }
      .description {
        color: ${colors.cloudBurst};
        margin: 0 0 30px;
      }
      .rightSection {
        display: none;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .container {
          padding: 0px 24px 37px;
        }
        .wrapper {
          flex-direction: row;
        }
        .title1 {
          font-size: 47px;
          margin-bottom: 26px;
        }
        .title2 {
          font-size: 16px;
          margin-bottom: 4px;
        }
        .leftSection {
          padding: 76px 0px 70px 0;
        }
        .rightSection {
          display: block;
          max-width: 506px;
          width: 100%;
          margin-top: 0;
        }
        .image {
          width: 100%;
        }
      }
    `}</style>
  </Fragment>
);

export default Mission;
