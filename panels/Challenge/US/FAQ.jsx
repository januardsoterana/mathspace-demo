// @flow

import React, { Fragment } from 'react';

import Anchor from 'components/Anchor';
import Accordion from 'components/Accordion';

import { colors, fontWeights, mobileFontSizes, lineHeights } from 'utils/theme';
import { urls } from 'utils/urls';
import sendEvent from 'utils/analytics';

const FAQ = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="title">Frequently Asked Questions</div>
        <div className="accordionWrapper">
          <Accordion
            title="Q: What are the key dates for the Challenge?"
            interactive
            color="nevada"
            onClick={(title, isOpened) => {
              if (isOpened) sendEvent('question-1', 'opened', 'US-challenge');
            }}
          >
            <div className="content">
              A: These are the key dates to keep in your calendar!
            </div>
            <div className="content">
              February 24, 2020 - The Challenge kicks off
            </div>
            <div className="content">
              March 2, 2020 - Week 1 Pizza Party winner announced
            </div>
            <div className="content">
              March 9, 2020 - Week 2 Pizza Party winner announced
            </div>
            <div className="content">
              March 16, 2020 - Week 3 Pizza Party winner announced
            </div>
            <div className="content">March 22, 2020 - The Challenge closes</div>
            <div className="content">
              March 25, 2020 - 1st, 2nd and 3rd place challenge winners
              announced
            </div>
          </Accordion>
        </div>
        <div className="accordionWrapper">
          <Accordion
            title="Q: Is there any cost to join the Challenge?"
            interactive
            color="nevada"
            onClick={(title, isOpened) => {
              if (isOpened) sendEvent('question-2', 'opened', 'US-challenge');
            }}
          >
            <div className="content">
              A: No! It&#39;s free to join. If you don&#39;t already use
              Mathspace, we will set you up with a temporary free account so
              that you can participate.
            </div>
          </Accordion>
        </div>
        <div className="accordionWrapper">
          <Accordion
            title="Q: Do I have to be using Mathspace already to join the Challenge?"
            interactive
            color="nevada"
            onClick={(title, isOpened) => {
              if (isOpened) sendEvent('question-3', 'opened', 'US-challenge');
            }}
          >
            <div className="content">
              A: No! We want all US schools to join, so we will set you up with
              a free account for the duration of the Challenge.
            </div>
          </Accordion>
        </div>
        <div className="accordionWrapper">
          <Accordion
            title="Q: How do the Diagnostics tests and reports work?"
            interactive
            color="nevada"
            onClick={(title, isOpened) => {
              if (isOpened) sendEvent('question-4', 'opened', 'US-challenge');
            }}
          >
            <div className="content">
              A: The Diagnostic tests with reports can be found as a template in
              Mathspace. We encourage you to set a test in the week before the
              Challenge starts, and another test the week after the Challenge
              ends. We’ll generate each of the reports after your students
              complete the test. You can book a 1:1 session with our in-house
              teachers to analyze your data, and measure the growth of your
              students during the Challenge!
            </div>
            <div className="content">
              <Anchor href={urls.diagnosticUS}>
                Learn more about Diagnostics
              </Anchor>
            </div>
          </Accordion>
        </div>
        <div className="accordionWrapper">
          <Accordion
            title="Q: How do you pick the winners?"
            interactive
            color="nevada"
            onClick={(title, isOpened) => {
              if (isOpened) sendEvent('question-5', 'opened', 'US-challenge');
            }}
          >
            <div className="content">
              A: The winning schools will be the ones with the highest number of
              average points earned per student. This is calculated by dividing
              the total number of points earned by a school, by the number of
              active students in the school. Read more about this in the
              Challenge{' '}
              <Anchor href={urls.challengeRulesUS}>
                Terms &amp; Conditions
              </Anchor>
              .
            </div>
            <div className="content">
              For instance, if a school signs up with 200 students for the
              competition, the total challenge points will be the total number
              of points earned by the school over the Challenge period, divided
              by 200 students. Your school must have a minimum of 50 students
              with active Mathspace accounts to be eligible to participate in
              the Challenge.
            </div>
          </Accordion>
        </div>
        <div className="accordionWrapper">
          <Accordion
            title="Q: What are points and how are they calculated?"
            interactive
            color="nevada"
            onClick={(title, isOpened) => {
              if (isOpened) sendEvent('question-6', 'opened', 'US-challenge');
            }}
          >
            <div className="content">
              A: Points are awarded to students based on effort and engagement.
              The more questions the student attempts, the more points they
              earn. The points system encourages the students to work on new
              questions that they haven&#39;t tried before.{' '}
              <Anchor href="https://help.mathspace.co/en/articles/3731402">
                Read about how points are calculated.
              </Anchor>
            </div>
          </Accordion>
        </div>
        <div className="accordionWrapper">
          <Accordion
            title="Q: How do the weekly pizza party prizes work?"
            interactive
            color="nevada"
            onClick={(title, isOpened) => {
              if (isOpened) sendEvent('question-7', 'opened', 'US-challenge');
            }}
          >
            <div className="content">
              A: For weeks 1, 2, and 3, the top school in each division will win
              a pizza party . This means that every week, there are 2 pizza
              parties to be won! Weekly prizes can only be won once per school
              during the Challenge.
            </div>
            <div className="content">
              If you are unsure which division you are in, please contact us.
            </div>
          </Accordion>
        </div>

        <div className="accordionWrapper">
          <Accordion
            title="Q: How do we track 'active students' during the Challenge?"
            interactive
            color="nevada"
            onClick={(title, isOpened) => {
              if (isOpened) sendEvent('question-8', 'opened', 'US-challenge');
            }}
          >
            <div className="content">
              A: The number of active student accounts used to determine the
              division will be calculated by counting all students from your
              school that have logged into their accounts between September 1,
              2019 and 11:59pm UTC on Sunday, March 22, 2020 (end of the
              Challenge).
            </div>
            <div className="content">
              If you are unsure which division you are in, please contact us.
            </div>
          </Accordion>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        background-color: ${colors.white};
        padding: 80px 24px;
      }
      .wrapper {
        max-width: 800px;
        margin: 0 auto;
      }
      .title {
        font-size: ${mobileFontSizes.h1}px;
        line-height: ${lineHeights.h1};
        font-weight: ${fontWeights.semibold};
        color: ${colors.cloudBurst};
        margin-bottom: 40px;
      }
      .accordionWrapper {
        padding: 20px 0;
        border-bottom: 1px solid ${colors.iron};
      }
      .content {
        color: ${colors.nevada};
        font-size: ${mobileFontSizes.subInfo}px;
        line-height: ${lineHeights.body};
        font-weight: ${fontWeights.light};
        padding-bottom: 10px;
      }
      .content:last-child {
        padding-bottom: 0;
      }
      .italicsContent {
        font-style: italic;
        margin: 15px 0;
      }
    `}</style>
  </Fragment>
);

export default FAQ;
