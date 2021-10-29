// @flow

import React, { Fragment } from 'react';
import ClassNames from 'classnames';
import Router from 'next/router';

import Button from 'components/Button';

import {
  colors,
  lineHeights,
  fontWeights,
  breakPoints,
  mobileFontSizes,
  desktopFontSizes,
} from 'utils/theme';
import { urls } from 'utils/urls';
import sendCTAClickEvent from 'utils/analytics';

const VIEW_OUR_BLOG = 'view-our-blog';

type Props = {|
  animate?: boolean,
|};
type State = {|
  hideContent: boolean,
|};

// eslint-disable-next-line
class MathspaceCommunityPanel extends React.Component<Props, State> {
  checkPosition: () => {};
  windowHeight: number;
  demoPanel: any;

  constructor(props: Props) {
    super(props);

    this.state = {
      hideContent: !!this.props.animate,
    };
    this.checkPosition = this.checkPosition.bind(this);
    this.demoPanel = React.createRef();
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
      this.demoPanel.current.getBoundingClientRect().top - this.windowHeight <=
      0
    ) {
      this.setState(state => ({ ...state, hideContent: false }));
      window.removeEventListener('scroll', this.checkPosition, false);
    }
  }

  render() {
    const rootClass = ClassNames({
      root: true,
      hide: true,
      fadeIn: !this.state.hideContent,
    });

    return (
      <Fragment>
        <div ref={this.demoPanel} className={rootClass}>
          <h2 className="title">Join the Mathspace Community</h2>
          <p className="description">
            Follow our blog to find out the latest from Mathspace
          </p>
          <div className="ctaWrapper">
            <Button
              data-event-label={VIEW_OUR_BLOG}
              hasBorder
              href={urls.blog}
              color="java"
              isBlock
              size="large"
              onClick={event => {
                event.preventDefault();
                sendCTAClickEvent(VIEW_OUR_BLOG).then(() => {
                  window.location.assign(urls.blog);
                });
              }}
            >
              View our Blog
            </Button>
          </div>
        </div>
        <style jsx>{`
          .root {
            max-width: 800px;
            margin: 0 auto;
            padding: 50px 24px;
            text-align: center;
          }
          .title {
            font-size: ${mobileFontSizes.h1}px;
            font-weight: ${fontWeights.semibold};
            line-height: ${lineHeights.h1};
            color: ${colors.cloudBurst};
          }
          .description {
            margin: 30px 0;
            font-size: ${mobileFontSizes.h4}px;
            font-weight: ${fontWeights.regular};
            line-height: ${lineHeights.h4};
            color: ${colors.grayChateau};
          }
          .ctaWrapper {
            max-width: 250px;
            margin: 0 auto;
          }
          .hide {
            opacity: 0;
            transform: translateY(50%);
          }
          .fadeIn {
            animation: fade-in 1s forwards;
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
            .root {
              padding: 100px 24px;
            }
            .title {
              font-size: ${desktopFontSizes.h1}px;
            }
            .description {
              font-size: ${desktopFontSizes.h4}px;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default MathspaceCommunityPanel;
