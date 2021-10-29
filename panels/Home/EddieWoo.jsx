// @flow

import React, { Fragment } from 'react';

import Button from 'components/Button';

import { urls, urlBuilders } from 'utils/urls';
import sendEvent from 'utils/analytics';
import {
  breakPoints,
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
} from 'utils/theme';

const EDDIE_WOO = 'eddie-woo';

const EddieWoo = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="leftSection">
          <img
            className="image"
            src={urlBuilders.imageUrl('homepage/eddie-woo.jpg')}
            alt=""
          />
        </div>
        <div className="rightSection">
          <h3 className="title">Teach with Eddie Woo</h3>
          <p className="description">
            Eddie Woo is a YouTube sensation who has inspired millions of maths
            students around the world. We’ve teamed up to give you free access
            to his maths videos, all mapped to your curriculum with Mathspace.
          </p>
          <div className="buttonWrapper">
            <Button
              color="lochmara"
              isFilled
              isBlock
              href={urls.eddieWoo}
              data-event-label={EDDIE_WOO}
              onClick={event => {
                event.preventDefault();
                sendEvent(EDDIE_WOO).then(() => {
                  window.location.assign(urls.eddieWoo);
                });
              }}
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 70px 24px;
      }
      .wrapper {
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
      }
      .leftSection {
        max-width: 300px;
        margin-bottom: 30px;
      }
      .imageWrapper {
        width: 100%;
      }
      .image {
        width: 100%;
      }
      .rightSection {
        max-width: 440px;
      }
      .title {
        margin: 0 0 20px;
        font-size: ${fontSizes.mobile.h2}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.body};
        color: ${colors.cloudBurst};
      }
      .description {
        margin: 0 0 30px;
        font-size: ${fontSizes.mobile.bodyLG}px;
        font-weight: ${fontWeights.regular};
        line-height: ${lineHeights.body};
        color: ${colors.santasGray};
      }
      .buttonWrapper {
        max-width: initial;
        width: 100%;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .wrapper {
          flex-direction: row;
          text-align: left;
        }
        .leftSection {
          margin-bottom: 0;
        }
        .title {
          font-size: ${fontSizes.desktop.h2}px;
        }
        .description {
          font-size: ${fontSizes.desktop.bodyLG}px;
        }
        .buttonWrapper {
          max-width: 250px;
        }
      }
    `}</style>
  </Fragment>
);

export default EddieWoo;
