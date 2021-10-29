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
        <p className="description">{description}</p>
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
        color: ${colors.santasGray};
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
          <h2 className="title">Why should you upgrade?</h2>
          <p className="paragraph">
            The new experience is much more than a simple redesign. It brings
            the most important student data insights to the surface, and makes
            it easy for you to act on these insights. You can easily assign the
            right work at the right time with intuitive task creation and
            content browsing.
          </p>
        </div>
        <div className="featureContainer">
          <div className="featureWrapper">
            <Feature
              title="Textbooks"
              description="Better content browsing with our library of 225 textbooks, including brand new lesson content and question types"
              image="newTeacherExperience/textbooks.svg"
            />
          </div>
          <div className="featureWrapper">
            <Feature
              title="Tasks"
              description="Create tasks from anywhere in Mathspace for easy, timely task creation based on data insights"
              image="newTeacherExperience/tasks.svg"
              reverse
            />
          </div>
          <div className="featureWrapper">
            <Feature
              title="Reports"
              description="A suite of new reports that give you high level class insights, but also dig deeper into individual student performance"
              image="newTeacherExperience/reports.svg"
            />
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
