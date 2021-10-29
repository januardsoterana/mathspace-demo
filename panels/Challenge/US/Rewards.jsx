// @flow

import React, { Fragment } from 'react';

import Anchor from 'components/Anchor';

import {
  breakPoints,
  colors,
  fontWeights,
  desktopFontSizes,
  mobileFontSizes,
  lineHeights,
  borderRadius,
} from 'utils/theme';
import { urlBuilders } from 'utils/urls';
import sendEvent from 'utils/analytics';

const FAQ_REWARDS = 'faq-rewards';

type Props = {| handleScroll: () => void |};
const Rewards = ({ handleScroll }: Props) => (
  <Fragment>
    <div className="container">
      <div className="panelTitle">What are the Prizes?</div>
      <div className="rewardRow">
        <div className="firstPlacePanel">
          <h4 className="title">1st Place</h4>
          <ul className="list">
            <li className="item">
              - Trip for two teachers to NCTM Conference 2020 (NCTM Chicago or
              St. Louis)
            </li>
            <li className="item">- $1000 check for your school</li>
            <li className="item">- 1st place trophy</li>
            <li className="item">- 1st place certificates for all students</li>
            <li className="item">- Winner logo for school website</li>
          </ul>
          <img
            className="trophyImage"
            src={urlBuilders.imageUrl('challenge/grand-prize.svg')}
            alt=""
          />
        </div>
        <div className="secondPlacePanel">
          <h4 className="title">2nd Place</h4>
          <ul className="list">
            <li className="item">
              - $1000 Amazon gift card to purchase technology or math classroom
              supplies
            </li>
            <li className="item">- 2nd place trophy</li>
            <li className="item">- 2nd place certificates for all students</li>
            <li className="item">- 2nd place logo for school website</li>
          </ul>
        </div>
      </div>
      <div className="rewardRow">
        <div className="thirdPlacePanel">
          <h4 className="title">3rd Place</h4>
          <ul className="list">
            <li className="item">
              - $500 Amazon gift card to purchase technology or math classroom
              supplies
            </li>
            <li className="item">- 3rd place trophy</li>
            <li className="item">- 3rd place certificate for all students</li>
            <li className="item">- 3rd place logo for school website</li>
          </ul>
        </div>
        <div className="weeklyRewardsPanel">
          <div className="title">Weekly Rewards</div>
          <p className="paragraph">
            Every week, the top school for each division will win a pizza party
            for all participating students. That means there are two pizza
            parties to be won every week! Weekly prizes can only be won once per
            school during the Challenge.
          </p>
          <p className="paragraph">
            <Anchor
              onClick={() => {
                sendEvent(FAQ_REWARDS, 'clicked', 'US-challenge');
                handleScroll();
              }}
            >
              Read our FAQ to find out more.
            </Anchor>
          </p>
          <img
            className="starsImage"
            src={urlBuilders.imageUrl('challenge/weekly-prize.svg')}
            alt=""
          />
        </div>
      </div>
      <div className="studentRecognition">
        <div className="title">Student Recognition</div>
        <p className="paragraph">
          Top 10 students in each school, and Top 100 students nation-wide will
          be recognized with certificates.
        </p>
        <p className="paragraph">
          <em>
            All participating schools will get digital participation
            certificates for students.
          </em>
        </p>
        <img
          className="scrollImage"
          src={urlBuilders.imageUrl('challenge/certificate.svg')}
          alt=""
        />
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 0 24px;
        max-width: 650px;
        margin: 0 auto;
      }
      .panelTitle {
        color: ${colors.white};
        font-size: ${mobileFontSizes.h1}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.h1};
        display: flex;
        justify-content: center;
      }
      .rewardRow {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 70px;
      }
      .rewardRow + .rewardRow {
        margin-top: 15px;
      }
      .firstPlacePanel {
        background-color: ${colors.crusta};
        position: relative;
        border-radius: ${borderRadius.default}px;
        padding: 20px 24px 30px;
        color: ${colors.white};
        line-height: ${lineHeights.body};
      }
      .secondPlacePanel {
        background-color: ${colors.mountainMeadow};
        border-radius: ${borderRadius.default}px;
        padding: 20px 24px 30px;
        color: ${colors.white};
        line-height: ${lineHeights.body};
        margin-top: 15px;
      }
      .thirdPlacePanel {
        background-color: ${colors.java};
        border-radius: ${borderRadius.default}px;
        padding: 20px 24px 30px;
        color: ${colors.white};
        line-height: ${lineHeights.body};
      }
      .weeklyRewardsPanel {
        position: relative;
        background-color: ${colors.pickledBluewood};
        border-radius: ${borderRadius.default}px;
        padding: 20px 24px 30px;
        color: ${colors.white};
        line-height: ${lineHeights.body};
        margin-top: 15px;
      }
      .studentRecognition {
        border: 2px solid ${colors.shuttleGray};
        border-radius: ${borderRadius.default}px;
        padding: 20px 24px 30px;
        margin-top: 15px;
        color: ${colors.white};
        text-align: center;
        line-height: ${lineHeights.body};
        position: relative;
      }
      .trophyImage {
        position: absolute;
        top: -70px;
        right: 0px;
        max-width: 80px;
        transform: rotateZ(25deg);
      }
      .starsImage {
        position: absolute;
        top: -30px;
        right: -15px;
        max-width: 100px;
        transform: rotateZ(20deg);
      }
      .scrollImage {
        position: absolute;
        top: -17px;
        left: 30px;
        max-width: 90px;
      }
      .title {
        font-size: 20px;
        margin: 0 0 20px;
        font-weight: ${fontWeights.regular};
      }
      .list {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .item + .item {
        margin-top: 15px;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .panelTitle {
          font-size: ${desktopFontSizes.h1}px;
        }
        .prizesContainer {
          flex-direction: row;
          align-items: inherit;
        }
        .trophyImage {
          top: -70px;
          right: 0px;
        }
        .rewardRow {
          flex-direction: row;
          justify-content: space-between;
          margin-bottom: 15px;
        }
        .firstPlacePanel {
          padding: 20px 30px 30px;
          width: 100%;
          margin-right: 15px;
        }
        .secondPlacePanel {
          padding: 20px 30px 30px;
          width: 100%;
          margin-top: 0;
        }
        .thirdPlacePanel {
          padding: 20px 30px 30px;
          margin-right: 15px;
          width: 100%;
        }
        .weeklyRewardsPanel {
          padding: 20px 30px 30px;
          width: 100%;
          margin-top: 0;
        }
        .studentRecognition {
          padding: 20px 30px 30px;
          margin-top: 20px;
        }
        .trophyImage {
          max-width: 100px;
        }
        .starsImage {
          max-width: 125px;
        }
        .scrollImage {
          max-width: 110px;
        }
      }
    `}</style>
  </Fragment>
);

export default Rewards;
