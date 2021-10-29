// @flow

import React from 'react';
import Head from 'next/head';

import {
  WaypointsOverview,
  Footer,
  FrequentlyAskedQuestions,
  Hero,
  OptIn,
  Team,
  Testimonials,
} from 'panels/Waypoints/us';
import Page from 'components/Page';
import { urlBuilders } from 'utils/urls';
import {
  breakPoints,
  colors,
  fontStacks,
  pagePadding,
} from 'utils/themeWaypoints';

const Waypoints = () => (
  <>
    <Head>
      <link
        rel="stylesheet"
        type="text/css"
        href={`${urlBuilders.cssUrl('waypoints-fonts.css')}`}
      />
    </Head>
    <Page
      title="Waypoints"
      description="A new way to continuously assess students"
      useDefaultFont={false}
    >
      <div className="page">
        <div className="page__content">
          <Hero />
          <WaypointsOverview />
          <OptIn />
          <Testimonials />
          <Team />
          <FrequentlyAskedQuestions />
        </div>
      </div>
    </Page>
    <Footer />
    <style global jsx>
      {`
        body {
          font-family: ${fontStacks.default}, 'Helvetica Neue', Helvetica,
            sans-serif;
        }
        svg {
          flex-shrink: 0;
        }
      `}
    </style>
    <style jsx>{`
      .page {
        min-height: 100vh;
        background-color: ${colors.almond50};
        overflow: hidden;
      }

      .page__content {
        padding: ${pagePadding.mobile}px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .page__content {
          padding: ${pagePadding.tablet}px;
        }
      }

      @media (min-width: ${breakPoints.large}px) {
        .page__content {
          padding: ${pagePadding.desktop}px;
        }
      }
    `}</style>
  </>
);

export default Waypoints;
