// @flow

import React, { Fragment } from 'react';
import classNames from 'classnames';

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

const LEARN_MORE_EDDIE_WOO = 'learn-more-eddie-woo';
const EDDIE_PANEL_CONTAINER_MAX_WIDTH = 1224;
const EDDIE_PANEL_IMAGE_WRAPPER_MAX_WIDTH = 656;
const EDDIE_PANEL_PARAGRAPH_SPACING_TOP = 24;
const EDDIE_PANEL_CONTENT_MAX_WIDTH = 536;
const EDDIE_PANEL_BUTTON_WRAPPER_MAX_WIDTH = 216;
const EDDIE_PANEL_BUTTON_WRAPPER_SPACING_TOP = 40;
const MOBILE_EDDIE_PANEL_CONTENT_WRAPPER_SPACING_TOP = 32;

type EddieProps = {|
  animate?: boolean,
|};
type EddieState = {|
  hideContent: boolean,
|};

class EddieWooPanel extends React.Component<EddieProps, EddieState> {
  eddieWoo: any;
  windowHeight: number;
  checkPosition: () => {};

  constructor(props: EddieProps) {
    super(props);
    this.state = { hideContent: !!this.props.animate };
    this.eddieWoo = React.createRef();
    this.checkPosition = this.checkPosition.bind(this);
  }

  componentDidMount() {
    this.windowHeight = window.innerHeight;
    window.addEventListener('scroll', this.checkPosition, false);
    setTimeout(this.checkPosition, 0);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkPosition, false);
  }

  checkPosition() {
    if (
      this.eddieWoo.current.getBoundingClientRect().top -
        200 -
        this.windowHeight <=
      0
    ) {
      this.setState(state => ({ ...state, hideContent: false }));
      window.removeEventListener('scroll', this.checkPosition, false);
    }
  }

  render() {
    const eddieWooPanelContainerClass = classNames({
      eddieWooPanelContainer: true,
      hidden: true,
      fadeIn: !this.state.hideContent,
    });
    return (
      <Fragment>
        <div ref={this.eddieWoo} className={eddieWooPanelContainerClass}>
          <div className="imageWrapper">
            <img
              className="eddieImage"
              src={urlBuilders.imageUrl('legacyHomepage/eddie-woo.jpg')}
              alt="Eddie Woo"
            />
          </div>
          <div className="contentWrapper">
            <div className="header">Teach with Eddie Woo</div>
            <div className="paragraph">
              Eddie Woo is a YouTube sensation who has inspired millions of
              maths students around the world. We’ve teamed up to give you free
              access to his maths videos, all mapped to your curriculum with
              Mathspace.
            </div>
            <div className="buttonWrapper">
              <Button
                color="java"
                hasBorder
                isBlock
                href={urls.eddieWoo}
                data-event-label={LEARN_MORE_EDDIE_WOO}
                onClick={event => {
                  event.preventDefault();
                  sendCTAClickEvent(LEARN_MORE_EDDIE_WOO).then(() => {
                    // TODO: Investigate why Router.push() api won't
                    // accept urls ending with .co
                    window.location.assign(urls.eddieWoo);
                  });
                }}
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
        <style jsx>{`
          .eddieWooPanelContainer {
            display: flex;
            flex-direction: column;
            max-width: ${EDDIE_PANEL_CONTAINER_MAX_WIDTH}px;
            margin: 0 auto 56px;
            justify-content: space-between;
            align-items: center;
          }
          .contentWrapper {
            max-width: ${EDDIE_PANEL_CONTENT_MAX_WIDTH}px;
            color: ${colors.cloudBurst};
            padding: 0 15px;
            margin-top: ${MOBILE_EDDIE_PANEL_CONTENT_WRAPPER_SPACING_TOP}px;
          }
          .header {
            font-size: ${mobileFontSizes.h3}px;
            font-weight: ${fontWeights.semibold};
            line-height: ${lineHeights.h3};
          }
          .paragraph {
            font-size: ${mobileFontSizes.body}px;
            font-weight: ${fontWeights.regular};
            line-height: ${lineHeights.body};
            color: ${colors.grayChateau};
            margin-top: ${EDDIE_PANEL_PARAGRAPH_SPACING_TOP}px;
          }
          .buttonWrapper {
            margin-top: ${EDDIE_PANEL_BUTTON_WRAPPER_SPACING_TOP}px;
          }
          .imageWrapper {
            line-height: 0;
            max-width: ${EDDIE_PANEL_IMAGE_WRAPPER_MAX_WIDTH}px;
          }
          .eddieImage {
            width: 100%;
          }

          .hidden {
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
            .eddieWooPanelContainer {
              flex-direction: row;
              margin: 0px auto 70px;
            }
            .contentWrapper {
              margin-left: 24px;
              margin-top: 0;
            }
            .header {
              font-size: ${desktopFontSizes.h3}px;
            }
            .paragraph {
              font-size: ${desktopFontSizes.body}px;
            }
            .buttonWrapper {
              max-width: ${EDDIE_PANEL_BUTTON_WRAPPER_MAX_WIDTH}px;
            }
            .imageWrapper {
              margin-top: 0;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default EddieWooPanel;
