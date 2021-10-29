// @flow

import React, { Fragment } from 'react';

import Page from 'components/Page';
import Header from 'components/Shared/Header';
import Footer from 'panels/Home/Footer';
import Featured from 'panels/CustomerStories/Featured';
import StoryList from 'panels/CustomerStories/StoryList';
import CTA from 'panels/CustomerStories/CTA';
import { type Banner, type CustomerStory } from 'utils/types';

type Props = {|
  banners: Array<Banner>,
  customerStories: Array<CustomerStory>,
|};
const CustomerStories = ({ banners, customerStories }: Props) => {
  const americanStories = customerStories.filter(
    story => story.country === 'US',
  );
  const featuredStories = americanStories.filter(story => !!story.featured);
  return (
    <Fragment>
      <Page title="Customer Stories :: Mathspace">
        <Header country="US" bannerData={banners} />
        {featuredStories[0] && (
          <Featured story={featuredStories[0]} country="US" />
        )}
        <StoryList stories={americanStories} country="US" />
        <CTA />
        <Footer country="US" />
      </Page>
    </Fragment>
  );
};

CustomerStories.getInitialProps = async ({ req }): Promise<Props> => {
  const isServerSide = !!req;
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
  return { banners, customerStories };
};

export default CustomerStories;
