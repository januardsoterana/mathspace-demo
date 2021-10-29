// @flow

import React, { Fragment } from 'react';
import { urlBuilders } from 'utils/urls';
import {
  colors,
  fontSizes,
  breakPoints,
  lineHeights,
  fontWeights,
} from 'utils/theme';

type Props = { country: 'AU' | 'US' };
const Leadership = ({ country }: Props) => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="imageWrapper">
          <img
            className="image"
            src={urlBuilders.imageUrl('aboutUs/leadership.svg')}
            alt=""
          />
        </div>
        <div className="textWrapper">
          <h3 className="title">Leadership and team</h3>
          <p className="description">
            It is our vision at Mathspace to be an all-in-one resource that
            helps teachers teach and students learn.
          </p>
          <p className="description">
            Our global team consists of curriculum experts and content
            specialists who have created the most comprehensive{' '}
            {country === 'AU' ? 'curriculum-aligned' : 'standards-aligned'}{' '}
            online textbook materials on the market, designers and engineers who
            brought these materials to life through interactivity and adaptive
            learning smarts, and experienced educators who liaise and work
            together with our teaching community in shaping and continuously
            improving our product development.
          </p>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 40px 24px 30px;
      }
      .wrapper {
        max-width: 1110px;
        margin: 0 auto;
      }
      .titleWrapper {
        max-width: 700px;
        margin: 0 auto;
        text-align: center;
      }
      .title {
        color: ${colors.cloudBurst};
        font-size: ${fontSizes.mobile.h2}px;
        line-height: ${lineHeights.h2};
        font-weight: ${fontWeights.semibold};
        margin-top: 24px;
      }
      .description {
        color: ${colors.santasGray};
        font-size: ${fontSizes.mobile.bodyLG}px;
        line-height: 1.5;
        margin-bottom: 24px;
      }
      .image {
        max-width: 100%;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .container {
          padding: 92px 24px 50px;
        }
        .wrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .imageWrapper {
          flex: 1;
          max-width: 601px;
        }
        .textWrapper {
          flex: 1;
          max-width: 432px;
          padding-left: 65px;
        }
        .title {
          font-size: ${fontSizes.desktop.h2}px;
        }
        .description {
          font-size: ${fontSizes.desktop.bodyLG}px;
        }
      }
    `}</style>
  </Fragment>
);

export default Leadership;
