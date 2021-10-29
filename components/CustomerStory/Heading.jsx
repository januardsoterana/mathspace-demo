// @flow

import React, { Fragment } from 'react';
import { colors, fontSizes, breakPoints, fontWeights } from 'utils/theme';

type Props = {| type: 1 | 2 | 3, content: Array<Object> | string |};
const Heading = ({ type, content }: Props) => {
  switch (type) {
    case 1:
      return (
        <Fragment>
          <h1 className="heading">
            {typeof content === 'object' && content.map(item => item.content)}
          </h1>
          <style jsx>{`
            .heading {
              color: ${colors.cloudBurst};
              font-size: ${fontSizes.mobile.h1}px;
              font-weight: ${fontWeights.semibold};
              margin: 20px 0;
            }
            @media (min-width: ${breakPoints.medium}px) {
              .heading {
                font-size: ${fontSizes.desktop.h1}px;
              }
            }
          `}</style>
        </Fragment>
      );
    case 2:
      return (
        <Fragment>
          <h2 className="heading">
            {typeof content === 'object' && content.map(item => item.content)}
          </h2>
          <style jsx>{`
            .heading {
              color: ${colors.cloudBurst};
              font-size: ${fontSizes.mobile.h2}px;
              font-weight: ${fontWeights.semibold};
              margin: 20px 0;
            }
            @media (min-width: ${breakPoints.medium}px) {
              .heading {
                font-size: ${fontSizes.desktop.h2}px;
              }
            }
          `}</style>
        </Fragment>
      );
    case 3:
      return (
        <Fragment>
          <h3 className="heading">
            {typeof content === 'object' && content.map(item => item.content)}
          </h3>
          <style jsx>{`
            .heading {
              color: ${colors.cloudBurst};
              font-size: ${fontSizes.mobile.h3}px;
              font-weight: ${fontWeights.semibold};
              margin: 20px 0;
            }
            @media (min-width: ${breakPoints.medium}px) {
              .heading {
                font-size: ${fontSizes.desktop.h3}px;
              }
            }
          `}</style>
        </Fragment>
      );
    default:
      return <Fragment />;
  }
};

export default Heading;
