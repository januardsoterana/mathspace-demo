// @flow

import React, { Fragment } from 'react';
import { breakPoints, fontSizes, fontWeights, colors } from 'utils/theme';
import { urlBuilders } from 'utils/urls';

const Hero = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="leftSection">
          <h1 className="title">Digital Tutor for Home</h1>
          <p className="paragraph">
            Get your own Mathspace student account at home, and get the benefits
            of step-by-step support as you learn.
          </p>
          <p className="paragraph">
            It&apos;s like having a personal tutor sit next to you!
          </p>
        </div>
        <div className="rightSection">
          <img
            className="image"
            src={urlBuilders.imageUrl('parents/hero.svg')}
            alt=""
          />
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 70px 24px;
      }
      .wrapper {
        max-width: 900px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }
      .leftSection {
        max-width: 480px;
        text-align: center;
      }
      .rightSection {
        max-width: 400px;
        margin-top: 30px;
        width: 100%;
      }
      .title {
        font-size: ${fontSizes.mobile.h1}px;
        font-weight: ${fontWeights.semibold};
        color: ${colors.cloudBurst};
        margin: 0 0 20px;
      }
      .paragraph {
        color: ${colors.cloudBurst};
        font-weight: ${fontWeights.regular};
        font-size: ${fontSizes.mobile.bodyLG}px;
        margin: 0;
      }
      .paragraph + .paragraph {
        margin-top: 20px;
      }
      .image {
        width: 100%;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .wrapper {
          flex-direction: row;
        }
        .leftSection {
          text-align: left;
        }
        .rightSection {
          margin-top: 0;
        }
        .title {
          font-size: ${fontSizes.desktop.h1}px;
        }
        .paragraph {
          font-size: ${fontSizes.desktop.bodyLG}px;
        }
      }
    `}</style>
  </Fragment>
);

export default Hero;
