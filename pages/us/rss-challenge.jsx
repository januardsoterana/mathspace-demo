// @flow

import React, { Fragment } from 'react';
import Router from 'next/router';

import Page from 'components/Page';
import LeaderBoard from 'components/LeaderBoard';
import Divider from 'components/Divider';
import fetch from 'isomorphic-unfetch';

import {
  colors,
  breakPoints,
  fontWeights,
  lineHeights,
  borderRadius,
  desktopFontSizes,
  mobileFontSizes,
} from 'utils/theme';
import { urlBuilders, rssCompUrls } from 'utils/urls';

const LandingHero = () => (
  <Fragment>
    <div className="container">
      <div className="leftSection">
        {/* logo */}
        <div className="mathspaceLogo">
          <img
            src={urlBuilders.imageUrl(
              'common/Mathspace-logo-flat-reversed.svg',
            )}
            alt="Mathspace"
            className="image"
          />
        </div>
        {/* title */}
        <div className="titleWrapper">
          <div className="title">RSS</div>
          <div className="title">Challenge</div>
        </div>
        {/* date */}
        <div className="dateContainer">February 4 - April 12</div>
        {/* description */}
        <div className="descriptionContainer">
          See if your class has made it to the Top 10 for this week!
        </div>
      </div>
      <div className="rightSection">
        <div className="imageWrapper">
          <img
            src={urlBuilders.imageUrl('challenge/leaderboardHero.svg')}
            alt="Challenge"
            className="image"
          />
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        display: flex;
        max-width: 1000px;
        margin: 0 auto;
        justify-content: center;
        padding: 0 24px;
        flex-direction: column;
        align-items: center;
      }
      .leftSection {
        color: ${colors.white};
        max-width: 350px;
        padding-top: 24px;
        text-align: left;
        margin-right: 0;
      }
      .mathspaceLogo {
        width: 160px;
        margin-bottom: 20px;
      }
      .titleWrapper {
        display: inline-flex;
        flex-direction: column;
        align-items: baseline;
      }
      .title {
        display: inline-flex;
        font-size: 64px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.h4};
        background-color: rgba(0, 0, 0, 0.2);
        padding: 10px 20px;
        border-radius: ${borderRadius.default}px;
      }
      .title:not(:first-child) {
        margin-top: 5px;
      }
      .dateContainer {
        background-color: rgba(0, 0, 0, 0.2);
        padding: 5px;
        text-align: center;
        margin-top: 10px;
        font-size: ${mobileFontSizes.h4}px;
        line-height: ${lineHeights.body};
        font-weight: ${fontWeights.semibold};
        max-width: 300px;
        border-radius: ${borderRadius.default}px;
      }
      .descriptionContainer {
        font-size: ${mobileFontSizes.h4}px;
        line-height: ${lineHeights.body};
        font-weight: ${fontWeights.regular};
        margin: 24px 0;
      }
      .imageWrapper {
        line-height: 0;
      }
      .image {
        width: 90%;
      }
      .rightSection {
        margin-top: 80px;
        align-self: center;
      }
      @media (min-width: ${breakPoints.medium}px) {
        .dateContainer {
          margin: 10px 0 0;
          font-size: ${desktopFontSizes.h4}px;
        }
        .leftSection {
          text-align: left;
          margin-right: 20px;
        }
        .container {
          flex-direction: row;
          align-items: flex-start;
        }
        .mathspaceLogo {
          margin: 0 0 20px;
        }
        .descriptionContainer {
          font-size: ${desktopFontSizes.h4}px;
        }
        .CTAWrapper {
          max-width: 220px;
        }
        .rightSection {
          margin-top: 0;
          align-self: flex-end;
        }
        .title {
          font-size: 64px;
        }
      }
    `}</style>
  </Fragment>
);

const processOverallData = schools =>
  schools
    .map(school => ({
      position: parseInt(school[0], 10),
      name: school[2],
      score: parseInt(school[3], 10),
    }))
    .slice(0, 10)
    .sort((a, b) => a.position - b.position);

const processWeeklyData = schools =>
  schools
    .map(school => ({
      position: parseInt(school[0], 10),
      name: school[2],
      score: parseInt(school[3], 10),
    }))
    .slice(10, 20)
    .sort((a, b) => a.position - b.position);

type Props = {|
  grade6Scores: Array<Array<string>>,
  grade7Scores: Array<Array<string>>,
  grade8Scores: Array<Array<string>>,
|};
type State = {};

class RssChallenge extends React.Component<Props, State> {
  static getInitialProps = async () => {
    let grade6Data = {};
    let grade7Data = {};
    let grade8Data = {};
    try {
      grade6Data = await fetch(rssCompUrls.rssGrade6Leaderboard);
      grade7Data = await fetch(rssCompUrls.rssGrade7Leaderboard);
      grade8Data = await fetch(rssCompUrls.rssGrade8Leaderboard);
    } catch (e) {
      return { grade6Data: {}, grade7Data: {}, grade8Data: {} };
    }
    const grade6Json = await grade6Data.json();
    const grade7Json = await grade7Data.json();
    const grade8Json = await grade8Data.json();
    return {
      grade6Scores: grade6Json.values,
      grade7Scores: grade7Json.values,
      grade8Scores: grade8Json.values,
    };
  };

  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Router.beforePopState(({ as: asUrl }) => {
      window.location.href = asUrl;
      return false;
    });
  }

  render() {
    return (
      <Fragment>
        <Page>
          <div className="background">
            <LandingHero />
            <div className="dividerWrapper">
              <Divider />
            </div>
            <LeaderBoard
              nationalList={processOverallData(this.props.grade6Scores)}
              weeklyList={processWeeklyData(this.props.grade6Scores)}
              lastUpdated={this.props.grade6Scores[20][1]}
              nameField="Class"
              title="Grade 6 Leaderboard"
              showLeaderboard
            />
            <div className="dividerWrapper">
              <Divider />
            </div>
            <LeaderBoard
              nationalList={processOverallData(this.props.grade7Scores)}
              weeklyList={processWeeklyData(this.props.grade7Scores)}
              lastUpdated={this.props.grade7Scores[20][1]}
              nameField="Class"
              title="Grade 7 Leaderboard"
              showLeaderboard
            />
            <div className="dividerWrapper">
              <Divider />
            </div>
            <LeaderBoard
              nationalList={processOverallData(this.props.grade8Scores)}
              weeklyList={processWeeklyData(this.props.grade8Scores)}
              lastUpdated={this.props.grade8Scores[20][1]}
              nameField="Class"
              title="Grade 8 Leaderboard"
              showLeaderboard
            />
          </div>
        </Page>
        <style jsx>{`
          .background {
            background-color: ${colors.bayOfMany};
          }
          .dividerWrapper {
            max-width: 800px;
            margin: 0 auto;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default RssChallenge;
