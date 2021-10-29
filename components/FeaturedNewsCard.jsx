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
import { urlBuilders } from 'utils/urls';
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

type Props = { card: Newsroom };
const FeaturedCard = ({ card }: Props) => (
  <Fragment>
    <div className="card">
      <Anchor
        href={card.link || card.download}
        target="_blank"
        color="lochmara"
      >
        <div className="cardWrapper">
          <div className="contentWrapper">
            <div className="title">{card.title}</div>
            <div className="description">{card.description}</div>
            <div className="cardTypeDesktop">{getCTAText(card.type)}</div>
          </div>
          <div className="imageWrapper" />
        </div>
        <div className="cardTypeMobile">{getCTAText(card.type)}</div>
      </Anchor>
    </div>

    <style jsx>{`
      .card {
        background-color: ${colors.white};
        border-radius: ${borderRadius.default}px;
        max-width: 980px;
        margin: 0 auto;
      }
      .title {
        padding: 10px 20px;
        text-transform: uppercase;
        font-weight: ${fontWeights.semibold};
        font-size: ${mobileFontSizes.description}px;
        color: ${colors.cloudBurst};
      }
      .description {
        padding: 0 20px 10px;
        color: ${colors.cloudBurst};
        font-size: ${desktopFontSizes.body}px;
        white-space: pre-wrap;
        line-height: ${lineHeights.body};
      }
      .cardWrapper {
        display: block;
        flex-direction: column;
      }
      .contentWrapper {
        max-width: initial;
        flex: 1;
      }
      .imageWrapper {
        width: 100%;
        height: 200px;
        display: flex;
        align-items: flex-end;
        max-width: initial;
        flex-flow: column;
        flex: 1;
        background-image: url(${card.preview});
        background-size: cover;
        background-position: 50% 50%;
      }
      .cardTypeDesktop {
        display: none;
        padding: 10px 20px;
        border-top: 1px solid ${colors.athensGray};
        color: ${colors.lochmara};
        font-weight: ${fontWeights.semibold};
      }
      .cardTypeMobile {
        padding: 10px 20px;
        border-top: 1px solid ${colors.athensGray};
        color: ${colors.lochmara};
        font-weight: ${fontWeights.semibold};
      }
      @media (min-width: ${breakPoints.medium}px) {
        .cardWrapper {
          display: flex;
          flex-direction: row;
        }
        .contentWrapper {
          max-width: 490px;
        }
        .imageWrapper {
          max-width: 490px;
          height: initial;
          border-top-right-radius: ${borderRadius.default}px;
          border-bottom-right-radius: ${borderRadius.default}px;
        }
        .title {
          font-size: ${desktopFontSizes.description}px;
        }
        .description {
          padding: 0 20px 100px;
        }
        .cardTypeDesktop {
          display: block;
        }
        .cardTypeMobile {
          display: none;
        }
      }
    `}</style>
  </Fragment>
);

export default FeaturedCard;
