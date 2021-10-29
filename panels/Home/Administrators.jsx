// @flow

import React, { Fragment } from 'react';

import TestimonialQuote from 'components/Homepage/SVG/TestimonialQuote';
import {
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
  breakPoints,
} from 'utils/theme';

const Administrators = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <h3 className="title">What do administrators think of Mathspace?</h3>
        <div className="testimonyWrapper">
          <div className="quoteMarkLeft">
            <TestimonialQuote />
          </div>
          <div className="testimony">
            Mathspace has provided Fairfax with a highly tailored professional
            learning program that teachers have found engaging, thoughtful and
            effective. Their team doesn’t believe in “one and done” PD - from
            the start, they have collaborated with our team to develop our
            district’s vision for this adoption, and custom built a multi-year
            program that incorporates product training, professional learning,
            change management and community engagement. Our goal together has
            been to use this adoption as an opportunity to shift instructional
            practice in the district - with their help, we believe Mathspace can
            be a big factor in this transformation.
          </div>
          <div className="bottomSection">
            <div className="authorWrapper">
              {/*
                <img
                  className="authorImage"
                  src={localeData.testimony.img}
                  alt=""
                />
              */}
              <div className="authorInfo">
                Jennifer Allard, High School Mathematics Specialist, Fairfax
                County Public Schools
              </div>
            </div>
            <div className="quoteMarkRight">
              <TestimonialQuote />
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 70px 24px;
      }
      .wrapper {
        max-width: 900px;
        margin: 0 auto;
      }
      .title {
        color: ${colors.cloudBurst};
        font-size: ${fontSizes.mobile.h2}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.body};
        margin-top: 0;
        margin-bottom: 10px;
        text-align: center;
      }
      .testimony {
        font-style: italic;
        color: ${colors.santasGray};
        font-size: ${fontSizes.mobile.bodyLG}px;
      }
      .bottomSection {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
      }
      .authorWrapper {
        display: flex;
        align-items: center;
      }
      .authorInfo {
        color: ${colors.cloudBurst};
        font-size: ${fontSizes.mobile.bodySM}px;
        padding-right: 10px;
      }
      .authorImage {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      .quoteMarkLeft {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
      }
      .quoteMarkRight {
        transform: rotate(180deg);
        display: flex;
        align-items: flex-end;
      }
      @media (min-width: ${breakPoints.medium}px) {
        .title {
          font-size: ${fontSizes.desktop.h2}px;
        }
      }
    `}</style>
  </Fragment>
);

export default Administrators;
