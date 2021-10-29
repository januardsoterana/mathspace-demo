// @flow

import React, { Fragment } from 'react';

import { colors } from 'utils/theme';

const Divider = () => (
  <Fragment>
    <div className="divider" />
    <style jsx>{`
      .divider {
        margin: 56px 0;
        border-bottom: 1px solid ${colors.porcelain};
      }
    `}</style>
  </Fragment>
);

export default Divider;
