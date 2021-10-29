// @flow

import React, { Fragment } from 'react';

import Page from 'components/Page';
import Header from 'components/Shared/Header';
import Hero from 'panels/TeachingRemotely/Hero';
import CTA from 'panels/TeachingRemotely/CTA';
import Features from 'panels/TeachingRemotely/Features';
import Resources from 'panels/TeachingRemotely/Resources';
import LearnMore from 'panels/TeachingRemotely/LearnMore';
import Footer from 'panels/Home/Footer';
import {
  type Banner,
  type HomepageContent,
  type RemoteTeachingResource,
} from 'utils/types';

type Props = {
  banners: Array<Banner>,
  homepageContent: Array<HomepageContent>,
  remoteTeachingResource: Array<RemoteTeachingResource>,
};

const RemoteLearning = ({
  banners,
  homepageContent,
  remoteTeachingResource,
}: Props) => {
  const content = homepageContent.filter(
    localeData => localeData.country === 'US',
  )[0];
  const resources = remoteTeachingResource.filter(
    item => item.country === 'US',
  );
  return (
    <Fragment>
      <Header country="US" bannerData={banners} />
      <Page>
        <Hero country="US" />
        <CTA country="US" />
        <Features country="US" />
        <Resources data={resources} />
        <LearnMore country="US" />
        <Footer country="US" />
      </Page>
    </Fragment>
  );
};

RemoteLearning.getInitialProps = async ({ req }): Promise<Props> => {
  const isServerSide = !!req;
  let banners;
  let homepageContent;
  let remoteTeachingResource;
  if (isServerSide) {
    const bannerData = await import('public/website/banner.json');
    const contentData = await import('public/website/homepageContent.json');
    const remoteTeachingResourceData = await import(
      'public/website/remoteTeachingResource.json'
    );
    banners = bannerData.default;
    homepageContent = contentData.default;
    remoteTeachingResource = remoteTeachingResourceData.default;
  } else {
    const bannerData = await fetch('/website/banner.json');
    const contentData = await fetch('/website/homepageContent.json');
    const remoteTeachingResourceData = await fetch(
      '/website/remoteTeachingResource.json',
    );
    banners = await bannerData.json();
    homepageContent = await contentData.json();
    remoteTeachingResource = await remoteTeachingResourceData.json();
  }
  return { banners, homepageContent, remoteTeachingResource };
};

export default RemoteLearning;
