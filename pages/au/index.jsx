// @flow

import React, { Fragment, useRef } from 'react';

import Page from 'components/Page';
import Header from 'components/Shared/Header';
import Hero from 'panels/Home/CovidHero';
import Webinars from 'panels/Home/Webinar';
import Differece from 'panels/Home/Difference';
import Teachers from 'panels/Home/Teachers';
import Students from 'panels/Home/Students';
import Numbers from 'panels/Home/Numbers';
import EddieWoo from 'panels/Home/EddieWoo';
import Footer from 'panels/Home/Footer';
import { colors } from 'utils/theme';
import {
  type WebinarPreview,
  type Banner,
  type HomepageContent,
} from 'utils/types';

type Props = {
  webinarPreview: Array<WebinarPreview>,
  banners: Array<Banner>,
  homepageContent: Array<HomepageContent>,
};
const Homepage = ({ webinarPreview, banners, homepageContent }: Props) => {
  const content = homepageContent.filter(
    localeData => localeData.country === 'AU',
  )[0];
  const teacherPanelRef = useRef(null);
  const handlePanelTransitionClick = () => {
    teacherPanelRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  const filteredWebinarPreviews = webinarPreview.filter(preview =>
    preview.regions.includes('AU'),
  );
  return (
    <Fragment>
      <div className="headerWrapper">
        <Header country="AU" bannerData={banners} />
      </div>
      <Page
        title="Online Maths Program | Mathspace"
        description="Looking for an online maths program that’s curriculum aligned, tracks student progress and frees you up to teach? Help students excel, book demo on 1300833194."
      >
        <Hero country="AU" />
        <Webinars webinars={filteredWebinarPreviews} />
        <Differece
          localeData={content.difference}
          onClick={() => handlePanelTransitionClick()}
          country="AU"
        />
        <div ref={teacherPanelRef}>
          <Teachers localeData={content.teacher} />
        </div>
        <div className="dividerWrapper">
          <div className="divider" />
        </div>
        <Students localeData={content.student} />
        <div className="numbersWrapper">
          <Numbers />
        </div>
        <EddieWoo />
        <Footer country="AU" />
      </Page>
      <style jsx>{`
        .headerWrapper {
          background-color: ${colors.cloudBurst};
        }
        .dividerWrapper {
          padding: 0 24px;
        }
        .divider {
          border-top: 1px solid ${colors.iron};
          max-width: 1110px;
          margin: 0 auto;
        }
        .numbersWrapper {
          background-color: ${colors.athensGray};
        }
      `}</style>
    </Fragment>
  );
};

Homepage.getInitialProps = async ({ req }): Promise<Props> => {
  const isServerSide = !!req;
  let webinarPreview;
  let banners;
  let homepageContent;
  if (isServerSide) {
    const webinarData = await import('public/website/webinarPreview.json');
    const bannerData = await import('public/website/banner.json');
    const contentData = await import('public/website/homepageContent.json');
    webinarPreview = webinarData.default;
    banners = bannerData.default;
    homepageContent = contentData.default;
  } else {
    const webinarData = await fetch('/website/webinarPreview.json');
    const bannerData = await fetch('/website/banner.json');
    const contentData = await fetch('/website/homepageContent.json');
    webinarPreview = await webinarData.json();
    banners = await bannerData.json();
    homepageContent = await contentData.json();
  }
  return { webinarPreview, banners, homepageContent };
};

export default Homepage;
