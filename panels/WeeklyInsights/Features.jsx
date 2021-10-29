// @flow

import React, { Fragment, type Node, useState } from 'react';
import classNames from 'classnames';

import {
  breakPoints,
  colors,
  borderRadius,
  mobileFontSizes,
  desktopFontSizes,
  fontWeights,
  lineHeights,
  transitions,
} from 'utils/theme';
import { urlBuilders } from 'utils/urls';

type AccordionProps = {
  title: string,
  isOpen: boolean,
  onClick: Function,
  children?: Node,
};

const Accordion = ({ title, isOpen, onClick, children }: AccordionProps) => {
  const sectionContentClass = classNames({
    sectionContent: true,
    opened: isOpen,
  });
  const accordionContainerClass = classNames({
    accordionContainer: true,
    containerOpened: isOpen,
  });
  const sectionHeaderClass = classNames({
    sectionHeader: true,
    sectionHeaderOpened: isOpen,
  });
  const headerWrapperClass = classNames({
    headerWrapper: true,
    headerWrapperOpen: isOpen,
  });
  const chevronWrapperClass = classNames({
    chevronWrapper: true,
    chevronWrapperOpened: isOpen,
  });
  return (
    <Fragment>
      {/* eslint-disable-next-line */}
      <div className={accordionContainerClass} onClick={onClick}>
        <div className={headerWrapperClass}>
          <h3 className={sectionHeaderClass}>{title}</h3>
          <div className={chevronWrapperClass}>
            <svg width="14" height="9" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 8l5.698-6L13 8"
                stroke={isOpen ? colors.cloudBurst : colors.white}
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>
        <div className={sectionContentClass}>{children}</div>
      </div>
      <style jsx>{`
        .accordionContainer {
          overflow: hidden;
          background-color: ${colors.cloudBurst};
          padding: 15px 10px;
          border-radius: ${borderRadius.default}px;
          cursor: pointer;
        }
        .sectionHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: ${colors.white};
          font-size: ${mobileFontSizes.body}px;
          font-weight: ${fontWeights.regular};
          line-height: ${lineHeights.h3};
          padding-bottom: 4px;
          user-select: none;
          margin: 0;
        }
        .sectionContent {
          margin: 0;
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          color: ${colors.cloudBurst};
          font-size: ${mobileFontSizes.subInfo}px;
          transition: opacity ${transitions.default},
            max-height ${transitions.default}, margin ${transitions.default};
        }
        .opened {
          margin: 15px 0;
          max-height: 500px;
          opacity: 1;
        }
        .containerOpened {
          background-color: ${colors.white};
          cursor: default;
        }
        .sectionHeaderOpened {
          color: ${colors.cloudBurst};
        }
        .headerWrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 5px;
        }
        .headerWrapperOpen {
          border-bottom: 1px solid ${colors.iron};
          padding-bottom: 10px;
        }
        .chevronWrapper {
          max-width: 15px;
          transform: rotate(0.5turn);
          transition: transform ${transitions.default};
          display: flex;
        }
        .chevronWrapperOpened {
          transform: rotate(0turn);
        }

        @media (min-width: ${breakPoints.medium}px) {
          .sectionHeader {
            font-size: ${desktopFontSizes.body}px;
          }
          .sectionContent {
            font-size: ${mobileFontSizes.subInfo}px;
          }
        }
      `}</style>
    </Fragment>
  );
};

