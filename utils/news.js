// @flow

import { type Newsroom } from 'utils/types';

export const getNonFeaturedNews = (
  newsList: Array<Newsroom>,
  country: 'AU' | 'US',
  limit: number = 12,
): Array<Newsroom> => {
  const sortedList = newsList
    .slice()
    .sort((a, b) => a.id - b.id)
    .filter(news => !news.featured && news.country === country);
  return sortedList.length <= limit
    ? sortedList.reverse()
    : sortedList.slice(Math.max(sortedList.length - limit)).reverse();
};

export const getFeaturedNews = (
  newsList: Array<Newsroom>,
  country: 'AU' | 'US',
  limit: number = 1,
): Array<Newsroom> => {
  const sortedList = newsList
    .slice()
    .sort((a, b) => a.id - b.id)
    .filter(news => news.featured && news.country === country);
  return sortedList.length <= limit
    ? sortedList.reverse()
    : sortedList.slice(Math.max(sortedList.length - limit)).reverse();
};
