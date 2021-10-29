// @flow

import React, { Fragment, type Node } from 'react';
import classnames from 'classnames';

import Chevron from 'components/Shared/SVG/Chevron';

import {
  colors,
  borderRadius,
  fontWeights,
  lineHeights,
  transitions,
  breakPoints,
  fontSizes,
} from 'utils/theme';

type Props = {
  title: string,
  isOpen: boolean,
  onClick: Function,
  children?: Node,
};

const Accordion = ({ title, isOpen, onClick, children }: Props) => {
  const sectionContentClass = classnames({
    sectionContent: true,
    opened: isOpen,
  });
  const accordionContainerClass = classnames({
    accordionContainer: true,
    containerOpened: isOpen,
  });
  const sectionHeaderClass = classnames({
    sectionHeader: true,
    sectionHeaderOpened: isOpen,
  });
  const headerWrapperClass = classnames({
    headerWrapper: true,
    headerWrapperOpen: isOpen,
  });
  const chevronWrapperClass = classnames({
    chevronWrapper: true,
    chevronWrapperOpened: isOpen,
  });
  return (
    <Fragment>
      <div
        className={accordionContainerClass}
        role="button"
        tabIndex="0"
        onClick={onClick}
        onKeyPress={onClick}
      >
        <div className={headerWrapperClass}>
          <h3 className={sectionHeaderClass}>{title}</h3>
          <div className={chevronWrapperClass}>
            <Chevron color={isOpen ? colors.cloudBurst : colors.regentGray} />
          </div>
        </div>
        <div className={sectionContentClass}>{children}</div>
      </div>
      <style jsx>{`
        .accordionContainer {
          overflow: hidden;
          padding: 15px 0;
          border-radius: ${borderRadius.default}px;
          border: 1px solid ${colors.blackHaze};
          cursor: pointer;
          outline: none;
        }
        .sectionHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: ${colors.regentGray};
          font-size: ${fontSizes.mobile.bodySM}px;
          font-weight: ${fontWeights.regular};
          line-height: ${lineHeights.h3};
          padding-bottom: 4px;
          user-select: none;
          margin: 0;
        }
        .sectionHeaderOpened {
          color: ${colors.cloudBurst};
          font-weight: ${fontWeights.semibold};
        }
        .sectionContent {
          margin: 0;
          padding: 0 15px;
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          color: ${colors.cloudBurst};
          font-size: ${fontSizes.mobile.bodySM}px;
          transition: opacity 0.3s ease-in-out, max-height 0.3s ease-in-out,
            margin 0.3s ease-in-out;
        }
        .opened {
          margin: 15px 0;
          max-height: 500px;
          opacity: 1;
        }
        .containerOpened {
          background-color: ${colors.white};
          cursor: default;
          box-shadow: 0px 2px 10px ${colors.blackHaze};
        }
        .headerWrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 15px 0 10px;
        }
        .headerWrapperOpen {
          border-bottom: 1px solid ${colors.iron};
          padding-bottom: 10px;
        }
        .chevronWrapper {
          max-width: 15px;
          transform: rotate(0.5turn);
          transition: transform ${transitions.default};
          display: flex;
        }
        .chevronWrapperOpened {
          transform: rotate(0turn);
        }

        @media (min-width: ${breakPoints.medium}px) {
          .sectionHeader {
            font-size: ${fontSizes.desktop.bodySM}px;
          }
          .sectionContent {
            font-size: ${fontSizes.desktop.bodySM}px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Accordion;
