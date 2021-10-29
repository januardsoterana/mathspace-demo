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

type Props = {
  animate?: boolean,
  imageName: string,
  title: string,
  description: string,
};

type State = { hideContent: boolean };

// eslint-disable-next-line
class CareerHero extends React.Component<Props, State> {
  checkPosition: () => {};
  windowHeight: number;
  simpleHeroPanel: any;

  constructor(props: Props) {
    super(props);

    this.state = {
      hideContent: !!this.props.animate,
    };
    this.checkPosition = this.checkPosition.bind(this);
    this.simpleHeroPanel = React.createRef();
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
      this.simpleHeroPanel.current.getBoundingClientRect().top -
        this.windowHeight <=
      0
    ) {
      this.setState(state => ({ ...state, hideContent: false }));
      window.removeEventListener('scroll', this.checkPosition, false);
    }
  }

  render() {
    const imageClass = ClassNames({
      image: true,
      fadeInImage: !this.state.hideContent,
    });
    const titleClass = ClassNames({
      title: true,
      fadeInTitle: !this.state.hideContent,
    });
    const textClass = ClassNames({
      content: true,
      fadeInText: !this.state.hideContent,
    });

    return (
      <Fragment>
        <section ref={this.simpleHeroPanel} className="heroContainer">
          <div className="leftSection">
            <div className="imageWrapper">
              <img
                src={urlBuilders.imageUrl(this.props.imageName)}
                alt=""
                className={imageClass}
              />
            </div>
          </div>
          <div className="rightSection">
            <h1 className={titleClass}>{this.props.title}</h1>
            <p className={textClass}>{this.props.description}</p>
          </div>
        </section>
        <style jsx>{`
          .heroContainer {
            display: flex;
            max-width: 1200px;
            margin: 0 auto;
            justify-content: center;
            align-items: center;
            flex-direction: column-reverse;
            padding: 20px 24px 0;
          }
          .leftSection {
            padding: 40px 40px 0;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            flex: 1;
            max-width: 580px;
            width: 100%;
          }
          .imageWrapper {
            width: 100%;
            line-height: 0;
          }
          .image {
            width: 100%;
            height: 100%;
            opacity: 0;
            transform: translateY(50%);
          }
          .rightSection {
            max-width: 400px;
            text-align: center;
          }
          .title {
            color: ${colors.cloudBurst};
            font-size: ${mobileFontSizes.h1}px;
            font-weight: ${fontWeights.semibold};
            line-height: ${lineHeights.h1};
            opacity: 0;
            transform: translateY(50%);
          }
          .content {
            color: ${colors.grayChateau};
            font-size: ${mobileFontSizes.h2}px;
            line-height: ${lineHeights.h2};
            font-weight: ${fontWeights.light};
            margin-top: 16px;
            opacity: 0;
            transform: translateY(50%);
          }
          .fadeInImage {
            animation: fade-in 1s forwards;
            animation-delay: 1s;
          }
          .fadeInTitle {
            animation: fade-in 1s forwards;
            animation-delay: 2s;
          }
          .fadeInText {
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
            .heroContainer {
              flex-direction: row;
            }
            .leftSection {
              margin-right: 20px;
            }
            .title {
              font-size: ${desktopFontSizes.h1}px;
            }
            .content {
              font-size: ${desktopFontSizes.h2}px;
            }
            .rightSection {
              text-align: left;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default CareerHero;
