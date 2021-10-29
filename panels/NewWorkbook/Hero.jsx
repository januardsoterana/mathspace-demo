// @flow

import React, { type Node, Fragment } from 'react';

import Anchor from 'components/Anchor';
import Button from 'components/Button';
import WistiaModal from 'components/WistiaModal';

import { urlBuilders } from 'utils/urls';
import sendCTAClickEvent from 'utils/analytics';
import {
  borderRadius,
  colors,
  desktopFontSizes,
  mobileFontSizes,
  lineHeights,
  fontWeights,
  breakPoints,
  transitions,
} from 'utils/theme';

const SHOW_WORKBOOK_VIDEO = 'show-workbook-video';

type NewAppButtonProps = { onClick: () => void, children?: Node };

const NewAppButton = ({ onClick, children, ...rest }: NewAppButtonProps) => (
  <Fragment>
    {
      // eslint-disable-next-line
      <div onClick={onClick} className="base" {...rest}>
        {children}
      </div>
    }
    <style jsx>{`
      .base {
        border-radius: ${borderRadius.default}px;
        box-sizing: border-box;
        background-color: transparent;
        border: 1px solid ${colors.shuttleGray};
        color: ${colors.white};
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: ${mobileFontSizes.body}px;
        font-weight: ${fontWeights.regular};
        height: 40px;
        line-height: ${lineHeights.body};
        outline: none;
        transition: background-color ${transitions.hover},
          border-color ${transitions.hover}, color ${transitions.hover},
          fill ${transitions.hover};
        webkit-font-smoothing: subpixel-antialiased;
        padding: 20px;
        user-select: none;
        text-decoration: none;
        width: 100%;
      }
      .base:hover {
        color: rgba(255, 255, 255, 0.7);
      }
      .base:focus {
        border-color: ${colors.hitGray};
      }
      .base:active {
        border-color: ${colors.hitGray};
      }
    `}</style>
  </Fragment>
);

type HeroProps = { newAppOnclick: () => void, whatsNewOnclick: () => void };
type HeroState = { openModal: boolean };

class Hero extends React.Component<HeroProps, HeroState> {
  constructor(props: HeroProps) {
    super(props);
    this.state = { openModal: false };
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="wrapper">
            <div className="textSection">
              <div className="subTitle">AVAILABLE NOW</div>
              <div className="mainTitle">The New Workbook is here</div>
              <div className="description">
                A fresh new look for your step-by-step experience makes learning
                mathematics that much more delightful.
              </div>
            </div>
            <div className="CTASection">
              <div className="newAppWrappper">
                <NewAppButton onClick={this.props.newAppOnclick}>
                  Show me the new app
                </NewAppButton>
              </div>
              <div className="buttonWrapper">
                <Button
                  isBlock
                  isFilled
                  color="lochmara"
                  onClick={this.props.whatsNewOnclick}
                >
                  Show me what&#39;s new
                </Button>
              </div>
            </div>
            <div className="videoSection">
              <Anchor
                onClick={() => {
                  sendCTAClickEvent(SHOW_WORKBOOK_VIDEO);
                  this.setState(state => ({ ...state, openModal: true }));
                }}
              >
                <img
                  className="image"
                  src={urlBuilders.imageUrl('newWorkbook/nwe-cover.png')}
                  alt=""
                />
              </Anchor>
            </div>
          </div>
        </div>
        {this.state.openModal && (
          <WistiaModal
            videoId="orl397p04b"
            onClose={() =>
              this.setState(state => ({ ...state, openModal: false }))
            }
          />
        )}
        <style jsx>{`
          .container {
            background-color: ${colors.ebony};
          }
          .wrapper {
            padding-top: 30px;
          }
          .textSection {
            max-width: 860px;
            margin: 0 auto;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 30px;
            padding: 0 24px;
          }
          .subTitle {
            color: ${colors.white};
            font-size: ${mobileFontSizes.description}px;
            font-weight: ${fontWeights.semibold};
            margin-bottom: 30px;
          }
          .mainTitle {
            color: ${colors.white};
            font-size: ${mobileFontSizes.h1}px;
            font-weight: ${fontWeights.semibold};
            line-height: ${lineHeights.h1};
            margin-bottom: 30px;
          }
          .description {
            color: ${colors.santasGray};
            font-size: ${mobileFontSizes.body}px;
            max-width: 600px;
          }
          .CTASection {
            display: flex;
            justify-content: center;
            margin-bottom: 30px;
            flex-direction: column;
            align-items: center;
          }
          .buttonWrapper {
            margin: 5px 0;
            max-width: 250px;
            width: 100%;
          }
          .newAppWrappper {
            margin: 5px 0;
            max-width: 250px;
            width: 100%;
          }
          .videoSection {
            display: flex;
            justify-content: center;
            max-width: 800px;
            margin: 0 auto;
          }
          .image {
            margin: 20px 0;
            width: 100%;
          }

          @media (min-width: ${breakPoints.medium}px) {
            .wrapper {
              padding-top: 90px;
            }
            .subTitle {
              font-size: ${desktopFontSizes.description}px;
            }
            .mainTitle {
              font-size: ${desktopFontSizes.h1}px;
            }
            .description {
              font-size: ${desktopFontSizes.subInfo}px;
            }
            .CTASection {
              flex-direction: row;
            }
            .buttonWrapper {
              margin: 0 5px;
            }
            .newAppWrappper {
              margin: 0 5px;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default Hero;
