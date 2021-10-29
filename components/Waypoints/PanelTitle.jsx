// @flow
import React, { type Node } from 'react';

import { breakPoints, colors, fontStacks } from 'utils/themeWaypoints';

type Props = {|
  children: Node,
|};

const PanelTitle = ({ children }: Props) => (
  <>
    <div className="title">{children}</div>

    <style jsx>{`
      .title {
        font-family: ${fontStacks.feature};
        font-size: 22px;
        font-weight: 800;
        line-height: 1.25;
        color: ${colors.grey};
        text-align: center;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .title {
          font-size: 28px;
          line-height: 1.15;
        }
      }
    `}</style>
  </>
);

export { PanelTitle };
