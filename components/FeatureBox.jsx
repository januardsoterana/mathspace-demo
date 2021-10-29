// @flow

import React, { Fragment } from 'react';

import {
  colors,
  desktopFontSizes,
  mobileFontSizes,
  breakPoints,
  lineHeights,
  fontWeights,
  transitions,
} from 'utils/theme';

type Props = {
  imagePath: string,
  description: string,
};

const FeatureBox = ({ imagePath, description }: Props) => (
  <Fragment>
    <div className="featureBox">
      <img className="image" src={imagePath} alt="" />
      <div className="description">{description}</div>
    </div>
    <style jsx>{`
      .featureBox {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 200px;
        text-align: center;
        filter: none;
      }
      .image {
        max-height: 70px;
        height: 100%;
      }
      .description {
        font-size: ${mobileFontSizes.body}px;
        font-weight: ${fontWeights.regular};
        line-height: ${lineHeights.body};
        margin-top: 16px;
        color: ${colors.grayChateau};
      }
      @media (min-width: ${breakPoints.medium}px) {
        .featureBox {
          filter: invert(0.5);
          transition: filter ${transitions.default};
        }
        .featureBox:hover {
          filter: none;
        }
        .description {
          font-size: ${desktopFontSizes.body}px;
        }
      }
    `}</style>
  </Fragment>
);

export default FeatureBox;
