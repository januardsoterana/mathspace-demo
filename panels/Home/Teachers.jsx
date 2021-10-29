// @flow

import React, { Fragment, useState } from 'react';

import TestimonialQuote from 'components/Homepage/SVG/TestimonialQuote';
import Accordion from 'components/Homepage/Accordion';

import { urlBuilders } from 'utils/urls';
import {
  colors,
  borderRadius,
  fontSizes,
  fontWeights,
  lineHeights,
  breakPoints,
} from 'utils/theme';
import sendEvent from 'utils/analytics';

const TEACHER_BENEFITS = 'teacher-benefits';

type Props = {|
  localeData: {
    title: string,
    description: string,
    list: Array<{
      title: string,
      items: Array<{ icon: string, text: string }>,
    }>,
    testimony: {
      body: string,
      info: string,
      image: string,
    },
  },
|};
const Teachers = ({ localeData }: Props) => {
  const [selected, setSelected] = useState(localeData.list[0].title);
  return (
    <Fragment>
      <div className="container">
        <img
          className="blobImage"
          src={urlBuilders.imageUrl('homepage/teacher-blob.svg')}
          alt=""
        />
        <img
          className="backgroundImage"
          src={urlBuilders.imageUrl('homepage/teacher-background.svg')}
          alt=""
        />
        <div className="wrapper">
          <div className="leftSection">
            <img
              className="image"
              src={urlBuilders.imageUrl('homepage/teacher-laptop.png')}
              alt=""
            />
          </div>
          <div className="rightSection">
            <h4 className="title">{localeData.title}</h4>
            <div className="description">{localeData.description}</div>
            <div className="mobileImageWrapper">
              <img
                className="image"
                src={urlBuilders.imageUrl('homepage/teacher-laptop.png')}
                alt=""
              />
            </div>
            <div className="accordionSection">
              {localeData.list.map(item => (
                <div key={item.title} className="accordionWrapper">
                  <Accordion
                    title={item.title}
                    color="java"
                    onClick={() => {
                      if (selected !== item.title)
                        sendEvent(`${TEACHER_BENEFITS}-${item.title}`);
                      setSelected(item.title);
                    }}
                    isOpen={selected === item.title}
                  >
                    <div className="accordionContent">
                      {item.items.map(content => (
                        <div key={content.text} className="contentItem">
                          <img className="icon" src={content.icon} alt="" />
                          {content.text}
                        </div>
                      ))}
                    </div>
                  </Accordion>
                </div>
              ))}
            </div>
            <div className="testimonyWrapper">
              <div className="quoteMarkLeft">
                <TestimonialQuote />
              </div>
              <div className="testimony">{localeData.testimony.body}</div>
              <div className="bottomSection">
                <div className="authorWrapper">
                  {/* <img
                    className="authorImage"
                    src={localeData.testimony.image}
                    alt=""
                  /> */}
                  <div className="authorInfo">{localeData.testimony.info}</div>
                </div>
                <div className="quoteMarkRight">
                  <TestimonialQuote />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          padding: 70px 24px;
          position: relative;
        }
        .blobImage {
          display: none;
          position: absolute;
          right: 20px;
          top: -75px;
          z-index: -1;
        }
        .backgroundImage {
          position: absolute;
          left: 0;
          top: 20%;
          z-index: -1;
          max-height: 260px;
        }
        .wrapper {
          display: flex;
          justify-content: center;
          max-width: 1110px;
          margin: 0 auto;
        }
        .leftSection {
          margin-right: 50px;
          max-width: 100%;
          display: none;
          align-items: center;
          max-height: 456px;
        }
        .rightSection {
          max-width: 100%;
        }
        .title {
          color: ${colors.cloudBurst};
          font-size: ${fontSizes.mobile.h2}px;
          font-weight: ${fontWeights.semibold};
          line-height: ${lineHeights.body};
          margin-top: 0;
          margin-bottom: 10px;
          text-align: center;
        }
        .description {
          color: ${colors.santasGray};
          line-height: ${lineHeights.body};
          font-size: ${fontSizes.mobile.bodyLG}px;
          text-align: center;
        }
        .mobileImageWrapper {
          margin: 60px 0;
          display: flex;
          position: relative;
          justify-content: center;
        }
        .accordionSection {
          margin-top: 0;
          min-height: 360px;
        }
        .accordionWrapper {
          background-color: ${colors.white};
          border-radius: ${borderRadius.default}px;
        }
        .accordionWrapper + .accordionWrapper {
          margin-top: 10px;
        }
        .contentItem {
          display: flex;
          align-items: center;
        }
        .icon {
          margin-right: 10px;
          min-width: 25px;
        }
        .text {
          margin: 0;
          line-height: ${lineHeights.body};
        }
        .contentItem + .contentItem {
          margin-top: 15px;
        }
        .image {
          width: 100%;
          height: 100%;
        }
        .testimony {
          font-style: italic;
          color: ${colors.santasGray};
          font-size: ${fontSizes.mobile.bodyLG}px;
        }
        .bottomSection {
          margin-top: 15px;
          display: flex;
          justify-content: space-between;
        }
        .authorWrapper {
          display: flex;
          align-items: center;
        }
        .authorInfo {
          color: ${colors.cloudBurst};
          font-size: ${fontSizes.mobile.bodySM}px;
          padding-right: 10px;
        }
        .authorImage {
          width: 50px;
          height: 50px;
          margin-right: 10px;
        }
        .quoteMarkLeft {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }
        .quoteMarkRight {
          transform: rotate(180deg);
          display: flex;
          align-items: flex-end;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .blobImage {
            display: block;
          }
          .backgroundImage {
            max-height: 550px;
            top: 15%;
          }
          .image {
            height: initial;
          }
          .title {
            font-size: ${fontSizes.desktop.h2}px;
            text-align: left;
          }
          .description {
            text-align: left;
          }
          .leftSection {
            display: flex;
            max-width: 50%;
            max-height: initial;
          }
          .rightSection {
            max-width: 50%;
          }
          .mobileImageWrapper {
            display: none;
          }
          .accordionSection {
            margin-top: 20px;
            min-height: 320px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Teachers;
