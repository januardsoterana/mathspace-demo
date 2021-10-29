// @flow
import React, { Fragment } from 'react';

import Anchor from 'components/Anchor';
import Button from 'components/Button';
import {
  breakPoints,
  colors,
  desktopFontSizes,
  fontWeights,
} from 'utils/theme';
import { urls, urlBuilders } from 'utils/urls';

const HEADER_SIDE_PADDING = 12;
const HEADER_HEIGHT_PADDING_AT_TOP = 12;
const HEADER_HEIGHT_PADDING_AT_BOTTOM = 12;

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

const TutoringBanner = () => (
  <Fragment>
    <div className="bannerContainer">
      <div className="bannerWrapper">
        <div className="bannerContent">
          <span className="bannerText">
            Get ahead in maths with private online lessons
          </span>
        </div>
        <div className="buttonWrapper">
          <Button hasBorder href={urls.coachingAU}>
            <span>Find out more</span>
            <div className="buttonImage">
              <ArrowRightIcon />
            </div>
          </Button>
        </div>
      </div>
      <div className="bannerLinkWrapper">
        <Anchor color="white" href={urls.coachingAU}>
          <div className="bannerContent">
            <div className="rotationWrapper">
              <div className="rotation1">
                <span className="bannerText">Get private online lessons</span>
              </div>
              <div className="rotation2">
                <span className="bannerText2">Find out more</span>
              </div>
            </div>
            <div className="buttonImage">
              <div className="bannerEmoji">
                <img
                  className="image"
                  src={urlBuilders.imageUrl('banners/arrow-right.svg')}
                  alt=""
                />
              </div>
            </div>
          </div>
        </Anchor>
      </div>
    </div>

    <style jsx>{`
      .bannerContainer {
        background-color: ${colors.astronaut};
      }
      .bannerWrapper {
        padding: ${HEADER_HEIGHT_PADDING_AT_TOP}px ${HEADER_SIDE_PADDING}px
          ${HEADER_HEIGHT_PADDING_AT_BOTTOM}px;
        height: 40px;
        max-width: 780px;
        margin: 0 auto;
        display: none;
        align-items: center;
        color: ${colors.white};
        position: relative;
        overflow: hidden;
        justify-content: center;
      }
      .image {
        width: 25px;
        height: 25px;
      }
      .bannerContent {
        display: flex;
        align-items: center;
      }
      .bannerEmoji {
        width: 30px;
        margin-right: 10px;
        display: flex;
        align-items: center;
      }
      .bannerText {
        font-size: ${desktopFontSizes.body};
        color: ${colors.white};
      }
      .bannerText2 {
        font-size: ${desktopFontSizes.body};
        color: ${colors.white};
        margin-right: -50px;
      }
      .buttonWrapper {
        margin-left: 30px;
      }
      .bannerCTAWrapper {
        margin-left: 0;
      }
      .buttonImage {
        display: inline-flex;
        max-width: 30px;
        align-items: center;
        margin-left: 10px;
      }
      .bannerLinkWrapper {
        padding: ${HEADER_HEIGHT_PADDING_AT_TOP}px ${HEADER_SIDE_PADDING}px
          ${HEADER_HEIGHT_PADDING_AT_BOTTOM}px;
        height: 26px;
        max-width: 780px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        color: ${colors.white};
        position: relative;
        overflow: hidden;
        justify-content: center;
      }
      .bannerLinkWrapper > :global(a) {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
      }
      .rotationWrapper {
        display: flex;
        flex-direction: column;
      }

    .rotation1 {
      display: flex;
      max-width: 300px;
      justify-content: center;
      transform: translateY(50%);
      animation: rotation1 10s infinite;
      animation-delay: 2s;
    }
    .rotation2 {
      display: flex;
      align-items: center;
      max-width: 300px;
      justify-content: center;
      transform: translateY(100%);
      animation: rotation2 10s infinite;
      animation-delay: 2s;
    }
     @keyframes rotation1 {
      0% {
        transform: translateY(50%);
      }
      25% {
        transform: translateY(-250%);
      }
      50% {
        transform: translateY(-250%);
      }
      75% {
        transform: translateY(50%);
      }
      100% {
        transform: translateY(50%);
      }
    }
    @keyframes rotation2 {
      0% {
        transform: translateY(250%);
      }
      25% {
        transform: translateY(-50%);
      }
      50% {
        transform: translateY(-50%);
      }
      75% {
        transform: translateY(250%);
      }
      100% {
        transform: translateY(250%);
      }
    }
      }
      @media (min-width: ${breakPoints.medium}px) {
        .bannerWrapper {
          display: flex;
        }
        .bannerLinkWrapper {
          display: none;
        }
        .bannerCTAWrapper {
          margin-left: 30px;
        }
      }
    `}</style>
  </Fragment>
);

export default TutoringBanner;
