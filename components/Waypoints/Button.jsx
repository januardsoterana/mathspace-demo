// @flow

/**
 * Copy of `components/Button.jsx` with styles tweaked to match Checkpoints theme:
 * - different default colour
 * - different height and padding
 * - support for wrapped text
 * - border radius of half the height
 * - `isCTA` prop
 */

import React, { type ComponentType, type Node, Fragment } from 'react';
import classNames from 'classnames';

import {
  borderRadius,
  colors,
  hoverColors,
  transitions,
} from 'utils/themeWaypoints';

/**
 * Copy from other files
 */
const ArrowRightIcon = () => (
  <svg
    fill="currentColor"
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.277 10.697a.999.999 0 0 0 1.412-1.412l-6.992-6.992a.999.999 0 0 0-1.412 1.412l6.992 6.992zm.706-1.705H3c-1.332 0-1.332 1.998 0 1.998h13.984c1.332 0 1.332-1.998 0-1.998zm-.706.293l-6.992 6.992c-.942.942.47 2.354 1.412 1.412l6.992-6.992c.942-.941-.47-2.354-1.412-1.412z" />
  </svg>
);

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
  isCTA?: boolean,
};

// Styling variables
const BUTTON_HEIGHT_SMALL = 28;
const BUTTON_HEIGHT_MEDIUM = 40;
const BUTTON_HEIGHT_LARGE = 54;
const BUTTON_PADDING_SMALL = 10;
const BUTTON_PADDING_MEDIUM = 20;
const BUTTON_PADDING_LARGE = 28;
const ICON_SPACING = 8;

const Button = ({
  color = 'peachPink',
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
  isCTA = false,
  ...rest
}: Props) => {
  const invertedFillColorCode = colors[invertedFillColor];
  const buttonColor = colors[color];
  const borderColorCode = borderColor ? colors[borderColor] : colors[color];
  // $FlowFixMe - Flow is ignoring check for color in hoverColors
  const hoverColor = color in hoverColors ? hoverColors[color] : buttonColor;
  const textFontSize = 16;
  const textLineHeight = '20px';
  const height =
    size === 'large'
      ? BUTTON_HEIGHT_LARGE
      : size === 'medium'
      ? BUTTON_HEIGHT_MEDIUM
      : BUTTON_HEIGHT_SMALL;
  const padding = `12px ${
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
  });

  const buttonContentClass = classNames({ wrapper: true, icon: !!Icon });

  const onClickAction = isDisabled ? () => {} : onClick;

  const buttonContent = (
    <Fragment>
      {Icon ? (
        <>
          <Icon color="inherit" /> <span className="buttonIconSpacer" />
        </>
      ) : null}
      <span className={buttonContentClass}>
        {children}
        {isCTA && (
          <>
            <span className="buttonIconSpacer" />
            <ArrowRightIcon />
          </>
        )}
      </span>
      <style jsx>{`
        .buttonIconSpacer {
          width: ${ICON_SPACING}px;
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
        /* eslint-disable */
        <a
          {...rest}
          href={href}
          className={buttonClass}
          role="link"
          onClick={onClickAction}
          onKeyPress={onClickAction}
        >
          {buttonContent}
        </a>
      ) : (
        /* eslint-enable */
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
          {...rest}
          className={buttonClass}
          onClick={onClickAction}
          onKeyPress={onClickAction}
          role="button"
          tabIndex="0"
        >
          {buttonContent}
        </div>
      )}
      <style jsx>{`
        .base {
          border-radius: ${borderRadius.circle}px;
          box-sizing: border-box;
          background-color: transparent;
          border-color: ${borderColorCode};
          color: ${buttonColor};
          fill: ${buttonColor};
          cursor: pointer;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          font-family: inherit;
          font-size: ${textFontSize}px;
          font-weight: 800;
          min-height: ${height}px;
          line-height: ${textLineHeight};
          outline: none;
          border: none;
          transition: background-color ${transitions.hover},
            border-color ${transitions.hover}, color ${transitions.hover},
            fill ${transitions.hover};
          webkit-font-smoothing: subpixel-antialiased;
          padding: ${padding};
          user-select: none;
          text-align: center;
          text-decoration: none;
        }
        .base:hover {
          border-color: ${hoverColor};
          color: ${hoverColor};
          color: ${hoverColor};
        }
        .border {
          border: 1px solid ${borderColorCode};
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
          color: ${colors.white};
          background-color: ${colors.grey10};
          border-color: ${colors.grey10};
          cursor: default;
          pointer-events: none;
        }
        .disabled:hover {
          color: ${colors.white};
          fill: ${colors.white};
          background-color: ${colors.grey10};
          border-color: ${colors.grey10};
        }
      `}</style>
    </div>
  );
};

export default Button;
