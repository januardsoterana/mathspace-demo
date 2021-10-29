// @flow

import React from 'react';
import classNames from 'classnames';

import { colors, fontStacks, transitions } from 'utils/themeWaypoints';

type Props = {|
  title: string,
  children?: React$Node,
  startOpened?: boolean,
|};

const Accordion = ({ title, children, startOpened }: Props) => {
  const [isOpened, setIsOpened] = React.useState(startOpened);
  const accordionContentClass = classNames({
    accordion__content: true,
    'accordion__content--opened': isOpened,
  });

  return (
    <>
      {/* eslint-disable-next-line */}
      <div className="accordion" onClick={() => setIsOpened(o => !o)}>
        <div className="accordion__header">
          {title}
          <div className="accordion__dropdown-icon">+</div>
        </div>
        <div className={accordionContentClass}>
          <div>{children}</div>
        </div>
      </div>
      <style jsx>{`
        .accordion {
          overflow: hidden;
          border-bottom: 1px solid ${colors.grey90};
          padding-bottom: 24px;
          cursor: pointer;
          user-select: none;
        }
        .accordion__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: ${colors.grey};
          font-family: ${fontStacks.feature};
          font-size: 16px;
          font-weight: 800;
        }
        .accordion__content {
          margin: 0;
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: opacity ${transitions.default},
            max-height ${transitions.default}, margin ${transitions.default};
        }
        .accordion__content--opened {
          margin-top: 24px;
          max-height: 5000px;
          opacity: 1;
        }
        .accordion__dropdown-icon {
          font-size: 16px;
          font-weight: 800;
        }
      `}</style>
    </>
  );
};

export default Accordion;
