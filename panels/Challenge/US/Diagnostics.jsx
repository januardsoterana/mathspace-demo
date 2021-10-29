// @flow

import React, { Fragment } from 'react';

import Anchor from 'components/Anchor';

import { urls } from 'utils/urls';
import { fontWeights, fontSizes, breakPoints, colors } from 'utils/theme';
import sendEvent from 'utils/analytics';

const DIAGNOSTICS_CTA = 'diagnostics-cta';

const Diagnostics = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <h4 className="title">Measure growth with our new Diagnostics tools</h4>
        <p className="paragraph">
          Every school participating in the challenge will have access to our
          new{' '}
          <Anchor
            href={urls.diagnosticUS}
            onClick={event => {
              event.preventDefault();
              sendEvent(DIAGNOSTICS_CTA, 'clicked', 'US-challenge').then(() => {
                window.location.assign(urls.diagnosticUS);
              });
            }}
          >
            Diagnostics tools
          </Anchor>{' '}
          during the Challenge. We&apos;ll be officially releasing these
          Diagnostics tools as standalone product next school year - so be one
          of the first to try it out beforehand for free!
        </p>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 0 24px;
      }
      .wrapper {
        max-width: 700px;
        margin: 0 auto;
        text-align: center;
        color: ${colors.white};
      }
      .title {
        font-weight: ${fontWeights.semibold};
        font-size: ${fontSizes.mobile.h2}px;
        margin: 0 0 20px;
      }
      .paragraph {
      }

      @media (min-width: ${breakPoints.medium}px) {
        .title {
          font-size: ${fontSizes.desktop.h2}px;
        }
      }
    `}</style>
  </Fragment>
);

export default Diagnostics;
