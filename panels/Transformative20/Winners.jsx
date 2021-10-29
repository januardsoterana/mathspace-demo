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
  transitions,
} from 'utils/theme';
import { urlBuilders } from 'utils/urls';

const Categories = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <h3 className="title">Our Winners of 2020</h3>
        <div className="categories">
          <Link
            href={{
              pathname: '/au/transformative20/winners',
              query: { year: '2020', category: 'teacher' },
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
              query: { year: '2020', category: 'student' },
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
        padding: 50px 24px 150px;
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
        background-image: url(${urlBuilders.imageUrl(
          'transformative20/teachersCategory.jpg',
        )});
        background-size: cover;
        background-position: center;
        height: 300px;
        width: 300px;
        border-radius: ${borderRadius.default}px;
        position: relative;
      }
      .students {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-image: url(${urlBuilders.imageUrl(
          'transformative20/students.jpg',
        )});
        background-size: cover;
        background-position: center;
        height: 300px;
        width: 300px;
        border-radius: ${borderRadius.default}px;
        position: relative;
        margin-top: 30px;
      }
      .overlay {
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: ${borderRadius.default}px;
      }
      .categoryTitle {
        color: ${colors.white};
        font-size: ${fontSizes.mobile.h2}px;
        font-weight: ${fontWeights.semibold};
        position: static;
        opacity: 1;
        z-index: 1;
        transition: opacity ${transitions.hover};
      }
      .categoryDescription {
        color: ${colors.white};
        padding: 20px;
        position: static;
        opacity: 1;
        z-index: 1;
        text-align: center;
        transition: opacity ${transitions.hover};
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
        .categoryDescription {
          position: absolute;
          opacity: 0;
        }
        .students {
          margin-top: 0;
        }
      }
    `}</style>
  </Fragment>
);

export default Categories;
