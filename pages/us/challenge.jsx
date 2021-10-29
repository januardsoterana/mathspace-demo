// @flow

import React, { Fragment, useRef } from 'react';
import fetch from 'isomorphic-unfetch';

import Page from 'components/Page';
import LeaderBoard from 'panels/Challenge/Leaderboard';
import LeaderboardPlaceholder from 'panels/Challenge/US/LeaderboardPlaceholder';
import Hero from 'panels/Challenge/US/Hero';
import Footer from 'panels/Challenge/Footer';
import FAQ from 'panels/Challenge/US/FAQ';
import Rewards from 'panels/Challenge/US/Rewards';
import About from 'panels/Challenge/US/About';
import HowItWorks from 'panels/Challenge/US/HowItWorks';
import Diagnostics from 'panels/Challenge/US/Diagnostics';

import { breakPoints, colors } from 'utils/theme';
import { challengeUS2020 } from 'utils/urls';
import { processScoreData } from 'utils/challenge';

const LEADERBOARD_ACTIVE = true;

type Props = {|
  newSchools: Array<Array<string>>,
  existingSchools: Array<Array<string>>,
|};

const Challenge = ({ newSchools, existingSchools }: Props) => {
  const leaderboardMarker = useRef(null);
  const faqMarker = useRef(null);
  const diagnosticsMarker = useRef(null);
  const aboutMarker = useRef(null);
  const handlePanelTransitionClick = marker => {
    if (marker === 'leaderboard' && leaderboardMarker.current)
      leaderboardMarker.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    if (marker === 'faq' && faqMarker.current)
      faqMarker.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    if (marker === 'diagnostics' && diagnosticsMarker.current)
      diagnosticsMarker.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    if (marker === 'about' && aboutMarker.current)
      aboutMarker.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  };

  return (
    <Fragment>
      <div className="background">
        <Page>
          <Hero handleScroll={() => handlePanelTransitionClick('about')} />
          <div className="dividerHero" />
          <div ref={leaderboardMarker} className="scrollMarker" />
          {LEADERBOARD_ACTIVE ? (
            <Fragment>
              <LeaderBoard
                title="Current Mathspace Schools"
                nationalList={processScoreData(existingSchools.slice(0, 10))}
                weeklyList={processScoreData(existingSchools.slice(10, 20))}
                lastUpdated={existingSchools[20][1]}
                mainColor={colors.pickledBluewood}
                textColor={colors.white}
              />
              <LeaderBoard
                title="Pilot Schools"
                nationalList={processScoreData(newSchools.slice(0, 10))}
                weeklyList={processScoreData(newSchools.slice(10, 20))}
                lastUpdated={newSchools[20][1]}
                mainColor={colors.pickledBluewood}
                textColor={colors.white}
              />
            </Fragment>
          ) : (
            <LeaderboardPlaceholder />
          )}
          <div className="divider" />
          <Rewards handleScroll={() => handlePanelTransitionClick('faq')} />
          <div className="divider" />
          <div ref={aboutMarker} className="scrollMarker" />
          <About />
          <div ref={diagnosticsMarker} className="scrollMarker" />
          <div className="diagnosticsWrapper">
            <Diagnostics />
          </div>
          <HowItWorks
            faqClickHandler={() => handlePanelTransitionClick('faq')}
            diagnosticsClickHandler={() =>
              handlePanelTransitionClick('diagnostics')
            }
          />
          <div ref={faqMarker} className="scrollMarker" />
          <FAQ />
          <Footer />
        </Page>
      </div>
      <style jsx>{`
        .background {
          background-color: ${colors.cloudBurst};
        }
        .divider {
          max-width: 800px;
          width: 100%;
          margin: 56px auto;
          border-bottom: 2px solid ${colors.pickledBluewood};
        }
        .dividerHero {
          max-width: 800px;
          width: 100%;
          margin: 56px auto 6px;
          border-bottom: 2px solid ${colors.pickledBluewood};
        }
        .diagnosticsWrapper {
          padding: 50px 0;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .divider {
            margin: 56px auto;
          }
        }
      `}</style>
    </Fragment>
  );
};

Challenge.getInitialProps = async () => {
  let newSchoolsData = {};
  let existingSchoolsData = {};
  try {
    newSchoolsData = await fetch(challengeUS2020.newSchools);
    existingSchoolsData = await fetch(challengeUS2020.existingSchools);
  } catch (e) {
    return { newSchools: {}, existingSchools: {} };
  }
  const newSchoolJSON = await newSchoolsData.json();
  const existingSchoolJSON = await existingSchoolsData.json();
  return {
    newSchools: newSchoolJSON.values,
    existingSchools: existingSchoolJSON.values,
  };
};

export default Challenge;
