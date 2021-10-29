// @flow

import React, { Fragment } from 'react';

type Props = {| src: string |};
const Asset = ({ src }: Props) => (
  <Fragment>
    <div className="imageWrapper">
      <img className="image" src={src} alt="" />
    </div>
    <style jsx>{`
      .imageWrapper {
        max-width: 750px;
        margin: 20px 0;
      }
      .image {
        width: 100%;
      }
    `}</style>
  </Fragment>
);

export default Asset;
