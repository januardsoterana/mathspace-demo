// @flow

import React, { type ComponentType, Fragment } from 'react';
import Link from 'next/link';
import ClassNames from 'classnames';

import Anchor from 'components/Anchor';
import CalendlyModal from 'components/CalendlyModal';
import Button from 'components/Button';

import {
  breakPoints,
  colors,
  desktopFontSizes,
  mobileFontSizes,
  fontWeights,
  lineHeights,
} from 'utils/theme';
import { urls, urlBuilders } from 'utils/urls';
import sendCTAClickEvent from 'utils/analytics';
import { type CountryCodes } from 'utils/types';

type Props = {
  imageComponent: ComponentType<*>,
  headerText: string,
  mainText: string,
  subText: string,
  country: CountryCodes,
  animate?: boolean,
  ctaLink?: 'info' | 'demo' | 'chat',
  ctaButton?: 'join' | 'chat' | 'demo',
};

type State = {|
  hideContent: boolean,
  showModal: boolean,
  bookingType: 'chat' | 'demo',
|};

const MAX_HERO_CONTAINER_SIZE = 1200;
const SUB_TEXT_MARGIN_TOP = 12;
const SUB_TEXT_MARGIN_BOTTOM = 24;
const RIGHT_CONTAINER_VERTICAL_PADDING = 40;
const HERO_PANEL_MOBILE_PADDING = 24;
const HERO_PANEL_CONTENT_MAX_SIZE = 480;
const LOGO_CONTAINER_SPACING = 16;
const LOGO_SPACING = 10;
const MAIN_TEXT_SPACING = 10;
const BUTTON_WRAPPER_MARGIN = 16;
const DESKTOP_HERO_CTA_WIDTH = 235;

const BOOK_A_DEMO_1 = 'book-a-demo-1';
const BOOK_A_CHAT_1 = 'book-a-chat-1';
const JOIN_A_CLASS = 'join-a-class';
const BOOK_A_QUICK_CHAT = 'book-a-quick-chat';

const AustralianFeaturedList = () => (
  <Fragment>
    <Link href={urls.ted} passHref>
      <Anchor>
        <img
          className="tedLogo"
          src={urlBuilders.imageUrl('legacyHomepage/ted_logo.svg')}
          alt="TED"
        />
      </Anchor>
    </Link>
    <Link href={urls.financialReview} passHref>
      <Anchor>
        <img
          className="logo"
          src={urlBuilders.imageUrl('legacyHomepage/financial.png')}
          alt="Financial Review"
        />
      </Anchor>
    </Link>

    <Link href={urls.dailyTelegraph} passHref>
      <Anchor>
        <img
          className="dailyTelegraph"
          src={urlBuilders.imageUrl('legacyHomepage/Daily-Telegraph.png')}
          alt="Daily Telegraph"
        />
      </Anchor>
    </Link>
    <style jsx>{`
      .tedLogo {
        max-width: 32px;
      }
      .dailyTelegraph {
        max-width: 110px;
        display: flex;
      }
      .logo {
        max-width: 110px;
      }
    `}</style>
  </Fragment>
);

const AmericanFeaturedList = () => (
  <Fragment>
    <Link href={urls.forbes} passHref>
      <Anchor>
        <img
          className="forbes"
          src={urlBuilders.imageUrl('legacyHomepage/forbes.svg')}
          alt="Forbes"
        />
      </Anchor>
    </Link>
    <Link href={urls.educationWeek} passHref>
      <Anchor>
        <img
          className="educationWeek"
          src={urlBuilders.imageUrl('legacyHomepage/educationWeek.svg')}
          alt="Education Week"
        />
      </Anchor>
    </Link>
    <Link href={urls.ted} passHref>
      <Anchor>
        <img
          className="tedLogo"
          src={urlBuilders.imageUrl('legacyHomepage/ted_logo.svg')}
          alt="TED"
        />
      </Anchor>
    </Link>
    <Link href={urls.financialReview} passHref>
      <Anchor>
        <img
          className="logo"
          src={urlBuilders.imageUrl('legacyHomepage/financial.png')}
          alt="Financial Review"
        />
      </Anchor>
    </Link>
    <style jsx>{`
      .tedLogo {
        max-width: 32px;
      }
      .forbes {
        max-width: 110px;
        max-height: 22px;
        display: flex;
      }
      .educationWeek {
        max-width: 125px;
      }
      .logo {
        max-width: 110px;
      }
    `}</style>
  </Fragment>
);

class HeroPanel extends React.Component<Props, State> {
  checkPosition: () => {};
  windowHeight: number;
  heroPanel: any;

