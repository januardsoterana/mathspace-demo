// @flow

import React, { Fragment } from 'react';
import Link from 'next/link';

import Anchor from 'components/Anchor';

import {
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  transitions,
  borderRadius,
  breakPoints,
} from 'utils/theme';
import { urls } from 'utils/urls';
import { type CountryCodes, type CustomerStory } from 'utils/types';

type CardProps = {|
  story: CustomerStory,
  country: CountryCodes,
|};
const StoryCard = ({ story, country }: CardProps) => (
  <Fragment>
    <Link
      href={{
        pathname: `/${country.toLocaleLowerCase()}${urls.customerStory}`,
        query: { school: story.slug },
      }}
    >
      <a className="cardLink">
        <div className="card">
          <div className="coverWrapper">
            <div className="cover" />
          </div>
          <div className="info">
            <div className="logoWrapper">
              <img className="logo" src={story.logo} alt="" />
            </div>
            <h4 className="title">{story.title}</h4>
          </div>
        </div>
      </a>
    </Link>
    <style jsx>{`
      .cardLink {
        width: 100%;
        margin: 10px 0;
      }
      .card {
        display: inline-block;
        height: 400px;
        width: 100%;
        max-width: 350px;

        border-radius: ${borderRadius.default}px;
        background-color: ${colors.white};
        cursor: pointer;
      }
      .coverWrapper {
        width: 100%;
        height: 200px;
        overflow: hidden;
      }
      .cover {
        width: 100%;
        height: 100%;
        border-top-left-radius: ${borderRadius.default}px;
        border-top-right-radius: ${borderRadius.default}px;
        background-image: url(${story.coverImage});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        transition: transform ${transitions.hover};
      }
      .card:focus .coverWrapper .cover,
      .card:hover .coverWrapper .cover {
        transform: scale(1.2);
      }
      .info {
        padding: 16px;
        display: flex;
        flex-direction: column;
      }
      .logoWrapper {
        margin: 0 auto;
        height: 70px;
        display: flex;
        align-items: center;
      }
      .logo {
        max-width: 150px;
        max-height: 70px;
        margin: 0 auto;
      }
      .title {
        color: ${colors.cloudBurst};
        font-size: ${fontSizes.desktop.bodyLG}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.body};
        margin: 20px 0;
        text-align: center;
      }

      @media (min-width: ${breakPoints.small}px) {
        .cardLink {
          width: initial;
          margin: 10px;
        }
      }
      @media (min-width: ${breakPoints.medium}px) {
        .card {
          width: 350px;
          max-width: initial;
        }
      }
    `}</style>
  </Fragment>
);

type Props = {|
  stories: Array<CustomerStory>,
  country: CountryCodes,
|};
const StoryList = ({ stories, country }: Props) => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <h3 className="title">See how Mathspace is helping schools</h3>
        <div className="storyList">
          {stories.map(story => (
            <StoryCard
              key={story.organisation}
              story={story}
              country={country}
            />
          ))}
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        background-color: ${colors.cloudBurst};
        padding: 50px 24px;
      }
      .wrapper {
        max-width: 1110px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .title {
        color: ${colors.white};
        font-size: ${fontSizes.desktop.h2}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.body};
        margin: 0 0 50px;
        text-align: center;
      }
      .storyList {
        margin: 8px auto 0;
        padding: 0;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 1110px;
        width: 100%;
      }

      @media (min-width: ${breakPoints.large}px) {
        .storyList {
          justify-content: flex-start;
        }
      }
    `}</style>
  </Fragment>
);

export default StoryList;
