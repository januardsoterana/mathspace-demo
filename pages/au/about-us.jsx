// @flow

import React, { Fragment } from 'react';

import { colors } from 'utils/theme';
import Page from 'components/Page';
import Header from 'components/Shared/Header';
import Mission from 'panels/AboutUs/Mission';
import CoreValues from 'panels/AboutUs/CoreValues';
import Statement from 'panels/AboutUs/Statement';
import Leadership from 'panels/AboutUs/Leadership';
import Team from 'panels/AboutUs/Team';
import Footer from 'panels/Home/Footer';

const AboutUs = () => (
  <Fragment>
    <Header country="AU" />
    <Page title="About Us :: Mathspace">
      <Mission country="AU" />
      <CoreValues country="AU" />
      <Statement country="AU" />
      <Leadership country="AU" />
      <Team country="AU" />
      <Footer country="AU" backgroundColor={colors.athensGray} />
    </Page>
  </Fragment>
);

export default AboutUs;
