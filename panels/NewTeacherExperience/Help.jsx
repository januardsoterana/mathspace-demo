// @flow

import React, { Fragment } from 'react';

import Anchor from 'components/Anchor';
import Accordion from 'components/Accordion';
import Button from 'components/Button';
import {
  colors,
  fontSizes,
  fontWeights,
  breakPoints,
  lineHeights,
} from 'utils/theme';

const Help = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <h2 className="title">
          Need help getting started in the new Teacher Experience?
        </h2>
        <p className="description">
          You can find more information in our Help Center. We’ve created a
          comprehensive step-by-step guide on how to use each of the features in
          the new Teacher Experience.
        </p>
        <div className="accordionWrapper">
          <Accordion
            title="Assigning Work and Directing Student Learning"
            color="cloudBurst"
            interactive
            startOpened
          >
            <ul className="list">
              <li className="item">
                <Anchor href="https://help.mathspace.co/en/articles/3657116-create-a-task-from-anywhere">
                  Create a task from anywhere
                </Anchor>
              </li>
              <li className="item">
                <Anchor href="https://help.mathspace.co/en/articles/3657339-task-templates">
                  Create a Task Template
                </Anchor>
              </li>
              <li className="item">
                <Anchor href="https://help.mathspace.co/en/articles/3657239-using-the-textbooks">
                  Using the Textbooks
                </Anchor>
              </li>
            </ul>
          </Accordion>
        </div>
        <div className="accordionWrapper">
          <Accordion
            title="Using Reports for Data-Driven Teaching"
            color="cloudBurst"
            interactive
          >
            <Fragment>
              <div className="itemTitle">Class reports</div>
              <ul className="list">
                <li className="item">
                  <Anchor href="https://help.mathspace.co/en/articles/3576593">
                    Class Insights
                  </Anchor>
                  <div className="itemDescription">
                    Get an overview of your class&apos; recent work, and any
                    subtopics/questions that might need addressing.
                  </div>
                </li>
                <li className="item">
                  <Anchor href="https://help.mathspace.co/en/articles/3576598">
                    Class Activity
                  </Anchor>
                  <div className="itemDescription">
                    Monitor how much work each student is doing, either over the
                    past few weeks or even live in the current period.
                  </div>
                </li>
                <li className="item">
                  <Anchor href="https://help.mathspace.co/en/articles/3576603">
                    Class Mastery
                  </Anchor>
                  <div className="itemDescription">
                    View your class&apos; overall mastery levels demonstrated on
                    Mathspace.
                  </div>
                </li>
                <li className="item">
                  <Anchor href="https://help.mathspace.co/en/articles/3656407">
                    Class Tasks
                  </Anchor>
                  <div className="itemDescription">
                    View results of your class&apos; work on the tasks you
                    assigned, with options to download the results.
                  </div>
                </li>
              </ul>
              <div className="itemTitle">Student reports</div>
              <ul className="list">
                <li className="item">
                  <Anchor href="https://help.mathspace.co/en/articles/3576721">
                    Student Insights
                  </Anchor>
                  <div className="itemDescription">
                    Get an overview of a student&apos;s recent progress, and any
                    subtopics/questions that might need addressing. Create a
                    task tailored directly towards that student&apos;s
                    weaknesses.
                  </div>
                </li>
                <li className="item">
                  <Anchor href="https://help.mathspace.co/en/articles/3576727">
                    Student Activity
                  </Anchor>
                  <div className="itemDescription">
                    Monitor how much time a student is spending, when
                    they&apos;re spending it and how they&apos;re spending it.
                  </div>
                </li>
                <li className="item">
                  <Anchor href="https://help.mathspace.co/en/articles/3576728">
                    Student Mastery
                  </Anchor>
                  <div className="itemDescription">
                    View a particular student&apos;s overall mastery reports,
                    which can help you to write your reports.
                  </div>
                </li>
                <li className="item">
                  <Anchor href="https://help.mathspace.co/en/articles/3576732">
                    Student Tasks
                  </Anchor>
                  <div className="itemDescription">
                    View results of a student&apos;s work on the tasks assigned
                    to them.
                  </div>
                </li>
              </ul>
            </Fragment>
          </Accordion>
        </div>
        <div className="linkWrapper">
          <Button
            href="https://help.mathspace.co/en/articles/3659255-the-new-teacher-experience"
            color="lochmara"
            isFilled
          >
            Get more help
          </Button>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 50px 24px;
      }
      .wrapper {
        max-width: 800px;
        margin: 0 auto;
      }
      .title {
        color: ${colors.cloudBurst};
        font-size: ${fontSizes.mobile.h2}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.body};
        text-align: center;
      }
      .description {
        color: ${colors.cloudBurst};
        font-size: ${fontSizes.mobile.bodyLG}px;
        font-weight: ${fontWeights.regular};
        line-height: ${lineHeights.body};
        text-align: center;
        margin-bottom: 50px;
      }
      .linkWrapper {
        text-align: center;
        margin-top: 50px;
        letter-spacing: -1px;
      }
      .accordionWrapper {
      }
      .accordionWrapper + .accordionWrapper {
        border-top: 1px solid ${colors.blackHaze};
        border-bottom: 1px solid ${colors.blackHaze};
        margin: 15px 0 20px;
        padding: 15px 0;
      }
      .item {
      }
      .item + .item {
        margin-top: 8px;
      }
      .itemTitle {
        color: ${colors.cloudBurst};
        font-size: ${fontSizes.mobile.h3}px;
        font-weight: ${fontWeights.semibold};
      }

      @media (min-width: ${breakPoints.medium}px) {
        .title {
          font-size: ${fontSizes.desktop.h2}px;
        }
        .description {
          font-size: ${fontSizes.desktop.bodyLG}px;
        }
        .itemTitle {
          font-size: ${fontSizes.desktop.h3}px;
        }
      }
    `}</style>
  </Fragment>
);

export default Help;
