// @flow

import React, { Fragment } from 'react';

import { breakPoints, fontSizes, colors, fontWeights } from 'utils/theme';

type Props = { country: 'AU' | 'US' };

const Cost = ({ country }: Props) => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <h3 className="title">How much does it cost?</h3>
        {country === 'AU' ? (
          <p className="description">
            We don’t usually sell Mathspace for at home purchase, however we
            have extended this offer to December 2021 so that parents and
            students are supported. Full Mathspace student access for individual
            home learners will be at $99AUD/student.
          </p>
        ) : (
          <p className="description">
            We don’t usually sell Mathspace for at home purchase, however we
            have extended this offer to December 2021 so that parents and
            students are supported. Full Mathspace student access for individual
            home learners will be at $99USD/student.
          </p>
        )}
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 70px 24px;
      }
      .wrapper {
        max-width: 600px;
        margin: 0 auto;
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
        margin: 0;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .title {
          font-size: ${fontSizes.desktop.h2}px;
        }
        .description {
          font-size: ${fontSizes.desktop.bodyLG}px;
        }
      }
    `}</style>
  </Fragment>
);

export default Cost;
