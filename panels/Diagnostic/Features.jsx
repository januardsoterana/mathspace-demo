// @flow

import React, { Fragment, useState } from 'react';

import TypeformModal from 'components/TypeformModal';
import WistiaModal from 'components/WistiaModal';
import {
  colors,
  mobileFontSizes,
  breakPoints,
  desktopFontSizes,
  lineHeights,
  fontWeights,
} from 'utils/theme';
import Button from 'components/Button';
import sendCTAClickEvent from 'utils/analytics';
import { type CountryCodes } from 'utils/types';

const WATCH_NOW = 'watch-now';
const TRY_IT_FOR_FREE = 'try-it-for-free';

const LOCALE_DATA = {
  AU: {
    title: 'Why choose Mathspace Diagnostics?',
    features: [
      {
        name: 'Affordable',
        description:
          'Purchase as a single, whole-school package with unlimited student access',
      },
      {
        name: 'Easy to use',
        description:
          'Use as a stand-alone product, or alongside any other resources',
      },
      {
        name: 'Expert insights',
        description:
          'Get a 1:1 session with our in-house teachers to analyse your data',
      },
    ],
  },
  US: {
    title: 'Be one of the first to explore Mathspace Diagnostics',
    features: [
      {
        name: 'Easy to use',
        description:
          'Use as a stand-alone product, or alongside any other resources',
      },
      {
        name: 'Actionable insights',
        description:
          'Quickly identify student strengths and weaknesses to plan next steps',
      },
      {
        name: 'Expert help',
        description:
          'Get a 1:1 session with our in-house teachers to analyze your data',
      },
    ],
  },
};

type Props = {| country: CountryCodes |};
const Features = ({ country }: Props) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [selectedModal, setSelectedModal] = useState('');
  const localeData = LOCALE_DATA[country];
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <div className="title">{localeData.title}</div>
          <div className="featureWrapper">
            {localeData.features.map(feature => (
              <div key={feature.name} className="feature">
                <div className="top">
                  <div className="featureName">{feature.name}</div>
                </div>
                <div className="bottom">
                  <div className="featureDescription">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="ctaWrapper">
            <div className="buttonWrapper">
              <Button
                color="bayOfMany"
                isBlock
                isFilled
                data-event-label={TRY_IT_FOR_FREE}
                onClick={() => {
                  setModalVisibility(true);
                  setSelectedModal('typeform');
                  sendCTAClickEvent(TRY_IT_FOR_FREE);
                }}
              >
                Try it for free
              </Button>
              <div className="smallText">30 day trial</div>
            </div>
            {country === 'AU' && (
              <div className="buttonWrapper">
                <Button
                  color="white"
                  isBlock
                  hasBorder
                  data-event-label={WATCH_NOW}
                  onClick={() => {
                    setModalVisibility(true);
                    setSelectedModal('wistia');
                    sendCTAClickEvent(WATCH_NOW);
                  }}
                >
                  Watch video
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      {modalVisibility && selectedModal === 'typeform' && (
        <TypeformModal
          typeFormId="MWy8zl"
          onClose={() => setModalVisibility(false)}
        />
      )}
      {modalVisibility && selectedModal === 'wistia' && (
        <WistiaModal
          videoId="ubj6exyqs3"
          onClose={() => setModalVisibility(false)}
        />
      )}
      <style jsx>{`
        .container {
          padding: 50px 24px;
          background-color: ${colors.cloudBurst};
        }
        .wrapper {
          max-width: 600px;
          margin: 0 auto;
        }
        .title {
          text-align: center;
          color: ${colors.white};
          font-size: ${mobileFontSizes.h2}px;
          line-height: ${lineHeights.h2};
        }
        .featureWrapper {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          margin: 30px auto 0;
        }
        .top {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bottom {
          margin-top: 10px;
        }
        .feature {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .feature + .feature {
          margin-top: 20px;
          margin-left: 0;
        }
        .featureDescription {
          color: ${colors.grayChateau};
          line-height: ${lineHeights.body};
        }
        .featureName {
          color: ${colors.white};
          font-weight: ${fontWeights.semibold};
        }
        .ctaWrapper {
          margin-top: 30px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
        }
        .buttonWrapper {
          max-width: 300px;
          width: 100%;
        }
        .buttonWrapper + .buttonWrapper {
          margin-left: 0;
          margin-top: 20px;
        }
        .smallText {
          text-align: center;
          margin-top: 5px;
          color: ${colors.santasGray};
        }

        @media (min-width: ${breakPoints.medium}px) {
          .container {
            padding: 100px 24px 50px;
          }
          .title {
            font-size: ${desktopFontSizes.h2}px;
          }
          .featureWrapper {
            flex-direction: row;
            max-width: initial;
          }
          .feature + .feature {
            margin-top: 0;
            margin-left: 20px;
          }
          .ctaWrapper {
            flex-direction: row;
          }
          .buttonWrapper {
            max-width: 185px;
          }
          .buttonWrapper + .buttonWrapper {
            margin-left: 20px;
            margin-top: 0;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Features;
