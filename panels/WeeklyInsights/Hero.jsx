// @flow

import React, { Fragment, useState } from 'react';

import Button from 'components/Button';
import CalendlyModal from 'components/CalendlyModal';

import {
  mobileFontSizes,
  colors,
  fontWeights,
  lineHeights,
  breakPoints,
  desktopFontSizes,
  borderRadius,
} from 'utils/theme';
import sendCTAClickEvent from 'utils/analytics';
import { urls } from 'utils/urls';

const BOOK_A_DEMO_HERO = 'book-a-demo-hero';

const Hero = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <h3 className="subHeader">New Feature</h3>
          <h1 className="title">Introducing Weekly Insights</h1>
          <p className="description">
            Quick and actionable insights showing which students need assistance
            and what you should focus on in class.
          </p>
          <div className="buttonContainer">
            <div className="buttonWrapper">
              <Button
                color="cloudBurst"
                isFilled
                isBlock
                data-event-label={BOOK_A_DEMO_HERO}
                onClick={() => {
                  sendCTAClickEvent(BOOK_A_DEMO_HERO);
                  setShowCalendly(true);
                }}
              >
                Get a demo
              </Button>
            </div>
            <div
              className="buttonWrapper"
              style={{
                border: `1px solid ${colors.iron}`,
                borderRadius: `${borderRadius.default}px`,
              }}
            >
              <Button color="lochmara" href={urls.login} isBlock>
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
      {showCalendly && (
        <CalendlyModal
          bookingType="demo"
          onClose={() => setShowCalendly(false)}
        />
      )}
      <style jsx>{`
        .container {
          padding: 100px 24px 50px;
        }
        .wrapper {
          max-width: 400px;
          width: 100%;
          margin: 0 auto;
          color: ${colors.cloudBurst};
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .subHeader {
          margin: 0;
          font-size: ${mobileFontSizes.subInfo}px;
          font-weight: ${fontWeights.semibold};
          line-height: ${lineHeights.h3};
          margin-bottom: 20px;
        }
        .title {
          margin: 0;
          margin-bottom: 20px;
          font-size: ${mobileFontSizes.h1}px;
          font-weight: ${fontWeights.semibold};
          line-height: ${lineHeights.h1};
        }
        .description {
          margin: 0;
          margin-bottom: 30px;
          font-size: ${mobileFontSizes.subInfo}px;
          font-weight: ${fontWeights.regular};
          line-height: ${lineHeights.body};
        }
        .buttonContainer {
          width: 100%;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          align-items: center;
        }
        .buttonWrapper {
          max-width: 190px;
          width: 100%;
          margin-bottom: 10px;
        }
        .imageWrapper {
          max-width: 735px;
          width: 100%;
          margin: 50px auto 0;
          line-height: 0;
        }
        .image {
          width: 100%;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .subHeader {
            font-size: ${desktopFontSizes.subInfo}px;
          }
          .title {
            font-size: ${desktopFontSizes.h1}px;
          }
          .description {
            font-size: ${desktopFontSizes.subInfo}px;
          }
          .buttonContainer {
            flex-direction: row;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Hero;
