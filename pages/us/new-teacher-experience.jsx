// @flow

import React, { Fragment } from 'react';

import Page from 'components/Page';
import Header from 'panels/NewTeacherExperience/Header';
import Hero from 'panels/NewTeacherExperience/Hero';
import WhatIsNew from 'panels/NewTeacherExperience/WhatIsNew';
import PanelVideo from 'panels/NewTeacherExperience/PanelVideo';
import Help from 'panels/NewTeacherExperience/Help';
import Footer from 'panels/NewTeacherExperience/Footer';

import { colors } from 'utils/theme';

const NewTeacherExperience = () => (
  <Fragment>
    <Header />
    <Page>
      <Hero
        title="Better Reporting. Easier Task Creation. Brand New Textbooks."
        subTitle="Upgrade to the new teacher experience"
      />
      <div className="spacer" />
      <WhatIsNew />
      <PanelVideo />
      <Help />
      <Footer />
    </Page>
    <style jsx>{`
      .spacer {
        margin-top: 100px;
      }
      .divider {
        border-top: 1px solid ${colors.blackHaze};
        margin: 50px 0;
        background-color: ${colors.cloudBurst};
        max-width: 800px;
        margin: 50px auto;
      }
    `}</style>
  </Fragment>
);

export default NewTeacherExperience;
