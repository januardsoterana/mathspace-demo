// @flow

import React, { Fragment } from 'react';
import classNames from 'classnames';

import {
  breakPoints,
  colors,
  desktopFontSizes,
  mobileFontSizes,
  fontWeights,
  lineHeights,
  zIndex,
  panelGapMargin,
} from 'utils/theme';
import { urlBuilders } from 'utils/urls';

type Props = {
  headerText: string,
  contentText: string,
  backgroundColor?: $Keys<typeof colors>,
  animate?: boolean,
};

type State = {|
  hideContent: boolean,
|};

const MAX_TEXT_WIDTH = 712;
const PANEL_VERTICAL_PADDING = 100;
const PANEL_SIDE_PADDING = 24;
const TEXT_SPACING = 15;
const MOBILE_TEXT_SPACING = 25;

class InfoPanel extends React.Component<Props, State> {
  checkPosition: () => {};
  windowHeight: number;
  infoPanel: any;

  constructor(props: Props) {
    super(props);

    this.state = {
      hideContent: !!this.props.animate,
    };
    this.checkPosition = this.checkPosition.bind(this);
    this.infoPanel = React.createRef();
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
      this.infoPanel.current.getBoundingClientRect().top - this.windowHeight <=
      0
    ) {
      this.setState(state => ({ ...state, hideContent: false }));
      window.removeEventListener('scroll', this.checkPosition, false);
    }
  }

  render() {
    const infoPanelBackgroundColor =
      colors[this.props.backgroundColor || 'white'];
    const infoPanelContainerClass = classNames({
      infoPanelContainer: true,
      hiddenPanel: true,
      fadeInPanel: !this.state.hideContent,
    });
    return (
      <Fragment>
        <section ref={this.infoPanel} className={infoPanelContainerClass}>
          <div className="panelWrapper">
            <h2 className="headerWrapper">{this.props.headerText}</h2>
            <p className="contentWrapper">{this.props.contentText}</p>
          </div>
        </section>
        <style jsx>{`
          .infoPanelContainer {
            background-color: ${infoPanelBackgroundColor};
            color: ${infoPanelBackgroundColor
              ? colors.white
              : colors.cloudBurst};
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: ${PANEL_VERTICAL_PADDING / 2}px ${PANEL_SIDE_PADDING}px;
            margin-right: ${panelGapMargin.default}px;
          }
          .headerWrapper {
            max-width: ${MAX_TEXT_WIDTH}px;
            font-size: ${mobileFontSizes.h3}px;
            font-weight: ${fontWeights.semibold};
            line-height: ${lineHeights.h3};
          }
          .contentWrapper {
            max-width: ${MAX_TEXT_WIDTH}px;
            margin-top: ${MOBILE_TEXT_SPACING}px;
            font-size: ${mobileFontSizes.body}px;
            font-weight: ${fontWeights.regular};
            line-height: ${lineHeights.body};
          }
          .patternContainer {
            display: none;
            position: relative;
            z-index: ${zIndex.infoPanelPattern};
          }
          .patternLeft {
            position: absolute;
            left: 0;
            top: -280px;
          }
          .patternRight {
            position: absolute;
            right: ${panelGapMargin.default}px;
            top: -105px;
          }

          .hiddenPanel {
            transform: translateX(-100%);
          }
          .fadeInPanel {
            animation: fade-in-panel 1s forwards;
          }

          .hiddenPanel > .panelWrapper {
            opacity: 0;
            transform: translateY(50%);
          }
          .hiddenPanel > .patternLeft {
            opacity: 0;
            transform: translateX(-50%);
          }
          .hiddenPanel > .patternRight {
            opacity: 0;
            transform: translateX(50%);
          }

          .fadeInPanel > .panelWrapper {
            animation: fade-in-text 1s forwards;
            animation-delay: 1s;
          }
          .fadeInPanel > .patternLeft {
            animation: fade-in-pattern-left 1s forwards;
            animation-delay: 1.25s;
          }
          .fadeInPanel > .patternRight {
            animation: fade-in-pattern-right 1s forwards;
            animation-delay: 1.25s;
          }
          @keyframes fade-in-text {
            from {
              opacity: 0;
              transform: translateY(50%);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fade-in-pattern-left {
            from {
              opacity: 0;
              transform: translateX(-50%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes fade-in-pattern-right {
            from {
              opacity: 0;
              transform: translateX(50%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes fade-in-panel {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(0);
            }
          }
          @media (min-width: ${breakPoints.extraLarge}px) {
            .patternContainer {
              display: block;
            }
          }
          @media (min-width: ${breakPoints.medium}px) {
            .infoPanelContainer {
              padding: ${PANEL_VERTICAL_PADDING}px ${PANEL_SIDE_PADDING}px;
            }
            .headerWrapper {
              font-size: ${desktopFontSizes.h3}px;
              font-weight: ${fontWeights.semibold};
              line-height: ${lineHeights.h3};
            }
            .contentWrapper {
              margin-top: ${TEXT_SPACING}px;
              font-size: ${desktopFontSizes.body}px;
              font-weight: ${fontWeights.regular};
              line-height: ${lineHeights.body};
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default InfoPanel;