  constructor(props: Props) {
    super(props);

    this.state = {
      hideContent: !!this.props.animate,
      showModal: false,
      bookingType: 'demo',
    };
    this.checkPosition = this.checkPosition.bind(this);
    this.heroPanel = React.createRef();
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
      this.heroPanel.current.getBoundingClientRect().top - this.windowHeight <=
      0
    ) {
      this.setState(state => ({ ...state, hideContent: false }));
      window.removeEventListener('scroll', this.checkPosition, false);
    }
  }

  render() {
    const ImageComponent = this.props.imageComponent;
    const imageWrapperClass = ClassNames({
      imageWrapper: true,
      hide: true,
      fadeInImage: !this.state.hideContent,
    });
    const headerTextClass = ClassNames({
      headerText: true,
      hide: true,
      fadeInHeaderText: !this.state.hideContent,
    });
    const mainTextClass = ClassNames({
      mainText: true,
      hide: true,
      fadeInMainText: !this.state.hideContent,
    });
    const subTextClass = ClassNames({
      subText: true,
      hide: true,
      fadeInSubText: !this.state.hideContent,
    });
    const CTAClass = ClassNames({
      hide: true,
      fadeInCTA: !this.state.hideContent,
    });
    const featuredContainerClass = ClassNames({
      featuredContainer: true,
      hide: true,
      fadeInFeaturedContainer: !this.state.hideContent,
    });

    return (
      <Fragment>
        <section ref={this.heroPanel} className="heroContainer">
          <div className={imageWrapperClass}>
            <ImageComponent />
          </div>
          <div className="rightContainer">
            <div className="topSection">
              <h2 className={headerTextClass}>{this.props.headerText}</h2>
              <h1 className={mainTextClass}>{this.props.mainText}</h1>
              <h2 className={subTextClass}>{this.props.subText}</h2>
              <div className={CTAClass}>
                <div className="buttonWrapper">
                  {/* CTA Button */}
                  {this.props.ctaButton === 'join' && (
                    <Button
                      isBlock
                      isFilled
                      size="large"
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
                    </Button>
                  )}
                  {this.props.ctaButton === 'chat' && (
                    <Button
                      isBlock
                      isFilled
                      size="large"
                      color="lochmara"
                      data-event-label={BOOK_A_QUICK_CHAT}
                      onClick={() => {
                        sendCTAClickEvent(BOOK_A_QUICK_CHAT);
                        this.setState(state => ({
                          ...state,
                          bookingType: 'chat',
                          showModal: true,
                        }));
                      }}
                    >
                      Book a quick chat
                    </Button>
                  )}
                  {this.props.ctaButton === 'demo' && (
                    <Button
                      isBlock
                      isFilled
                      size="large"
                      color="lochmara"
                      data-event-label={BOOK_A_QUICK_CHAT}
                      onClick={() => {
                        sendCTAClickEvent(BOOK_A_QUICK_CHAT);
                        this.setState(state => ({
                          ...state,
                          bookingType: 'demo',
                          showModal: true,
                        }));
                      }}
                    >
                      Book a demo
                    </Button>
                  )}
                </div>
                {/* CTA Links */}
                <div className="joinClassWrapper">
                  {this.props.ctaLink === 'demo' && (
                    <Fragment>
                      <span>Are you a teacher? </span>
                      <span className="linkWrapper">
                        <Anchor
                          color="lochmara"
                          data-event-label={BOOK_A_DEMO_1}
                          onClick={() => {
                            sendCTAClickEvent(BOOK_A_DEMO_1);
                            this.setState(state => ({
                              ...state,
                              bookingType: 'demo',
                              showModal: true,
                            }));
                          }}
                        >
                          Book a demo.
                        </Anchor>
                      </span>
                    </Fragment>
                  )}
                  {this.props.ctaLink === 'chat' && (
                    <Fragment>
                      <span>Short on time? </span>
                      <span className="linkWrapper">
                        <Anchor
                          color="lochmara"
                          data-event-label={BOOK_A_CHAT_1}
                          onClick={() => {
                            sendCTAClickEvent(BOOK_A_CHAT_1);
                            this.setState(state => ({
                              ...state,
                              bookingType: 'chat',
                              showModal: true,
                            }));
                          }}
                        >
                          Learn more with a quick chat
                        </Anchor>
                      </span>
                    </Fragment>
                  )}
                  {this.props.ctaLink === 'info' && (
                    <Fragment>
                      <span>Are you a teacher? </span>
                      <span className="linkWrapper">
                        <Anchor color="lochmara" href={urls.teachersAU}>
                          Find out more
                        </Anchor>
                      </span>
                    </Fragment>
                  )}
                </div>
              </div>
            </div>
            <div className={featuredContainerClass}>
              <div>As featured on</div>
              <div className="logoContainer">
                {this.props.country === 'US' ? (
                  <AmericanFeaturedList />
                ) : (
                  <AustralianFeaturedList />
                )}
              </div>
            </div>
          </div>
        </section>
        {this.state.showModal && (
          <CalendlyModal
            bookingType={this.state.bookingType}
            country={this.props.country}
            onClose={() =>
              this.setState(state => ({ ...state, showModal: false }))
            }
          />
        )}
        <style jsx>{`
          .heroContainer {
            display: flex;
            flex-direction: column-reverse;
            margin-left: ${HERO_PANEL_MOBILE_PADDING}px;
            margin-right: ${HERO_PANEL_MOBILE_PADDING}px;
            align-items: center;
          }
          .imageWrapper {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 0;
            min-height: 275px;
          }
          .rightContainer {
            max-width: ${HERO_PANEL_CONTENT_MAX_SIZE}px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }
          .topSection {
            margin: 20px 0px 35px;
          }
          .headerText {
            font-size: ${mobileFontSizes.h4}px;
            line-height: ${lineHeights.h4};
            font-weight: ${fontWeights.semibold};
            color: ${colors.cloudBurst};
          }
          .mainText {
            font-size: ${mobileFontSizes.h1}px;
            line-height: ${lineHeights.h1};
            font-weight: ${fontWeights.semibold};
            color: ${colors.cloudBurst};
            margin-top: ${MAIN_TEXT_SPACING}px;
          }
          .subText {
            font-size: ${mobileFontSizes.h2}px;
            line-height: ${lineHeights.h2};
            font-weight: ${fontWeights.light};
            color: ${colors.nevada};
            margin-top: ${SUB_TEXT_MARGIN_TOP}px;
            margin-bottom: ${SUB_TEXT_MARGIN_BOTTOM}px;
          }
          .featuredContainer {
            display: none;
            font-size: ${mobileFontSizes.body}px;
            line-height: ${lineHeights.body};
            font-weight: ${fontWeights.regular};
            margin-top: 20px;
            color: ${colors.grayChateau};
          }
          .logoContainer {
            margin-top: ${LOGO_CONTAINER_SPACING}px;
            display: flex;
            align-items: flex-end;
          }
          .logoContainer > :global(a) + :global(a) {
            margin-left: ${LOGO_SPACING}px;
          }
          .buttonWrapper {
            margin-bottom: ${BUTTON_WRAPPER_MARGIN}px;
          }
          .joinClassWrapper {
            font-size: ${mobileFontSizes.subInfo}px;
            color: ${colors.grayChateau};
            margin-bottom: 24px;
          }
          .linkWrapper {
            font-weight: ${fontWeights.semibold};
          }

          .hide {
            opacity: 0;
            transform: translateY(50%);
          }
          .fadeInImage {
            animation: fade-in 1s forwards;
            animation-delay: 1s;
          }
          .fadeInHeaderText {
            animation: fade-in 1s forwards;
            animation-delay: 1.25s;
          }
          .fadeInMainText {
            animation: fade-in 1s forwards;
            animation-delay: 1.5s;
          }
          .fadeInSubText {
            animation: fade-in 1s forwards;
            animation-delay: 1.75s;
          }
          .fadeInCTA {
            animation: fade-in forwards;
            animation-delay: 2s;
          }
          .fadeInFeaturedContainer {
            animation: fade-in 1s forwards;
            animation-delay: 2.25s;
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
              align-items: stretch;
              justify-content: space-between;
              max-width: ${MAX_HERO_CONTAINER_SIZE}px;
              margin: 0 auto;
            }
            .imageWrapper {
              width: 100%;
            }
            .headerText {
              font-size: ${desktopFontSizes.h2}px;
              line-height: ${lineHeights.h2};
              font-weight: ${fontWeights.light};
            }
            .mainText {
              font-size: ${desktopFontSizes.h1}px;
              line-height: ${lineHeights.h1};
              font-weight: ${fontWeights.semibold};
            }
            .subText {
              font-size: ${desktopFontSizes.h2}px;
              line-height: ${lineHeights.h2};
              font-weight: ${fontWeights.light};
            }
            .featuredContainer {
              display: block;
            }
            .rightContainer {
              padding: ${RIGHT_CONTAINER_VERTICAL_PADDING}px 0;
            }
            .topSection {
              margin: 0;
            }
            .joinClassWrapper {
              font-size: ${desktopFontSizes.subInfo}px;
            }
            .buttonWrapper {
              display: block;
              max-width: ${DESKTOP_HERO_CTA_WIDTH}px;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default HeroPanel;
