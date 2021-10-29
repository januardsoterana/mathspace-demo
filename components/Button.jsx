// @flow

import React, { type ComponentType, type Node, Fragment } from 'react';
import classNames from 'classnames';

import {
  borderRadius,
  colors,
  mobileFontSizes,
  fontStacks,
  fontWeights,
  hoverColors,
  lineHeights,
  transitions,
} from 'utils/theme';

type Props = {
  color?: $Keys<typeof colors>,
  size?: 'small' | 'medium' | 'large',
  onClick?: Function,
  href?: string,
  isFilled?: boolean,
  hasBorder?: boolean,
  isBlock?: boolean,
  icon?: ComponentType<*>,
  isDisabled?: boolean,
  children?: Node,
  invertedFill?: boolean,
  fillColor?: string,
  invertedFillColor?: string,
  borderColor?: string,
  isRound?: boolean,
};

// Styling variables
const BUTTON_HEIGHT_SMALL = 28;
const BUTTON_HEIGHT_MEDIUM = 40;
const BUTTON_HEIGHT_LARGE = 48;
const BUTTON_PADDING_SMALL = 10;
const BUTTON_PADDING_MEDIUM = 20;
const BUTTON_PADDING_LARGE = 8;
const ICON_SPACING = 5;

const Button = ({
  color = 'java',
  size = 'medium',
  onClick,
  href,
  isFilled,
  hasBorder,
  isBlock,
  icon,
  isDisabled,
  children,
  invertedFill,
  invertedFillColor = 'white',
  borderColor,
  isRound,
  ...rest
}: Props) => {
  const invertedFillColorCode = colors[invertedFillColor];
  const buttonColor = colors[color];
  const borderColorCode = borderColor ? colors[borderColor] : colors[color];
  // $FlowFixMe - Flow is ignoring check for color in hoverColors
  const hoverColor = color in hoverColors ? hoverColors[color] : buttonColor;
  const textFontSize =
    size === 'large' ? mobileFontSizes.h4 : mobileFontSizes.body;
  const textLineHeight = size === 'large' ? lineHeights.h4 : lineHeights.body;
  const height =
    size === 'large'
      ? BUTTON_HEIGHT_LARGE
      : size === 'medium'
      ? BUTTON_HEIGHT_MEDIUM
      : BUTTON_HEIGHT_SMALL;
  const padding = `0 ${
    size === 'large'
      ? BUTTON_PADDING_LARGE
      : size === 'medium'
      ? BUTTON_PADDING_MEDIUM
      : BUTTON_PADDING_SMALL
  }px`;
  const Icon = icon; // Reassigning icon -> Icon so it can be used as a component

  const buttonClass = classNames({
    base: true,
    border: hasBorder,
    filled: isFilled,
    isBlock,
    disabled: isDisabled,
    invertedFill,
    isRound,
  });

  const buttonContentClass = classNames({ wrapper: true, icon: !!Icon });

  const onClickAction = isDisabled ? () => {} : onClick;

  const buttonContent = (
    <Fragment>
      {Icon ? <Icon color="inherit" /> : null}
      <span className={buttonContentClass}>{children}</span>
      <style jsx>{`
        .icon {
          margin-left: ${ICON_SPACING}px;
        }

        .wrapper {
          display: flex;
        }
      `}</style>
    </Fragment>
  );

  return (
    <div>
      {href != null ? (
        // eslint-disable-next-line jsx-a11y/no-redundant-roles
        <a
          {...rest}
          href={href}
          className={buttonClass}
          role="link"
          onClick={onClickAction}
        >
          {buttonContent}
        </a>
      ) : (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
          {...rest}
          className={buttonClass}
          onClick={onClickAction}
          role="button"
          tabIndex="0"
        >
          {buttonContent}
        </div>
      )}
      <style jsx>{`
        .base {
          border-radius: ${
            isRound ? borderRadius.circle : borderRadius.default
          }px;
          box-sizing: border-box;
          background-color: transparent;
          border-color: ${borderColorCode};
          color: ${buttonColor};
          fill: ${buttonColor};
          cursor: pointer;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          font-family: ${fontStacks.default}
          font-size: ${textFontSize}px;
          font-weight: ${fontWeights.semibold};
          height: ${height}px;
          line-height: ${textLineHeight};
          outline: none;
          border: none;
          transition: background-color ${transitions.hover}, border-color ${
        transitions.hover
      },
          color ${transitions.hover}, fill ${transitions.hover};
          webkit-font-smoothing: subpixel-antialiased;
          padding: ${padding};
          user-select: none;
          text-decoration: none;
        }

        .base:hover {
          border-color: ${hoverColor};
          color: ${hoverColor};
          color: ${hoverColor};
        }

        .border {
          border: 2px solid ${borderColorCode};
        }

        .border:hover {
          border-color: ${hoverColor};
          background-color: ${hoverColor};
          color: ${colors.white};
          fill: ${colors.white};
        }

        .filled {
          border-color: ${buttonColor};
          background-color: ${buttonColor};
          color: ${colors.white};
        }

        .filled:hover {
          border-color: ${hoverColor};
          background-color: ${hoverColor};
          color: ${colors.white};
          fill: ${colors.white};
        }

        .invertedFill {
          background-color: ${invertedFillColorCode};
          color: ${buttonColor};
        }

        .invertedFill:hover {
          background-color: ${invertedFillColorCode};
          color: ${buttonColor};
          fill: ${buttonColor};
        }

        .isBlock {
          width: 100%;
        }

        .disabled {
          color: ${colors.grayChateau};
          background-color: ${colors.iron};
          border-color: ${colors.iron};
          cursor: default;
          pointer-events: none;
        }

        .disabled:hover {
          color: ${colors.grayChateau};
          fill: ${colors.grayChateau};
          background-color: ${colors.iron};
          border-color: ${colors.iron};
        }
      `}</style>
    </div>
  );
};

export default Button;
