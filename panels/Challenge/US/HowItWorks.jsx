// @flow

import React, { Fragment } from 'react';
import Link from 'next/link';
import Router from 'next/router';

import Anchor from 'components/Anchor';
import Accordion from 'components/Accordion';

import {
  colors,
  fontWeights,
  fontSizes,
  breakPoints,
  lineHeights,
  borderRadius,
  hoverColors,
  transitions,
} from 'utils/theme';
import { urls } from 'utils/urls';
import sendEvent from 'utils/analytics';

type Props = {|
  faqClickHandler: () => void,
  diagnosticsClickHandler: () => void,
|};

const CHALLENGE_RULES_HOW = 'challenge-rules-how';
const FAQ_HOW = 'faq-how';

const HowItWorks = ({ faqClickHandler, diagnosticsClickHandler }: Props) => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="howItWorks">
          <h2 className="title">How does it work?</h2>
          <div className="row">
            <div className="marker">1</div>
            <div className="accordionWrapper">
              <Accordion
                title="Get access to Mathspace"
                interactive
                color="white"
                onClick={(title, isOpened) => {
                  if (isOpened) sendEvent('info-1', 'opened', 'US-challenge');
                }}
              >
                <div className="content">
                  <p className="paragraph">
                    To participate in the Challenge, your school must be using
                    Mathspace. If you’re not already using Mathspace, don’t
                    worry! We can have you set up very easily. You may use
                    Mathspace for free until the end of the Challenge.
                  </p>
                </div>
              </Accordion>
            </div>
          </div>
          <div className="row">
            <div className="marker">2</div>
            <div className="accordionWrapper">
              <Accordion
                title="Assign a Diagnostic Test to see where your students are at"
                interactive
                color="white"
                onClick={(title, isOpened) => {
                  if (isOpened) sendEvent('info-2', 'opened', 'US-challenge');
                }}
              >
                <div className="content">
                  <p className="paragraph">
                    Once you have Mathspace, try assigning a diagnostic test in
                    class before the Challenge kicks off. This will help you
                    understand your students strengths and areas for
                    improvement.{' '}
                    <Anchor onClick={diagnosticsClickHandler}>
                      Learn more about our diagnostic tools below.
                    </Anchor>
                  </p>
                </div>
              </Accordion>
            </div>
          </div>
          <div className="row">
            <div className="marker">3</div>
            <div className="accordionWrapper">
              <Accordion
                title="Get your students to answer Mathspace questions"
                interactive
                color="white"
                onClick={(title, isOpened) => {
                  if (isOpened) sendEvent('info-3', 'opened', 'US-challenge');
                }}
              >
                <div className="content">
                  <p className="paragraph">
                    Once the Challenge begins, start to build your score by
                    having your students complete Mathspace questions. Teachers
                    can create their own tasks, pick tasks from our templates,
                    or let students pick their own topics to work on.
                  </p>
                  <p className="paragraph">
                    The more questions your students complete, the more points
                    they will earn. The more points your students get, the
                    higher your school&apos;s score will be. Points are rewarded
                    for effort, so everyone can contribute!
                  </p>
                </div>
              </Accordion>
            </div>
          </div>
          <div className="row">
            <div className="marker">4</div>
            <div className="accordionWrapper">
              <Accordion
                title="Track the Top 10 schools on the Leaderboard"
                interactive
                color="white"
                onClick={(title, isOpened) => {
                  if (isOpened) sendEvent('info-4', 'opened', 'US-challenge');
                }}
              >
                <div className="content">
                  <p className="paragraph">
                    Keep tabs on how your school is tracking by looking at the
                    leaderboard on this site. We&apos;ve created two divisions
                    for the Challenge:
                  </p>
                  <ul className="list">
                    <li className="item">
                      - Schools who have been using Mathspace all year
                    </li>
                    <li className="item">- Schools who are new to Mathspace</li>
                  </ul>
                  <p className="paragraph">
                    Every week, we&apos;ll be delivering pizza parties to the
                    top school in each division.
                  </p>
                </div>
              </Accordion>
            </div>
          </div>
          <div className="row">
            <div className="marker">5</div>
            <div className="accordionWrapper">
              <Accordion
                title="Assign another Diagnostic Test to measure student growth"
                interactive
                color="white"
                onClick={(title, isOpened) => {
                  if (isOpened) sendEvent('info-5', 'opened', 'US-challenge');
                }}
              >
                <div className="content">
                  <p className="paragraph">
                    At the end of the Challenge, try assigning another
                    diagnostic test. You can see how much your students have
                    grown over the period.
                  </p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>

        <div className="ctaWrapper">
          <div className="buttonWrapper">
            <Anchor
              href={urls.challengeRulesUS}
              data-event-label={CHALLENGE_RULES_HOW}
              onClick={event => {
                event.preventDefault();
                sendEvent(CHALLENGE_RULES_HOW, 'clicked', 'US-challenge').then(
                  () => {
                    window.location.assign(urls.challengeRulesUS);
                  },
                );
              }}
            >
              <div className="rulesButton">See Challenge Rules</div>
            </Anchor>
          </div>
          <div className="buttonWrapper">
            <Anchor
              onClick={() => {
                sendEvent(FAQ_HOW, 'clicked', 'US-challenge');
                faqClickHandler();
              }}
            >
              <div className="FAQButton">FAQs</div>
            </Anchor>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 0 24px 50px;
      }
      .wrapper {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
        color: ${colors.white};
      }
      .title {
        margin: 20px 0;
        font-size: ${fontSizes.mobile.h2}px;
        font-weight: ${fontWeights.semibold};
      }
      .paragraph {
        line-height: ${lineHeights.body};
        margin: 0;
      }
      .paragraph + .paragraph {
        margin: 15px 0 0;
      }
      .list {
        list-style: none;
      }
      .howItWorks {
        background-color: ${colors.pickledBluewood};
        border-radius: ${borderRadius.default}px;
        padding: 1px 24px 20px;
      }
      .row {
        display: flex;
        align-items: flex-start;
      }
      .accordionWrapper {
        text-align: left;
        padding: 10px 0;
        border-bottom: 1px solid ${colors.cloudBurst};
        display: flex;
        margin-left: 10px;
      }
      .marker {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 33px;
        width: 100%;
        height: 33px;
        border-radius: ${borderRadius.circle}px;
        background-color: ${colors.cloudBurst};
        color: ${colors.white};
        margin-top: 10px;
      }
      .ctaWrapper {
        display: flex;
        justify-content: space-between;
        max-width: 100%;
        margin: 30px auto 0;
        flex-direction: column;
      }
      .buttonWrapper {
        max-width: 100%;
        width: 100%;
      }
      .buttonWrapper + .buttonWrapper {
        margin-top: 15px;
      }
      .rulesButton {
        color: ${colors.cloudBurst};
        background-color: ${colors.white};
        height: 40px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: ${borderRadius.default}px;
        cursor: pointer;
        transition: background-color ${transitions.hover};
      }
      .rulesButton:hover {
        background-color: ${hoverColors.white};
      }
      .FAQButton {
        color: ${colors.white};
        background-color: ${colors.pickledBluewood};
        height: 40px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: ${borderRadius.default}px;
        cursor: pointer;
        transition: background-color ${transitions.hover};
      }
      .FAQButton:hover {
        background-color: ${hoverColors.cloudBurst};
      }

      @media (min-width: ${breakPoints.medium}px) {
        .title {
          font-size: ${fontSizes.desktop.h2}px;
        }
        .howItWorks {
          padding: 1px 50px 20px;
        }
        .ctaWrapper {
          flex-direction: row;
          max-width: 430px;
        }
        .buttonWrapper {
          max-width: 200px;
        }
        .buttonWrapper + .buttonWrapper {
          margin-top: 0;
        }
      }
    `}</style>
  </Fragment>
);

export default HowItWorks;
