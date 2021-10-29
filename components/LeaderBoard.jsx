// @flow
import React, { Fragment } from 'react';

import SwitchControl from 'components/SwitchControl';
import {
  breakPoints,
  colors,
  fontWeights,
  desktopFontSizes,
  mobileFontSizes,
  borderRadius,
} from 'utils/theme';
import { urlBuilders } from 'utils/urls';

const SWITCH_CONTROL_MAX_SIZE_DESKTOP = 580;
const SWITCH_CONTROL_MAX_SIZE_MOBILE = 400;

type Props = {
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
  showLeaderboard: boolean,
  nameField?: string,
  title?: string,
};

type State = {
  selected: number,
  schoolList: Array<{
    position: number,
    name: string,
    score: number,
  }>,
};

class LeaderBoard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selected: 0,
      schoolList: this.props.nationalList,
    };
  }
  render() {
    const {
      lastUpdated,
      nationalList,
      weeklyList,
      showLeaderboard,
      nameField = 'School',
      title = 'Leaderboard',
    } = this.props;
    const { selected, schoolList } = this.state;
    return (
      <Fragment>
        <div className="container">
          <div className="wrapper">
            <div className="panelTitle">{title}</div>
            {showLeaderboard ? (
              <Fragment>
                <div className="updatedTime">
                  <span className="updatedTimeStaticText">Last updated:</span>
                  <span>{lastUpdated}</span>
                </div>
                <div className="switchControlWrapper">
                  <SwitchControl
                    switchList={['Overall Leaderboard', 'Weekly Leaderboard']}
                    selected={selected}
                    backgroundColor={colors.astronaut}
                    fontColor="bayOfMany"
                    onSelected={nextSelected =>
                      this.setState(state => ({
                        ...state,
                        selected: nextSelected,
                        schoolList:
                          nextSelected === 0 ? nationalList : weeklyList,
                      }))
                    }
                  />
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
              </Fragment>
            ) : (
              <Fragment>
                <div className="imageWrapper">
                  <img
                    src={urlBuilders.imageUrl('leaderboardHero.svg')}
                    alt="Challenge"
                    className="heroImage"
                  />
                </div>
                <div className="noLeaderboardWrapper">
                  <span className="noLeaderboardText">
                    Nothing to see here yet! Come back on February 11
                  </span>
                </div>
              </Fragment>
            )}
          </div>
        </div>

        <style jsx>{`
          .container {
            padding: 0 24px 56px;
          }
          .wrapper {
            max-width: 800px;
            margin: 0 auto;
          }
          .panelTitle {
            font-size: ${mobileFontSizes.h1}px;
            font-weight: ${fontWeights.semibold};
            color: ${colors.white};
            display: flex;
            justify-content: center;
            margin-bottom: 10px;
            text-align: center;
          }
          .updatedTime {
            font-size: ${mobileFontSizes.body}px;
            color: ${colors.white};
            display: flex;
            justify-content: center;
          }
          .boardWrapper {
            margin-top: 20px;
          }
          .titleRow {
            color: ${colors.white};
            display: flex;
            font-weight: ${fontWeights.semibold};
            margin-bottom: 10px;
            padding: 10px 0;
            border-bottom: 1px solid ${colors.white};
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
            background-color: ${colors.astronaut};
            border-radius: ${borderRadius.circle}px;
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
            color: ${colors.white};
            display: flex;
            align-items: center;
            padding: 5px 0;
          }
          .updatedTime {
            margin-bottom: 20px;
          }
          .updatedTimeStaticText {
            font-weight: ${fontWeights.semibold};
            margin-right: 5px;
          }
          .switchControlWrapper {
            max-width: ${SWITCH_CONTROL_MAX_SIZE_MOBILE}px;
            margin: 0 auto;
          }
          .image {
            height: 100%;
            width: 100%;
          }
          .imageWrapper {
            display: flex;
            justify-content: center;
            line-height: 0;
            margin: 40px 0;
          }
          .heroImage {
            max-width: 800px;
          }
          .noLeaderboardWrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 500px;
            background-color: ${colors.astronaut};
            color: ${colors.white};
            margin: 32px auto 48px auto;
            padding: 24px;
            border-radius: ${borderRadius.default}px;
            font-size: ${mobileFontSizes.body}px;
            text-align: center;
          }
          .noLeaderboardText {
            max-width: 200px;
          }

          @media (min-width: ${breakPoints.medium}px) {
            .panelTitle {
              font-size: ${desktopFontSizes.h1}px;
            }
            .updatedTime {
              font-size: ${desktopFontSizes.body}px;
            }
            .noLeaderboardWrapper {
              font-size: ${desktopFontSizes.body}px;
            }
            .noLeaderboardText {
              max-width: 500px;
            }
            .switchControlWrapper {
              max-width: ${SWITCH_CONTROL_MAX_SIZE_DESKTOP}px;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default LeaderBoard;
