// @flow

import React, { Fragment } from 'react';

import Anchor from 'components/Anchor';
import Button from 'components/Button';
import CalendlyModal from 'components/CalendlyModal';

import { urlBuilders, urls } from 'utils/urls';
import sendCTAClickEvent from 'utils/analytics';
import {
  desktopFontSizes,
  mobileFontSizes,
  fontWeights,
  colors,
  breakPoints,
  lineHeights,
} from 'utils/theme';
import { type CountryCodes } from 'utils/types';

const DOWNLOAD_APP_STORE = 'download-app-store';
const DOWNLOAD_GOOGLE_PLAY = 'download-google-play';
const DOWNLOAD_WINDOWS_STORE = 'download-windows-store';
const BOOK_A_DEMO = 'book-a-demo-footer';
const QUICK_CHAT = 'quick-chat-footer';
const JOIN_A_CLASS = 'join-a-class-footer';

type Props = {|
  title: string,
  tagline: string,
  country?: CountryCodes,
  ctaButton?: 'demo' | 'chat',
  ctaLink?: 'join' | 'info',
|};
type State = { showModal: boolean, bookingType: 'demo' | 'chat' };

class FooterTop extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { showModal: false, bookingType: 'demo' };
  }

  render() {
    return (
      <Fragment>
        <div className="topSection">
          <div className="CtaContainer">
            <div className="textWrapper">
              <h2 className="title">{this.props.title}</h2>
              <p className="tagLine">{this.props.tagline}</p>
            </div>
            <div className="ctaWrapper">
              <div className="buttonWrapper">
                {this.props.ctaButton === 'demo' && (
                  <Button
                    color="lochmara"
                    isBlock
                    isFilled
                    data-event-label={BOOK_A_DEMO}
                    onClick={() => {
                      sendCTAClickEvent(BOOK_A_DEMO);
                      this.setState(state => ({
                        ...state,
                        showModal: true,
                        bookingType: 'demo',
                      }));
                    }}
                  >
                    Get a demo
                  </Button>
                )}
                {this.props.ctaButton === 'chat' && (
                  <Button
                    color="lochmara"
                    isBlock
                    isFilled
                    data-event-label={QUICK_CHAT}
                    onClick={() => {
                      sendCTAClickEvent(QUICK_CHAT);
                      this.setState(state => ({
                        ...state,
                        showModal: true,
                        bookingType: 'chat',
                      }));
                    }}
                  >
                    Book a quick call
                  </Button>
                )}
              </div>
              {this.props.ctaLink === 'join' && (
                <div className="subText">
                  Already using Mathspace at school?{' '}
                  <span className="ctaLinkWrapper">
                    <Anchor
                      color="lochmara"
                      href={urls.joinClass}
                      data-event-label={JOIN_A_CLASS}
                      onClick={event => {
                        event.preventDefault();
                        sendCTAClickEvent(JOIN_A_CLASS).then(() => {
                          window.location.assign(urls.joinClass);
                        });
                      }}
                    >
                      Join a class
                    </Anchor>
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="imageContainer">
            <img
              className="devicesImage"
              src={urlBuilders.imageUrl('common/footer-devices.png')}
              alt=""
            />
            <div className="appStoreImageWrapper">
              <Anchor
                href={urls.appleApp}
                data-event-label={DOWNLOAD_APP_STORE}
                onClick={event => {
                  event.preventDefault();
                  sendCTAClickEvent(DOWNLOAD_APP_STORE).then(() => {
                    window.location.assign(urls.appleApp);
                  });
                }}
              >
                <img
                  className="appStoreImage"
                  src={urlBuilders.imageUrl('common/apple_app_store.svg')}
                  alt=""
                />
              </Anchor>
              <Anchor
                href={urls.androidApp}
                data-event-label={DOWNLOAD_GOOGLE_PLAY}
                onClick={event => {
                  event.preventDefault();
                  sendCTAClickEvent(DOWNLOAD_GOOGLE_PLAY).then(() => {
                    window.location.assign(urls.androidApp);
                  });
                }}
              >
                <img
                  className="appStoreImage"
                  src={urlBuilders.imageUrl('common/google_play_store.svg')}
                  alt=""
                />
              </Anchor>
              <Anchor
                href={urls.windowsApp}
                data-event-label={DOWNLOAD_WINDOWS_STORE}
                onClick={event => {
                  event.preventDefault();
                  sendCTAClickEvent(DOWNLOAD_WINDOWS_STORE).then(() => {
                    window.location.assign(urls.windowsApp);
                  });
                }}
              >
                <img
                  className="appStoreImage"
                  src={urlBuilders.imageUrl('common/windows_app_store.svg')}
                  alt=""
                />
              </Anchor>
            </div>
          </div>
        </div>
        {this.state.showModal && (
          <CalendlyModal
            bookingType={this.state.bookingType}
            country={this.props.country}
            onClose={() =>
              this.setState(state => ({
                ...state,
                showModal: false,
              }))
            }
          />
        )}
        <style jsx>{`
          .topSection {
            max-width: 840px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            flex-direction: column-reverse;
            align-items: center;
          }
          .CtaContainer {
            color: ${colors.white};
            justify-content: end;
            display: flex;
            flex-direction: column;
            max-width: 380px;
          }
          .textWrapper {
            margin-bottom: 30px;
          }
          .title {
            font-size: ${mobileFontSizes.h3}px;
            font-weight: ${fontWeights.semibold};
            line-height: ${lineHeights.h2};
            margin-bottom: 10px;
          }
          .tagLine {
            font-size: ${mobileFontSizes.body}px;
            font-weight: ${fontWeights.regular};
            line-height: ${lineHeights.body};
            color: ${colors.grayChateau};
          }
          .imageContainer {
            max-width: 420px;
            display: flex;
            flex-direction: column;
            margin-bottom: 30px;
            width: 100%;
          }
          .devicesImage {
            width: 100%;
            margin-bottom: 10px;
          }
          .appStoreImageWrapper {
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: stretch;
            margin-top: 16px;
          }
          .appStoreImage {
            max-width: 136px;
            width: 100%;
          }
          .ctaLinkWrapper {
            font-weight: ${fontWeights.semibold};
          }
          .buttonWrapper {
            margin-bottom: 10px;
          }
          .subText {
            color: ${colors.grayChateau};
            font-size: ${mobileFontSizes.subInfo}px;
            font-weight: ${fontWeights.light};
          }

          @media (min-width: ${breakPoints.medium}px) {
            .topSection {
              flex-direction: row;
            }
            .buttonWrapper {
              max-width: 200px;
            }
            .bottom-section {
              flex-direction: row;
            }
            .linkSection {
              flex-direction: row;
              align-items: flex-start;
              margin-bottom: 0;
            }
            .linkSection > .linkWrapper + .linkWrapper {
              margin: 0 0 0 15px;
            }
            .imageContainer {
              margin-top: 0;
              margin-bottom: 0;
            }
            .appStoreImageWrapper {
              justify-content: center;
              flex-direction: row;
              align-items: center;
            }
            .appStoreImageWrapper > :global(a) + :global(a) {
              margin-left: 10px;
            }
            .Logo-container {
              align-items: flex-start;
              text-align: left;
            }
            .title {
              font-size: ${desktopFontSizes.h2}px;
            }
            .tagLine {
              font-size: ${desktopFontSizes.body}px;
              font-weight: ${fontWeights.regular};
              line-height: ${lineHeights.body};
            }
            .CopyrightLabel {
              font-size: ${desktopFontSizes.subInfo}px;
              font-weight: ${fontWeights.regular};
              line-height: ${lineHeights.subInfo};
            }
            .LinkGroup-title {
              font-size: ${desktopFontSizes.body}px;
              font-weight: ${fontWeights.regular};
              line-height: ${lineHeights.body};
            }
            .linkWrapper {
              font-size: ${desktopFontSizes.subInfo}px;
              font-weight: ${fontWeights.regular};
              line-height: ${lineHeights.subInfo};
            }
            .contactDetails {
              font-size: ${desktopFontSizes.subInfo}px;
              font-weight: ${fontWeights.regular};
              line-height: ${lineHeights.body};
            }
            .subText {
              font-size: ${desktopFontSizes.subInfo}px;
            }
            .buttonWrapper {
              max-width: 200px;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default FooterTop;
