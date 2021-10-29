// @flow

import React, { Fragment } from 'react';
import Button from 'components/Button';
import { urlBuilders } from 'utils/urls';
import {
  colors,
  breakPoints,
  fontSizes,
  fontWeights,
  lineHeights,
} from 'utils/theme';
import sendEvent from 'utils/analytics';

const WhyMathspace = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <h2 className="title">
          Why is Mathspace offering free access to coronavirus-impacted schools?
        </h2>
        <div className="contentWrapper">
          <div className="leftSection">
            <div className="quote">
              &quot;As we hear reports of more schools closing as a precaution
              against Coronavirus we’re of course happy to extend that offer to
              any school that has been affected&quot;
            </div>
            <div className="jobTitle">Mohamad Jebara, CEO Mathspace</div>
            <div className="buttonWrapper">
              <Button
                color="lochmara"
                href="https://www.linkedin.com/pulse/balancing-self-collective-interests-during-outbreak-mohamad-jebara/"
                isFilled
                isBlock
                onClick={event => {
                  event.preventDefault();
                  sendEvent('learn-more').then(() =>
                    window.location.assign(
                      'https://www.linkedin.com/pulse/balancing-self-collective-interests-during-outbreak-mohamad-jebara/',
                    ),
                  );
                }}
              >
                Learn more
              </Button>
            </div>
          </div>
          <div className="rightSection">
            <div className="imageWrapper">
              <img
                className="image"
                src={urlBuilders.imageUrl('coronavirus/mo-profile.png')}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 50px 24px;
        background-color: ${colors.athensGray};
      }
      .wrapper {
        max-width: 800px;
        margin: 0 auto;
      }
      .title {
        font-size: ${fontSizes.mobile.h2}px;
        font-weight: ${fontWeights.semibold};
        color: ${colors.cloudBurst};
        text-align: center;
        margin-bottom: 30px;
      }
      .contentWrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .leftSection {
        max-width: 420px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .quote {
        color: ${colors.cloudBurst};
        font-size: 20px;
        line-height: ${lineHeights.body};
      }
      .jobTitle {
        margin-top: 10px;
        font-weight: ${fontWeights.semibold};
        color: ${colors.cloudBurst};
      }
      .buttonWrapper {
        max-width: inherit;
        margin-top: 20px;
      }
      .rightSection {
        max-width: 395px;
        margin-top: 30px;
      }
      .imageWrapper {
        max-width: 300px;
      }
      .image {
        width: 100%;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .title {
          font-size: ${fontSizes.desktop.h2}px;
        }
        .contentWrapper {
          flex-direction: row;
        }
        .buttonWrapper {
          max-width: 200px;
        }
        .rightSection {
          margin-top: 0;
        }
      }
    `}</style>
  </Fragment>
);

export default WhyMathspace;
