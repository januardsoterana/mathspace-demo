// @flow

import React, { Fragment, type Node } from 'react';
import classnames from 'classnames';

import {
  borderRadius,
  breakPoints,
  colors,
  fontWeights,
  desktopFontSizes,
  mobileFontSizes,
  lineHeights,
  fontStacks,
  transitions,
  hoverColors,
} from 'utils/theme';
import { urls } from 'utils/urls';
import sendCTAClickEvent from 'utils/analytics';

const BOOK_NOW_2 = 'book-now-2';
const BOOK_NOW_3 = 'book-now-3';
const BOOK_NOW_4 = 'book-now-4';

// Creating a bespoke button for now as we can't handle white
// ghost buttons.

type PriceButtonProps = {
  color: string,
  hoverColor: string,
  href?: string,
  children?: Node,
  onClick: (event: Event) => void,
};

const PriceButton = ({
  color,
  hoverColor,
  href,
  onClick,
  children,
  ...rest
}: PriceButtonProps) => (
  <Fragment>
    {/* eslint-disable-next-line */}
    <a
      {...rest}
      href={href}
      className={classnames({ base: true, border: true, isBlock: true })}
      role="link"
      onClick={onClick}
    >
      {children}
    </a>
    <style jsx>{`
      .base {
        border-radius: ${borderRadius.default}px;
          box-sizing: border-box;
          background-color: transparent;
          border-color: ${color};
          color: ${color};
          fill: ${color};
          cursor: pointer;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          font-family: ${fontStacks.default}
          font-size: ${mobileFontSizes.body}px;
          font-weight: ${fontWeights.regular};
          height: 40px;
          line-height: ${lineHeights.body};
          outline: none;
          border: none;
          transition: background-color ${transitions.hover}, border-color ${
      transitions.hover
    },
            color ${transitions.hover}, fill ${transitions.hover};
          webkit-font-smoothing: subpixel-antialiased;
          padding: 20px;
          user-select: none;
          text-decoration: none;
        }
        .border {
          border: 1px solid;
        }
        .border:hover {
          border-color: ${hoverColor};
          color: ${hoverColor};
          fill: ${hoverColor};
        }
        .isBlock {
          width: 100%;
        }
    `}</style>
  </Fragment>
);

const Pricing = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="panelTitle">
          Choose the session that&#39;s right for you
        </div>
        <div className="priceBoxWrapper">
          <div className={classnames({ priceBox: true, firstPriceBox: true })}>
            <div className="priceTitle">
              <div>15 Minute</div>
              <div>Introductory Offer</div>
            </div>
            <div className="centeringWrapper">
              <div
                className={classnames({
                  priceValue: true,
                  firstPriceVal: true,
                })}
              >
                Free
              </div>
            </div>
            <div className="description">
              A short introductory session with one of our teachers to help you
              with a specific maths question.
            </div>
            <PriceButton
              color={colors.white}
              hoverColor={hoverColors.white}
              href={urls.bookCoaching}
              data-event-label={BOOK_NOW_2}
              onClick={event => {
                event.preventDefault();
                sendCTAClickEvent(BOOK_NOW_2).then(() => {
                  window.location.assign(urls.bookCoaching);
                });
              }}
            >
              Book now
            </PriceButton>
          </div>
          <div className={classnames({ priceBox: true, secondPriceBox: true })}>
            <div className="priceTitle">
              <div>30 Minute</div>
              <div>Quick Maths Lesson</div>
            </div>
            <div className="centeringWrapper">
              <div
                className={classnames({
                  priceValue: true,
                  secondPriceVal: true,
                })}
              >
                $20
              </div>
            </div>
            <div className="description">
              A longer session with one of our teachers to help you with a few
              different questions.
            </div>
            <PriceButton
              color={colors.white}
              hoverColor={hoverColors.white}
              href={urls.bookCoaching}
              data-event-label={BOOK_NOW_3}
              onClick={event => {
                event.preventDefault();
                sendCTAClickEvent(BOOK_NOW_3).then(() => {
                  window.location.assign(urls.bookCoaching);
                });
              }}
            >
              Book now
            </PriceButton>
          </div>
          <div className={classnames({ priceBox: true, thirdPriceBox: true })}>
            <div className="priceTitle">
              <div>60 Minute</div>
              <div>Deep-dive Maths Lesson</div>
            </div>
            <div className="centeringWrapper">
              <div
                className={classnames({
                  priceValue: true,
                  thirdPriceVal: true,
                })}
              >
                $40
              </div>
            </div>
            <div className="description">
              An in-depth session where a teacher can take you through topic
              concepts and several example questions.
            </div>
            <PriceButton
              color={colors.white}
              hoverColor={hoverColors.white}
              href={urls.bookCoaching}
              data-event-label={BOOK_NOW_4}
              onClick={event => {
                event.preventDefault();
                sendCTAClickEvent(BOOK_NOW_4).then(() => {
                  window.location.assign(urls.bookCoaching);
                });
              }}
            >
              Book now
            </PriceButton>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 80px 24px;
      }
      .wrapper {
        max-width: 850px;
        margin: 0 auto;
      }
      .panelTitle {
        color: ${colors.white};
        font-size: ${mobileFontSizes.h1}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.h1};
        text-align: center;
        margin-bottom: 48px;
      }
      .priceBoxWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .priceBox {
        margin: 10px;
        padding: 36px 30px;
        border-radius: ${borderRadius.default}px;
        color: ${colors.white};
        max-width: 243px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .priceTitle {
        font-weight: ${fontWeights.semibold};
        font-size: ${mobileFontSizes.h4}px;
        margin-bottom: 20px;
        text-align: center;
        letter-spacing: -1px;
      }
      .priceValue {
        text-align: center;
        padding: 5px 20px;
        font-size: ${mobileFontSizes.h4}px;
        border-radius: ${borderRadius.circle}px;
        margin-bottom: 20px;
        font-weight: ${fontWeights.semibold};
      }
      .description {
        text-align: center;
        margin-bottom: 20px;
      }
      .firstPriceBox {
        border: 2px solid ${colors.cornflowerBlue};
      }
      .secondPriceBox {
        background-color: ${colors.cornflowerBlue};
      }
      .thirdPriceBox {
        background-color: ${colors.crusta};
      }
      .firstPriceVal {
        background-color: ${colors.cornflowerBlue};
      }
      .secondPriceVal {
        background-color: ${colors.bayOfMany};
      }
      .thirdPriceVal {
        background-color: ${colors.saffron};
      }
      .centeringWrapper {
        display: flex;
        justify-content: center;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .panelTitle {
          font-size: ${desktopFontSizes.h1}px;
        }
        .priceValue {
          font-size: ${desktopFontSizes.h4}px;
        }
        .priceBoxWrapper {
          flex-direction: row;
        }
        .priceBox {
          width: 100%;
        }
      }
    `}</style>
  </Fragment>
);

export default Pricing;
