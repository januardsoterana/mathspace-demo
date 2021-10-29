// @flow

import React, { Fragment } from 'react';

import Page from 'components/Page';
import Header from 'panels/Coronavirus/Header';
import Hero from 'panels/Coronavirus/Hero';
import HowItCanWork from 'panels/Coronavirus/HowItCanWork';
import WhyMathspace from 'panels/Coronavirus/WhyMathspace';
import Footer from 'panels/Coronavirus/Footer';

const WeeklyInsights = () => (
  <Fragment>
    <Header />
    <Page
      title="Mathspace"
      description="Your personal teaching aid. Think of Weekly Insights as being your personal teaching aid, bringing the most important data from the last week together in one place"
    >
      <Hero />
      <HowItCanWork />
      <WhyMathspace />
      <Footer />
    </Page>
  </Fragment>
);

export default WeeklyInsights;
