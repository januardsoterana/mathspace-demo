// @flow

import React, { Fragment, useState } from 'react';

import Button from 'components/Button';
import TypeformModal from 'components/TypeformModal';

import {
  breakPoints,
  fontSizes,
  lineHeights,
  fontWeights,
  colors,
} from 'utils/theme';
import { urlBuilders } from 'utils/urls';
import sendCTAClickEvent from 'utils/analytics';

const BOOK_A_DEMO = 'book-a-demo-typeform';

const CTA = () => {
  const [showModal, setModalVisibility] = useState(false);
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <div className="leftSection">
            <div className="title">Try Mathspace today</div>
            <div className="description">
              Sign up for a free trial of Mathspace to access over 30,000
              questions and 20,000 worked examples
            </div>
            <div className="buttonWrapper">
              <Button
                color="lochmara"
                isFilled
                isBlock
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
                Find out more
              </Button>
            </div>
          </div>
          <div className="rightSection">
            <img
              className="image"
              src={urlBuilders.imageUrl('newTeacherExperience/ipad.svg')}
              alt=""
            />
          </div>
        </div>
      </div>
      {showModal && (
        <TypeformModal
          typeFormId="ctOtxr"
          onClose={() => setModalVisibility(false)}
        />
      )}
      <style jsx>{`
        .container {
          padding: 0 24px 50px;
        }
        .wrapper {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }
        .leftSection {
          max-width: 390px;
          text-align: center;
        }
        .title {
          font-size: ${fontSizes.mobile.h2}px;
          line-height: ${lineHeights.h1};
          font-weight: ${fontWeights.semibold};
          color: ${colors.cloudBurst};
        }
        .description {
          margin-top: 20px;
          color: ${colors.cloudBurst};
          line-height: ${lineHeights.body};
        }
        .buttonWrapper {
          margin-top: 20px;
          max-width: initial;
        }
        .rightSection {
          max-width: 390px;
          margin-top: 30px;
        }
        .image {
          width: 100%;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .wrapper {
            flex-direction: row;
          }
          .leftSection {
            text-align: left;
          }
          .title {
            font-size: ${fontSizes.desktop.h2}px;
          }
          .buttonWrapper {
            max-width: 250px;
          }
          .rightSection {
            margin-top: 0;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default CTA;
