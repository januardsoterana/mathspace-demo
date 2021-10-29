// @flow

import React, { type Node, Fragment, forwardRef } from 'react';

import { colors, hoverColors, transitions } from 'utils/theme';

type Props = {
  children: Node,
  onClick?: Function,
  color?: $Keys<typeof colors>,
  underline?: boolean,
};

const Anchor = forwardRef(
  ({ children, onClick, underline, color = 'java', ...rest }: Props, ref) => {
    const linkColor = colors[color];
    // $FlowFixMe - Flow is ignoring check for color in hoverColors
    const hoverColor = color in hoverColors ? hoverColors[color] : linkColor;
    return (
      <Fragment>
        <a
          ref={ref}
          {...rest}
          className="link"
          onClick={onClick}
          role="link"
          tabIndex="0"
        >
          {children}
        </a>
        <style jsx>{`
          .link {
            color: ${linkColor};
            cursor: pointer;
            outline: none;
            text-decoration: ${underline ? 'underline' : 'none'};
            transition: color ${transitions.hover};
            font-family: inherit;
          }
          .link:hover {
            color: ${hoverColor};
          }
        `}</style>
      </Fragment>
    );
  },
);

Anchor.displayName = 'Anchor';

export default Anchor;
