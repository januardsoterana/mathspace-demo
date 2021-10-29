// @flow

import React, { Fragment, useState, useEffect } from 'react';

import CarouselSection from 'components/NewTeacherExperience/CarouselSection';
import {
  colors,
  borderRadius,
  fontWeights,
  fontSizes,
  breakPoints,
  lineHeights,
  transitions,
} from 'utils/theme';
import RegistrationModal from 'components/NewTeacherExperience/RegistrationModal';
import sendCTAClickEvent from 'utils/analytics';

const WEBINAR_REGISTRATION = 'webinar-training-registation';

type Props = {|
  date: string,
  duration: string,
  time: string,
  webinarId: string,
  onClick: () => void,
|};
const DateBox = ({ date, duration, time, webinarId, onClick }: Props) => (
  <Fragment>
    <div
      role="button"
      tabIndex="0"
      className="container"
      onClick={() => {
        sendCTAClickEvent(`${WEBINAR_REGISTRATION}-${webinarId}`);
        onClick();
      }}
      onKeyPress={() => {
        sendCTAClickEvent(`${WEBINAR_REGISTRATION}-${webinarId}`);
        onClick();
      }}
    >
      <div className="infoWrapper">
        <div className="date">{date}</div>
        <div className="duration">
          {time}, {duration}
        </div>
      </div>
      <div className="registerWrapper">Register now</div>
    </div>
    <style jsx>{`
      .container {
        background-color: ${colors.white};
        border-radius: ${borderRadius.default}px;
        border-left: 6px solid ${colors.lochmara};
        padding: 15px 20px;
        box-shadow: 7px 4px 8px 1px rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        transition: background-color ${transitions.default};
        outline: none;
      }
      .container:hover {
        background-color: ${colors.athensGray};
      }
      .date {
        color: ${colors.cloudBurst};
        font-weight: ${fontWeights.semibold};
        font-size: ${fontSizes.mobile.h3}px;
      }
      .duration {
        color: ${colors.santasGray};
        font-size: ${fontSizes.mobile.bodyLG}px;
      }
      .registerWrapper {
        color: ${colors.lochmara};
      }

      @media (min-width: ${breakPoints.medium}px) {
        .date {
          font-size: ${fontSizes.desktop.h3}px;
        }
        .duration {
          font-size: ${fontSizes.desktop.bodyLG}px;
        }
      }
    `}</style>
  </Fragment>
);

const WebinarTraining = () => {
  const [modalVisibile, setModalVisibility] = useState(false);
  const [date, setDate] = useState('');
  const [webinarId, setWebinarID] = useState('');
  const [position, setPosition] = useState(0);
  const [matchesTablet, setMatchesTablet] = useState(false);
  const [matchesMobile, setMatchesMobile] = useState(false);

  useEffect(() => {
    let MQL = null;
    let MQS = null;
    function handleTabletMQ() {
      if (MQL == null) return;
      setMatchesTablet(MQL.matches);
    }
    function handleMobileMQ() {
      if (MQS == null) return;
      setMatchesMobile(MQS.matches);
    }
    // Check because jsdom doesn't have matchMedia
    if (window.matchMedia) {
      // Tablet size
      MQL = window.matchMedia(`(max-width: 1060px)`);
      const mql = MQL;
      mql.addListener(handleTabletMQ);
      setMatchesTablet(mql.matches);

      // Mobile size
      MQS = window.matchMedia(`(max-width: 755px)`);
      const mqs = MQS;
      mqs.addListener(handleMobileMQ);
      setMatchesMobile(mqs.matches);
    }
    return () => {
      if (MQL == null) return;
      MQL.removeListener(handleTabletMQ);
      if (MQS == null) return;
      MQS.removeListener(handleMobileMQ);
    };
  });

  let wrapperWidth = -380;
  if (matchesTablet) wrapperWidth = -380;
  if (matchesMobile) wrapperWidth = -335;

  return (
    <Fragment>
      <div className="container">
        <h2 className="title">Book into a webinar training session</h2>
        <div className="wrapper">
          <div className="leftSection">
            <p className="paragraph">
              Join one of our best practice training sessions on how to use
              Mathspace&apos;s new teacher interface.
            </p>
            <p className="paragraph">
              These small group webinar sessions cover how you can use the new
              textbooks, tasks and report in Mathspace to optimise how you
              personalise learning and track student progress. You&apos;ll learn
              how to:
            </p>
            <ul className="list">
              <li className="item">Navigate the new teacher experience</li>
              <li className="item">How to browse the textbook content</li>
              <li className="item">
                How to create tasks from different parts of the interface
              </li>
              <li className="item">
                Best practice ways of using data insights
              </li>
            </ul>
          </div>
          <div className="rightSection" />
        </div>
      </div>
      {modalVisibile && (
        <RegistrationModal
          webinarID={webinarId}
          webinarTitle="Webinar training session"
          webinarDate={date}
          onClose={() => setModalVisibility(false)}
        />
      )}
      <style jsx>{`
        .container {
          padding: 50px 24px 0;
        }
        .title {
          max-width: 500px;
          margin: 0 auto 50px;
          text-align: center;
          line-height: ${lineHeights.h2};
          font-weight: ${fontWeights.semibold};
          font-size: ${fontSizes.mobile.h2}px;
          color: ${colors.cloudBurst};
        }
        .wrapper {
          max-width: 800px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }
        .leftSection {
          max-width: 400px;
          color: ${colors.cloudBurst};
        }
        .paragraph {
          margin-top: 0;
          margin-bottom: 15px;
        }
        .item + .item {
          margin-top: 10px;
        }
        .rightSection {
          width: 100%;
          margin-top: 15px;
          max-width: 350px;
          overflow: hidden;
          white-space: nowrap;
          padding: 15px;
        }
        .dateBoxWrapper + .dateBoxWrapper {
          margin-top: 15px;
        }
        .sectionWrapper {
          width: 100%;
          display: inline-block;
          transition: transform 0.5s ease-in-out;
          transform: ${`translateX(${wrapperWidth * position}px)`};
        }
        .sectionWrapper + .sectionWrapper {
          margin-left: 20px;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .wrapper {
            flex-direction: row;
            align-items: flex-start;
          }
          .title {
            font-size: ${fontSizes.desktop.h2}px;
          }
          .rightSection {
            margin-top: 0;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default WebinarTraining;
