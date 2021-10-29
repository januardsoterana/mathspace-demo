// @flow

import React, { Fragment } from 'react';
import ClassNames from 'classnames';

import { urlBuilders } from 'utils/urls';
import {
  breakPoints,
  colors,
  desktopFontSizes,
  mobileFontSizes,
  fontWeights,
  lineHeights,
} from 'utils/theme';

const AWARDS_PANEL_MAX_WIDTH = 960;
const AWARDS_PANEL_SECTION_MAX_WIDTH = 432;
const MOBILE_AWARDS_PANEL_IMAGE_CONTAINER_SPACE_TOP = 32;
const MOBILE_AWARDS_PANEL_IMAGE_CONTAINER_SPACE_BOTTOM = 56;
const AWARDS_PANEL_CONTENT_SPACING = 16;
const AWARDS_PANEL_CONTAINER_SPACING_TOP_DESKTOP = 144;

type Props = {|
  animate?: boolean,
|};
type State = {|
  hideContent: boolean,
|};

class AwardsPanel extends React.Component<Props, State> {
  windowHeight: number;
  awardsPanel: any;
  checkPosition: () => {};

  constructor(props: Props) {
    super(props);
    this.state = { hideContent: !!this.props.animate };
    this.checkPosition = this.checkPosition.bind(this);
    this.awardsPanel = React.createRef();
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
      this.awardsPanel.current.getBoundingClientRect().top -
        100 -
        this.windowHeight <=
      0
    ) {
      this.setState(state => ({ ...state, hideContent: false }));
      window.removeEventListener('scroll', this.checkPosition, false);
    }
  }

  render() {
    const awardsPanelContainerClass = ClassNames({
      awardsPanelContainer: true,
      fadeIn: !this.state.hideContent,
    });
    return (
      <Fragment>
        <section ref={this.awardsPanel} className={awardsPanelContainerClass}>
          <div className="awardImagesContainer">
            <div className="awardImageWrapper">
              <img
                className="image"
                src={urlBuilders.imageUrl('legacyHomepage/awards1.svg')}
                alt=""
              />
            </div>
            <div className="awardImageWrapper">
              <img
                className="image"
                src={urlBuilders.imageUrl('legacyHomepage/awards2.svg')}
                alt=""
              />
            </div>
            <div className="awardImageWrapper">
              <img
                className="image"
                src={urlBuilders.imageUrl('legacyHomepage/awards3.svg')}
                alt=""
              />
            </div>
          </div>
          <div className="descriptionContainer">
            <h2 className="header">
              Benefit from award-winning content and technology
            </h2>
            <p className="content">
              We have received several prominent education awards from Bett,
              ISTE, ASU, GSV and the GESS Education Awards.
            </p>
          </div>
        </section>
        <style jsx>{`
          .awardsPanelContainer {
            display: flex;
            max-width: ${AWARDS_PANEL_MAX_WIDTH}px;
            justify-content: space-between;
            margin: 0 auto;
            flex-direction: column-reverse;
            padding: 0 15px;
            align-items: center;
            opacity: 0;
          }
          .awardImagesContainer {
            flex: 1;
            max-width: ${AWARDS_PANEL_SECTION_MAX_WIDTH}px;
            margin-top: ${MOBILE_AWARDS_PANEL_IMAGE_CONTAINER_SPACE_TOP}px;
            width: 100%;
            margin-bottom: ${MOBILE_AWARDS_PANEL_IMAGE_CONTAINER_SPACE_BOTTOM}px;
            display: flex;
            justify-content: space-between;
          }
          .awardImageWrapper {
            display: flex;
            max-width: 152px;
            justify-content: center;
            align-items: stretch;
          }
          .image {
            width: 100%;
          }
          .descriptionContainer {
            flex: 1;
            max-width: ${AWARDS_PANEL_SECTION_MAX_WIDTH}px;
            color: ${colors.cloudBurst};
          }
          .header {
            font-size: ${mobileFontSizes.h3}px;
            font-weight: ${fontWeights.semibold};
            line-height: ${lineHeights.h3};
          }
          .content {
            font-size: ${mobileFontSizes.body}px;
            font-weight: ${fontWeights.regular};
            line-height: ${lineHeights.body};
            color: ${colors.grayChateau};
            margin-top: ${AWARDS_PANEL_CONTENT_SPACING}px;
          }
          .fadeIn {
            animation: fade-in 1s forwards;
          }
          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @media (min-width: ${breakPoints.medium}px) {
            .awardsPanelContainer {
              flex-direction: row;
              margin: ${AWARDS_PANEL_CONTAINER_SPACING_TOP_DESKTOP}px auto;
            }
            .awardImagesContainer {
              margin-top: 0;
              margin-bottom: 0;
            }
            .header {
              font-size: ${desktopFontSizes.h3}px;
            }
            .content {
              font-size: ${desktopFontSizes.body}px;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default AwardsPanel;
