// @flow

import React, { Fragment } from 'react';

import FeaturedNewsCard from 'components/FeaturedNewsCard';
import NewsCard from 'components/NewsCard';

import { colors } from 'utils/theme';
import { type Newsroom } from 'utils/types';

type Props = {
  featuredCard: Newsroom,
  newsCardList: Array<Newsroom>,
};
const NewsPanel = ({ featuredCard, newsCardList }: Props) => (
  <Fragment>
    <section className="container">
      <div className="contentWrapper">
        {!!featuredCard && (
          <div className="featuredCarContainer">
            <FeaturedNewsCard card={featuredCard} />
          </div>
        )}
        <div className="cardContainer">
          {newsCardList.map(card => (
            <div key={card.description} className="cardWrapper">
              <NewsCard card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <style jsx>{`
      .container {
        background-color: ${colors.purpleHeart};
      }
      .contentWrapper {
        max-width: 1000px;
        margin: 0 auto;
        padding: 50px 24px;
      }
      .featuredCarContainer {
        margin: 0 10px 20px;
      }
      .cardContainer {
        display: flex;
        flex-flow: wrap;
        justify-content: flex-start;
      }
      .cardWrapper {
        display: flex;
        flex: 1;
        margin: 10px;
        flex-basis: calc(33% - 20px);
        min-width: 272px;
        max-width: 315px;
      }
    `}</style>
  </Fragment>
);

export default NewsPanel;
