// @flow

import React, { Fragment, useState, useEffect } from 'react';

import WebinarPreview from 'components/Homepage/WebinarPreview';
import CarouselSection from 'components/Homepage/CarouselSection';
import Chevron from 'components/Shared/SVG/Chevron';
import { colors, fontSizes, fontWeights, lineHeights } from 'utils/theme';
import { type WebinarPreview as WebinarPreviewObject } from 'utils/types';

const chunkArray = (
  array: Array<Object>,
  chunkSize: number,
): Array<{ id: number, list: Array<Object> }> => {
  if (chunkSize <= 0) return array;
  const result = [];
  let idx = 0;
  let id = 0;
  while (idx < array.length) {
    result.push({
      id,
      list: array.slice(idx, (idx += chunkSize)),
    });
    id += 1;
  }
  return result;
};

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

type Props = {
  webinars: Array<WebinarPreviewObject>,
};
const Webinars = ({ webinars }: Props) => {
  const [position, setPosition] = useState(0);
  const [matchesTablet, setMatchesTablet] = useState(false);
  const [matchesMobile, setMatchesMobile] = useState(false);

  useEffect(() => {
    let MQL = null;
    let MQS = null;
    function handleTabletMQ() {
      if (MQL == null) return;
      setMatchesTablet(MQL.matches);
    }
    function handleMobileMQ() {
      if (MQS == null) return;
      setMatchesMobile(MQS.matches);
    }
    // Check because jsdom doesn't have matchMedia
    if (window.matchMedia) {
      // Tablet size
      MQL = window.matchMedia(`(max-width: 1060px)`);
      const mql = MQL;
      mql.addListener(handleTabletMQ);
      setMatchesTablet(mql.matches);

      // Mobile size
      MQS = window.matchMedia(`(max-width: 755px)`);
      const mqs = MQS;
      mqs.addListener(handleMobileMQ);
      setMatchesMobile(mqs.matches);
    }
    return () => {
      if (MQL == null) return;
      MQL.removeListener(handleTabletMQ);
      if (MQS == null) return;
      MQS.removeListener(handleMobileMQ);
    };
  });

  let cardsPerSection = 3;
  let wrapperWidth = 1000;
  if (matchesTablet) {
    cardsPerSection = 2;
    wrapperWidth = 720;
  }
  if (matchesMobile) {
    cardsPerSection = 1;
    wrapperWidth = 312;
  }
  const carouselSections = chunkArray(
    webinars.sort((a, b) => (a.id < b.id ? -1 : 1)).reverse(),
    cardsPerSection,
  );
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <h2 className="title">Helpful resources for blended learning</h2>
          {carouselSections.map(section => (
            <div key={section.id} className="sectionWrapper">
              <CarouselSection>
                {section.list.map(webinar => (
                  <div key={webinar.id} className="webinar">
                    <WebinarPreview webinar={webinar} />
                  </div>
                ))}
              </CarouselSection>
            </div>
          ))}
        </div>
        <div className="controlButtons">
          <div
            className="prevButton"
            role="button"
            tabIndex="0"
            onKeyPress={() =>
              setPosition(
                handleSlide(position, carouselSections.length, 'prev'),
              )
            }
            onClick={() =>
              setPosition(
                handleSlide(position, carouselSections.length, 'prev'),
              )
            }
          >
            <div className="prevArrow">
              <Chevron
                color={position === 0 ? colors.santasGray : colors.white}
                strokeWidth={4}
              />
            </div>
          </div>
          <div className="indicators">
            {carouselSections.map(section => (
              <div
                key={section.id}
                className="indicatorClick"
                role="button"
                tabIndex="0"
                onKeyPress={() => setPosition(-section.id)}
                onClick={() => setPosition(-section.id)}
              >
                <div
                  className="indicator"
                  style={{
                    borderColor:
                      section.id === -position
                        ? colors.lochmara
                        : colors.dustyGray,
                  }}
                />
              </div>
            ))}
          </div>
          <div
            className="nextButton"
            role="button"
            tabIndex="0"
            onKeyPress={() =>
              setPosition(
                handleSlide(position, carouselSections.length, 'next'),
              )
            }
            onClick={() =>
              setPosition(
                handleSlide(position, carouselSections.length, 'next'),
              )
            }
          >
            <div className="nextArrow">
              <Chevron
                color={
                  position === -carouselSections.length + 1
                    ? colors.santasGray
                    : colors.white
                }
                strokeWidth={4}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          padding: 70px 24px;
          background-color: ${colors.athensGray};
          position: relative;
        }
        .wrapper {
          max-width: ${wrapperWidth}px;
          margin: 0 auto;
          overflow: hidden;
          white-space: nowrap;
        }
        .title {
          font-size: ${fontSizes.mobile.h2}px;
          font-weight: ${fontWeights.semibold};
          line-height: ${lineHeights.h2};
          color: ${colors.cloudBurst};
          white-space: normal;
          margin: 0 0 40px;
          text-align: center;
        }
        .sectionWrapper {
          display: inline-block;
          transition: transform 0.5s ease-in-out;
          transform: ${`translateX(${wrapperWidth * position}px)`};
        }
        .webinar + .webinar {
          margin-left: 20px;
        }
        .indicators {
          display: none;
          justify-content: center;
        }
        .indicatorClick {
          padding: 15px 5px;
          cursor: pointer;
          outline: none;
        }
        .indicator {
          border: 2px solid ${colors.dustyGray};
          width: 50px;
          transition: border-color 0.3s ease;
        }
        .controlButtons {
          display: flex;
          justify-content: space-between;
          max-width: 600px;
          margin: 20px auto 0;
        }
        .prevButton {
          cursor: pointer;
          outline: none;
        }
        .prevArrow {
          padding: 15px 13px;
          transform: rotate(-90deg);
          background-color: ${colors.cloudBurst};
          display: inline-flex;
          border-radius: 30px;
        }
        .nextButton {
          cursor: pointer;
          outline: none;
        }
        .nextArrow {
          padding: 15px 13px;
          transform: rotate(90deg);
          background-color: ${colors.cloudBurst};
          display: inline-flex;
          border-radius: 30px;
        }

        @media (min-width: 755px) {
          .title {
            font-size: ${fontSizes.desktop.h2}px;
          }
          .controlButtons {
            margin: 40px auto 0;
          }
          .indicators {
            display: flex;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Webinars;
