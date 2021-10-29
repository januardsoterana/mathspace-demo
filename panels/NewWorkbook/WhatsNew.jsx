// @flow

import React, { type Node, Fragment } from 'react';
import classNames from 'classnames';

import { urlBuilders } from 'utils/urls';
import {
  colors,
  desktopFontSizes,
  mobileFontSizes,
  lineHeights,
  fontWeights,
  breakPoints,
  transitions,
} from 'utils/theme';

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
  const dropdownIconClass = classNames({
    dropdownIcon: true,
    iconOpened: isOpen,
  });
  return (
    <Fragment>
      <div className="accordionContainer">
        {/* eslint-disable-next-line */}
        <div className="sectionHeader" onClick={onClick}>
          {title}
          <div className={dropdownIconClass}>
            <svg width="14" height="9" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 8l5.698-6L13 8"
                stroke={colors.java}
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>
        <div className={sectionContentClass}>
          <div>{children}</div>
        </div>
      </div>
      <style jsx>{`
        .accordionContainer {
          overflow: hidden;
        }
        .sectionHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: ${colors.java};
          font-size: ${desktopFontSizes.body}px;
          padding-bottom: 4px;
          cursor: pointer;
          user-select: none;
        }
        .sectionContent {
          margin: 0;
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: opacity ${transitions.default},
            max-height ${transitions.default}, margin ${transitions.default};
        }
        .dropdownIcon {
          max-width: 15px;
          transform: rotate(0.5turn);
          transition: transform ${transitions.default};
          display: flex;
        }
        .iconOpened {
          transform: rotate(0turn);
        }
        .opened {
          margin: 15px 0;
          max-height: 500px;
          opacity: 1;
        }
      `}</style>
    </Fragment>
  );
};

type WhatsNewProps = {};
type WhatsNewState = {
  selected: 'hints' | 'navigation' | 'icons' | 'progress',
};

class WhatsNew extends React.Component<WhatsNewProps, WhatsNewState> {
  constructor(props: WhatsNewProps) {
    super(props);
    this.state = { selected: 'hints' };
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="wrapper">
            <div className="leftSection">
              <div className="title">What&#39;s New</div>
              <div className="accordionWrapper">
                <Accordion
                  title="A new hint experience"
                  color="java"
                  onClick={() => {
                    this.setState(state => ({ ...state, selected: 'hints' }));
                  }}
                  isOpen={this.state.selected === 'hints'}
                >
                  <div className="accordionContent">
                    Access hints for each step in a solution, and video
                    walkthroughs for each question. Having access to help when
                    you’re struggling is important to fostering a growth
                    mindset. Best of all, you won’t be penalised for using these
                    help options.
                  </div>
                </Accordion>
              </div>
              <div className="accordionWrapper">
                <Accordion
                  title="More than a progress bar"
                  color="java"
                  onClick={() => {
                    this.setState(state => ({
                      ...state,
                      selected: 'navigation',
                    }));
                  }}
                  isOpen={this.state.selected === 'navigation'}
                >
                  <div className="accordionContent">
                    Click the new progress bar to navigate between questions in
                    a task whilst remaining in the Workbook. You can use it to
                    review questions you&#39;ve previously attempted, or to skip
                    questions when you get stuck.
                  </div>
                </Accordion>
              </div>
              <div className="accordionWrapper">
                <Accordion
                  title="Icons that tell you more"
                  color="java"
                  onClick={() => {
                    this.setState(state => ({ ...state, selected: 'icons' }));
                  }}
                  isOpen={this.state.selected === 'icons'}
                >
                  <div className="accordionContent">
                    Our new working icons give more specific feedback about each
                    step. You can now tell whether you’re on one of Mathspace’s
                    solution paths, or travelling solo along your own solution
                    path.
                  </div>
                </Accordion>
              </div>
              <div className="accordionWrapper">
                <Accordion
                  title="Track and celebrate progress"
                  color="java"
                  onClick={() => {
                    this.setState(state => ({
                      ...state,
                      selected: 'progress',
                    }));
                  }}
                  isOpen={this.state.selected === 'progress'}
                >
                  <div className="accordionContent">
                    Your progress is now displayed at the end of each question
                    in a task, and progress is worth celebrating! Leave us a
                    thumbs up if you enjoyed a question, or suggest some
                    improvements instead.
                  </div>
                </Accordion>
              </div>
            </div>
            <div className="rightSection">
              {this.state.selected === 'hints' && (
                <img
                  className="image"
                  src={urlBuilders.imageUrl(
                    'newWorkbook/a-new-hint-experience.svg',
                  )}
                  alt=""
                />
              )}
              {this.state.selected === 'navigation' && (
                <img
                  className="image"
                  src={urlBuilders.imageUrl(
                    'newWorkbook/navigate-through-questions.svg',
                  )}
                  alt=""
                />
              )}
              {this.state.selected === 'icons' && (
                <img
                  className="image"
                  src={urlBuilders.imageUrl(
                    'newWorkbook/new-working-icons.svg',
                  )}
                  alt=""
                />
              )}
              {this.state.selected === 'progress' && (
                <img
                  className="image"
                  src={urlBuilders.imageUrl(
                    'newWorkbook/celebrate-progress.svg',
                  )}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
        <style jsx>{`
          .container {
            background-color: ${colors.ebony};
            padding: 50px 24px 100px;
          }
          .wrapper {
            max-width: 900px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
          }
          .leftSection {
            max-width: 440px;
            height: 525px;
            width: 100%;
            margin-right: 0;
          }
          .title {
            color: ${colors.white};
            font-size: ${mobileFontSizes.h2}px;
            font-weight: ${fontWeights.semibold};
            line-height: ${lineHeights.h2};
            margin-bottom: 50px;
          }
          .accordionWrapper {
            margin-bottom: 30px;
            padding-bottom: 16px;
            border-bottom: 1px solid ${colors.vulcan};
          }
          .accordionWrapper:last-child {
            border-bottom: none;
          }
          .accordionContent {
            color: ${colors.santasGray};
            font-size: ${mobileFontSizes.subInfo}px;
          }
          .rightSection {
            max-width: 400px;
            width: 100%;
            display: none;
            align-items: center;
            justify-content: flex-end;
            margin-left: 60px;
          }
          .image {
            width: 100%;
            max-height: 458px;
          }

          @media (min-width: ${breakPoints.medium}px) {
            .leftsection: {
              margin-right: 20px;
            }
            .rightSection {
              display: flex;
            }
            .title {
              font-size: ${desktopFontSizes.h2}px;
            }
            .wrapper {
              flex-direction: row;
            }
            .accordionContent {
              font-size: ${desktopFontSizes.subInfo};
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default WhatsNew;
