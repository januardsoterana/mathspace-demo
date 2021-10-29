// @flow

import React, { Fragment } from 'react';

import {
  colors,
  desktopFontSizes,
  mobileFontSizes,
  breakPoints,
  lineHeights,
  fontWeights,
} from 'utils/theme';

type Props = {
  imagePath: string,
  title: string,
  description: string,
};

const BenefitsBox = ({ imagePath, title, description }: Props) => (
  <Fragment>
    <div className="featureBox">
      <img className="image" src={imagePath} alt="feature" />
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </div>
    <style jsx>{`
      .featureBox {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 200px;
        text-align: center;
      }
      .image {
        max-height: 70px;
        height: 100%;
      }
      .title {
        font-size: ${mobileFontSizes.body}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.body};
        margin-top: 16px;
        color: ${colors.nevada};
      }
      .description {
        font-size: ${mobileFontSizes.body}px;
        font-weight: ${fontWeights.light};
        line-height: ${lineHeights.body};
        margin-top: 16px;
        color: ${colors.nevada};
      }
      @media (min-width: ${breakPoints.medium}px) {
        .title {
          font-size: ${desktopFontSizes.body}px;
        }
        .description {
          font-size: ${desktopFontSizes.body}px;
        }
      }
    `}</style>
  </Fragment>
);

export default BenefitsBox;
