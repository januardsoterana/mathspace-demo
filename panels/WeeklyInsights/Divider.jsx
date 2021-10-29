// @flow

import React, { Fragment } from 'react';

import { colors } from 'utils/theme';

const Divider = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="divider" />
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 50px 24px;
        background-color: ${colors.pickledBluewood};
      }
      .wrapper {
        max-width: 900px;
        width: 100%;
        margin: 0 auto;
      }
      .divider {
        border-bottom: 1px solid ${colors.shuttleGray};
      }
    `}</style>
  </Fragment>
);

export default Divider;
