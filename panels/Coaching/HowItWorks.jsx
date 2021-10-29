// @flow

import React, { Fragment } from 'react';

import {
  borderRadius,
  breakPoints,
  colors,
  fontWeights,
  desktopFontSizes,
  mobileFontSizes,
  lineHeights,
  panelGapMargin,
} from 'utils/theme';

const HowItWorks = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="contentWrapper">
          <div className="leftSection">
            <div className="content">
              It&#39;s easy to forget what you&#39;ve learned, or slip out of
              practice during the school holidays.
            </div>
            <div className="content">
              Kick off the 2019 school year with confidence in maths. Start
              learning from your new syllabus, or revise topics from your old
              syllabus.
            </div>
            <div className="content">
              Get private lessons with our teachers this Summer and get ahead!
            </div>
          </div>
          <div className="rightSection">
            <div className="rightSectionTitle">How does it work</div>
            <div className="stepsContainer">
              <div className="stepsNumber">01</div>
              <div className="stepsText">Pick your session type and time</div>
              <div className="stepsMarker" />
            </div>
            <div className="stepsContainer">
              <div className="stepsNumber">02</div>
              <div className="stepsText">
                We match you with one of our Mathspace teachers
              </div>
              <div className="stepsMarker" />
            </div>
            <div className="stepsContainer">
              <div className="stepsNumber">03</div>
              <div className="stepsText">
                Connect with your teacher online via video conference, share
                your screen, and start learning
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        background-color: ${colors.white};
        margin-right: ${panelGapMargin.default}px;
        padding: 80px 24px;
      }
      .wrapper {
        max-width: 800px;
        margin: 0 auto;
      }
      .contentWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .leftSection {
        max-width: 400px;
        margin-right: 25px;
      }
      .boldContent {
        font-size: ${mobileFontSizes.h4}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.body};
        color: ${colors.grayChateau};
        margin-bottom: 16px;
      }
      .content {
        font-size: ${mobileFontSizes.h4}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.body};
        color: ${colors.cloudBurst};
        margin-bottom: 20px;
      }
      .rightSection {
        padding: 48px 32px;
        background-color: ${colors.mountainMeadow};
        border-radius: ${borderRadius.default}px;
        max-width: 375px;
        color: ${colors.white};
        margin-top: 50px;
      }
      .rightSectionTitle {
        font-size: ${mobileFontSizes.h4}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.body};
        color: ${colors.white};
        padding-bottom: 20px;
      }
      .stepsContainer {
        display: flex;
        margin-top: 20px;
        position: relative;
        min-height: 63px;
      }
      .stepsMarker {
        width: 2px;
        background: ${colors.deepSeaGreen};
        position: absolute;
        height: 44px;
        bottom: -18px;
        left: 16px;
      }
      .stepsNumber {
        padding: 5px;
        height: 25px;
        min-width: 25px;
        background-color: ${colors.deepSeaGreen};
        display: flex;
        justify-content: center;
        border-radius: ${borderRadius.circle}px;
        align-items: center;
        margin-right: 10px;
        font-size: ${mobileFontSizes.subInfo}px;
        line-height: ${lineHeights.subInfo};
        font-weight: ${fontWeights.semibold};
        color: ${colors.mountainMeadow};
      }
      .stepsTitle {
        font-size: ${mobileFontSizes.body}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.body};
      }
      .stepsText {
        font-size: ${mobileFontSizes.body}px;
        font-weight: ${fontWeights.light};
        line-height: ${lineHeights.body};
      }
      @media (min-width: ${breakPoints.medium}px) {
        .boldContent {
          font-size: ${desktopFontSizes.h4}px;
          text-align: left;
        }
        .contentWrapper {
          flex-direction: row;
          align-items: flex-start;
        }
        .content {
          font-size: ${desktopFontSizes.h4}px;
          text-align: left;
        }
        .rightSection {
          margin-top: 0;
          padding: 48px;
        }
        .rightSectionTitle {
          font-size: ${desktopFontSizes.h4}px;
        }
        .stepsContainer {
          min-height: 44px;
        }
        .stepsMarker {
          height: 25px;
          bottom: -18px;
        }
      }
    `}</style>
  </Fragment>
);

export default HowItWorks;
