// @flow

import React, { Fragment } from 'react';

import Button from 'components/Button';
import Anchor from 'components/Anchor';
import { breakPoints, colors, fontWeights, mobileFontSizes } from 'utils/theme';
import { urlBuilders } from 'utils/urls';
import sendCTAClickEvent from 'utils/analytics';

const HEADER_SIDE_PADDING = 12;
const HEADER_HEIGHT_PADDING_AT_TOP = 12;
const HEADER_HEIGHT_PADDING_AT_BOTTOM = 16;

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

const WEBINAR_BANNER = 'webinar-banner-andrew';

const WebinarAndrew = () => (
  <Fragment>
    <div className="bannerContainer">
      <div className="bannerWrapper">
        <div className="bannerContent">
          <span className="bannerText">
            [New webinar Oct 29] The unsolved areas of maths
          </span>
        </div>
        <div className="buttonWrapper">
          <Button
            color="white"
            hasBorder
            href="https://webinar.mathspace.co/registration?id=10"
            onClick={event => {
              event.preventDefault();
              sendCTAClickEvent(WEBINAR_BANNER)
                .then(() => {
                  window.location.assign(
                    'https://webinar.mathspace.co/registration?id=10',
                  );
                })
                .catch(() => {
                  window.location.assign(
                    'https://webinar.mathspace.co/registration?id=10',
                  );
                });
            }}
          >
            <span>Register now</span>
            <div className="buttonImage">
              <ArrowRightIcon />
            </div>
          </Button>
        </div>
      </div>
      <div className="bannerLinkWrapper">
        <Anchor
          color="white"
          href="https://webinar.mathspace.co/registration?id=10"
          onClick={event => {
            event.preventDefault();
            sendCTAClickEvent(WEBINAR_BANNER)
              .then(() => {
                window.location.assign(
                  'https://webinar.mathspace.co/registration?id=10',
                );
              })
              .catch(() => {
                window.location.assign(
                  'https://webinar.mathspace.co/registration?id=10',
                );
              });
          }}
        >
          <div className="bannerContent">
            <div className="rotationWrapper">
              <div className="rotation1">
                <span className="bannerText">[New webinar Oct 29]</span>
              </div>
              <div className="rotation2">
                <span className="bannerText">The unsolved areas of maths</span>
              </div>
            </div>
            <div className="buttonImage">
              <div className="bannerEmoji">
                <img
                  className="image2"
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
        background-color: ${colors.mountainMeadow};
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
      .image2 {
        width: 25px;
        height: 25px;
      }
      .bannerContent {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .bannerText {
        font-size: ${mobileFontSizes.body}px;
        font-weight: ${fontWeights.semibold};
        color: ${colors.white};
        padding: 0 ${HEADER_SIDE_PADDING}px;
        height: 23px;
        letter-spacing: -0.5px;
      }
      .buttonWrapper {
        padding-left: 10px;
      }
      .buttonImage {
        display: inline-flex;
        max-width: 30px;
        align-items: center;
        margin-left: 5px;
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
        .bannerText {
          font-size: ${mobileFontSizes.body}px;
          letter-spacing: 0;
        }
      }
    `}</style>
  </Fragment>
);

export default WebinarAndrew;
