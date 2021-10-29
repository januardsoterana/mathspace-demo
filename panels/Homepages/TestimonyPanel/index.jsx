// @flow

import React, { Fragment } from 'react';
import ClassNames from 'classnames';

import { urlBuilders } from 'utils/urls';
import {
  breakPoints,
  colors,
  fontWeights,
  desktopFontSizes,
  mobileFontSizes,
  lineHeights,
} from 'utils/theme';

const TESTIMONY_PANEL_TESTIMONY_MAX_WIDTH = 712;
const TESTIMONY_PANEL_HEIGHT_MOBILE = 296;
const TESTIMONY_PANEL_HEIGHT_DESKTOP = 400;
const TESTIMONY_PANEL_AUTHOR_SPACING_TOP = 24;

type Props = {
  testimony: string,
  author: string,
  school: string,
  authorImage: string,
  backgroundImage?: string,
  animate?: boolean,
  backgroundColor?: string,
};
type State = {|
  hideContent: boolean,
|};

class TestimonyPanel extends React.Component<Props, State> {
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
      this.testimonyPanel.current.getBoundingClientRect().top -
        this.windowHeight <=
      0
    ) {
      this.setState(state => ({ ...state, hideContent: false }));
      window.removeEventListener('scroll', this.checkPosition, false);
    }
  }

  render() {
    const testimonyClass = ClassNames({
      testimony: true,
      fadeInTestimony: !this.state.hideContent,
    });
    const textWrapperClass = ClassNames({
      textWrapper: true,
      fadeInTextWrapper: !this.state.hideContent,
    });
    const authorImageClass = ClassNames({
      authorImage: true,
      fadeInAuthorImage: !this.state.hideContent,
    });
    const picturePanelClass = ClassNames({
      picturePanel: true,
      fadeInPicturePanel: !this.state.hideContent,
    });

    return (
      <Fragment>
        <div ref={this.testimonyPanel} className="testimonyPanelContainer">
          <div className="testimonyWrapper">
            <div className={testimonyClass}>{this.props.testimony}</div>
            <div className="creditsContainer">
              {this.props.authorImage && (
                <img
                  className={authorImageClass}
                  src={urlBuilders.imageUrl(this.props.authorImage)}
                  alt=""
                />
              )}
              <div className={textWrapperClass}>
                <div className="author">{this.props.author}</div>
                <div className="school">{this.props.school}</div>
              </div>
            </div>
          </div>
        </div>
        {this.props.backgroundImage && <div className={picturePanelClass} />}
        <style jsx>{`
          .picturePanel {
            background-image: url(${urlBuilders.imageUrl(
              this.props.backgroundImage || '',
            )});
            background-size: cover;
            background-position: 50% 50%;
            height: ${TESTIMONY_PANEL_HEIGHT_MOBILE}px;
            opacity: 0;
          }
          .testimonyPanelContainer {
            background-color: ${this.props.backgroundColor
              ? this.props.backgroundColor
              : colors.astronaut};
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-weight: ${fontWeights.light};
            color: ${colors.white};
            padding: 50px 24px;
          }
          .testimonyWrapper {
            max-width: ${TESTIMONY_PANEL_TESTIMONY_MAX_WIDTH}px;
            margin: 0 auto;
          }
          .creditsContainer {
            margin-top: ${TESTIMONY_PANEL_AUTHOR_SPACING_TOP}px;
            display: flex;
            align-items: center;
          }
          .authorPlaceholder {
            flex: 1;
            height: 60px;
            max-width: 60px;
            border-radius: 30px;
            background-color: ${colors.athensGray};
          }
          .testimony {
            font-size: ${mobileFontSizes.h4}px;
            font-weight: ${fontWeights.light};
            line-height: ${lineHeights.body};
            opacity: 0;
            transform: translateY(50%);
          }
          .textWrapper {
            flex: 1;
            margin-left: ${this.props.authorImage ? 16 : 0}px;
            opacity: 0;
            transform: translateY(50%);
          }
          .author {
            font-size: ${mobileFontSizes.body}px;
            font-weight: ${fontWeights.semibold};
            line-height: ${lineHeights.body};
          }
          .school {
            font-size: ${mobileFontSizes.body}px;
            font-weight: ${fontWeights.regular};
            line-height: ${lineHeights.body};
          }
          .authorImage {
            width: 80px;
            opacity: 0;
            transform: translateY(50%);
          }

          .fadeInTestimony {
            animation: fade-in 1s forwards;
          }
          .fadeInTextWrapper {
            animation: fade-in 1s forwards;
            animation-delay: 0.5s;
          }
          .fadeInAuthorImage {
            animation: fade-in 1s forwards;
            animation-delay: 0.5s;
          }
          .fadeInPicturePanel {
            animation: fade-in-image 1s forwards;
            animation-delay: 0.5s;
          }

          @keyframes fade-in-image {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
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
          @media (min-width: ${breakPoints.medium}px) {
            .testimonyPanelContainer {
              padding: 100px 24px;
            }
            .testimony {
              font-size: ${mobileFontSizes.h3}px;
            }
            .picturePanel {
              height: ${TESTIMONY_PANEL_HEIGHT_DESKTOP}px;
            }
            .testimonyPanelContainer {
              color: ${colors.white};
            }
            .testimonyWrapper {
              font-size: ${desktopFontSizes.h4}px;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default TestimonyPanel;
