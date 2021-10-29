// @flow

import React, { Fragment } from 'react';

import Page from 'components/Page';
import Header from 'components/Shared/Header';
import Footer from 'panels/Home/Footer';
import Hero from 'panels/CustomerStory/Hero';
import Snapshot from 'panels/CustomerStory/Snapshot';
import Article from 'panels/CustomerStory/Article';
import CTA from 'panels/CustomerStories/CTA';
import { colors, breakPoints } from 'utils/theme';
import {
  type Banner,
  type CustomerStory as CustomerStoryType,
} from 'utils/types';

import Error from '../_error';

type Props = {|
  banners: Array<Banner>,
  customerStories: Array<CustomerStoryType>,
  school: string,
|};
const CustomerStory = ({ banners, customerStories, school }: Props) => {
  const story = customerStories.filter(item => item.slug === school)[0];
  const hasBanner = banners.filter(
    banner => banner.allowedCountries.includes('AU') && banner.active,
  );
  return !story ? (
    <Error statusCode={404} />
  ) : (
    <Fragment>
      <Page title={`${story.organisation} | Customer Stories | Mathspace`}>
        <Header country="AU" bannerData={banners} />
        <Hero story={story} />
        <div className="container">
          <div className="wrapper">
            <div className="snapshotWrapper">
              <Snapshot
                content={story.snapshot}
                logo={story.logo}
                country="AU"
              />
            </div>
            <div className="articleWrapper">
              <Article article={story.article} />
            </div>
          </div>
        </div>
        <div className="ctaWrapper">
          <CTA />
        </div>
        <Footer backgroundColor={colors.athensGray} country="AU" />
      </Page>
      <style jsx>{`
        .container {
          padding: 0 24px 50px;
        }
        .wrapper {
          max-width: 1110px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .snapshotWrapper {
          margin-right: 0;
          max-width: initial;
          width: 100%;

          position: static;
          top: ${hasBanner ? 150 : 90}px;
          align-self: flex-start;
        }
        .articleWrapper {
          max-width: initial;
          width: 100%;
        }
        .ctaWrapper {
          background-color: ${colors.athensGray};
        }

        @media (min-width: ${breakPoints.medium}px) {
          .wrapper {
            flex-direction: row;
          }
          .snapshotWrapper {
            position: sticky;
            margin-right: 50px;
            max-width: 400px;
          }
          .articleWrapper {
            max-width: 660px;
          }
        }
      `}</style>
    </Fragment>
  );
};

CustomerStory.getInitialProps = async ({ req, query }): Promise<Props> => {
  const isServerSide = !!req;
  const { school } = query;
  let banners;
  let customerStories;
  if (isServerSide) {
    const bannerData = await import('public/website/banner.json');
    const storiesData = await import('public/website/customerStories.json');
    customerStories = storiesData.default;
    banners = bannerData.default;
  } else {
    const bannerData = await fetch('/website/banner.json');
    const storiesData = await fetch('/website/customerStories.json');
    customerStories = await storiesData.json();
    banners = await bannerData.json();
  }
  return { banners, customerStories, school };
};

export default CustomerStory;
