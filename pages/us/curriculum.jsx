// @flow

import React, { Fragment } from 'react';

import Header from 'components/Shared/Header';
import Page from 'components/Page';
import Footer from 'panels/Home/Footer';
import BenefitsPanel from 'panels/Curriculums/BenefitsPanel';
import CurriculumSelectionPanel from 'panels/Curriculums/CurriculumSelectionPanel';
import Hero from 'panels/Curriculums/Hero';
import PhotoPanel from 'panels/Curriculums/PhotoPanel';
import { type Curriculum, type Banner } from 'utils/types';

type Props = {|
  curriculums: Array<Curriculum>,
  banners: Array<Banner>,
|};
const CurriculumUS = ({ curriculums, banners }: Props) => (
  <Fragment>
    <Header country="US" bannerData={banners} />
    <Page title="Curriculums :: Mathspace">
      <Hero />
      <CurriculumSelectionPanel country="US" curriculums={curriculums} />
      <PhotoPanel backgroundImage="curriculum/curriculum-photo-US-UK.jpg" />
      <BenefitsPanel
        title="We&#39;re here to support you"
        subtitle="We&#39;re always expanding our content coverage."
      />
      <Footer country="US" />
    </Page>
  </Fragment>
);

CurriculumUS.getInitialProps = async ({ req }): Promise<Props> => {
  const isServerSide = !!req;
  let curriculums;
  let banners;
  if (isServerSide) {
    const data = await import('public/website/curriculum.json');
    const bannerData = await import('public/website/banner.json');
    banners = bannerData.default;
    curriculums = data.default;
  } else {
    const data = await fetch('/website/curriculum.json');
    const bannerData = await fetch('/website/banner.json');
    banners = await bannerData.json();
    curriculums = await data.json();
  }
  return { curriculums, banners };
};

export default CurriculumUS;
