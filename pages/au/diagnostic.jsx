// @flow

import React, { Fragment } from 'react';

import Page from 'components/Page';
import Hero from 'panels/Diagnostic/Hero';
import Benefits from 'panels/Diagnostic/Benefits';
import Team from 'panels/Diagnostic/Team';
import Features from 'panels/Diagnostic/Features';
import Footer from 'panels/Diagnostic/Footer';

const Diagnostic = () => (
  <Fragment>
    <Page
      title="Diagnostic :: Mathspace"
      description="See what grade level your students are at and get deeper insights into student performance with our range of diagnostic tools covering years 5 to 10."
    >
      <Hero country="AU" />
      <Benefits country="AU" />
      <Team />
      <Features country="AU" />
      <Footer />
    </Page>
    <style jsx>{``}</style>
  </Fragment>
);

export default Diagnostic;
