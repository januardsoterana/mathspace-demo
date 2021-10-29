// @flow

import React, { Fragment, useState } from 'react';

import DifferenceFeature from 'components/Homepage/DifferenceFeature';
import Button from 'components/Button';
import Learning from 'components/Homepage/SVG/Learning';
import StudentData from 'components/Homepage/SVG/StudentData';
import Feedback from 'components/Homepage/SVG/Feedback';
import {
  colors,
  fontWeights,
  fontSizes,
  lineHeights,
  borderRadius,
  breakPoints,
} from 'utils/theme';
import { type CountryCodes } from 'utils/types';
import sendEvent from 'utils/analytics';

const TELL_ME_MORE_CTA = 'tell-me-more-cta';
const FOCUS_FEATURE = 'focus-feature';

const handleSlide = (
  position: number,
  listLength: number,
  direction: 'next' | 'prev',
): number => {
  // out of bounds
  if (
    (direction === 'next' && position <= -(listLength - 1)) ||
    (direction === 'prev' && position >= 0)
  ) {
    return position;
  }
  // handle next case
  if (direction === 'next') {
    return position - 1;
  }
  // handle prev case
  if (direction === 'prev') {
    return position + 1;
  }
  // default
  return position;
};

type Props = {|
  localeData: {
    title: string,
    subTitle: string,
    body: string,
    cards: Array<{ title: string, body: string }>,
  },
  onClick: () => void,
  country: CountryCodes,
|};
const Difference = ({ localeData, onClick, country }: Props) => {
  const [position, setPosition] = useState(0);
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <div className="topSection">
            <h3 className="title">{localeData.title}</h3>
            <h3 className="subHeader">{localeData.subTitle}</h3>
            <p className="body">{localeData.body}</p>
            <div className="buttonWrapper">
              <Button
                color="lochmara"
                hasBorder
                isBlock
                onClick={() => {
                  onClick();
                  sendEvent(TELL_ME_MORE_CTA);
                }}
              >
                Tell me more
              </Button>
            </div>
          </div>
          <div className="bottomSection">
            <div className="sliderWrapper">
              <div className="cardWrapper">
                <DifferenceFeature
                  title={localeData.cards[0].title}
                  description={localeData.cards[0].body}
                  icon={country === 'US' ? StudentData : Learning}
                  selected={position === 0}
                  onClick={() => {
                    setPosition(0);
                    sendEvent(`${FOCUS_FEATURE}-1`);
                  }}
                />
              </div>
              <div className="cardWrapper">
                <DifferenceFeature
                  title={localeData.cards[1].title}
                  description={localeData.cards[1].body}
                  icon={country === 'US' ? Learning : StudentData}
                  selected={position === -1}
                  onClick={() => {
                    setPosition(-1);
                    sendEvent(`${FOCUS_FEATURE}-2`);
                  }}
                />
              </div>
              <div className="cardWrapper">
                <DifferenceFeature
                  title={localeData.cards[2].title}
                  description={localeData.cards[2].body}
                  icon={Feedback}
                  selected={position === -2}
                  onClick={() => {
                    setPosition(-2);
                    sendEvent(`${FOCUS_FEATURE}-3`);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          padding: 70px 0;
          overflow: hidden;
        }
        .wrapper {
          max-width: 1110px;
          margin: 0 auto;
        }
        .topSection {
          text-align: center;
          max-width: 500px;
          margin: 0 auto 50px;
          padding: 0 24px;
        }
        .title {
          margin: 0;
          margin-bottom: 10px;
          color: ${colors.cloudBurst};
          font-size: ${fontSizes.mobile.h2}px;
          font-weight: ${fontWeights.semibold};
          line-height: ${lineHeights.body};
        }
        .subHeader {
          margin: 0;
          color: ${colors.cloudBurst};
          font-weight: ${fontWeights.semibold};
          font-size: ${fontSizes.mobile.h3}px;
          line-height: ${lineHeights.body};
        }
        .body {
          margin: 0;
          margin-bottom: 20px;
          color: ${colors.santasGray};
          line-height: ${lineHeights.body};
          font-size: ${fontSizes.mobile.h3}px;
        }
        .buttonWrapper {
          max-width: 200px;
          margin: 0 auto;
        }
        .bottomSection {
          position: relative;
          display: block;
          margin: 0 auto;
          padding: 10px 24px;
          justify-content: center;
          max-width: 300px;
        }
        .sliderWrapper {
          display: flex;
          width: 860px;
          transition: transform 0.5s ease-in-out;
          transform: ${`translateX(${282 * position}px)`};
        }
        .cardWrapper {
          display: inline-block;
          max-width: 272px;
          width: 100%;
          margin: 0 10px;
          border-radius: ${borderRadius.default}px;
        }
        .cardWrapper:nth-child(2) {
          margin-top: 0;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .title {
            font-size: ${fontSizes.desktop.h2}px;
          }
          .cardWrapper {
            margin: 0;
          }
          .cardWrapper:nth-child(2) {
            margin: 40px 20px 0;
          }
          .bottomSection {
            display: flex;
            overflow: initial;
            white-space: initial;
            max-width: 100%;
          }
          .sliderWrapper {
            transform: translateX(0);
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Difference;
