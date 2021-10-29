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
    <Header country="US" />
    <Page title="About Us :: Mathspace">
      <Mission country="US" />
      <CoreValues country="US" />
      <Statement country="US" />
      <Leadership country="US" />
      <Team country="US" />
      <Footer country="US" backgroundColor={colors.athensGray} />
    </Page>
  </Fragment>
);

export default AboutUs;
