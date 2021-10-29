// @flow

import React, { Fragment } from 'react';
import { urlBuilders } from 'utils/urls';
import {
  colors,
  fontSizes,
  breakPoints,
  lineHeights,
  fontWeights,
} from 'utils/theme';

type Props = {|
  title: string,
  description: string,
  image: string,
  reverse?: boolean,
|};
const Feature = ({ title, description, image, reverse }: Props) => (
  <Fragment>
    <div className="container">
      <div className="textWrapper">
        <h3 className="title">{title}</h3>
        {description.split('\\n').map((text, i) => (
          <p key={i} className="description">
            {text}
          </p>
        ))}
      </div>
      <div className="imageWrapper">
        <img className="image" src={urlBuilders.imageUrl(image)} alt="" />
      </div>
    </div>

    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }
      .textWrapper {
        order: 1;
        max-width: 400px;
      }
      .title {
        font-size: ${fontSizes.mobile.h3}px;
        font-weight: ${fontWeights.semibold};
        margin: 0 0 5px;
        color: ${colors.cloudBurst};
      }
      .description {
        margin: 0;
        line-height: ${lineHeights.body};
        font-size: ${fontSizes.mobile.bodyLG}px;
        font-weight: ${fontWeights.regular};
        color: ${colors.cloudBurst};
      }
      .description + .description {
        margin-top: 10px;
      }
      .imageWrapper {
        margin-top: 20px;
        order: 2;
        max-width: 200px;
      }
      .image {
        width: 100%;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .container {
          flex-direction: row;
        }
        .textWrapper {
          order: ${reverse ? 2 : 1};
        }
        .title {
          font-size: ${fontSizes.desktop.h3}px;
        }
        .description {
          font-size: ${fontSizes.desktop.bodyLG}px;
        }
        .imageWrapper {
          margin-top: 0;
          order: ${reverse ? 1 : 2};
          max-width: 300px;
        }
      }
    `}</style>
  </Fragment>
);

const WhatIsNew = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="titleWrapper">
          <h2 className="title">
            How can Mathspace work for students studying remotely?
          </h2>
        </div>
        <div className="featureContainer">
          <div className="featureWrapper">
            <Feature
              title="Textbook"
              description="Access to our library of curriculum-aligned textbooks covering grades 3 to 12. Teachers can assign lessons for students to study."
              image="newTeacherExperience/textbooks.svg"
            />
          </div>
          <div className="featureWrapper">
            <Feature
              title="Tasks"
              description="Teachers can create and assign tasks for students to complete remotely. Teachers can choose the exact questions, length and difficulty level of a task.\nAlternatively, teachers can assign tasks which are powered by adaptive learning technology - these tasks automatically adapt in difficulty to meet the students’ needs.\nAll tasks have in-built step-by-step support for students as they work."
              image="newTeacherExperience/tasks.svg"
              reverse
            />
          </div>
          <div className="featureWrapper">
            <Feature
              title="Video Lessons"
              description="Topics include short video lessons explaining key concepts to students. These video lessons are created by our in-house teachers."
              image="coronavirus/video-lessons.svg"
            />
          </div>
          <div className="featureWrapper">
            <Feature
              title="Live student tracking for teachers"
              description="Teachers can access a range of student and class reports, including a live student report which shows which students are active and working.\nTeachers can also see students’ progress, and can tailor lessons."
              image="newTeacherExperience/reports.svg"
              reverse
            />
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 30px 24px 50px;
      }
      .wrapper {
        max-width: 800px;
        margin: 0 auto;
      }
      .titleWrapper {
        max-width: 700px;
        margin: 0 auto;
        text-align: center;
      }
      .title {
        color: ${colors.cloudBurst};
        font-size: ${fontSizes.mobile.h2}px;
        line-height: ${lineHeights.h2};
        font-weight: ${fontWeights.semibold};
      }
      .paragraph {
        color: ${colors.cloudBurst};
        font-size: ${fontSizes.mobile.bodyLG}px;
      }
      .featureContainer {
        margin-top: 50px;
      }
      .featureWrapper + .featureWrapper {
        margin-top: 20px;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .container {
          padding: 200px 24px 50px;
        }
        .title {
          font-size: ${fontSizes.desktop.h2}px;
        }
        .paragraph {
          font-size: ${fontSizes.desktop.bodyLG}px;
        }
      }
    `}</style>
  </Fragment>
);

export default WhatIsNew;
