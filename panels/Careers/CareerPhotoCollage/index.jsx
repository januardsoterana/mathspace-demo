// @flow

import React, { Fragment } from 'react';
import ClassNames from 'classnames';

import {
  colors,
  fontWeights,
  lineHeights,
  mobileFontSizes,
  desktopFontSizes,
  breakPoints,
} from 'utils/theme';
import { urlBuilders } from 'utils/urls';

type InfoBox = { title: string, description: string };

type Props = {|
  animate?: boolean,
  box1: InfoBox,
  box2: InfoBox,
  box3: InfoBox,
|};

type State = {|
  hideContent: boolean,
|};

// eslint-disable-next-line
class CareerPhotoCollage extends React.Component<Props, State> {
  checkPosition: () => {};
  windowHeight: number;
  careersPhotoPanel: any;

  constructor(props: Props) {
    super(props);

    this.state = {
      hideContent: !!this.props.animate,
    };
    this.checkPosition = this.checkPosition.bind(this);
    this.careersPhotoPanel = React.createRef();
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
      this.careersPhotoPanel.current.getBoundingClientRect().top -
        this.windowHeight <=
      0
    ) {
      this.setState(state => ({ ...state, hideContent: false }));
      window.removeEventListener('scroll', this.checkPosition, false);
    }
  }

  render() {
    const createBoxClass = ClassNames({
      createBox: true,
      hide: true,
      fadeInCreateBox: !this.state.hideContent,
    });
    const learnBoxClass = ClassNames({
      learnBox: true,
      hide: true,
      fadeInLearnBox: !this.state.hideContent,
    });
    const growBoxClass = ClassNames({
      growBox: true,
      hide: true,
      fadeInGrowBox: !this.state.hideContent,
    });
    const photoBox1Class = ClassNames({
      photoBox1: true,
      hide: true,
      fadeInPhoto1: !this.state.hideContent,
    });
    const photoBox2Class = ClassNames({
      photoBox2: true,
      hide: true,
      fadeInPhoto2: !this.state.hideContent,
    });
    const photoBox3Class = ClassNames({
      photoBox3: true,
      hide: true,
      fadeInPhoto3: !this.state.hideContent,
    });
    const photoBox4Class = ClassNames({
      photoBox4: true,
      hide: true,
      fadeInPhoto4: !this.state.hideContent,
    });

    const titleClassCreateBox = ClassNames({
      title: true,
      animationCreateTitle: true,
    });
    const textClassCreateBox = ClassNames({
      textWrapper: true,
      animationCreateText: true,
    });
    const titleClassLearnBox = ClassNames({
      title: true,
      animationLearnTitle: true,
    });
    const textClassLearnBox = ClassNames({
      textWrapper: true,
      animationLearnText: true,
    });
    const titleClassGrowBox = ClassNames({
      title: true,
      animationGrowTitle: true,
    });
    const textClassGrowBox = ClassNames({
      textWrapper: true,
      animationGrowText: true,
    });

    return (
      <Fragment>
        <div ref={this.careersPhotoPanel} className="careersPhotoContainer">
          <div className={createBoxClass}>
            <span className={titleClassCreateBox}>{this.props.box1.title}</span>
            <div className={textClassCreateBox}>
              {this.props.box1.description}
            </div>
          </div>
          <div className={learnBoxClass}>
            <span className={titleClassLearnBox}>{this.props.box2.title}</span>
            <div className={textClassLearnBox}>
              {this.props.box2.description}
            </div>
          </div>
          <div className={growBoxClass}>
            <span className={titleClassGrowBox}>{this.props.box3.title}</span>
            <div className={textClassGrowBox}>
              {this.props.box3.description}
            </div>
          </div>
          <div className={photoBox1Class} />
          <div className={photoBox2Class} />
          <div className={photoBox3Class} />
          <div className={photoBox4Class} />
        </div>
        <style jsx>{`
          .careersPhotoContainer {
            display: none;
            height: 89vw;
            position: relative;
          }
          .createBox {
            color: ${colors.white};
            background-color: ${colors.lochmara};
            height: 23.4%;
            width: calc(32% - 96px);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px 48px;
            z-index: 1;
            position: absolute;
            top: calc(3.2% - 35px);
            left: 0;

            font-weight: ${fontWeights.regular};
            font-size: ${mobileFontSizes.body}px;
            line-height: ${lineHeights.body};
          }
          .learnBox {
            color: ${colors.white};
            background-color: ${colors.java};
            height: 30.8%;
            width: calc(25.4% - 96px);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px 48px;
            z-index: 1;
            position: absolute;
            top: calc(26.6% + 5px);
            left: 0;

            font-weight: ${fontWeights.regular};
            font-size: ${mobileFontSizes.body}px;
            line-height: ${lineHeights.body};
          }
          .growBox {
            color: ${colors.white};
            background-color: ${colors.astronaut};
            height: 28.3%;
            width: calc(27.3% - 56px);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px 48px;
            z-index: 1;
            position: absolute;
            bottom: 0;
            right: 0;

            font-weight: ${fontWeights.regular};
            font-size: ${mobileFontSizes.body}px;
            line-height: ${lineHeights.body};
          }
          .photoBox1 {
            height: 28.3%;
            width: calc(38.7%);
            background-color: ${colors.grayChateau};
            z-index: 0;
            position: absolute;
            top: calc(57.4% + 45px);
            left: 0;
            background-image: url(${urlBuilders.imageUrl(
              'careers/careers-photo-founders.jpg',
            )});
            background-size: cover;
            background-position: 50% 50%;
          }
          .photoBox2 {
            height: 57.4%;
            width: 74.6%;
            background-color: ${colors.iron};
            z-index: 0;
            position: absolute;
            top: 45px;
            right: 0;
            background-image: url(${urlBuilders.imageUrl(
              'careers/careers-photo-content-team.jpg',
            )});
            background-size: cover;
            background-position: 50% 50%;
          }
          .photoBox3 {
            height: 25.3%;
            width: 35%;
            background-color: ${colors.crusta};
            z-index: 1;
            position: absolute;
            bottom: calc(3% + 40px);
            right: calc(27.3% + 40px);
            background-image: url(${urlBuilders.imageUrl(
              'careers/photoPanelImage3-2.jpg',
            )});
            background-size: cover;
            background-position: 50% 50%;
          }
          .photoBox4 {
            height: 28.3%;
            width: 61.3%;
            background-color: ${colors.nevada};
            z-index: 1;
            position: absolute;
            bottom: calc(28.3% + 40px);
            right: 0;
            background-image: url(${urlBuilders.imageUrl(
              'careers/careers-photo-sales-team.jpg',
            )});
            background-size: cover;
            background-position: 50% 50%;
          }
          .highlight {
            color: ${colors.aquamarine};
          }
          .title {
            position: absolute;
            color: ${colors.aquamarine};
            font-size: ${desktopFontSizes.h1}px;
            font-weight: ${fontWeights.semibold};
            line-height: ${lineHeights.h1};
          }
          .textWrapper {
            font-size: ${mobileFontSizes.body}px;
            font-weight: ${fontWeights.semibold};
            line-height: ${lineHeights.body};
          }
          .animationCreateTitle {
            animation: fade-in-text 15s infinite;
            animation-delay: 1.5s;
          }
          .animationCreateText {
            opacity: 0;
            animation: fade-in-text-alternative 15s infinite;
            animation-delay: 1.5s;
          }
          .animationLearnTitle {
            animation: fade-in-text 15s infinite;
            animation-delay: 2.5s;
          }
          .animationLearnText {
            opacity: 0;
            animation: fade-in-text-alternative 15s infinite;
            animation-delay: 2.5s;
          }
          .animationGrowTitle {
            animation: fade-in-text 15s infinite;
            animation-delay: 3.5s;
          }
          .animationGrowText {
            opacity: 0;
            animation: fade-in-text-alternative 15s infinite;
            animation-delay: 3.5s;
          }
          .hide {
            opacity: 0;
          }
          .fadeInCreateBox {
            animation: fade-in 1s forwards;
            animation-delay: 0.5s;
          }
          .fadeInLearnBox {
            animation: fade-in 1s forwards;
            animation-delay: 1.5s;
          }
          .fadeInGrowBox {
            animation: fade-in 1s forwards;
            animation-delay: 2.5s;
          }
          .fadeInPhoto1 {
            animation: fade-in 1s forwards;
            animation-delay: 2s;
          }
          .fadeInPhoto2 {
            animation: fade-in 1s forwards;
          }
          .fadeInPhoto3 {
            animation: fade-in 1s forwards;
            animation-delay: 3s;
          }
          .fadeInPhoto4 {
            animation: fade-in 1s forwards;
            animation-delay: 1s;
          }

          @keyframes fade-in-text {
            0% {
              opacity: 1;
            }
            25% {
              opacity: 0;
            }
            50% {
              opacity: 0;
            }
            75% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes fade-in-text-alternative {
            0% {
              opacity: 0;
            }
            25% {
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            75% {
              opacity: 0;
            }
            100% {
              opacity: 0;
            }
          }
          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @media (min-width: ${breakPoints.large}px) {
            .textWrapper {
              font-size: ${desktopFontSizes.body}px;
            }
          }
          @media (min-width: ${breakPoints.medium}px) {
            .careersPhotoContainer {
              display: block;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default CareerPhotoCollage;
