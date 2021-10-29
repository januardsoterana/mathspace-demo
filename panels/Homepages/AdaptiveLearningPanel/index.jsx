// @flow

import React, { Fragment } from 'react';
import Router from 'next/router';
import ClassNames from 'classnames';

import Button from 'components/Button';

import { urls, urlBuilders } from 'utils/urls';
import {
  breakPoints,
  colors,
  desktopFontSizes,
  mobileFontSizes,
  fontWeights,
  lineHeights,
} from 'utils/theme';
import sendCTAClickEvent from 'utils/analytics';

const MATHSPACE_FOR_SCHOOLS = 'mathspace-for-schools';

const MAX_MOBILE_ADAPTIVE_IMAGE_SIZE = 300;
const MAX_ADAPTIVE_IMAGE_SIZE = 450;
const ADAPTIVE_IMAGE_MARGIN_TOP = 20;
const ADAPTIVE_PANEL_MOBILE_PADDING = 15;
const ADAPTIVE_PANEL_CONTENT_MAX_SIZE = 380;

type AdaptiveLearningPanelProps = {|
  animate?: boolean,
|};
type AdaptiveLearningPanelState = {|
  hideContent: boolean,
|};

class AdaptiveLearningPanel extends React.Component<
  AdaptiveLearningPanelProps,
  AdaptiveLearningPanelState,
> {
  checkPosition: () => {};
  hiddenPanels: any;
  windowHeight: number;
  adaptiveLearningPanel: any;

  constructor(props: AdaptiveLearningPanelProps) {
    super(props);
    this.state = {
      hideContent: !!this.props.animate,
    };
    this.checkPosition = this.checkPosition.bind(this);
    this.adaptiveLearningPanel = React.createRef();
  }

  componentDidMount() {
    this.hiddenPanels = document.getElementsByClassName(
      'hiddenAdaptiveLearningPanel',
    );
    this.windowHeight = window.innerHeight;
    window.addEventListener('scroll', this.checkPosition, false);
    setTimeout(this.checkPosition, 0);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkPosition, false);
  }

  checkPosition() {
    if (
      this.adaptiveLearningPanel.current.getBoundingClientRect().top -
        this.windowHeight <=
      0
    ) {
      this.setState(state => ({ ...state, hideContent: false }));
      window.removeEventListener('scroll', this.checkPosition, false);
    }
  }

  render() {
    const adaptiveLearningWrapperClass = ClassNames({
      adaptiveLearningContainer: true,
      hiddenAdaptiveLearningPanel: true,
      fadeIn: !this.state.hideContent,
    });
    return (
      <Fragment>
        <section className="adaptiveLearningBackground">
          <div
            ref={this.adaptiveLearningPanel}
            className={adaptiveLearningWrapperClass}
          >
            <img
              className="imageWrapper"
              src={urlBuilders.imageUrl('legacyHomepage/teacher-adaptive.svg')}
              alt=""
            />
            <div className="rightContainer">
              <h2 className="headerText">
                Engage every student with step-by-step adaptive learning
              </h2>
              <div className="buttonWrapper">
                <Button
                  isFilled
                  color="crusta"
                  isBlock
                  href={urls.teachersAU}
                  data-event-label={MATHSPACE_FOR_SCHOOLS}
                  onClick={event => {
                    event.preventDefault();
                    sendCTAClickEvent(MATHSPACE_FOR_SCHOOLS).then(() => {
                      Router.push(urls.teachersAU);
                    });
                  }}
                >
                  See Mathspace for schools
                </Button>
              </div>
            </div>
          </div>
        </section>
        <style jsx>{`
          .adaptiveLearningBackground {
            background-color: ${colors.astronaut};
          }
          .adaptiveLearningContainer {
            display: flex;
            flex-direction: column-reverse;
            padding: 0 24px;
            align-items: center;
            justify-content: center;
          }
          .rightContainer {
            max-width: ${ADAPTIVE_PANEL_CONTENT_MAX_SIZE}px;
          }
          .headerText {
            font-size: ${mobileFontSizes.h3}px;
            font-weight: ${fontWeights.semibold};
            line-height: ${lineHeights.h3};
            color: ${colors.white};
            margin-top: 30px;
            margin-bottom: 30px;
          }
          .imageWrapper {
            max-width: ${MAX_MOBILE_ADAPTIVE_IMAGE_SIZE}px;
            margin-top: ${ADAPTIVE_IMAGE_MARGIN_TOP}px;
          }

          .hiddenAdaptiveLearningPanel {
            opacity: 0;
          }
          .fadeIn {
            animation: fade-in-panel 1s forwards;
          }
          @keyframes fade-in-panel {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @media (min-width: ${breakPoints.medium}px) {
            .adaptiveLearningContainer {
              flex-direction: row;
              align-items: flex-start;
              padding: 88px ${ADAPTIVE_PANEL_MOBILE_PADDING}px 0;
            }
            .rightContainer {
              margin-bottom: 56px;
            }
            .headerText {
              margin-top: 0;
              font-size: ${desktopFontSizes.h3}px;
            }
            .imageWrapper {
              max-width: ${MAX_ADAPTIVE_IMAGE_SIZE}px;
              margin-top: 0;
              margin-right: 40px;
            }
            .buttonWrapper {
              max-width: 260px;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default AdaptiveLearningPanel;
