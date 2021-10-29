// @flow

import React, { Fragment, useState } from 'react';

import Header from 'components/Shared/Header';
import Page from 'components/Page';
import Hero from 'panels/Parents/Hero';
import Selector from 'panels/Parents/Selector';
import List from 'panels/Parents/List';
import Cost from 'panels/Parents/Cost';
import Support from 'panels/Parents/Support';
import Footer from 'panels/Home/Footer';
import { type Banner, type ClassCode } from 'utils/types';
import { colors } from 'utils/theme';

type Props = {
  banners: Array<Banner>,
  parents: Array<ClassCode>,
};

const ParentsPage = ({ banners, parents }: Props) => {
  const [selectedCountry, countrySelect] = useState('US');
  const contentList = parents.filter(item => item.country === selectedCountry);
  return (
    <Fragment>
      <Header country="US" bannerData={banners} />
      <Page>
        <Hero />
        <Selector
          onClick={selected => countrySelect(selected)}
          selected={selectedCountry}
        />
        <List country={selectedCountry} data={contentList} />
        <Cost country="US" />
        <div className="divider" />
        <Support country="US" />
        <Footer country="US" />
      </Page>
      <style jsx>{`
        .divider {
          border-top: 1px solid ${colors.blackHaze};
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>
    </Fragment>
  );
};

ParentsPage.getInitialProps = async ({ req }): Promise<Props> => {
  const isServerSide = !!req;
  let banners;
  let parents;
  if (isServerSide) {
    const bannerData = await import('public/website/banner.json');
    const parentsData = await import('public/website/parents.json');
    banners = bannerData.default;
    parents = parentsData.default;
  } else {
    const bannerData = await fetch('/website/banner.json');
    const parentsData = await fetch('/website/parents.json');
    banners = await bannerData.json();
    parents = await parentsData.json();
  }
  return { banners, parents };
};

export default ParentsPage;
