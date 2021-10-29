// @flow

import React, { Fragment } from 'react';

import { breakPoints, colors, fontSizes, fontWeights } from 'utils/theme';

const Eligibility = () => (
  <Fragment>
    <div className="descriptionTop">
      <div className="wrapper">
        <h3 className="title">Eligibility</h3>
        <div className="paragraph">
          To be eligible for the Mathspace Transformative 20 awards program, the
          nominee must:
        </div>
        <ul className="points">
          <li>Be teaching or studying at an Australian school</li>
          <li>Be using or trialling Mathspace at their school</li>
          <li>Not previously been a Transformative 20 winner in 2019</li>
        </ul>
      </div>
    </div>
    <style jsx>{`
      .descriptionTop {
        padding: 15px 24px 40px;
        background-color: ${colors.porcelain};
        color: ${colors.cloudBurst};
      }
      .wrapper {
        max-width: 700px;
        margin: 0 auto;
        text-align: center;
      }
      .title {
        margin: 20px 0 40px;
        text-align: center;
        color: ${colors.cloudBurst};
        font-size: ${fontSizes.mobile.h2}px;
        font-weight: ${fontWeights.semibold};
      }
      .paragraph {
        color: ${colors.cloudBurst};
      }
      .paragraph + .paragraph {
        margin-top: 20px;
      }
      .points {
        color: ${colors.cloudBurst};
        text-align: left;
      }
      @media (min-width: ${breakPoints.medium}px) {
        .title {
          font-size: ${fontSizes.desktop.h2}px;
        }
        .points {
          margin-left: 125px;
        }
      }
    `}</style>
  </Fragment>
);

export default Eligibility;
