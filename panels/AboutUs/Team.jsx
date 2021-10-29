// @flow

import React, { Fragment } from 'react';
import { urlBuilders } from 'utils/urls';
import { colors, breakPoints, lineHeights, fontWeights } from 'utils/theme';

type Props = { country: 'AU' | 'US' };
const Team = ({ country }: Props) => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="row">
          <div className="imageWrapper">
            <img
              className="image"
              src={urlBuilders.imageUrl('aboutUs/mo.jpg')}
              alt=""
            />
          </div>
          <div className="textWrapper">
            <h3 className="title">Mohamad Jebara, CEO</h3>
            <p className="description">
              “We started Mathspace because we believe every student can excel
              at Mathematics with the right help at the right time. Our mission
              is to be that right help at the right time.
              <br />
              We do that by leveraging the best in technology to meet students
              where they are at and at the same time giving teachers the data
              insights to help them move away from a one-size fits all classroom
              to one that is highly{' '}
              {country === 'AU' ? 'personalised' : 'personalized'} for each
              student.”
            </p>
          </div>
        </div>
        <div className="row">
          <div className="imageWrapper">
            <img
              className="image"
              src={urlBuilders.imageUrl('aboutUs/alvin.jpg')}
              alt=""
            />
          </div>
          <div className="textWrapper">
            <h3 className="title">Alvin Savoy, CTO</h3>
            <p className="description">
              “Through an early interest in programming, I was fortunate to have
              an experience with {country === 'AU' ? 'maths' : 'math'} that was
              interactive and engaging. Mathspace was the perfect opportunity
              for us to share our passion with students around the world.”
            </p>
          </div>
        </div>
        <div className="row">
          <div className="imageWrapper">
            <img
              className="image"
              src={urlBuilders.imageUrl('aboutUs/chris.jpg')}
              alt=""
            />
          </div>
          <div className="textWrapper">
            <h3 className="title">Chris Velis, COO</h3>
            <p className="description">
              “What I love most about Mathspace is seeing the amazing team we
              have now in action, delivering on the vision of{' '}
              {country === 'AU' ? 'personalised' : 'personalized'} learning at
              scale, and seeing the improvements that they are constantly adding
              to the product - knowing how much of a positive impact to learning
              outcomes Mathspace is making for students today at a global level
              gives me a real kick!”
            </p>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 30px 24px 50px;
        background: ${colors.athensGray};
      }
      .wrapper {
        max-width: 920px;
        margin: 0 auto;
      }
      .row + .row {
        margin-top: 41px;
      }
      .imageWrapper {
        text-align: center;
      }
      .image {
        width: 128px;
      }
      .textWrapper {
        padding: 0 30px;
      }
      .title {
        color: ${colors.cloudBurst};
        font-size: 18px;
        line-height: ${lineHeights.h2};
        font-weight: ${fontWeights.semibold};
        margin: 16px 0 0 0;
      }
      .description {
        color: ${colors.cloudBurst};
        font-size: 14px;
        color: ${colors.santasGray};
        line-height: 1.6;
        margin-top: 7px;
      }
      @media (min-width: ${breakPoints.medium}px) {
        .container {
          margin-top: 33px;
          padding: 70px 24px 50px;
        }
        .imageWrapper {
          margin: 0;
          flex: 1;
          min-width: 129px;
          max-width: 258px;
        }
        .textWrapper {
          flex: 5;
          max-width: 632px;
          padding: 0 0 0 30px;
        }
        .row {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .image {
          width: 100%;
        }
        .title {
          margin: 35px 0 0 0;
        }
        .description {
        }
      }
    `}</style>
  </Fragment>
);

export default Team;
