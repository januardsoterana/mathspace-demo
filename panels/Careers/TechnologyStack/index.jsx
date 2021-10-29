// @flow

import React, { Fragment } from 'react';
import ClassNames from 'classnames';

import {
  breakPoints,
  colors,
  desktopFontSizes,
  fontWeights,
  lineHeights,
  mobileFontSizes,
} from 'utils/theme';
import { urlBuilders } from 'utils/urls';

type TechnologyProps = {
  animate?: boolean,
};
type TechnologyState = {
  hideContent: boolean,
};

// eslint-disable-next-line
class TechnologyStack extends React.Component<
  TechnologyProps,
  TechnologyState,
> {
  checkPosition: () => {};
  windowHeight: number;
  technologyStack: any;

  constructor(props: TechnologyProps) {
    super(props);

    this.state = {
      hideContent: !!this.props.animate,
    };
    this.checkPosition = this.checkPosition.bind(this);
    this.technologyStack = React.createRef();
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
      this.technologyStack.current.getBoundingClientRect().top +
        200 -
        this.windowHeight <=
      0
    ) {
      this.setState(state => ({ ...state, hideContent: false }));
      window.removeEventListener('scroll', this.checkPosition, false);
    }
  }

  render() {
    const imageWrapper1 = ClassNames({
      imageWrapper: true,
      hide: true,
      fadeInIcon1: !this.state.hideContent,
    });
    const imageWrapper2 = ClassNames({
      imageWrapper: true,
      hide: true,
      fadeInIcon2: !this.state.hideContent,
    });
    const imageWrapper3 = ClassNames({
      imageWrapper: true,
      hide: true,
      fadeInIcon3: !this.state.hideContent,
    });
    const imageWrapper4 = ClassNames({
      imageWrapper: true,
      hide: true,
      fadeInIcon4: !this.state.hideContent,
    });
    const imageWrapper5 = ClassNames({
      imageWrapper: true,
      hide: true,
      fadeInIcon5: !this.state.hideContent,
    });
    const imageWrapper6 = ClassNames({
      imageWrapper: true,
      hide: true,
      fadeInIcon6: !this.state.hideContent,
    });
    const imageWrapper7 = ClassNames({
      imageWrapper: true,
      hide: true,
      fadeInIcon7: !this.state.hideContent,
    });
    const imageWrapper8 = ClassNames({
      imageWrapper: true,
      hide: true,
      fadeInIcon8: !this.state.hideContent,
    });
    const imageWrapper9 = ClassNames({
      imageWrapper: true,
      hide: true,
      fadeInIcon9: !this.state.hideContent,
    });

    return (
      <Fragment>
        <section className="root">
          <h2 className="title">Technology stack</h2>
          <p className="description">
            Have a look at some of the technology we use. Think we&#39;re
            missing anything? If there’s a better process we could be using, we
            want our team members to let us know.
          </p>
          <div ref={this.technologyStack} className="iconContainer">
            <div className="frontendIconWrapper">
              <div className={imageWrapper1}>
                <img
                  className="image"
                  src={urlBuilders.imageUrl('careers/react.svg')}
                  alt=""
                />
              </div>
              <div className={imageWrapper2}>
                <img
                  className="image"
                  src={urlBuilders.imageUrl('careers/flow.svg')}
                  alt=""
                />
              </div>
              <div className={imageWrapper3}>
                <img
                  className="image"
                  src={urlBuilders.imageUrl('careers/Jest.svg')}
                  alt=""
                />
              </div>
              <div className={imageWrapper4}>
                <img
                  className="image"
                  src={urlBuilders.imageUrl('careers/GraphQL.svg')}
                  alt=""
                />
              </div>
              <div className={imageWrapper5}>
                <img
                  className="image"
                  src={urlBuilders.imageUrl('careers/Relay.svg')}
                  alt=""
                />
              </div>
            </div>
            <div className="backendIconWrapper">
              <div className={imageWrapper6}>
                <img
                  className="image"
                  src={urlBuilders.imageUrl('careers/django.svg')}
                  alt=""
                />
              </div>
              <div className={imageWrapper7}>
                <img
                  className="image"
                  src={urlBuilders.imageUrl('careers/python.svg')}
                  alt=""
                />
              </div>
              <div className={imageWrapper8}>
                <img
                  className="image"
                  src={urlBuilders.imageUrl('careers/postgresql.svg')}
                  alt=""
                />
              </div>
              <div className={imageWrapper9}>
                <img
                  className="image"
                  src={urlBuilders.imageUrl('careers/aws-logo.svg')}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <style jsx>{`
          .root {
            padding: 50px 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .title {
            color: ${colors.cloudBurst};
            font-size: ${mobileFontSizes.h1}px;
            font-weight: ${fontWeights.semibold};
            line-height: ${lineHeights.body};
            text-align: center;
          }
          .description {
            max-width: 700px;
            margin: 40px auto;
            color: ${colors.grayChateau};
            font-size: ${mobileFontSizes.body}px;
            font-weight: ${fontWeights.regular};
            line-height: ${lineHeights.body};
            text-align: center;
          }
          .iconContainer {
            display: flex;
            flex-direction: column;
            max-width: 600px;
            width: 100%;
          }
          .frontendIconWrapper {
            margin-top: 30px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: center;
          }
          .backendIconWrapper {
            margin-top: 0;
            display: flex;
            justify-content: space-evenly;
            flex-direction: column;
            align-items: center;
          }
          .imageWrapper {
            width: 60px;
            margin-top: 15px;
          }
          .image {
            width: 100%;
          }
          .hide {
            opacity: 0;
            transform: translateY(50%);
          }
          .fadeInIcon1 {
            animation: fade-in 1s forwards;
          }
          .fadeInIcon2 {
            animation: fade-in 1s forwards;
            animation-delay: 0.25s;
          }
          .fadeInIcon3 {
            animation: fade-in 1s forwards;
            animation-delay: 0.5s;
          }
          .fadeInIcon4 {
            animation: fade-in 1s forwards;
            animation-delay: 0.75s;
          }
          .fadeInIcon5 {
            animation: fade-in 1s forwards;
            animation-delay: 1s;
          }
          .fadeInIcon6 {
            animation: fade-in 1s forwards;
            animation-delay: 1.25s;
          }
          .fadeInIcon7 {
            animation: fade-in 1s forwards;
            animation-delay: 1.5s;
          }
          .fadeInIcon8 {
            animation: fade-in 1s forwards;
            animation-delay: 1.75s;
          }
          .fadeInIcon9 {
            animation: fade-in 1s forwards;
            animation-delay: 2s;
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
            .imageWrapper {
              margin-top: 0;
            }
            .title {
              font-size: ${desktopFontSizes.h1}px;
            }
            .description {
              font-size: ${desktopFontSizes.body}px;
            }
            .frontendIconWrapper {
              flex-direction: row;
            }
            .backendIconWrapper {
              flex-direction: row;
              margin-top: 30px;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default TechnologyStack;
