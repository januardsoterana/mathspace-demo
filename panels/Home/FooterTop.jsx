// @flow

import React, { Fragment, useState } from 'react';

import TypeformModal from 'components/TypeformModal';
import { urlBuilders } from 'utils/urls';
import {
  borderRadius,
  colors,
  breakPoints,
  fontSizes,
  lineHeights,
} from 'utils/theme';
import sendCTAClickEvent from 'utils/analytics';
import CalendlyModal from 'components/CalendlyModal';
import { type CountryCodes } from 'utils/types';

const BOOK_A_DEMO = 'book-a-demo-footer-typeform';

type Props = { localeData: string, country: CountryCodes };
const FooterTop = ({ localeData, country }: Props) => {
  const [showModal, setModalVisibility] = useState(false);
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <div className="topSection">
            <div className="imageWrapper">
              <img
                className="image"
                src={urlBuilders.imageUrl('homepage/footer-devices-new.png')}
                alt=""
              />
            </div>
          </div>
          <div className="bottomSection">
            <div className="textWrapper">{localeData}</div>
            <div className="buttonContainer">
              <div className="buttonWrapper">
                <div
                  className="cta"
                  role="button"
                  tabIndex="0"
                  data-event-label={BOOK_A_DEMO}
                  onClick={() => {
                    sendCTAClickEvent(BOOK_A_DEMO);
                    setModalVisibility(true);
                  }}
                  onKeyPress={() => {
                    sendCTAClickEvent(BOOK_A_DEMO);
                    setModalVisibility(true);
                  }}
                >
                  Book a Demo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && country === 'AU' && (
        <TypeformModal
          typeFormId="ctOtxr"
          onClose={() => setModalVisibility(false)}
        />
      )}
      {showModal && country === 'US' && (
        <CalendlyModal
          bookingType="demo"
          country="US"
          onClose={() => setModalVisibility(false)}
        />
      )}
      <style jsx>{`
        .container {
          padding: 50px 24px;
        }
        .wrapper {
          max-width: 300px;
          margin: 0 auto;
        }
        .topSection {
          display: none;
          justify-content: flex-end;
        }
        .imageWrapper {
          max-width: 350px;
        }
        .image {
          width: 100%;
        }
        .bottomSection {
          margin: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .textWrapper {
          color: ${colors.white};
          font-size: ${fontSizes.mobile.h2}px;
          line-height: ${lineHeights.body};
          max-width: 480px;
          margin: 0 auto 20px;
          text-align: center;
        }
        .buttonContainer {
          max-width: 350px;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .buttonWrapper {
          max-width: 200px;
          width: 100%;
        }
        .cta {
          background-color: ${colors.white};
          color: ${colors.lochmara};
          text-align: center;
          height: 45px;
          padding: 0 20px;
          border-radius: ${borderRadius.default}px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .wrapper {
            max-width: 1110px;
          }
          .topSection {
            display: flex;
          }
          .bottomSection {
            margin-top: 40px;
            flex-direction: row;
            justify-content: space-between;
          }
          .textWrapper {
            font-size: ${fontSizes.desktop.h2}px;
            text-align: left;
            margin: 0;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default FooterTop;
