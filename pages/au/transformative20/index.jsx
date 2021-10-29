// @flow

import React, { Fragment } from 'react';
import Link from 'next/link';

import Anchor from 'components/Anchor';
import Page from 'components/Page';
import Hero from 'panels/Transformative20/Hero';
import Footer from 'panels/Home/Footer';
import { colors, breakPoints } from 'utils/theme';
import { urls } from 'utils/urls';
import Winners from 'panels/Transformative20/Winners';
import WinnerSelection from 'panels/Transformative20/WinnerSelection';
import Winners2019 from 'panels/Transformative20/Winners2019';

const Transformative20 = () => (
  <Fragment>
    <Page>
      <Hero />
      <div className="descriptionTop">
        <div className="wrapper">
          <div className="paragraph">
            The Mathspace Transformative 20 is a national awards program
            designed to celebrate exceptional teachers and students. Our second
            time running Transformative 20, this year is particularly special as
            it marks our 10th year as a maths ed-tech company!
          </div>
          <div className="paragraph">
            From over 5,000 teachers and 200,000 students and in Australia, we
            searched for individuals who reflected our{' '}
            <Link href={urls.aboutUsAU} passHref>
              <Anchor color="white" hoverColor="white" underline>
                core values
              </Anchor>
            </Link>{' '}
            - those who strive for <strong>impact</strong>, work with{' '}
            <strong>purpose</strong>, focus on{' '}
            <strong>continuous improvement</strong>, and demonstrate{' '}
            <strong>selflessness</strong> through their commitment to helping
            others.
          </div>
          <div className="paragraph">
            We’ve now selected the our top 20 teachers and top 20 students of
            2020 - the teachers who are shaping the future of maths education
            and the students who have shown a real commitment to their own
            development.
          </div>
        </div>
      </div>
      <Winners />
      <WinnerSelection />
      <Winners2019 />
      <Footer country="AU" />
    </Page>
    <style jsx>{`
      .descriptionTop {
        padding: 50px 24px;
        background-color: ${colors.pickledBluewood};
        color: ${colors.white};
      }
      .wrapper {
        max-width: 700px;
        margin: 0 auto;
        text-align: center;
      }
      .paragraph + .paragraph {
        margin-top: 20px;
      }
      @media (min-width: ${breakPoints.medium}px) {
        .paragraph {
          font-size: 18px;
        }
      }
    `}</style>
  </Fragment>
);

export default Transformative20;
