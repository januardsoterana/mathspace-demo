// @flow

import React, { Fragment, type ComponentType } from 'react';
import ClassNames from 'classnames';

import {
  breakPoints,
  borderRadius,
  colors,
  desktopFontSizes,
  mobileFontSizes,
  fontWeights,
  lineHeights,
} from 'utils/theme';
import { urlBuilders } from 'utils/urls';

type Props = {
  imageName: string,
  title: string,
  textContent: string,
  icon?: ComponentType<*>,
  reversed?: boolean,
  animate?: boolean,
};

type State = {|
  hideContent: boolean,
|};

const CONTENT_MAX_WIDTH = 400;
const DIVIDER_HEAD_SIZE = 15;
// Needed to align to the middle of the image and divider head
const ALIGNMENT_PADDING = 10;
const MOBILE_IMAGE_SPACING = 50;
const DIVIDER_SIDE_SPACING = 25;
const DIVIDER_SIDE_SPACING_MOBILE = 15;
const DIVIDER_CONNECTOR_SIZE = 2;
const DIVIDER_HEAD_TO_CONNECTOR_SPACING = 5;
// Adds extra height to the InfoStep component
const INFO_STEP_STRETCH_SPACING = 100;

class InfoStep extends React.Component<Props, State> {
  checkPosition: () => {};
  windowHeight: number;
  infoStep: any;

  constructor(props: Props) {
    super(props);

    this.state = {
      hideContent: !!this.props.animate,
    };
    this.checkPosition = this.checkPosition.bind(this);
    this.infoStep = React.createRef();
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
      this.infoStep.current.getBoundingClientRect().top +
        100 -
        this.windowHeight <=
      0
    ) {
      this.setState(state => ({ ...state, hideContent: false }));
      window.removeEventListener('scroll', this.checkPosition, false);
    }
  }

  render() {
    const Icon = this.props.icon;
    const imageContentWrapperClass = ClassNames({
      imageContentWrapper: true,
      hide: true,
      fadeInImage: !this.state.hideContent,
    });
    const textContentWrapperClass = ClassNames({
      textContentWrapper: true,
      hide: true,
      fadeInText: !this.state.hideContent,
    });
    const dividerHeadClass = ClassNames({
      dividerHead: true,
      hideConnectorHead: !this.state.hideContent,
    });
    const connectorClass = ClassNames({
      connector: true,
      hideConnector: this.state.hideContent,
      fadeInConnector: !this.state.hideContent,
    });
    return (
      <Fragment>
        <div ref={this.infoStep} className="root">
          <div className={imageContentWrapperClass}>
            <img
              className="imageContent"
              src={urlBuilders.imageUrl(this.props.imageName)}
              alt=""
            />
          </div>
          <div className="dividingWrapper">
            <div className={dividerHeadClass} />
            <div className={connectorClass} />
          </div>
          <div className={textContentWrapperClass}>
            <div className="title">{this.props.title}</div>
            <div className="content">{this.props.textContent}</div>
            <div className="iconWrapper">{Icon ? <Icon /> : null}</div>
            <div className="imageContentWrapperMobile">
              <img
                className="imageContent"
                src={urlBuilders.imageUrl(this.props.imageName)}
                alt=""
              />
            </div>
          </div>
        </div>
        <style jsx>{`
            .root {
              display: flex;
              justify-content: space-between;
              flex: 1;
            }
            .imageContentWrapper {
              max-width: ${CONTENT_MAX_WIDTH}px;
              display: none;
              width: 100%;
              padding-top: ${ALIGNMENT_PADDING}px;
            }
            .imageContentWrapperMobile {
              margin: ${MOBILE_IMAGE_SPACING}px 0;
              display: block;
              width: 100%;
            }
            .imageContent {
              width: 100%;
              /* box-shadow: 1px -18px 48px -15px rgba(66,69,72,0.1); */
              filter: drop-shadow(0 -15px 15px rgba(66,69,72,0.08));
            }
            .dividingWrapper {
              display: flex;
              flex-direction: column;
              align-items: center;
              order: 1;
              padding: ${ALIGNMENT_PADDING}px ${
          DIVIDER_SIDE_SPACING_MOBILE
        }px 0 0;
            }
            .dividerHead {
              width: ${DIVIDER_HEAD_SIZE}px;
              height: ${DIVIDER_HEAD_SIZE}px;
              background-color: ${colors.pickledBluewood};
              border-radius: ${borderRadius.circle}px;
              margin-bottom: ${DIVIDER_HEAD_TO_CONNECTOR_SPACING}px;
              box-shadow: 0 0 0 rgba(212,215,217, 0.4);
              animation: pulse 2s infinite;
            }
            .connector {
              flex: 1;
              width: ${DIVIDER_CONNECTOR_SIZE}px;
              background-color: ${colors.pickledBluewood};
            }
            .textContentWrapper {
              max-width: ${CONTENT_MAX_WIDTH}px;
              order: 2;
              width: 100%;
            }
            .title {
              font-size: ${mobileFontSizes.h2}px;
              font-weight: ${fontWeights.semibold}
              line-height: ${lineHeights.h4}
              padding-bottom: 8px;
              margin-bottom: 16px;
            }
            .content {
              font-size: ${mobileFontSizes.body}px;
              font-weight: ${fontWeights.regular};
              line-height: ${lineHeights.body};
              color: ${colors.grayChateau};
              padding-bottom: 16px;
            }

            .hideConnector {
              flex: 0;
            }
            .fadeInConnector {
              animation: fade-in-connector 1s forwards;
            }
            .hideConnectorHead {
              animation: none;
            }
            .hide {
              opacity: 0;
              transform: translateY(50%);
            }
            .fadeInImage {
              animation: fade-in 1s forwards;
              animation-delay: 1.5s
            }
            .fadeInText {
              animation: fade-in 1s forwards;
              animation-delay: .75s;
            }

            @keyframes fade-in-connector {
              from {
                flex: 0;
              }
              to {
                flex: 1;
              }
            }
            @keyframes fade-in {
              from {
                opacity: 0;
                transform: translateY(50%);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes pulse {
              0% {
                -moz-box-shadow: 0 0 0 0 rgba(212,215,217, 0.4);
                box-shadow: 0 0 0 0 rgba(212,215,217, 0.4);
              }
              70% {
                  -moz-box-shadow: 0 0 0 10px rgba(212,215,217, 0);
                  box-shadow: 0 0 0 10px rgba(212,215,217, 0);
              }
              100% {
                  -moz-box-shadow: 0 0 0 0 rgba(212,215,217, 0);
                  box-shadow: 0 0 0 0 rgba(212,215,217, 0);
              }
            }
            @media (min-width: ${breakPoints.medium}px) {
              .imageContentWrapper {
                display: block;
                order: ${this.props.reversed ? 3 : 1};
                padding-bottom: ${INFO_STEP_STRETCH_SPACING}px;
              }
              .imageContentWrapperMobile {
                display: none;
              }
              .title {
                font-size: ${desktopFontSizes.h2}px;
              }
              .content {
                font-size: ${mobileFontSizes.body}px;
                font-weight: ${fontWeights.regular}
                line-height: ${lineHeights.body}
              }
              .dividingWrapper {
                order: 2;
                padding: ${ALIGNMENT_PADDING}px ${DIVIDER_SIDE_SPACING}px 0;
              }
              .textContentWrapper {
                order: ${this.props.reversed ? 1 : 3};
              }
            }
          `}</style>
      </Fragment>
    );
  }
}

export default InfoStep;
