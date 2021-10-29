// @flow

import React, { Fragment } from 'react';

import Anchor from 'components/Anchor';
import {
  mobileFontSizes,
  fontWeights,
  colors,
  desktopFontSizes,
  breakPoints,
  borderRadius,
  lineHeights,
} from 'utils/theme';
import { type Newsroom } from 'utils/types';

const getCTAText = cardType => {
  switch (cardType) {
    case 'video':
      return 'Watch it';
    case 'audio':
      return 'Listen now';
    case 'download':
      return 'Download';
    case 'article':
    default:
      return 'Read more';
  }
};

type Props = { card: Newsroom, compact?: boolean };
const NewsCard = ({ card, compact }: Props) => (
  <Fragment>
    <div className="card">
      <Anchor href={card.link || card.download} target="_blank">
        <div className="cardDescription">
          <h3 className="title">{card.title}</h3>
          <p className="description">{card.description}</p>
          <div className="cardType">{getCTAText(card.type)}</div>
          <div className="imageWrapper" />
        </div>
      </Anchor>
    </div>

    <style jsx>{`
      .card {
        background-color: ${colors.white};
        border-radius: ${borderRadius.default}px;
        flex: 1;
      }
      .title {
        padding: 10px 20px;
        text-transform: uppercase;
        font-weight: ${fontWeights.semibold};
        font-size: ${mobileFontSizes.description}px;
        color: ${colors.grayChateau};
      }
      .description {
        padding: 0 20px;
        margin: 0;
        color: ${colors.cloudBurst};
        font-size: ${mobileFontSizes.body}px;
        white-space: pre-wrap;
        line-height: ${lineHeights.body};
      }
      .imageWrapper {
        width: 100%;
        height: ${compact ? 'inherit' : '200px'};
        background-image: ${compact ? 'none' : `url(${card.preview})`};
        background-size: cover;
        background-position: 50% 50%;
        border-bottom-right-radius: ${borderRadius.default}px;
        border-bottom-left-radius: ${borderRadius.default}px;
      }
      .cardType {
        padding: 10px 20px;
        color: ${colors.lochmara};
        font-weight: ${fontWeights.semibold};
        font-size: ${mobileFontSizes.subInfo}px;
      }
      @media (min-width: ${breakPoints.medium}px) {
        .title {
          font-size: ${desktopFontSizes.description}px;
        }
        .description {
          font-size: ${mobileFontSizes.body}px;
          height: 100px;
        }
        .imageWrapper {
          height: 180px;
          background-image: url(${card.preview});
        }
      }
    `}</style>
  </Fragment>
);

export default NewsCard;
