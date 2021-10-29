// @flow

import React, { Fragment } from 'react';
import Link from 'next/link';

import Anchor from 'components/Anchor';
import {
  colors,
  fontSizes,
  breakPoints,
  borderRadius,
  fontWeights,
} from 'utils/theme';

const Winners = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <h3 className="title">See our 2019 winners</h3>
        <div className="categories">
          <Link
            href={{
              pathname: '/au/transformative20/winners',
              query: { year: '2019', category: 'teacher' },
            }}
            passHref
          >
            <Anchor>
              <div className="teachers">
                <div className="overlay" />
                <div className="categoryTitle">Teachers</div>
              </div>
            </Anchor>
          </Link>
          <Link
            href={{
              pathname: '/au/transformative20/winners',
              query: { year: '2019', category: 'student' },
            }}
            passHref
          >
            <Anchor>
              <div className="students">
                <div className="overlay" />
                <div className="categoryTitle">Students</div>
              </div>
            </Anchor>
          </Link>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 50px 24px 70px;
      }
      .wrapper {
        max-width: 650px;
        margin: 0 auto;
      }
      .title {
        margin: 20px 0 40px;
        text-align: center;
        color: ${colors.cloudBurst};
        font-size: ${fontSizes.mobile.h2}px;
        font-weight: ${fontWeights.semibold};
      }
      .categories {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }
      .teachers {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 153px;
        width: 300px;
        border-radius: ${borderRadius.default}px;
        position: relative;
        background-color: ${colors.pickledBluewood};
      }
      .students {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 153px;
        width: 300px;
        border-radius: ${borderRadius.default}px;
        position: relative;
        margin-top: 30px;
        background-color: ${colors.pickledBluewood};
      }
      .categoryTitle {
        color: ${colors.white};
        font-size: ${fontSizes.mobile.h2}px;
        font-weight: ${fontWeights.semibold};
        position: static;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .title {
          font-size: 36px;
        }
        .categories {
          flex-direction: row;
        }
        .categoryTitle {
          font-size: ${fontSizes.desktop.h2}px;
          position: absolute;
          opacity: 1;
        }
        .students {
          margin-top: 0;
        }
      }
    `}</style>
  </Fragment>
);

export default Winners;
