// @flow

import React, { Fragment } from 'react';

import Divider from 'components/Divider';
import { colors, mobileFontSizes } from 'utils/theme';

const SimpleFooter = () => (
  <Fragment>
    <footer>
      <Divider />
      <div className="text">
        ©{new Date().getFullYear()} MATHSPACE PTY LTD. ALL RIGHTS RESERVED.
      </div>
    </footer>
    <style jsx>{`
      .text {
        color: ${colors.grayChateau};
        font-size: ${mobileFontSizes.body};
      }
    `}</style>
  </Fragment>
);

export default SimpleFooter;
