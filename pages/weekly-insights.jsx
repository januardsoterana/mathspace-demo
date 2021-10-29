// @flow

import React, { Fragment } from 'react';

import Page from 'components/Page';
import Header from 'panels/WeeklyInsights/Header';
import Hero from 'panels/WeeklyInsights/Hero';
import HeroImage from 'panels/WeeklyInsights/HeroImage';
import Features from 'panels/WeeklyInsights/Features';
import Divider from 'panels/WeeklyInsights/Divider';
import Insights from 'panels/WeeklyInsights/Insights';
import CTA from 'panels/WeeklyInsights/CTA';
import Footer from 'panels/WeeklyInsights/Footer';

const WeeklyInsights = () => (
  <Fragment>
    <Header />
    <Page
      title="Weekly Insights :: Mathspace"
      description="Your personal teaching aid. Think of Weekly Insights as being your personal teaching aid, bringing the most important data from the last week together in one place"
    >
      <Hero />
      <HeroImage />
      <Features />
      <Divider />
      <Insights />
      <CTA />
      <Footer />
    </Page>
  </Fragment>
);

export default WeeklyInsights;
