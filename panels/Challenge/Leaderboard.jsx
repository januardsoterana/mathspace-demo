// @flow

import React, { Fragment, useState } from 'react';
import classnames from 'classnames';
import {
  fontWeights,
  breakPoints,
  colors,
  fontSizes,
  borderRadius,
  transitions,
} from 'utils/theme';

type Props = {|
  nationalList: Array<{
    position: number,
    name: string,
    score: number,
  }>,
  weeklyList: Array<{
    position: number,
    name: string,
    score: number,
  }>,
  lastUpdated: string,
  nameField?: string,
  title?: string,
  mainColor: string,
  textColor: string,
|};
const Leaderboard = ({
  lastUpdated,
  nationalList,
  weeklyList,
  nameField = 'School',
  title = 'Leaderboard',
  textColor,
  mainColor,
}: Props) => {
  const [selected, setSelected] = useState('national');
  const schoolList = selected === 'national' ? nationalList : weeklyList;
  const overallLeaderboard = classnames({
    overallLeader: true,
    button: true,
    selected: selected === 'national',
  });
  const weeklyLeaderboard = classnames({
    weeklyLeader: true,
    button: true,
    selected: selected === 'weekly',
  });
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <h3 className="title">{title}</h3>
          <div className="updatedTime">
            <span className="updatedTimeStaticText">Last updated:</span>
            <span>{lastUpdated}</span>
          </div>
          <div className="switchControl">
            <div
              className={overallLeaderboard}
              role="button"
              tabIndex="0"
              onKeyPress={() => setSelected('national')}
              onClick={() => setSelected('national')}
            >
              Overall
            </div>
            <div
              className={weeklyLeaderboard}
              role="button"
              tabIndex="0"
              onKeyPress={() => setSelected('weekly')}
              onClick={() => setSelected('weekly')}
            >
              Weekly
            </div>
          </div>
          <div className="boardWrapper">
            <div className="titleRow">
              <div className="positionColumn">Position</div>
              <div className="schoolColumn">{nameField}</div>
              <div className="scoreColumn">Challenge Score</div>
            </div>
            {schoolList.map(school => (
              <div
                key={`${school.name} + ${school.position}`}
                className="schoolRow"
              >
                <div className="positionColumn">
                  <div className="position">{school.position}</div>
                </div>
                <div className="schoolColumn">
                  <div>{school.name}</div>
                </div>
                <div className="scoreColumn">
                  {school.score.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          padding: 30px 24px;
        }
        .wrapper {
          max-width: 800px;
          margin: 0 auto;
        }
        .title {
          font-size: ${fontSizes.mobile.h2}px;
          font-weight: ${fontWeights.semibold};
          color: ${textColor};
          display: flex;
          justify-content: center;
          margin-bottom: 10px;
          margin-top: 10px;
          text-align: center;
        }
        .updatedTime {
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
          color: ${textColor};
        }
        .updatedTimeStaticText {
          font-weight: ${fontWeights.semibold};
          margin-right: 5px;
        }
        .switchControl {
          display: flex;
          justify-content: center;
        }
        .overallLeader {
          border-top-left-radius: ${borderRadius.default}px;
          border-bottom-left-radius: ${borderRadius.default}px;
        }
        .weeklyLeader {
          border-top-right-radius: ${borderRadius.default}px;
          border-bottom-right-radius: ${borderRadius.default}px;
        }
        .button {
          padding: 10px;
          cursor: pointer;
          border: 1px solid ${mainColor};
          color: ${textColor};
          width: 130px;
          text-align: center;
          font-size: ${fontSizes.mobile.bodyLG}px;
          outline: none;
          transition: background-color ${transitions.default},
            color ${transitions.default};
        }
        .selected {
          background-color: ${mainColor};
          color: ${colors.white};
        }
        .boardWrapper {
          margin-top: 20px;
        }
        .titleRow {
          color: ${textColor};
          display: flex;
          font-weight: ${fontWeights.semibold};
          margin-bottom: 10px;
          padding: 10px 0;
          border-bottom: 1px solid ${textColor};
        }
        .positionColumn {
          flex-basis: 60px;
          margin: 0 20px;
          display: flex;
          justify-content: center;
        }
        .position {
          width: 30px;
          height: 30px;
          background-color: ${mainColor};
          border-radius: ${borderRadius.circle}px;
          color: ${colors.white};
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .schoolColumn {
          flex: 1;
          margin-right: 20px;
          display: flex;
          align-items: center;
        }
        .scoreColumn {
          margin-right: 20px;
        }
        .schoolRow {
          color: ${textColor};
          display: flex;
          align-items: center;
          padding: 5px 0;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .title {
            font-size: ${fontSizes.desktop.h2}px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Leaderboard;
