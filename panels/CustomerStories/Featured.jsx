// @flow

import React, { Fragment } from 'react';
import Link from 'next/link';

import Button from 'components/Button';

import {
  breakPoints,
  fontSizes,
  lineHeights,
  fontWeights,
  colors,
  borderRadius,
} from 'utils/theme';
import { urls } from 'utils/urls';
import { type CountryCodes } from 'utils/types';

type Props = {|
  story: {
    oragnisation: string,
    title: string,
    slug: string,
    featured: boolean,
    logo: string,
    testimony: string,
    quotee: string,
    quoteeRole: string,
    coverImage: string,
    videoLink: string,
    videoCover: string,
    keyPoints: Array<string>,
    overview: string,
    article: Array<{ type: 'text' | 'image', content: string }>,
  },
  country: CountryCodes,
|};
const Featured = ({ story, country }: Props) => (
  <Fragment>
    <section className="container">
      <div className="wrapper">
        <div className="leftSection">
          <div className="featured">
            <img className="logo" src={story.logo} alt={story.oragnisation} />
          </div>
          <h1 className="title">{story.title}</h1>
          <div className="testimony">&quot;{story.testimony}&quot;</div>
          <div className="quoteeWrapper">
            <div className="quotee">{story.quotee}</div>
            <div className="quoteeRole">{story.quoteeRole}</div>
          </div>
          <div className="ctaWrapper">
            <Link
              href={{
                pathname: `/${country.toLocaleLowerCase()}${
                  urls.customerStory
                }`,
                query: { school: story.slug },
              }}
              passHref
            >
              <Button isFilled isBlock color="lochmara" size="large">
                Read the story
              </Button>
            </Link>
          </div>
        </div>
        <div className="rightSection">
          <img className="image" src={story.coverImage} alt="" />
        </div>
      </div>
    </section>
    <style jsx>{`
      .container {
        padding: 50px 24px;
      }
      .wrapper {
        max-width: 1110px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }
      .leftSection {
        max-width: 525px;
      }
      .featured {
        display: flex;
        align-items: center;
      }
      .logo {
        max-width: 140px;
        max-height: 70px;
      }
      .title {
        font-size: ${fontSizes.mobile.h1}px;
        line-height: ${lineHeights.h1};
        font-weight: ${fontWeights.semibold};
        color: ${colors.cloudBurst};
        margin: 10px 0 0;
      }
      .testimony {
        font-size: ${fontSizes.mobile.h3}px;
        color: ${colors.santasGray};
        line-height: ${lineHeights.body};
        font-style: italic;
        margin: 24px 0 0;
      }
      .quotee {
        margin: 10px 0 0;
        font-size: ${fontSizes.mobile.bodySM}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.body};
      }
      .quoteeRole {
        font-size: ${fontSizes.mobile.bodySM}px;
        line-height: ${lineHeights.body};
      }
      .ctaWrapper {
        margin: 30px 0 0;
        max-width: inherit;
      }
      .rightSection {
        max-width: 525px;
        display: flex;
        align-items: center;
        margin-top: 30px;
      }
      .image {
        width: 100%;
        border-radius: ${borderRadius.default}px;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .wrapper {
          flex-direction: row;
        }
        .logo {
          max-width: 150px;
        }
        .title {
          font-size: ${fontSizes.desktop.h1}px;
        }
        .testimony {
          font-size: ${fontSizes.desktop.h3}px;
        }
        .ctaWrapper {
          max-width: 250px;
        }
        .rightSection {
          margin-top: 0;
        }
      }
    `}</style>
  </Fragment>
);

export default Featured;
