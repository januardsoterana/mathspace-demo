// @flow

import React, { Fragment } from 'react';
import ClassNames from 'classnames';

import FeatureBox from 'components/FeatureBox';

import { urlBuilders } from 'utils/urls';
import {
  breakPoints,
  colors,
  desktopFontSizes,
  mobileFontSizes,
  fontWeights,
  lineHeights,
} from 'utils/theme';
import { type CountryCodes } from 'utils/types';

type Props = {|
  country: CountryCodes,
  animate?: boolean,
|};

const TITLE_SPACING_TOP = 144;
const TITLE_SPACING_TOP_MOBILE = 56;
const TITLE_SPACING_BOTTOM = 32;
const SPACING_BOTTOM = 104;

const MAX_FEATURE_BOX_WRAPPER_SIZE = 744;
const FEATURE_BOX_SPACING = 16;
const FEATURE_WRAPPER_SPACING_DESKTOP = 48;

type AustralianFeaturesProps = {|
  animate?: boolean,
|};

type AustralianFeaturesState = {|
  hideContent: boolean,
|};

class AustralianFeatures extends React.Component<
  AustralianFeaturesProps,
  AustralianFeaturesState,
> {
  windowHeight: number;
  featureBoxContainer: any;
  checkPosition: () => {};

  constructor(props: AustralianFeaturesProps) {
    super(props);
    this.state = { hideContent: !!this.props.animate };
    this.checkPosition = this.checkPosition.bind(this);
    this.featureBoxContainer = React.createRef();
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
      this.featureBoxContainer.current.getBoundingClientRect().top -
        this.windowHeight <=
      0
    ) {
      this.setState(state => ({ ...state, hideContent: false }));
      window.removeEventListener('scroll', this.checkPosition, false);
    }
  }

  render() {
    const box1Class = ClassNames({
      box1: true,
      hide: true,
      fadeInBox1: !this.state.hideContent,
    });
    const box2Class = ClassNames({
      box2: true,
      hide: true,
      fadeInBox2: !this.state.hideContent,
    });
    const box3Class = ClassNames({
      box3: true,
      hide: true,
      fadeInBox3: !this.state.hideContent,
    });
    const box4Class = ClassNames({
      box4: true,
      hide: true,
      fadeInBox4: !this.state.hideContent,
    });
    const box5Class = ClassNames({
      box5: true,
      hide: true,
      fadeInBox5: !this.state.hideContent,
    });
    const box6Class = ClassNames({
      box6: true,
      hide: true,
      fadeInBox6: !this.state.hideContent,
    });

    return (
      <Fragment>
        <div ref={this.featureBoxContainer} className="featureBoxContainer">
          <div className="featureBoxWrapper">
            <div className={box1Class}>
              <FeatureBox
                imagePath={urlBuilders.imageUrl(
                  'legacyHomepage/Real-time-student.svg',
                )}
                description="Real-time student progress data"
              />
            </div>
            <div className={box2Class}>
              <FeatureBox
                imagePath={urlBuilders.imageUrl('legacyHomepage/eBook.svg')}
                description="Interactive textbook mapped to your curriculum"
              />
            </div>
            <div className={box3Class}>
              <FeatureBox
                imagePath={urlBuilders.imageUrl('legacyHomepage/Live-chat.svg')}
                description="Live chat with our in-house teachers"
              />
            </div>
          </div>
          <div className="featureBoxWrapper">
            <div className={box4Class}>
              <FeatureBox
                imagePath={urlBuilders.imageUrl(
                  'legacyHomepage/Automated-marking.svg',
                )}
                description="Automated marking on student tasks"
              />
            </div>
            <div className={box5Class}>
              <FeatureBox
                imagePath={urlBuilders.imageUrl(
                  'legacyHomepage/Sample-paper.svg',
                )}
                description="Sample papers and practice papers for national and state tests"
              />
            </div>
            <div className={box6Class}>
              <FeatureBox
                imagePath={urlBuilders.imageUrl(
                  'legacyHomepage/Regular-teacher-PD.svg',
                )}
                description="Regular teacher PD training"
              />
            </div>
          </div>
        </div>
        <style jsx>{`
          .featureBoxWrapper {
            display: flex;
            max-width: ${MAX_FEATURE_BOX_WRAPPER_SIZE}px;
            margin: 0 auto;
            align-items: center;
            flex-direction: column;
          }
          .featureBoxContainer > .featureBoxWrapper + .featureBoxWrapper {
            margin-top: 0;
          }
          .hide {
            margin-top: ${FEATURE_BOX_SPACING}px;
            opacity: 0;
            transform: translateY(50%);
          }
          .fadeInBox1 {
            animation: fade-in 1s forwards;
          }
          .fadeInBox2 {
            animation: fade-in 1s forwards;
            animation-delay: 0.5s;
          }
          .fadeInBox3 {
            animation: fade-in 1s forwards;
            animation-delay: 1s;
          }
          .fadeInBox4 {
            animation: fade-in 1s forwards;
            animation-delay: 1.5s;
          }
          .fadeInBox5 {
            animation: fade-in 1s forwards;
            animation-delay: 2s;
          }
          .fadeInBox6 {
            animation: fade-in 1s forwards;
            animation-delay: 2.5s;
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
          @media (min-width: ${breakPoints.medium}px) {
            .featureBoxWrapper {
              flex-direction: row;
              justify-content: space-between;
              align-items: baseline;
            }
            .featureBoxContainer > .featureBoxWrapper + .featureBoxWrapper {
              ${FEATURE_BOX_SPACING}px;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

type AmericanFeaturesProps = {|
  animate?: boolean,
|};

type AmericanFeaturesState = {|
  hideContent: boolean,
|};

// eslint-disable-next-line
class AmericanFeatures extends React.Component<
  AmericanFeaturesProps,
  AmericanFeaturesState,
> {
  windowHeight: number;
  featureBoxContainer: any;
  checkPosition: () => {};

  constructor(props: AmericanFeaturesProps) {
    super(props);
    this.state = { hideContent: !!this.props.animate };
    this.checkPosition = this.checkPosition.bind(this);
    this.featureBoxContainer = React.createRef();
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
      this.featureBoxContainer.current.getBoundingClientRect().top -
        this.windowHeight <=
      0
    ) {
      this.setState(state => ({ ...state, hideContent: false }));
      window.removeEventListener('scroll', this.checkPosition, false);
    }
  }

  render() {
    const box1Class = ClassNames({
      box1: true,
      hide: true,
      fadeInBox1: !this.state.hideContent,
    });
    const box2Class = ClassNames({
      box2: true,
      hide: true,
      fadeInBox2: !this.state.hideContent,
    });
    const box3Class = ClassNames({
      box3: true,
      hide: true,
      fadeInBox3: !this.state.hideContent,
    });
    const box4Class = ClassNames({
      box4: true,
      hide: true,
      fadeInBox4: !this.state.hideContent,
    });
    const box5Class = ClassNames({
      box5: true,
      hide: true,
      fadeInBox5: !this.state.hideContent,
    });
    const box6Class = ClassNames({
      box6: true,
      hide: true,
      fadeInBox6: !this.state.hideContent,
    });
    return (
      <Fragment>
        <div ref={this.featureBoxContainer} className="featureBoxContainer">
          <div className="featureBoxWrapper">
            <div className={box1Class}>
              <FeatureBox
                imagePath={urlBuilders.imageUrl(
                  'legacyHomepage/Real-time-student.svg',
                )}
                description="Real-time student progress data"
              />
            </div>
            <div className={box2Class}>
              <FeatureBox
                imagePath={urlBuilders.imageUrl('legacyHomepage/eBook.svg')}
                description="Interactive Digital Textbook"
              />
            </div>
            <div className={box3Class}>
              <FeatureBox
                imagePath={urlBuilders.imageUrl('legacyHomepage/Live-chat.svg')}
                description="Live chat with our in-house teachers"
              />
            </div>
          </div>
          <div className="featureBoxWrapper">
            <div className={box4Class}>
              <FeatureBox
                imagePath={urlBuilders.imageUrl(
                  'legacyHomepage/Automated-marking.svg',
                )}
                description="Automated grading on student tasks"
              />
            </div>
            <div className={box5Class}>
              <FeatureBox
                imagePath={urlBuilders.imageUrl(
                  'legacyHomepage/Sample-paper.svg',
                )}
                description="Comprehensive Curriculum Alignment"
              />
            </div>
            <div className={box6Class}>
              <FeatureBox
                imagePath={urlBuilders.imageUrl(
                  'legacyHomepage/Regular-teacher-PD.svg',
                )}
                description="Targeted professional development for teachers"
              />
            </div>
          </div>
        </div>
        <style jsx>{`
          .featureBoxWrapper {
            display: flex;
            max-width: ${MAX_FEATURE_BOX_WRAPPER_SIZE}px;
            margin: 0 auto;
            align-items: center;
            flex-direction: column;
          }
          .featureBoxContainer > .featureBoxWrapper + .featureBoxWrapper {
            margin-top: 0;
          }
          .hide {
            margin-top: ${FEATURE_BOX_SPACING}px;
            opacity: 0;
            transform: translateY(50%);
          }
          .fadeInBox1 {
            animation: fade-in 1s forwards;
          }
          .fadeInBox2 {
            animation: fade-in 1s forwards;
            animation-delay: 0.5s;
          }
          .fadeInBox3 {
            animation: fade-in 1s forwards;
            animation-delay: 1s;
          }
          .fadeInBox4 {
            animation: fade-in 1s forwards;
            animation-delay: 1.5s;
          }
          .fadeInBox5 {
            animation: fade-in 1s forwards;
            animation-delay: 2s;
          }
          .fadeInBox6 {
            animation: fade-in 1s forwards;
            animation-delay: 2.5s;
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
          @media (min-width: ${breakPoints.medium}px) {
            .featureBoxWrapper {
              flex-direction: row;
              justify-content: space-between;
              align-items: baseline;
            }
            .featureBoxContainer > .featureBoxWrapper + .featureBoxWrapper {
              margin-top: ${FEATURE_BOX_SPACING}px;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

const FeaturesPanel = ({ country, animate }: Props) => (
  <Fragment>
    <div className="panelWrapper">
      <div className="header">Features</div>
      <div className="featureBoxContainer">
        {country === 'US' && <AmericanFeatures animate={animate} />}
        {country === 'AU' && <AustralianFeatures animate={animate} />}
      </div>
    </div>
    <style jsx>{`
      .featureBoxContainer > :global(div) + :global(div) {
        margin-top: ${FEATURE_BOX_SPACING}px;
      }
      .header {
        margin: ${TITLE_SPACING_TOP_MOBILE}px 0 ${TITLE_SPACING_BOTTOM}px;
        font-size: ${mobileFontSizes.h3}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.h3};
        display: flex;
        justify-content: center;
        color: ${colors.cloudBurst};
      }
      @media (min-width: ${breakPoints.medium}px) {
        .header {
          margin-top: ${TITLE_SPACING_TOP}px;
          font-size: ${desktopFontSizes.h3}px;
        }
        .featureBoxContainer {
          margin-bottom: ${SPACING_BOTTOM}px;
        }

        .featureBoxContainer > .featureBoxWrapper + .featureBoxWrapper {
          margin-top: ${FEATURE_WRAPPER_SPACING_DESKTOP}px;
        }
      }
    `}</style>
  </Fragment>
);

export default FeaturesPanel;