/*
  State = {
    selected:
    'student activity' | 'student assistance' | 'class questions' |
    'top subtopics'| 'excelling students'
  }
*/
const Features = () => {
  const [selected, setSelected] = useState('student activity');
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <h2 className="title">Why use Weekly Insights?</h2>
          <div className="contentContainer">
            <div className="accordionContainer">
              <div className="accordionWrapper">
                <Accordion
                  title="Student activity snapshot"
                  color="java"
                  onClick={() => {
                    setSelected('student activity');
                  }}
                  isOpen={selected === 'student activity'}
                >
                  <div className="accordionContent">
                    See how productive your students have been in and out of
                    class based on the number of questions they&#39;ve
                    completed.
                  </div>
                </Accordion>
              </div>
              <div className="accordionWrapper">
                <Accordion
                  title="See which students need assistance"
                  color="java"
                  onClick={() => {
                    setSelected('student assistance');
                  }}
                  isOpen={selected === 'student assistance'}
                >
                  <div className="accordionContent">
                    Get a list of your students that need some extra help to
                    progress through a subtopic.
                  </div>
                </Accordion>
              </div>
              <div className="accordionWrapper">
                <Accordion
                  title="Questions to go through as a class"
                  color="java"
                  onClick={() => {
                    setSelected('class questions');
                  }}
                  isOpen={selected === 'class questions'}
                >
                  <div className="accordionContent">
                    Get a recommendation list of the best questions for you to
                    go through as a class, based on the questions students
                    struggled with the most.
                  </div>
                </Accordion>
              </div>
              <div className="accordionWrapper">
                <Accordion
                  title="Top subtopics to address"
                  color="java"
                  onClick={() => {
                    setSelected('top subtopics');
                  }}
                  isOpen={selected === 'top subtopics'}
                >
                  <div className="accordionContent">
                    Get a list of the top subtopics your students need help
                    with. You can use these insights to tailor lessons or
                    homework tasks.
                  </div>
                </Accordion>
              </div>
              <div className="accordionWrapper">
                <Accordion
                  title="See which students are excelling"
                  color="java"
                  onClick={() => {
                    setSelected('excelling students');
                  }}
                  isOpen={selected === 'excelling students'}
                >
                  <div className="accordionContent">
                    Get a list of your top performing students who are excelling
                    in three or more subtopics.
                  </div>
                </Accordion>
              </div>
            </div>
            <div className="imageContainer">
              {selected === 'student activity' && (
                <img
                  className="image"
                  src={urlBuilders.imageUrl(
                    'weeklyInsights/insights-activity.png',
                  )}
                  alt=""
                />
              )}
              {selected === 'student assistance' && (
                <img
                  className="image"
                  src={urlBuilders.imageUrl(
                    'weeklyInsights/insights-assistance.png',
                  )}
                  alt=""
                />
              )}
              {selected === 'class questions' && (
                <img
                  className="image"
                  src={urlBuilders.imageUrl(
                    'weeklyInsights/insights-questions.png',
                  )}
                  alt=""
                />
              )}
              {selected === 'top subtopics' && (
                <img
                  className="image"
                  src={urlBuilders.imageUrl(
                    'weeklyInsights/insights-subtopics.png',
                  )}
                  alt=""
                />
              )}
              {selected === 'excelling students' && (
                <img
                  className="image"
                  src={urlBuilders.imageUrl(
                    'weeklyInsights/insights-excelling.png',
                  )}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          padding: 50px 24px 0;
          background-color: ${colors.pickledBluewood};
        }
        .wrapper {
          max-width: 900px;
          width: 100%;
          margin: 0 auto;
        }
        .title {
          text-align: center;
          font-size: ${mobileFontSizes.h2}px;
          font-weight: ${fontWeights.regular};
          line-height: ${lineHeights.h2};
          color: ${colors.white};
          margin-bottom: 50px;
        }
        .contentContainer {
          display flex;
          justify-content: center;
          align-items: center;
        }
        .accordionContainer {
          max-width: 500px;
          width: 100%;
          height: 425px;
        }
        .accordionWrapper {
          margin-bottom: 10px;
        }
        .imageContainer {
          display: none;
          max-width: 300px;
          width: 100%;
          margin-left: 50px;
          align-items: center;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .title {
            font-size: ${desktopFontSizes.h2}px;
          }
          .imageContainer {
            display: flex;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Features;
