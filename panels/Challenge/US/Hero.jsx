// @flow

import React, { Fragment } from 'react';
import classnames from 'classnames';

import Button from 'components/Button';

import {
  breakPoints,
  colors,
  fontWeights,
  lineHeights,
  fontSizes,
} from 'utils/theme';
import { urlBuilders } from 'utils/urls';
import sendEvent from 'utils/analytics';

const LEARN_MORE_HERO = 'learn-more-hero';

type Props = {| handleScroll: () => void |};
const Hero = ({ handleScroll }: Props) => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className={classnames({ imageWrapper: true, confettiLeft: true })}>
          <img
            className="image"
            src={urlBuilders.imageUrl('challenge/confettiLeft.svg')}
            alt=""
          />
        </div>
        <div className="contentWrapper">
          <div className="logo">
            <img
              className="image"
              src={urlBuilders.imageUrl(
                'common/Mathspace-logo-flat-reversed.svg',
              )}
              alt=""
            />
          </div>
          <h1 className="titleOne">Mathspace USA</h1>
          <h1 className="titleTwo">Growth Challenge</h1>
          <h3 className="date">February 24 - March 22</h3>
          <p className="paragraph">
            See if your school made it to the top 10 on the leaderboard!
          </p>
        </div>
        <div
          className={classnames({ imageWrapper: true, confettiRight: true })}
        >
          <img
            className="image"
            src={urlBuilders.imageUrl('challenge/confettiRight.svg')}
            alt=""
          />
        </div>
      </div>
      <div className="ctaWrapper">
        <div className="ctaText">
          Not registered? You can still join in on the fun!
        </div>
        <div className="buttonWrapper">
          <Button
            color="lochmara"
            size="large"
            isFilled
            isBlock
            data-event-label={LEARN_MORE_HERO}
            onClick={() => {
              sendEvent(LEARN_MORE_HERO, 'clicked', 'US-challenge');
              handleScroll();
            }}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 50px 24px 0;
      }
      .wrapper {
        max-width: 500px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      }
      .imageWrapper {
        max-width: 120px;
        width: 100%;
        position: absolute;
      }
      .confettiLeft {
        left: 0;
        top: initial;
      }
      .confettiRight {
        right: 0;
        top: initial;
      }
      .image {
        width: 100%;
      }
      .contentWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 2;
      }
      .logo {
        max-width: 150px;
        margin: 0 auto;
      }
      .titleWrapper {
        text-align: center;
      }
      .titleOne {
        color: ${colors.white};
        background-color: ${colors.pickledBluewood};
        margin: 30px 0 0;
        padding: 5px 10px;
        font-size: ${fontSizes.mobile.h2}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.h3};
      }
      .titleTwo {
        color: ${colors.white};
        background-color: ${colors.pickledBluewood};
        margin: 8px 0 0;
        padding: 5px 10px;
        font-size: ${fontSizes.mobile.h2}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.h3};
      }
      .date {
        color: ${colors.white};
        background-color: ${colors.pickledBluewood};
        margin-top: 15px;
        padding: 5px 10px;
        font-size: ${fontSizes.mobile.h3}px;
        font-weight: ${fontWeights.semibold};
      }
      .paragraph {
        margin: 25px 0 15px;
        color: ${colors.white};
        max-width: 530px;
        text-align: center;
        line-height: ${lineHeights.h3};
        font-size: 20px;
      }
      .ctaWrapper {
        max-width: 700px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .ctaText {
        color: ${colors.white};
        margin-bottom: 10px;
      }
      .buttonWrapper {
        max-width: 250px;
        width: 100%;
        margin-bottom: 15px;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .wrapper {
          max-width: 950px;
        }
        .imageWrapper {
          max-width: 240px;
        }
        .contentWrapper {
          margin: 0 30px;
        }
        .titleOne {
          font-size: 35px;
          margin: 70px 0 0;
        }
        .titleTwo {
          font-size: 50px;
        }
        .date {
          font-size: 20px;
        }
        .descriptionWrapper {
          margin: 0 auto;
        }
        .confettiLeft {
          top: 0;
        }
        .confettiRight {
          top: 0;
        }
      }
    `}</style>
  </Fragment>
);
export default Hero;
