// @flow

import React, { Fragment, type Node } from 'react';

type Props = { children?: Node };
const CarouselSection = ({ children }: Props) => (
  <Fragment>
    <div className="carouselSection">{children}</div>
    <style jsx>{`
      .carouselSection {
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </Fragment>
);

export default CarouselSection;
