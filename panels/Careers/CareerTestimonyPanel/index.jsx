// @flow

import React, { Fragment } from 'react';
import ClassNames from 'classnames';

import { urlBuilders } from 'utils/urls';
import {
  colors,
  fontWeights,
  mobileFontSizes,
  desktopFontSizes,
  lineHeights,
  borderRadius,
  breakPoints,
} from 'utils/theme';

type TestimonyProps = {|
  imageName: string,
  testimony: string,
  authorName: string,
  authorPosition: string,
|};

const Testimony = ({
  imageName,
  testimony,
  authorName,
  authorPosition,
}: TestimonyProps) => (
  <Fragment>
    <div className="root">
      <div className="contentWrapper">
        <div className="text">&quot;{testimony}&quot;</div>
        <div className="quoteShape">
          <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 0h24l-5.988 6.088a3.007 3.007 0 0 1-.024.024L5.115 18.913A3 3 0 0 1 0 16.786V0z"
              fill="#F1F2F3"
            />
          </svg>
        </div>
      </div>
      <div className="authorWrapper">
        <div className="imageWrapper">
          <img src={urlBuilders.imageUrl(imageName)} alt="" className="image" />
        </div>
        <div className="infoWrapper">
          <div className="name">{authorName}</div>
          <div className="position">{authorPosition}</div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .root {
        margin: 0 10px;
      }
      .contentWrapper {
        max-width: 250px;
        padding: 20px 15px;
        background-color: ${colors.porcelain};
        border-radius: ${borderRadius.default}px;
        position: relative;
      }
      .text {
        font-size: ${mobileFontSizes.body}px;
        font-weight: ${fontWeights.regular};
        line-height: ${lineHeights.body};
        color: ${colors.cloudBurst};
      }
      .quoteShape {
        width: 30px;
        position: absolute;
        bottom: -20px;
        height: 30px;
        left: 0;
      }
      .authorWrapper {
        display: flex;
        align-items: center;
        margin-top: 30px;
        margin-bottom: 30px;
      }
      .imageWrapper {
        width: 50px;
        height: 50px;
      }
      .image {
        width: 100%;
        height: 100%;
        border-radius: ${borderRadius.circle}px;
      }
      .infoWrapper {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
      }
      .name {
        font-weight: ${fontWeights.semibold};
        font-size: ${mobileFontSizes.body};
        line-height: ${lineHeights.body};
        color: ${colors.cloudBurst};
      }
      .position {
        font-size: ${mobileFontSizes.body};
        font-weight: ${fontWeights.regular};
        line-height: ${lineHeights.body};
        color: ${colors.cloudBurst};
      }
    `}</style>
  </Fragment>
);

type EmployeeTestimony = {
  imageName: string,
  name: string,
  position: string,
  testimony: string,
};

type Props = {|
  animate?: boolean,
  testimony1: EmployeeTestimony,
  testimony2: EmployeeTestimony,
  testimony3: EmployeeTestimony,
|};
type State = {|
  hideContent: boolean,
|};

// eslint-disable-next-line
class CareerTestimonyPanel extends React.Component<Props, State> {
  checkPosition: () => {};
  windowHeight: number;
  testimonyPanel: any;

  constructor(props: Props) {
    super(props);

    this.state = {
      hideContent: !!this.props.animate,
    };
    this.checkPosition = this.checkPosition.bind(this);
    this.testimonyPanel = React.createRef();
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
      this.testimonyPanel.current.getBoundingClientRect().top +
        200 -
        this.windowHeight <=
      0
    ) {
      this.setState(state => ({ ...state, hideContent: false }));
      window.removeEventListener('scroll', this.checkPosition, false);
    }
  }

  render() {
    const testimonyAndieClass = ClassNames({
      testimonyAndie: !this.state.hideContent,
      hide: true,
    });
    const testimonyPanteaClass = ClassNames({
      testimonyPantea: !this.state.hideContent,
      hide: true,
    });
    const testimonyCraigClass = ClassNames({
      testimonyCraig: !this.state.hideContent,
      hide: true,
    });

    return (
      <Fragment>
        <div ref={this.testimonyPanel} className="testimonyContainer">
          <h2 className="title">Why do you work at Mathspace?</h2>
          <p className="description">
            We could keep going on about why we love it here. But we thought
            we&#39;d let our team tell you in their own words
          </p>
          <div className="testimonyWrapper">
            <div className={testimonyAndieClass}>
              <Testimony
                imageName={this.props.testimony1.imageName}
                testimony={this.props.testimony1.testimony}
                authorName={this.props.testimony1.name}
                authorPosition={this.props.testimony1.position}
              />
            </div>
            <div className={testimonyPanteaClass}>
              <Testimony
                imageName={this.props.testimony2.imageName}
                testimony={this.props.testimony2.testimony}
                authorName={this.props.testimony2.name}
                authorPosition={this.props.testimony2.position}
              />
            </div>
            <div className={testimonyCraigClass}>
              <Testimony
                imageName={this.props.testimony3.imageName}
                testimony={this.props.testimony3.testimony}
                authorName={this.props.testimony3.name}
                authorPosition={this.props.testimony3.position}
              />
            </div>
          </div>
        </div>
        <style jsx>{`
          .testimonyContainer {
            max-width: 800px;
            margin: 0 auto;
            padding: 50px 24px;
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
          .testimonyWrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .hide {
            opacity: 0;
            transform: translateY(50%);
          }
          .testimonyAndie {
            animation: fade-in 1s forwards;
          }
          .testimonyPantea {
            animation: fade-in 1s forwards;
            animation-delay: .5s;
          }
          .testimonyCraig {
            animation: fade-in 1s forwards;
            animation-delay: 1s;
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
            .testimonyContainer {
              padding: 50px 24px 100px;
            }
            .testimonyWrapper {
              flex-direction: row;
              align-items: flex-start;
            }
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
  }
}

export default CareerTestimonyPanel;
