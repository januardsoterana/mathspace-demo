// @flow

import React, { Fragment, useState, useEffect } from 'react';

import CarouselSection from 'components/Homepage/CarouselSection';
import Chevron from 'components/Shared/SVG/Chevron';
import {
  colors,
  fontWeights,
  fontSizes,
  breakPoints,
  lineHeights,
  borderRadius,
} from 'utils/theme';
import sendEvent from 'utils/analytics';
import { type RemoteTeachingResource } from 'utils/types';

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

type CardProps = {
  title: string,
  actionText: string,
  imageUrl: string,
  link: string,
  download: string,
};
const Card = ({ title, actionText, imageUrl, link, download }: CardProps) => (
  <Fragment>
    <div
      className="cardWrapper"
      role="button"
      tabIndex="0"
      onClick={() => {
        if (actionText === 'Download') {
          sendEvent('resources', 'download', 'teaching-remotely');
        }
      }}
      onKeyPress={() => {
        if (actionText === 'Download') {
          sendEvent('resources', 'download', 'teaching-remotely');
        }
      }}
    >
      <a
        className="link"
        href={actionText === 'Download' ? download : link}
        download={actionText === 'Download'}
        onClick={event => {
          if (actionText !== 'Download') {
            event.preventDefault();
            sendEvent('resources', 'clicked', 'teaching-remotely').then(() => {
              window.location.assign(link);
            });
          }
        }}
      >
        <div className="topSection">
          <h3 className="title">{title}</h3>
          <div className="actionText">{actionText}</div>
        </div>
        <div className="imageWrapper" />
      </a>
    </div>
    <style jsx>{`
      .cardWrapper {
        max-width: 350px;
        width: 100%;
        display: flex;
        flex-direction: column;
        white-space: normal;
        background-color: ${colors.white};
        border-radius: ${borderRadius.default}px;
      }
      .link {
        text-decoration: none;
      }
      .topSection {
        padding: 20px;
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .title {
        color: ${colors.cloudBurst};
        font-size: ${fontSizes.mobile.h3}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.body};
        white-space: normal;
      }
      .actionText {
        color: ${colors.lochmara};
        font-weight: ${fontWeights.semibold};
      }
      .imageWrapper {
        width: 100%;
        height: 200px;
        background-image: url(${imageUrl});
        background-position: center;
        background-size: cover;
        border-bottom-left-radius: ${borderRadius.default}px;
        border-bottom-right-radius: ${borderRadius.default}px;
      }
      .image {
        width: 100%;
        height: 100%;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .title {
          font-size: ${fontSizes.desktop.h3}px;
        }
      }
    `}</style>
  </Fragment>
);

type Props = { data: Array<RemoteTeachingResource> };

const Resources = ({ data }: Props) => {
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
    data.sort((a, b) => b.id - a.id),
    cardsPerSection,
  );
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <h3 className="title">Helpful resources for remote teachers</h3>
          {carouselSections.map(section => (
            <div key={section.id} className="sectionWrapper">
              <CarouselSection>
                {section.list.map(card => (
                  <div key={card.id} className="cardWrapper">
                    <Card
                      title={card.title}
                      actionText={card.action}
                      imageUrl={card.image}
                      link={card.link}
                      download={card.download}
                    />
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
          padding: 50px 24px;
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
          color: ${colors.cloudBurst};
          font-weight: ${fontWeights.semibold};
          font-size: ${fontSizes.mobile.h2}px;
          text-align: center;
          white-space: normal;
          margin: 0 0 50px;
        }
        .sectionWrapper {
          display: inline-block;
          transition: transform 0.5s ease-in-out;
          transform: ${`translateX(${wrapperWidth * position}px)`};
        }
        .cardWrapper + .cardWrapper {
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
          .controlButtons {
            margin: 40px auto 0;
          }
          .indicators {
            display: flex;
          }
          .title {
            font-size: ${fontSizes.desktop.h2}px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Resources;
