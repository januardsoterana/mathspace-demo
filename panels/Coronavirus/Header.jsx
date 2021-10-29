// @flow

import React, { Fragment, useState } from 'react';

import Button from 'components/Button';
import TypeformModal from 'components/TypeformModal';

import { breakPoints, transitions, colors } from 'utils/theme';
import sendEvent from 'utils/analytics';

const HEADER_SIDE_PADDING = 40;

const MOBILE_HEADER_SIDE_PADDING = 24;
const MOBILE_HEADER_HEIGHT_PADDING_AT_TOP = 8;

const SimpleHeader = () => {
  const [modalVisible, setModalVisibility] = useState(false);
  return (
    <Fragment>
      <header className="headerWrapper">
        <div className="fixedHeader">
          <div className="headerContainer">
            <div className="leftSection" />
            <div className="rightSection">
              <Button
                color="lochmara"
                hasBorder
                data-event-label="header-form-opened"
                onClick={() => {
                  sendEvent('header-form-opened');
                  setModalVisibility(true);
                }}
              >
                Submit your school for free access
              </Button>
            </div>
          </div>
          <div className="mobileHeaderContainer">
            <div className="rightSection">
              <Button color="lochmara" hasBorder>
                Submit your school for free access
              </Button>
            </div>
          </div>
        </div>
      </header>
      {modalVisible && (
        <TypeformModal
          typeFormId="c8nJvN"
          onClose={() => setModalVisibility(false)}
        />
      )}
      <style jsx>{`
        .headerWrapper {
          display: flex;
          align-items: center;
          height: 50px;
        }
        .fixedHeader {
          display: flex;
          position: fixed;
          left: 0;
          right: 0;
          z-index: 3;
          height: 50px;
          background-color: ${colors.white};
        }
        .headerContainer {
          display: none;
          justify-content: space-between;
          padding: 0 ${HEADER_SIDE_PADDING}px;
          transition: padding ${transitions.default};
          opacity: 0.97;
          max-width: 1000px;
          margin: 0 auto;
          width: 100%;
        }
        .leftSection {
          display: flex;
        }
        .rightSection {
          display: flex;
          align-items: center;
        }
        .iconContainer {
          display: flex;
          align-items: center;
          cursor: pointer;
          max-width: 144px;
        }
        .iconContainer > :global(.link) {
          display: flex;
        }
        .headerIcon {
          width: 100%;
        }
        .mobileHeaderContainer {
          display: flex;
          justify-content: center;
          padding: ${MOBILE_HEADER_HEIGHT_PADDING_AT_TOP}px
            ${MOBILE_HEADER_SIDE_PADDING}px;
          transition: padding ${transitions.default};
          width: 100%;
        }
        .mobileIconContainer > :global(.link) {
          display: flex;
        }
        @media (min-width: ${breakPoints.medium}px) {
          .headerContainer {
            display: flex;
          }
          .headerWrapper {
            height: 65px;
          }
          .fixedHeader {
            height: 65px;
          }
          .mobileHeaderContainer {
            display: none;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default SimpleHeader;
