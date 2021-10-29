// @flow

import React, { Fragment, useRef } from 'react';

import Page from 'components/Page';
import Header from 'components/Shared/Header';
import Hero from 'panels/Home/CovidHero';
import Webinars from 'panels/Home/Webinar';
import Differece from 'panels/Home/Difference';
import Teachers from 'panels/Home/Teachers';
import Students from 'panels/Home/Students';
import Administrators from 'panels/Home/Administrators';
import Numbers from 'panels/Home/Numbers';
import Footer from 'panels/Home/Footer';
import { colors } from 'utils/theme';
import {
  type Banner,
  type HomepageContent,
  type WebinarPreview,
} from 'utils/types';

type Props = {
  banners: Array<Banner>,
  homepageContent: Array<HomepageContent>,
  webinarPreview: Array<WebinarPreview>,
};
const Homepage = ({ banners, homepageContent, webinarPreview }: Props) => {
  const content = homepageContent.filter(
    localeData => localeData.country === 'US',
  )[0];
  const teacherPanelRef = useRef(null);
  const handlePanelTransitionClick = () => {
    teacherPanelRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  const filteredWebinarPreviews = webinarPreview.filter(preview =>
    preview.regions.includes('US'),
  );

  return (
    <Fragment>
      <div className="headerWrapper">
        <Header country="US" bannerData={banners} />
      </div>
      <Page
        title="Online Math Program | Mathspace"
        description="Looking for an online maths program that’s curriculum aligned, tracks student progress and frees you up to teach? Help students excel, book demo on 1300833194."
      >
        <Hero country="US" />
        {filteredWebinarPreviews.length > 0 && (
          <Webinars webinars={filteredWebinarPreviews} />
        )}
        <Differece
          localeData={content.difference}
          onClick={() => handlePanelTransitionClick()}
          country="US"
        />
        <div ref={teacherPanelRef}>
          <Teachers localeData={content.teacher} />
        </div>
        <div className="dividerWrapper">
          <div className="divider" />
        </div>
        <Students localeData={content.student} />
        <div className="administratorsWrapper">
          <Administrators />
        </div>
        <Numbers />
        <Footer country="US" />
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
        .administratorsWrapper {
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
    const bannerData = await import('public/website/banner.json');
    const contentData = await import('public/website/homepageContent.json');
    const webinarData = await import('public/website/webinarPreview.json');
    banners = bannerData.default;
    homepageContent = contentData.default;
    webinarPreview = webinarData.default;
  } else {
    const bannerData = await fetch('/website/banner.json');
    const contentData = await fetch('/website/homepageContent.json');
    const webinarData = await fetch('/website/webinarPreview.json');
    banners = await bannerData.json();
    homepageContent = await contentData.json();
    webinarPreview = await webinarData.json();
  }
  return { webinarPreview, banners, homepageContent };
};

export default Homepage;
