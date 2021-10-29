// @flow

import React, { Fragment } from 'react';

import Button from 'components/Button';
import { urlBuilders } from 'utils/urls';
import {
  breakPoints,
  colors,
  fontWeights,
  fontSizes,
  lineHeights,
} from 'utils/theme';
import sendEvent from 'utils/analytics';

type Props = { country: 'AU' | 'US' };
const LearnMore = ({ country }: Props) => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="leftSection">
          <div className="imageWrapper">
            <img
              className="image"
              src={urlBuilders.imageUrl('teachingRemotely/parents.jpg')}
              alt=""
            />
          </div>
        </div>
        <div className="rightSection">
          <h2 className="title">
            {country === 'AU'
              ? 'A simple guide to running a remote maths classroom'
              : 'A simple guide to running a remote math classroom'}
          </h2>
          <p className="description">
            Join our global webinar which is useful for schools that are already
            running remote teaching, or preparing to implement remote teaching.
          </p>
          <div className="buttonWrapper">
            <Button
              href={
                country === 'AU'
                  ? 'https://webinar.mathspace.co/registration?id=14'
                  : 'https://webinar.mathspace.co/us/registration?id=13'
              }
              onClick={event => {
                event.preventDefault();
                sendEvent(
                  'learn-more-register',
                  'clicked',
                  'teaching-remotely',
                ).then(() => {
                  window.location.assign(
                    country === 'AU'
                      ? 'https://webinar.mathspace.co/registration?id=14'
                      : 'https://webinar.mathspace.co/us/registration?id=13',
                  );
                });
              }}
              color="lochmara"
              isFilled
              isBlock
            >
              Watch now
            </Button>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 50px 24px;
      }
      .wrapper {
        max-width: 1110px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .leftSection {
        max-width: 550px;
        width: 100%;
        margin-bottom: 20px;
      }
      .rightSection {
        max-width: 550px;
        width: 100%;
        margin-left: 0;
      }
      .imageWrapper {
        max-width: 550px;
      }
      .image {
        width: 100%;
      }
      .buttonWrapper {
        max-width: initial;
        width: 100%;
        margin-top: 30px;
      }
      .title {
        color: ${colors.cloudBurst};
        font-size: ${fontSizes.mobile.h2}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.body};
      }
      .description {
        font-size: ${fontSizes.mobile.bodyLG}px;
        font-weight: ${fontWeights.regular};
      }

      @media (min-width: ${breakPoints.medium}px) {
        .wrapper {
          flex-direction: row;
        }
        .leftSection {
          margin-bottom: 0;
        }
        .rightSection {
          margin-left: 20px;
        }
        .buttonWrapper {
          max-width: 250px;
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

export default LearnMore;
