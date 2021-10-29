// @flow

import React, { Fragment } from 'react';
import ClassNames from 'classnames';

import {
  colors,
  borderRadius,
  fontWeights,
  lineHeights,
  desktopFontSizes,
  mobileFontSizes,
  breakPoints,
} from 'utils/theme';
import { urlBuilders } from 'utils/urls';

type FeatureStepProps = {
  imageName: string,
  title: string,
  content: string,
  animate?: boolean,
};

type FeatureStepState = { hideContent: boolean };

// eslint-disable-next-line
class FeatureStep extends React.Component<FeatureStepProps, FeatureStepState> {
  checkPosition: () => {};
  windowHeight: number;
  featureStep: any;

  constructor(props: FeatureStepProps) {
    super(props);

    this.state = {
      hideContent: !!this.props.animate,
    };
    this.checkPosition = this.checkPosition.bind(this);
    this.featureStep = React.createRef();
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
      this.featureStep.current.getBoundingClientRect().top -
        this.windowHeight <=
      0
    ) {
      this.setState(state => ({ ...state, hideContent: false }));
      window.removeEventListener('scroll', this.checkPosition, false);
    }
  }

  render() {
    const imageWrapperClass = ClassNames({
      imageWrapper: true,
      hide: true,
      fadeInImage: !this.state.hideContent,
    });
    const contentWrapperClass = ClassNames({
      contentWrapper: true,
      hide: true,
      fadeInText: !this.state.hideContent,
    });
    const dividerHeadClass = ClassNames({
      dividerHead: true,
      hideConnectorHead: !this.state.hideContent,
    });
    const connectorClass = ClassNames({
      connector: true,
      hideConnector: true,
      fadeInConnector: !this.state.hideContent,
    });

    return (
      <Fragment>
        <div ref={this.featureStep} className="root">
          <div className="dividingWrapper">
            <div className={dividerHeadClass} />
            <div className={connectorClass} />
          </div>
          <div className={imageWrapperClass}>
            <img
              src={urlBuilders.imageUrl(this.props.imageName)}
              alt=""
              className="image"
            />
          </div>
          <div className={contentWrapperClass}>
            <div className="title">{this.props.title}</div>
            <div className="content">{this.props.content}</div>
          </div>
        </div>
        <style jsx>{`
          .root {
            display: flex;
            justify-content: space-between;
          }
          .dividingWrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            order: 1;
            padding-top: 10px;
          }
          .dividerHead {
            width: 15px;
            height: 15px;
            background-color: ${colors.porcelain};
            border-radius: ${borderRadius.circle}px;
            margin-bottom: 5px;
            box-shadow: 0 0 0 rgba(212, 215, 217, 0.4);
            animation: pulse 2s infinite;
          }
          .connector {
            flex: 1;
            width: 2px;
            background-color: ${colors.porcelain};
          }
          .imageWrapper {
            order: 2;
            padding: 10px 24px 50px;
            min-width: 70px;
          }
          .image {
            width: 100%;
          }
          .contentWrapper {
            order: 3;
            max-width: 400px;
            padding-top: 10px;
          }
          .title {
            color: ${colors.cloudBurst};
            font-size: ${mobileFontSizes.h4}px;
            line-height: ${lineHeights.h4};
            font-weight: ${fontWeights.semibold};
          }
          .content {
            margin-top: 5px;
            color: ${colors.grayChateau};
            font-size: ${mobileFontSizes.body}px;
            line-height: ${lineHeights.body};
            font-weight: ${fontWeights.light};
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
            animation-delay: 1.5s;
          }
          .fadeInText {
            animation: fade-in 1s forwards;
            animation-delay: 0.75s;
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
              -moz-box-shadow: 0 0 0 0 rgba(212, 215, 217, 0.4);
              box-shadow: 0 0 0 0 rgba(212, 215, 217, 0.4);
            }
            70% {
              -moz-box-shadow: 0 0 0 10px rgba(212, 215, 217, 0);
              box-shadow: 0 0 0 10px rgba(212, 215, 217, 0);
            }
            100% {
              -moz-box-shadow: 0 0 0 0 rgba(212, 215, 217, 0);
              box-shadow: 0 0 0 0 rgba(212, 215, 217, 0);
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

type Props = {| description: string |};

const WhyWorkHerePanel = ({ description }: Props) => (
  <Fragment>
    <section className="whyWorkHereContainer">
      <h2 className="title">Why work here</h2>
      <p className="description">{description}</p>
      <div className="featureStepWrapper">
        <FeatureStep
          animate
          imageName="careers/careers-impact.svg"
          title="Make a real impact"
          content="We thrive on helping students and teachers succeed. We also commit to Pledge 1%"
        />
        <FeatureStep
          animate
          imageName="careers/careers-packages.svg"
          title="Get great employment packages"
          content="A competitive salary, and all the tools and equipment you need. We can sponsor work visas, too"
        />
        <FeatureStep
          animate
          imageName="careers/careers-work-life.svg"
          title="Enjoy a healthy work/life balance"
          content="Flexible work environment, including 10 remote work days per year. Team lunches, board game nights, trivia nights—we have fun together, too!"
        />
        <FeatureStep
          animate
          imageName="careers/careers-team.svg"
          title="Improve and learn as a team"
          content="Weekly tech talks and video sessions. Stipend for education and training resources"
        />
      </div>
    </section>
    <style jsx>{`
      .whyWorkHereContainer {
        max-width: 800px;
        margin: 0 auto;
        padding: 100px 24px 50px;
      }
      .title {
        color: ${colors.cloudBurst};
        font-size: ${mobileFontSizes.h1}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.h1};
        text-align: center;
      }
      .description {
        max-width: 700px;
        margin: 40px auto;
        color: ${colors.grayChateau};
        font-size: ${mobileFontSizes.h4}px;
        font-weight: ${fontWeights.regular};
        line-height: ${lineHeights.body};
        text-align: center;
      }
      .featureStepWrapper {
        max-width: 600px;
        margin: 0 auto;
      }
      @media (min-width: ${breakPoints.medium}px) {
        .title {
          font-size: ${desktopFontSizes.h1}px;
        }
        .description
        font-size: ${desktopFontSizes.h4}px;
        }
      }
    `}</style>
  </Fragment>
);

export default WhyWorkHerePanel;
