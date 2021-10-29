// @flow

import React, { Fragment } from 'react';
import ClassNames from 'classnames';

import Button from 'components/Button';
import Anchor from 'components/Anchor';
import {
  breakPoints,
  colors,
  mobileFontSizes,
  fontWeights,
  lineHeights,
} from 'utils/theme';
import { urlBuilders, urls } from 'utils/urls';

/*
  Note: this is a temp fix to get around colouring an SVG on
  hover. A much better fix would be to seperate all icons into a
  seperate directory called icons and import them as components
  as seen below.
*/
const ArrowRightIcon = () => (
  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.277 10.697a.999.999 0 0 0 1.412-1.412l-6.992-6.992a.999.999 0 0 0-1.412 1.412l6.992 6.992zm.706-1.705H3c-1.332 0-1.332 1.998 0 1.998h13.984c1.332 0 1.332-1.998 0-1.998zm-.706.293l-6.992 6.992c-.942.942.47 2.354 1.412 1.412l6.992-6.992c.942-.941-.47-2.354-1.412-1.412z" />
  </svg>
);

const TeacherChallengeBanner = () => {
  const backgroundImageClassLeft = ClassNames({
    backgroundImageWrapper: true,
    backgroundImageLeft: true,
  });
  const backgroundImageClassRight = ClassNames({
    backgroundImageWrapper: true,
    backgroundImageRight: true,
  });
  return (
    <Fragment>
      <div className="bannerContainer">
        <div className={backgroundImageClassLeft}>
          <img src={urlBuilders.imageUrl('challenge/confetti1.svg')} alt="" />
        </div>
        <div className={backgroundImageClassRight}>
          <img src={urlBuilders.imageUrl('challenge/confetti2.svg')} alt="" />
        </div>
        <div className="bannerWrapper">
          We&#39;ve announced the winner of the 2019 Mathspace Growth Challenge!
        </div>
        <div className="buttonWrapper">
          <Button hasBorder color="java" href={urls.challengeUS}>
            <span>Find out more</span>
            <div className="buttonImage">
              <ArrowRightIcon />
            </div>
          </Button>
        </div>
        <div className="bannerLinkWrapper">
          <Anchor color="white" href={urls.challengeUS}>
            <div className="bannerWrapperMobile">
              <div className="rotation1">
                We&#39;ve announced the winner of the 2019 Mathspace Growth
                Challenge!
              </div>
              <div className="rotation2">
                <span>Find out more</span>
                <div className="imageWrapperButton">
                  <img
                    src={urlBuilders.imageUrl('banners/banner-arrow.svg')}
                    alt=""
                    className="image"
                  />
                </div>
              </div>
            </div>
          </Anchor>
        </div>
      </div>
      <style jsx>{`
        .bannerContainer {
          color: ${colors.white};
          padding: 9px 20px;
          background-color: ${colors.bayOfMany};
          position: relative;
          left: 0;
          right: 0;
          top: 0;
          z-index: 2;
          min-height: 30px;
          overflow: hidden;

          font-size: ${mobileFontSizes.subInfo}px;
          font-weight: ${fontWeights.regular};
          line-height: ${lineHeights.subInfo};

          display: flex;
          justify-content: center;
          align-items: center;
        }
        .backgroundImageWrapper {
          position: absolute;
          width: 100%;
          max-width: 110px;
        }
        .backgroundImageLeft {
          top: 0;
          bottom: 0;
          left: 0;
        }
        .backgroundImageRight {
          top: 0;
          bottom: 0;
          right: 0;
        }
        .bannerWrapper {
          display: none;
          justify-content: center;
          align-items: center;
        }
        .bannerLinkWrapper {
          display: block;
        }
        .bannerWrapperMobile {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .imageWrapper {
          margin: 0 10px;
          display: flex;
          align-items: center;
          max-width: 70px;
          width: 100%;
        }
        .imageWrapperButton {
          margin: 0 10px;
          display: flex;
          align-items: center;
          max-width: 36px;
          width: 100%;
        }
        .image {
          width: 100%;
        }
        .buttonWrapper {
          margin-left: 20px;
          display: none;
        }
        .buttonImage {
          display: inline-flex;
          max-width: 30px;
          align-items: center;
          margin-left: 10px;
        }
        .rotation1 {
          display: flex;
          position: absolute;
          width: 300px;
          text-align: center;
          justify-content: center;
          transform: translateY(0%);
          animation: rotation1 10s infinite;
          animation-delay: 2s;
        }
        .rotation2 {
          display: flex;
          align-items: center;
          width: 275px;
          justify-content: center;
          transform: translateY(250%);
          animation: rotation2 10s infinite;
          animation-delay: 2s;
        }

        @keyframes rotation1 {
          0% {
            transform: translateY(0%);
          }
          25% {
            transform: translateY(-250%);
          }
          50% {
            transform: translateY(-250%);
          }
          75% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(0%);
          }
        }
        @keyframes rotation2 {
          0% {
            transform: translateY(250%);
          }
          25% {
            transform: translateY(0%);
          }
          50% {
            transform: translateY(0%);
          }
          75% {
            transform: translateY(250%);
          }
          100% {
            transform: translateY(250%);
          }
        }
        @media (min-width: ${breakPoints.medium}px) {
          .bannerContainer {
            padding: 12px;
          }
          .bannerWrapper {
            display: flex;
          }
          .bannerLinkWrapper {
            display: none;
          }
          .buttonWrapper {
            display: block;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default TeacherChallengeBanner;
