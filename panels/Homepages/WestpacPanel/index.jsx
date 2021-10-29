// @flow

import React, { Fragment } from 'react';
import ClassNames from 'classnames';

import Button from 'components/Button';
import WistiaModal from 'components/WistiaModal';
import WestpacLogo from 'components/Homepage/SVG/Westpac';

import { urls, urlBuilders } from 'utils/urls';
import {
  desktopFontSizes,
  mobileFontSizes,
  lineHeights,
  colors,
  fontWeights,
  breakPoints,
} from 'utils/theme';
import sendCTAClickEvent from 'utils/analytics';

const GET_IT_FREE_WESTPAC = 'get-it-free-westpac';

const MOBILE_SECTION_SPACING = 15;
const WESTPAC_PANEL_SPACING_BOTTOM = 50;
const WESTPAC_PANEL_PARAGRAPH_SPACE = 15;
const WESTPAC_PANEL_SECTION_MAX_SIZE = 500;

type Props = {|
  animate?: boolean,
|};

type State = {|
  showModal: boolean,
  hideContent: boolean,
|};

class WestpacPanel extends React.Component<Props, State> {
  checkPosition: () => {};
  windowHeight: number;
  westpacPanel: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      showModal: false,
      hideContent: !!this.props.animate,
    };
    this.checkPosition = this.checkPosition.bind(this);
    this.westpacPanel = React.createRef();
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
      this.westpacPanel.current.getBoundingClientRect().top -
        this.windowHeight <=
      0
    ) {
      this.setState(state => ({ ...state, hideContent: false }));
      window.removeEventListener('scroll', this.checkPosition, false);
    }
  }

  render() {
    const westpacPanelContainerClass = ClassNames({
      westpacPanelContainer: true,
      hiddenWestpacPanel: this.state.hideContent,
      fadeIn: !this.state.hideContent,
    });
    return (
      <Fragment>
        <section ref={this.westpacPanel} className={westpacPanelContainerClass}>
          <div className="leftContentWrapper">
            <h2 className="title">
              Free online maths education, thanks to Westpac
            </h2>
            <p className="content">
              Get our interactive maths textbook, Mathspace Essentials, free
              thanks to Westpac. Refresh on any maths topic, try interactive
              questions, and see maths brought to life!
            </p>
            <div className="westpacButtonContainer">
              <Button
                isBlock
                color="lochmara"
                hasBorder
                href={urls.signupWestpacEssentials}
                data-event-label={GET_IT_FREE_WESTPAC}
                onClick={event => {
                  event.preventDefault();
                  sendCTAClickEvent(GET_IT_FREE_WESTPAC).then(() => {
                    window.location.assign(urls.signupWestpacEssentials);
                  });
                }}
              >
                Get it free
              </Button>
            </div>
            <WestpacLogo hasTagline={false} />
          </div>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <div
            className="rightContentWrapper"
            onClick={() =>
              this.setState(state => ({ ...state, showModal: true }))
            }
          >
            <img
              className="westpacVideoImage"
              src={urlBuilders.imageUrl('westpac_girl.jpg')}
              alt="Westpac"
            />
            {/* This is not the correct play button */}
            <img
              className="playButton"
              src={urlBuilders.imageUrl('common/play.png')}
              alt="play button"
            />
          </div>
        </section>
        {this.state.showModal && (
          <WistiaModal
            onClose={() =>
              this.setState(state => ({ ...state, showModal: false }))
            }
            videoId="tlp3w4o61k"
          />
        )}
        <style jsx>{`
          .westpacPanelContainer {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 0 24px;
          }
          .leftContentWrapper {
            max-width: ${WESTPAC_PANEL_SECTION_MAX_SIZE}px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 ${MOBILE_SECTION_SPACING}px 30px;
          }
          .title {
            font-size: ${mobileFontSizes.h2}px;
            font-weight: ${fontWeights.semibold};
            line-height: ${lineHeights.h3};
            color: ${colors.cloudBurst};
            margin-bottom: ${WESTPAC_PANEL_PARAGRAPH_SPACE}px;
          }
          .content {
            font-size: ${mobileFontSizes.body}px;
            font-weight: ${fontWeights.regular};
            line-height: ${lineHeights.body};
            color: ${colors.grayChateau};
            margin: 0 20px 15px 0;
          }
          .westpacButtonContainer {
            margin-bottom: ${WESTPAC_PANEL_PARAGRAPH_SPACE}px;
          }
          .rightContentWrapper {
            max-width: ${WESTPAC_PANEL_SECTION_MAX_SIZE}px;
            position: relative;
            cursor: pointer;
            line-height: 0;
          }
          .westpacVideoImage {
            width: 100%;
          }
          .playButton {
            position: absolute;
            top: 50%;
            left: 50%;
            /* half the play button's dimensions */
            margin-top: -80px;
            margin-left: -82px;
          }

          .hiddenWestpacPanel {
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
            .westpacPanelContainer {
              flex-direction: row;
              margin-bottom: ${WESTPAC_PANEL_SPACING_BOTTOM}px;
            }
            .leftContentWrapper {
              padding: 0;
              margin-right: 20px;
            }
            .title {
              font-size: ${desktopFontSizes.h2}px;
            }
            .content {
              font-size: ${desktopFontSizes.body}px;
              margin-right: 20px;
            }
            .westpacButtonContainer {
              max-width: 200px;
            }
            .rightContentWrapper {
              padding: 0;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default WestpacPanel;
