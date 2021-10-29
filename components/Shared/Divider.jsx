// @flow

import React, { Fragment } from 'react';

import { colors } from 'utils/theme';

type Props = { color?: $Keys<typeof colors> };
const Divider = ({ color = 'iron' }: Props) => {
  const dividerColor = colors[color];
  return (
    <Fragment>
      <div className="divider" />
      <style jsx>{`
        .divider {
          border-bottom: 1px solid ${dividerColor};
          margin: 50px 0;
        }
      `}</style>
    </Fragment>
  );
};

export default Divider;
