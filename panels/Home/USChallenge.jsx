// @flow

import React, { Fragment } from 'react';

import Button from 'components/Button';
import { breakPoints, colors, fontSizes, fontWeights } from 'utils/theme';
import { urlBuilders, urls } from 'utils/urls';
import sendEvent from 'utils/analytics';

const USChallenge = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="leftSection">
          <img
            className="image"
            src={urlBuilders.imageUrl('homepage/usChallengeIcon.svg')}
            alt=""
          />
        </div>
        <div className="rightSection">
          <div className="titleWrapper">
            <h3 className="title">Mathspace USA</h3>
            <h3 className="title">Growth Challenge</h3>
          </div>
          <p className="paragraph">
            The Mathspace USA Growth Challenge has officially wrapped up!
          </p>
          <div className="buttonWrapper">
            <Button
              color="lochmara"
              isFilled
              isBlock
              href={urls.challengeUS}
              onClick={event => {
                event.preventDefault();
                sendEvent('us-challenge-cta').then(() =>
                  window.location.assign(urls.challengeUS),
                );
              }}
            >
              See the leaderboard
            </Button>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 30px 24px;
        background-color: ${colors.athensGray};
      }
      .wrapper {
        max-width: 600px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .leftSection {
        max-width: 200px;
        margin: 0 auto;
        width: 100%;
        display: flex;
        align-items: center;
      }
      .rightSection {
        margin-top: 20px;
        max-width: 290px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .image {
        width: 100%;
      }
      .paragraph {
        font-size: ${fontSizes.mobile.bodyLG}px;
        font-weight: ${fontWeights.semibold};
        color: ${colors.cloudBurst};
        text-align: right;
        padding: 0 15px;
      }
      .buttonWrapper {
        max-width: 250px;
        width: 100%;
      }
      .titleWrapper {
        text-align: right;
      }
      .title {
        font-size: ${fontSizes.mobile.h2}px;
        font-weight: ${fontWeights.semibold};
        color: ${colors.white};
        background-color: ${colors.cloudBurst};
        margin: 0;
        padding: 5px 10px;
        display: inline-block;
      }
      .title + .title {
        margin-top: 5px;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .wrapper {
          flex-direction: row;
        }
        .leftSection {
          max-width: 290px;
        }
        .rightSection {
          margin-top: 0;
        }
        .title {
          font-size: ${fontSizes.desktop.h2}px;
        }
      }
    `}</style>
  </Fragment>
);

export default USChallenge;
