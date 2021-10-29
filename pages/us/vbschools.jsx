// @flow

import React, { Fragment, useState } from 'react';
import fetch from 'isomorphic-unfetch';

import Page from 'components/Page';
import ComingSoon from 'panels/Challenge/ComingSoon';
import Header from 'panels/Challenge/Header';
import Hero from 'panels/Challenge/VBSchools/Hero';
import Segment from 'panels/Challenge/VBSchools/Segment';
import LeaderBoard from 'panels/Challenge/Leaderboard';
import Footer from 'panels/Challenge/Footer';
import { vbSchoolsComp } from 'utils/urls';
import { colors } from 'utils/theme';
import { processOverallData, processWeeklyData } from 'utils/challenge';

const SHOW_LEADER_BOARD = true;

type Props = {|
  grade6Scores: Array<Array<string>>,
  grade7Scores: Array<Array<string>>,
  grade8Scores: Array<Array<string>>,
  algebra1Scores: Array<Array<string>>,
  geometryScores: Array<Array<string>>,
  algebra2Scores: Array<Array<string>>,
|};
const VBSchoolsLanding = ({
  grade6Scores,
  grade7Scores,
  grade8Scores,
  algebra1Scores,
  geometryScores,
  algebra2Scores,
}: Props) => {
  const [selected, setSelected] = useState('Middle School');
  return !SHOW_LEADER_BOARD ? (
    <Fragment>
      <Header />
      <Page>
        <Hero />
        <ComingSoon />
        <Footer />
      </Page>
    </Fragment>
  ) : (
    <Fragment>
      <Header />
      <Page>
        <Hero />
        <Segment
          selected={selected}
          segments={['Middle School', 'High School']}
          onClick={setSelected}
        />
        {selected === 'Middle School' && (
          <Fragment>
            <LeaderBoard
              nationalList={processOverallData(grade6Scores)}
              weeklyList={processWeeklyData(grade6Scores)}
              lastUpdated={grade6Scores[20][1]}
              nameField="Class"
              title="Grade 6 Leaderboard"
              mainColor={colors.cloudBurst}
              textColor={colors.cloudBurst}
            />
            <div className="middleLeaderBoard">
              <LeaderBoard
                nationalList={processOverallData(grade7Scores)}
                weeklyList={processWeeklyData(grade7Scores)}
                lastUpdated={grade7Scores[20][1]}
                nameField="Class"
                title="Grade 7 Leaderboard"
                mainColor={colors.cloudBurst}
                textColor={colors.cloudBurst}
              />
            </div>
            <LeaderBoard
              nationalList={processOverallData(grade8Scores)}
              weeklyList={processWeeklyData(grade8Scores)}
              lastUpdated={grade8Scores[20][1]}
              nameField="Class"
              title="Grade 8 Leaderboard"
              mainColor={colors.cloudBurst}
              textColor={colors.cloudBurst}
            />
          </Fragment>
        )}
        {selected === 'High School' && (
          <Fragment>
            <LeaderBoard
              nationalList={processOverallData(algebra1Scores)}
              weeklyList={processWeeklyData(algebra1Scores)}
              lastUpdated={algebra1Scores[20][1]}
              nameField="Class"
              title="Algebra I Leaderboard"
              mainColor={colors.cloudBurst}
              textColor={colors.cloudBurst}
            />
            <div className="middleLeaderBoard">
              <LeaderBoard
                nationalList={processOverallData(geometryScores)}
                weeklyList={processWeeklyData(geometryScores)}
                lastUpdated={geometryScores[20][1]}
                nameField="Class"
                title="Geometry Leaderboard"
                mainColor={colors.cloudBurst}
                textColor={colors.cloudBurst}
              />
            </div>
            <LeaderBoard
              nationalList={processOverallData(algebra2Scores)}
              weeklyList={processWeeklyData(algebra2Scores)}
              lastUpdated={algebra2Scores[20][1]}
              nameField="Class"
              title="Algebra II Leaderboard"
              mainColor={colors.cloudBurst}
              textColor={colors.cloudBurst}
            />
          </Fragment>
        )}
        <Footer />
      </Page>
      <style jsx>{`
        .middleLeaderBoard {
          background-color: ${colors.athensGray};
        }
      `}</style>
    </Fragment>
  );
};

VBSchoolsLanding.getInitialProps = async () => {
  let grade6Data = {};
  let grade7Data = {};
  let grade8Data = {};
  let algebra1Data = {};
  let geometryData = {};
  let algebra2Data = {};
  try {
    grade6Data = await fetch(vbSchoolsComp.gradeSix);
    grade7Data = await fetch(vbSchoolsComp.gradeSeven);
    grade8Data = await fetch(vbSchoolsComp.gradeEight);
    algebra1Data = await fetch(vbSchoolsComp.algebraOne);
    geometryData = await fetch(vbSchoolsComp.geometry);
    algebra2Data = await fetch(vbSchoolsComp.algebraTwo);
  } catch (e) {
    return { grade6Data: {}, grade7Data: {}, grade8Data: {} };
  }
  const grade6Json = await grade6Data.json();
  const grade7Json = await grade7Data.json();
  const grade8Json = await grade8Data.json();
  const algebra1Json = await algebra1Data.json();
  const geometryJson = await geometryData.json();
  const algebra2Json = await algebra2Data.json();
  return {
    grade6Scores: grade6Json.values,
    grade7Scores: grade7Json.values,
    grade8Scores: grade8Json.values,
    algebra1Scores: algebra1Json.values,
    geometryScores: geometryJson.values,
    algebra2Scores: algebra2Json.values,
  };
};

export default VBSchoolsLanding;
