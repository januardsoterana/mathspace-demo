// @flow

import React, { Fragment, useState } from 'react';

import Button from 'components/Button';
import CalendlyModal from 'components/CalendlyModal';

import {
  colors,
  mobileFontSizes,
  desktopFontSizes,
  breakPoints,
  fontWeights,
  lineHeights,
} from 'utils/theme';
import sendCTAClickEvent from 'utils/analytics';

const BOOK_A_DEMO_FOOTER = 'book-a-demo-footer';

const CTA = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <h2 className="title">Experience Weekly Insights today</h2>
          <p className="description">
            Book a demo to learn more about how you can use Weekly Insights.
          </p>
          <div className="buttonWrapper">
            <Button
              color="cloudBurst"
              isFilled
              isBlock
              data-event-label={BOOK_A_DEMO_FOOTER}
              onClick={() => {
                sendCTAClickEvent(BOOK_A_DEMO_FOOTER);
                setShowModal(true);
              }}
            >
              Book a demo
            </Button>
          </div>
        </div>
      </div>
      {showModal && (
        <CalendlyModal bookingType="demo" onClose={() => setShowModal(false)} />
      )}
      <style jsx>{`
        .container {
          padding: 100px 24px 50px;
        }
        .wrapper {
          max-width: 900px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .title {
          margin: 0;
          color: ${colors.cloudBurst};
          font-size: ${mobileFontSizes.h2}px;
          font-weight: ${fontWeights.regular};
          line-height: ${lineHeights.h2};
        }
        .description {
          margin: 30px 0;
          color: ${colors.cloudBurst};
          font-size: ${mobileFontSizes.body}px;
          font-weight: ${fontWeights.regular};
          line-height: ${lineHeights.h3};
        }
        .buttonWrapper {
          max-width: 250px;
          width: 100%;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .title {
            font-size: ${desktopFontSizes.h2}px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default CTA;
