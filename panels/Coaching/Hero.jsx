// @flow

import React, { Fragment } from 'react';

import Button from 'components/Button';

import {
  breakPoints,
  colors,
  fontWeights,
  desktopFontSizes,
  mobileFontSizes,
  lineHeights,
} from 'utils/theme';
import { urlBuilders, urls } from 'utils/urls';
import sendCTAClickEvent from 'utils/analytics';

const BOOK_NOW_1 = 'book-now-1';

const LandingHero = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="leftSection">
          {/* logo */}
          <div className="mathspaceLogo">
            <img
              src={urlBuilders.imageUrl(
                'common/Mathspace-logo-flat-reversed.svg',
              )}
              alt="Mathspace"
              className="image"
            />
          </div>
          {/* title */}
          <div className="titleWrapper">
            Get ahead in maths with private online lessons
          </div>
          {/* Mobile size image */}
          <div className="mobileImageWrapper">
            <img
              src={urlBuilders.imageUrl('coaching/coaching-hero-image.svg')}
              alt="Challenge"
              className="image"
            />
          </div>
          {/* description */}
          <div className="descriptionContainer">
            <ul className="descriptionList">
              <li className="descriptionItem">
                <img
                  src={urlBuilders.imageUrl('coaching/checklist.svg')}
                  alt=""
                  className="bulletImage"
                />
                <span>Connect with our experienced teachers</span>
              </li>
              <li className="descriptionItem">
                <img
                  src={urlBuilders.imageUrl('coaching/checklist.svg')}
                  alt=""
                  className="bulletImage"
                />
                <span>Get started on your next syllabus</span>
              </li>
              <li className="descriptionItem">
                <img
                  src={urlBuilders.imageUrl('coaching/checklist.svg')}
                  alt=""
                  className="bulletImage"
                />
                <span>Learn from anywhere, anytime</span>
              </li>
            </ul>
          </div>
          {/* CTA */}
          <div className="CTAWrapper">
            <Button
              color="mountainMeadow"
              size="large"
              isFilled
              isBlock
              href={urls.bookCoaching}
              data-event-label={BOOK_NOW_1}
              onClick={event => {
                event.preventDefault();
                sendCTAClickEvent(BOOK_NOW_1).then(() => {
                  window.location.assign(urls.bookCoaching);
                });
              }}
            >
              Book now
            </Button>
          </div>
        </div>
        <div className="rightSection">
          <div className="imageWrapper">
            <img
              src={urlBuilders.imageUrl('coaching/coaching-hero-image.svg')}
              alt="Challenge"
              className="image"
            />
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 8px 24px 101px;
      }
      .wrapper {
        display: flex;
        max-width: 1097px;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
      }
      .leftSection {
        color: ${colors.white};
        max-width: 540px;
        text-align: left;
      }
      .mathspaceLogo {
        width: 242px;
        margin-bottom: 51px;
      }
      .titleWrapper {
        display: inline-flex;
        flex-direction: column;
        align-items: baseline;
        font-size: ${mobileFontSizes.h1}px;
        line-height: ${lineHeights.h1};
        font-weight: ${fontWeights.semibold};
      }
      .descriptionContainer {
        font-size: ${mobileFontSizes.body}px;
        line-height: ${lineHeights.cta};
        font-weight: ${fontWeights.regular};
        margin: 0 0 45px;
      }
      .descriptionList {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }
      .descriptionItem {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
      }
      .bulletImage {
        max-width: 25px;
        margin-right: 10px;
      }
      .imageWrapper {
        line-height: 0;
        display: flex;
        align-items: flex-end;
        flex-direction: column;
      }
      .image {
        width: 100%;
      }
      .rightSection {
        display: none;
        margin-top: 80px;
        align-self: flex-end;
        width: 100%;
        max-width: 557px;
      }
      .mobileImageWrapper {
        margin: 13px 0 47px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      @media (min-width: ${breakPoints.medium}px) {
        .leftSection {
          text-align: left;
        }
        .container {
          flex-direction: row;
          align-items: flex-start;
          padding: 37px 24px 126px;
        }
        .mathspaceLogo {
          margin: 0 0 69px;
        }
        .descriptionContainer {
          font-size: ${desktopFontSizes.h4}px;
          margin: 30px 0 46px;
        }
        .CTAWrapper {
          max-width: 220px;
        }
        .rightSection {
          display: block;
          margin-top: 0;
        }
        .title {
          font-size: 58px;
        }
        .mobileImageWrapper {
          display: none;
        }
        .titleWrapper {
          /*
            The design has called for a much larger font size than
            what we have in our theme file.
          */
          font-size: 58px;
        }
      }
    `}</style>
  </Fragment>
);

export default LandingHero;
