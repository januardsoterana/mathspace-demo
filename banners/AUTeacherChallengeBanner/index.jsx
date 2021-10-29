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
import { urlBuilders } from 'utils/urls';

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
          We&#39;ve announced the winner of the 2018 Mathspace Teacher
          Challenge!
        </div>
        <div className="buttonWrapper">
          <Button
            hasBorder
            href="https://blog.mathspace.co/the-mathspace-teacher-challenge-5f9f3cac2040"
          >
            Find out more
          </Button>
        </div>
        <div className="bannerLinkWrapper">
          <Anchor
            color="white"
            href="https://blog.mathspace.co/the-mathspace-teacher-challenge-5f9f3cac2040"
          >
            <div className="bannerWrapperMobile">
              <div className="rotation1">
                We&#39;ve announced the winner of the 2018 Mathspace Teacher
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
          position: fixed;
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
          margin-left: 10px;
          display: none;
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
