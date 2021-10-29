// @flow

import React, { Fragment, useState } from 'react';

import {
  breakPoints,
  fontSizes,
  fontStacks,
  fontWeights,
  colors,
  lineHeights,
} from 'utils/theme';

type QuestionProps = {
  title: String,
  children?: React.Node,
};
const Question = ({ title, children }: QuestionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <div className="questionContainer">
        <button onClick={() => setIsOpen(!isOpen)}>
          <h4 className="questionTitle">{title}</h4>
        </button>
        <div className={isOpen ? 'answer open' : 'answer'}>{children}</div>
      </div>
      <style jsx>{`
        .questionContainer {
          border-bottom: 1px solid ${colors.porcelain};
        }
        button {
          cursor: pointer;
          padding: 0;
          margin: 15px 0;
          background: 0;
          border: 0;
          outline: 0;
        }
        .questionTitle {
          font-family: ${fontStacks.default};
          font-size: ${fontSizes.mobile.h3}px;
          font-weight: ${fontWeights.semibold};
          color: ${colors.cloudBurst};
          line-height: ${lineHeights.h4};
          margin: 15px 0;
          text-align: left;
        }
        .answer {
          height: 0px;
          overflow: hidden;
          opacity: 0;
          transition: opacity 0.5s;
        }
        .answer.open {
          height: auto;
          padding-bottom: 30px;
          opacity: 1;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .questionTitle {
            font-size: ${fontSizes.desktop.h3}px;
          }
        }
      `}</style>
    </Fragment>
  );
};

const FAQ = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="topSection">
          <h3 className="title">Frequently Asked Questions</h3>
        </div>
        <div className="bottomSection">
          <Question title="What do we have access to with our home learners subscription?">
            <p>You will get access to:</p>
            <ul>
              <li>
                Curriculum-aligned interactive textbooks for all grades from
                3-12, with lessons, Geogebra applets, example questions and
                video explanations
              </li>
              <li>
                Over 60,000 practice questions with support functions including
                immediate feedback, hints and video demonstrations
              </li>
              <li>
                Self-starter adaptive tasks for every subtopic, which
                automatically adjusts the difficulty of the questions to meet
                your child’s level (also includes support functions)
              </li>
            </ul>
          </Question>

          <Question title="How will my child access the content?">
            <p>
              All content is accessible through their account once they log in
              to Mathspace. Once you purchase a home learners account, you get
              access to all content for all grades from 3-12.{' '}
              <strong>
                Your child can toggle between textbooks for different grades to
                work at a level that is appropriate for them.
              </strong>
            </p>
          </Question>

          <Question title="When will my subscription start and end?">
            <p>
              At the moment, we are only offering the Home Learners subscription
              in 2021. Your subscription will start immediately when your
              account is set up, and end on 31st December, 2021. The price of
              your subscription will differ depending on when you join
              Mathspace:
            </p>
            <ul>
              <li>Jan - Mar: $99</li>
              <li>Apr - Jun: $74</li>
              <li>Jul - Sep: $49</li>
              <li>Oct - Dec: $24</li>
            </ul>
          </Question>
          <Question title="Does my child get to see feedback/results?">
            <p>
              Yes, whether your child is trying out an example question in a
              lesson or working through a self-started adaptive task, they
              receive immediate feedback at every step of every maths problem in
              Mathspace - it’s like having a tutor helping them through every
              step of the way!
            </p>
            <p>
              All adaptive tasks are automatically marked and recorded, so that
              your child can see their results at the end of the task, allowing
              them to go back to each question within the task to review their
              working out process.
            </p>
            <p>
              Mathspace will also make topic recommendations based on the work
              your child has been doing to help guide them through the work.
            </p>
          </Question>
          <Question title="Can I create an account for more than one child?">
            <p>
              Yes. However, each account will need a unique email address. If
              your children does not have a personal email address, you can use
              their school email, or education department email to distinguish
              between them.
            </p>
          </Question>
          <Question title="How can I see how my child is doing?">
            <p>
              You can add your email to the ‘Parents &amp; Guardians’ section of
              your child’s account to receive weekly emails about their progress
              in Mathspace.
            </p>
            <p>
              If you have more than one child subscribed to the Mathspace home
              learner account, you can use the same parent email to receive the
              progress summary emails for your children all at once. To add or
              update the email, go to the account settings page in your child’s
              Mathspace account.
            </p>
            <p>
              If you want to see your child’s work in more detail, you can log
              into their account to review their tasks.
            </p>
          </Question>
          <Question
            title="Do I need a home learners subscription if my child already has an
            account for school?"
          >
            <p>
              No, you don’t need to purchase a home learners subscription if
              your child already uses Mathspace at their school. If you’d like
              to receive updates on your child’s progress in Mathspace, you can
              add your email to the ‘Parents &amp; Guardians’ section of your
              child’s school account.
            </p>
          </Question>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 70px 24px;
      }
      .wrapper {
        max-width: 800px;
        margin: 0 auto;
      }
      .topSection {
        max-width: 600px;
        margin: auto;
        text-align: center;
      }
      .title {
        font-size: ${fontSizes.mobile.h2}px;
        font-weight: ${fontWeights.semibold};
        color: ${colors.cloudBurst};
        margin: 0 0 0px;
      }
      p {
        font-size: ${fontSizes.mobile.bodyLG}px;
        font-weight: ${fontWeights.regular};
        color: ${colors.cloudBurst};
        margin: 0 0 15px;
      }
      li {
        font-size: ${fontSizes.mobile.bodyLG}px;
        font-weight: ${fontWeights.regular};
        color: ${colors.cloudBurst};
        margin: 0 0 15px;
      }
      .questionTitle {
        font-size: ${fontSizes.mobile.h3}px;
        font-weight: ${fontWeights.semibold};
        color: ${colors.cloudBurst};
        line-height: ${lineHeights.h4};
        margin: 0;
        min-height: 36px;
        margin: 60px 0 0px;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .title {
          font-size: ${fontSizes.desktop.h2}px;
        }
        .description {
          font-size: ${fontSizes.desktop.bodyLG}px;
        }
        p,
        li {
          font-size: ${fontSizes.desktop.bodyLG}px;
        }
        .questionTitle {
          font-size: ${fontSizes.desktop.h3}px;
        }
      }
    `}</style>
  </Fragment>
);

export default FAQ;
