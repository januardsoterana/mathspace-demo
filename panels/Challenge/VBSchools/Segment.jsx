// @flow

import React, { Fragment } from 'react';
import {
  colors,
  borderRadius,
  fontSizes,
  breakPoints,
  transitions,
} from 'utils/theme';

type ButtonProps = {|
  selected: boolean,
  title: string,
  onClick: (title: string) => void,
|};
const Button = ({ selected, title, onClick }: ButtonProps) => (
  <Fragment>
    <div
      className="segment"
      role="button"
      tabIndex="0"
      onClick={() => onClick(title)}
      onKeyPress={() => onClick(title)}
    >
      {title}
    </div>
    <style jsx>{`
      .segment {
        background-color: ${selected ? colors.white : colors.pickledBluewood};
        color: ${selected ? colors.cloudBurst : colors.white};
        padding: 10px;
        border-top-left-radius: ${borderRadius.default}px;
        border-top-right-radius: ${borderRadius.default}px;
        font-size: ${fontSizes.mobile.h3}px;
        outline: none;
        cursor: pointer;
        transition: background-color ${transitions.default},
          color ${transitions.default};
        width: 133px;
        text-align: center;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .segment {
          font-size: ${fontSizes.desktop.h3}px;
        }
      }
    `}</style>
  </Fragment>
);

type Props = {|
  selected: string,
  segments: Array<string>,
  onClick: () => void,
|};
const Segment = ({ selected, segments, onClick }: Props) => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        {segments.map(item => (
          <div key={item} className="segment">
            <Button
              title={item}
              selected={item === selected}
              onClick={onClick}
            />
          </div>
        ))}
      </div>
    </div>
    <style jsx>{`
      .container {
        background-color: ${colors.cloudBurst};
        padding: 0 24px;
      }
      .wrapper {
        display: flex;
        max-width: 800px;
        margin: 0 auto;
        justify-content: center;
      }
      .segment + .segment {
        margin-left: 15px;
      }
    `}</style>
  </Fragment>
);

export default Segment;
