// @flow

import React, { Fragment } from 'react';
import { colors, fontSizes, breakPoints } from 'utils/theme';

const Description = () => (
  <Fragment>
    <div className="container">
      <p className="wrapper">
        The new teacher experience is the biggest product update that Mathspace
        has ever made. We&apos;ve spent 12 months creating a more steamlined and
        impactful Mathspace interface, which is also extremely practical for
        daily use. Every enhancement has a purpose, and each new function has
        been developed in collaboration with our teaching community.
      </p>
    </div>
    <style jsx>{`
      .container {
        padding: 50px 24px 0;
      }
      .wrapper {
        max-width: 800px;
        colors: ${colors.cloudBurst};
        font-size: ${fontSizes.mobile.h3}px;
        margin: 0 auto;
        text-align: center;
      }
      @media (min-width: ${breakPoints.medium}px) {
        .wrapper {
          font-size: ${fontSizes.mobile.h3}px;
        }
      }
    `}</style>
  </Fragment>
);

export default Description;
