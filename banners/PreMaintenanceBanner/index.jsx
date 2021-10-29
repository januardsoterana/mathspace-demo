// @flow

import React, { Fragment } from 'react';

import {
  breakPoints,
  colors,
  desktopFontSizes,
  fontWeights,
} from 'utils/theme';
import { urlBuilders } from 'utils/urls';

const HEADER_SIDE_PADDING = 12;
const HEADER_HEIGHT_PADDING_AT_TOP = 12;
const HEADER_HEIGHT_PADDING_AT_BOTTOM = 16;

const PreMaintenanceBanner = () => (
  <Fragment>
    <div className="bannerContainer">
      <div className="bannerWrapper">
        <div className="bannerContent">
          <div className="bannerEmoji">
            <img
              className="image"
              src={urlBuilders.imageUrl('banners/traffic-cone.svg')}
              alt=""
            />
          </div>
          <span className="bannerText">
            Upcoming maintenance on 6th July between 9:00am and 12:00pm AEST
          </span>
        </div>
      </div>
      <div className="bannerLinkWrapper">
        <div className="bannerContent">
          <div className="bannerEmoji">
            <img
              className="image"
              src={urlBuilders.imageUrl('banners/traffic-cone.svg')}
              alt=""
            />
          </div>
          <div className="rotationWrapper">
            <div className="rotation1">
              <span className="bannerText">Upcoming maintenance</span>
            </div>
            <div className="rotation2">
              <span className="bannerText2">
                6th July, 9:00am - 12:00pm AEST
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      .bannerContainer {
        background-color: ${colors.astronaut};
      }
      .bannerWrapper {
        padding: ${HEADER_HEIGHT_PADDING_AT_TOP}px ${HEADER_SIDE_PADDING}px
          ${HEADER_HEIGHT_PADDING_AT_BOTTOM}px;
        height: 36px;
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
        height: 30px;
      }
      .bannerContent {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .bannerEmoji {
        width: 30px;
        display: flex;
        align-items: center;
        margin-right: 30px;
      }
      .bannerText {
        font-weight: ${fontWeights.semibold};
        color: ${colors.white};
        padding: 0 ${HEADER_SIDE_PADDING}px;
      }
      .bannerText2 {
        text-align: center;
        font-weight: ${fontWeights.semibold};
        color: ${colors.white};
        margin-left: -30px;
      }
      .bannerLinkWrapper {
        padding: ${HEADER_HEIGHT_PADDING_AT_TOP}px ${HEADER_SIDE_PADDING}px
          ${HEADER_HEIGHT_PADDING_AT_BOTTOM}px;
        height: 22px;
        max-width: 780px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        color: ${colors.white};
        position: relative;
        overflow: hidden;
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
      @media (min-width: ${breakPoints.medium}px) {
        .bannerWrapper {
          display: flex;
        }
        .bannerLinkWrapper {
          display: none;
        }
      }
    `}</style>
  </Fragment>
);

export default PreMaintenanceBanner;
