// @flow

import React, { Fragment } from 'react';

import { breakPoints, colors, fontSizes, fontWeights } from 'utils/theme';

const Eligibility = () => (
  <Fragment>
    <div className="descriptionTop">
      <div className="wrapper">
        <h3 className="title">Winner selection process</h3>
        <div className="paragraph">
          Schools were encouraged to nominate teachers and students to
          participate in this year’s Transformative 20 awards program. The
          winner selection process included the review of feedback on the
          candidates and the analysis of their data on Mathspace.
        </div>
        <div className="paragraph">
          To be eligible for the award, the candidates must also be teaching or
          studying at an Australian school, using or trialling Mathspace, and
          must have not previously been a Transformative 20 winner in 2019.
        </div>
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
      @media (min-width: ${breakPoints.medium}px) {
        .title {
          font-size: 36px;
        }
        .paragraph {
          font-size: 18px;
        }
      }
    `}</style>
  </Fragment>
);

export default Eligibility;
