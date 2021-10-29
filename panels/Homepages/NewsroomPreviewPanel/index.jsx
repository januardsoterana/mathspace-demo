// @flow

import React, { Fragment } from 'react';
import Link from 'next/link';

import NewsCard from 'components/NewsCard';
import Anchor from 'components/Anchor';

import {
  colors,
  fontWeights,
  mobileFontSizes,
  desktopFontSizes,
  breakPoints,
  lineHeights,
} from 'utils/theme';
import { getNonFeaturedNews } from 'utils/news';
import { urls } from 'utils/urls';
import { type Newsroom, type CountryCodes } from 'utils/types';

const SimpleHeroPanel = () => (
  <Fragment>
    <div className="container">
      <h1 className="main">Newsroom</h1>
      <p className="sub">
        All the latest Mathspace news in one spot - articles, awards, press
        releases, and more
      </p>
    </div>
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 60px auto;
        padding: 0 24px;
        max-width: 500px;
        text-align: center;
      }
      .main {
        font-size: ${mobileFontSizes.h1}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.h1};
        color: ${colors.cloudBurst};
        margin: 0 0 16px 0;
      }
      .sub {
        font-size: ${desktopFontSizes.h4}px;
        font-weight: ${fontWeights.light};
        color: ${colors.grayChateau};
        margin-top: 15px;
      }
      @media (min-width: ${breakPoints.medium}px) {
        .container {
          margin: 0 auto;
        }
        .main {
          font-size: ${desktopFontSizes.h1}px;
        }
        .sub {
          font-size: ${mobileFontSizes.h4}px;
        }
      }
    `}</style>
  </Fragment>
);

const getNewsroomLinksByCountry = (country: CountryCodes) => {
  switch (country) {
    case 'US':
      return urls.newsroomUS;
    case 'AU':
    default:
      return urls.newsroomAU;
  }
};

type Props = {| country: CountryCodes, newsCardList: Array<Newsroom> |};

const NewsroomPreviewPanel = ({ country, newsCardList }: Props) => {
  const newsCards = getNonFeaturedNews(newsCardList, country, 3);
  return (
    <Fragment>
      <section className="NewsroomPreviewPanel">
        <SimpleHeroPanel />
        <div className="cardContainer">
          {newsCards.map(card => (
            <div key={card.description} className="cardWrapper">
              <NewsCard card={card} compact />
            </div>
          ))}
        </div>
        <div className="newsroomLinkContainer">
          <div>
            <span className="newsroomLinkText">
              Check out more news articles
            </span>{' '}
            <span className="linkWrapper">
              <Link href={getNewsroomLinksByCountry(country)} passHref>
                <Anchor color="lochmara">here</Anchor>
              </Link>
            </span>
          </div>
        </div>
      </section>
      <style jsx>{`
        .NewsroomPreviewPanel {
          padding: 0 24px;
          margin: 50px 0;
        }
        .cardContainer {
          display: flex;
          flex-flow: wrap;
          justify-content: center;
          max-width: 1000px;
          margin: 50px auto 0;
        }
        .cardWrapper {
          display: flex;
          flex: 1;
          margin: 10px;
          flex-basis: calc(33% - 20px);
          min-width: 272px;
        }
        .cardWrapper > :global(.card) {
          background-color: ${colors.iron};
        }
        .newsroomLinkContainer {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
        .newsroomLinkText {
          color: ${colors.grayChateau};
        }
        .linkWrapper {
          font-weight: ${fontWeights.semibold};
        }
      `}</style>
    </Fragment>
  );
};

export default NewsroomPreviewPanel;
