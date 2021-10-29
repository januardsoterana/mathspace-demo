// @flow

import React, { Fragment } from 'react';
import Link from 'next/link';

import Button from 'components/Button';
import { colors, fontSizes, breakPoints } from 'utils/theme';
import { urlBuilders, urls } from 'utils/urls';

const Hero = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="leftSection">
          <h1 className="mainText">
            <div className="title">Virginia Beach</div>
            <div className="title">Challenge</div>
          </h1>
          <div className="date">November 12 - December 13</div>
          <p className="description">
            See if your class made it to the top 10 for this week
          </p>
          <div className="buttonWrapper">
            <Link href={urls.challengeRulesUS}>
              <Button isFilled color="lochmara" size="large" isBlock>
                Challenge Rules
              </Button>
            </Link>
          </div>
        </div>
        <div className="rightSection">
          <div className="imageWrapper">
            <img
              className="image"
              src={urlBuilders.imageUrl('challenge/leaderboardHero.svg')}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        background-color: ${colors.cloudBurst};
        padding: 20px 24px 50px;
      }
      .wrapper {
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }
      .leftSection {
      }
      .mainText {
        margin: 0;
        line-height: 1.3;
        display: inline-flex;
        flex-direction: column;
        align-items: baseline;
        font-size: ${fontSizes.mobile.h1}px;
      }
      .title {
        background-color: ${colors.pickledBluewood};
        color: ${colors.white};
        padding: 5px 10px;
        display: inline-flex;
      }
      .title + .title {
        margin-top: 10px;
      }
      .date {
        margin-top: 10px;
        padding: 5px 10px;
        background-color: ${colors.pickledBluewood};
        color: ${colors.white};
        max-width: 250px;
        text-align: center;
        font-size: ${fontSizes.mobile.h3}px;
      }
      .description {
        color: ${colors.white};
        font-size: ${fontSizes.mobile.h3}px;
      }
      .rightSection {
      }
      .imageWrapper {
      }
      .image {
        width: 100%;
      }
      .buttonWrapper {
        margin-bottom: 20px;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .buttonWrapper {
          max-width: 270px;
        }
        .wrapper {
          flex-direction: row;
          align-items: flex-start;
        }
        .mainText {
          font-size: ${fontSizes.desktop.h1}px;
        }
        .date {
          font-size: ${fontSizes.mobile.h3}px;
        }
        .description {
          font-size: ${fontSizes.desktop.h3}px;
        }
      }
    `}</style>
  </Fragment>
);

export default Hero;
