// @flow

import React, { Fragment } from 'react';
import classnames from 'classnames';
import Router from 'next/router';

import Button from 'components/Button';
import Anchor from 'components/Anchor';
import { breakPoints, colors } from 'utils/theme';
import { urls, urlBuilders } from 'utils/urls';
import sendCTAClickEvent from 'utils/analytics';

const HEADER_SIDE_PADDING = 12;
const HEADER_HEIGHT_PADDING_AT_TOP = 12;

const SHOW_WORKBOOK_PREVIEW = 'show-workbook-preview';

/*
  Note: this is a temp fix to get around colouring an SVG on
  hover. A much better fix would be to seperate all icons into a
  seperate directory called icons and import them as components
  as seen below.
*/
const ArrowRightIcon = () => (
  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.277 10.697a.999.999 0 0 0 1.412-1.412l-6.992-6.992a.999.999 0 0 0-1.412 1.412l6.992 6.992zm.706-1.705H3c-1.332 0-1.332 1.998 0 1.998h13.984c1.332 0 1.332-1.998 0-1.998zm-.706.293l-6.992 6.992c-.942.942.47 2.354 1.412 1.412l6.992-6.992c.942-.941-.47-2.354-1.412-1.412z" />
  </svg>
);

type Props = {||};
type State = {| openModal: boolean |};

class WorkbookBanner extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      openModal: false,
    };
  }

  render() {
    return (
      <Fragment>
        <div className="bannerContainer">
          <div className="bannerWrapper">
            <div className="bannerContent">
              <div className="bannerEmoji">
                <img
                  className="image"
                  src={urlBuilders.imageUrl('banners/loudspeaker-emoji.svg')}
                  alt=""
                />
              </div>
              <span>New Workbook is here</span>
            </div>
            <div className="bannerCTAWrapper">
              <Button
                hasBorder
                data-event-label={SHOW_WORKBOOK_PREVIEW}
                onClick={event => {
                  event.preventDefault();
                  sendCTAClickEvent(SHOW_WORKBOOK_PREVIEW).then(() => {
                    Router.push(urls.newWorkbook);
                  });
                }}
              >
                <span>Available on iPad and web</span>
                <div className="buttonImage">
                  <ArrowRightIcon />
                </div>
              </Button>
            </div>
          </div>
          <div className="bannerLinkWrapper">
            <Anchor
              color="white"
              data-event-label={SHOW_WORKBOOK_PREVIEW}
              onClick={event => {
                event.preventDefault();
                sendCTAClickEvent(SHOW_WORKBOOK_PREVIEW).then(() => {
                  Router.push(urls.newWorkbook);
                });
              }}
            >
              <div
                className={classnames({ bannerContent: true, rotation1: true })}
              >
                <div className="bannerEmoji">
                  <img
                    className="image"
                    src={urlBuilders.imageUrl('banners/loudspeaker-emoji.svg')}
                    alt=""
                  />
                </div>
                <span>New Workbook is here</span>
              </div>
              <div
                className={classnames({
                  bannerCTAWrapper: true,
                  rotation2: true,
                })}
              >
                <span>Available on iPad and web</span>
                <span className="iconWrapper">
                  <ArrowRightIcon />
                </span>
              </div>
            </Anchor>
          </div>
        </div>
        <style jsx>{`
          .bannerContainer {
            background-color: ${colors.ebony};
          }
          .bannerWrapper {
            padding: ${HEADER_HEIGHT_PADDING_AT_TOP}px ${HEADER_SIDE_PADDING}px;
            max-width: 780px;
            margin: 0 auto;
            display: none;
            align-items: center;
            color: ${colors.white};
            position: relative;
            overflow: hidden;
            justify-content: center;
          }
          .image {
            width: 100%;
          }
          .bannerContent {
            display: flex;
            align-items: center;
          }
          .bannerEmoji {
            width: 30px;
            margin-right: 5px;
            display: flex;
            align-items: center;
          }
          .bannerCTAWrapper {
            margin-left: 0;
          }
          .buttonImage {
            display: inline-flex;
            max-width: 30px;
            align-items: center;
            margin-left: 5px;
          }
          .bannerLinkWrapper {
            padding: ${HEADER_HEIGHT_PADDING_AT_TOP}px ${HEADER_SIDE_PADDING}px;
            max-width: 780px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            color: ${colors.white};
            position: relative;
            overflow: hidden;
            justify-content: flex-end;
          }
          .iconWrapper {
            display: flex;
            margin-left: 10px;
            fill: ${colors.java};
            padding: 2px 6px;
            border: 1px solid ${colors.java};
            border-radius: 4px;
          }
          .bannerLinkWrapper > :global(a) {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
          }

          .rotation1 {
            display: flex;
            position: absolute;
            width: 300px;
            text-align: center;
            justify-content: center;
            transform: translateY(0%);
            animation: rotation1 10s infinite;
            animation-delay: 2s;
          }
          .rotation2 {
            display: flex;
            align-items: center;
            width: 275px;
            justify-content: center;
            transform: translateY(250%);
            animation: rotation2 10s infinite;
            animation-delay: 2s;
          }

          @keyframes rotation1 {
            0% {
              transform: translateY(0%);
            }
            25% {
              transform: translateY(-250%);
            }
            50% {
              transform: translateY(-250%);
            }
            75% {
              transform: translateY(0%);
            }
            100% {
              transform: translateY(0%);
            }
          }
          @keyframes rotation2 {
            0% {
              transform: translateY(250%);
            }
            25% {
              transform: translateY(0%);
            }
            50% {
              transform: translateY(0%);
            }
            75% {
              transform: translateY(250%);
            }
            100% {
              transform: translateY(250%);
            }
          }
          @media (min-width: ${breakPoints.medium}px) {
            .bannerWrapper {
              display: flex;
            }
            .bannerLinkWrapper {
              display: none;
            }
            .bannerCTAWrapper {
              margin-left: 30px;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default WorkbookBanner;
