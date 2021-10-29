// @flow

import React, { Fragment } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import Anchor from 'components/Anchor';
import Accordion from 'components/Accordion';
import { urlBuilders, urls } from 'utils/urls';
import { colors, fontWeights, zIndex, mobileFontSizes } from 'utils/theme';
import sendCTAClickEvent from 'utils/analytics';
import { type CountryCodes } from 'utils/types';

const MOBILE_LOGIN = 'mobile-login';
const MOBILE_JOIN_A_CLASS = 'mobile-join-a-class';
const MOBILE_BOOK_A_PD = 'mobile-book-a-pd';
const TEACHER_NAV_OPENED = 'teacher-mobile-nav-opened';
const RESOURCES_NAV_OPENED = 'resources-mobile-nav-opened';
const NAV_LINK_CLICKED = 'nav-link-clicked';

const MENU_LINK_CLICK_AREA = 40;
const MENU_MODAL_PADDING = 20;
const ANIMATION_DURATION = 300;

type Props = {|
  sections: Array<{
    title: string,
    links: Array<{
      name: string,
      href: string,
      country: string,
      exclude: Array<string>,
      external?: boolean,
    }>,
  }>,
  country: CountryCodes,
  onClose?: () => void,
|};

type State = {|
  exiting: boolean,
|};

class MenuModal extends React.Component<Props, State> {
  externalMenuLinks: Array<{| url: string, dataLabel: string, title: string |}>;

  constructor(props: Props) {
    super(props);
    this.state = {
      exiting: false,
    };

    this.externalMenuLinks = [
      {
        url: urls.login,
        dataLabel: MOBILE_LOGIN,
        title: 'Login',
      },
      {
        url: urls.joinClass,
        dataLabel: MOBILE_JOIN_A_CLASS,
        title: 'Join a class',
      },
      {
        url: urls.bookDemo,
        dataLabel: MOBILE_BOOK_A_PD,
        title: 'Book a PD',
      },
    ];
  }

  render() {
    const { sections, onClose } = this.props;
    const { exiting } = this.state;
    return (
      <Fragment>
        <aside
          className={classNames({
            menuModalContainer: true,
            menuEnterAnimation: true,
            menuExitAnimation: exiting,
          })}
        >
          <div>
            <div className="header">
              <Anchor
                color="white"
                onClick={() => {
                  this.setState(state => ({ ...state, exiting: true }));
                  if (onClose) {
                    setTimeout(() => {
                      onClose();
                    }, ANIMATION_DURATION);
                  }
                }}
              >
                <img src={urlBuilders.imageUrl('common/Exit.svg')} alt="" />
              </Anchor>
            </div>
            <div className="linkContainer">
              {/* Menu Links */}
              {sections.map(section => (
                <div key={section.title} className="accordionWrapper">
                  <Accordion
                    interactive
                    title={section.title}
                    onClick={(title, isOpened) => {
                      if (isOpened)
                        switch (title) {
                          case 'Teachers':
                            sendCTAClickEvent(TEACHER_NAV_OPENED);
                            break;
                          case 'Resources':
                            sendCTAClickEvent(RESOURCES_NAV_OPENED);
                            break;
                          default:
                            break;
                        }
                    }}
                  >
                    <nav className="list">
                      {section.links
                        .filter(
                          link =>
                            (link.country === this.props.country ||
                              link.country === 'All') &&
                            !link.exclude.includes(this.props.country),
                        )
                        .map(link => (
                          <div
                            key={section.title + link.name}
                            className="listItem"
                          >
                            <Link href={link.href} passHref>
                              <Anchor
                                data-event-label={NAV_LINK_CLICKED}
                                onClick={() => {
                                  const label = `${NAV_LINK_CLICKED}::${section.title.toLowerCase()}>${link.name
                                    .replace(/\s+/g, '_')
                                    .toLowerCase()}`;
                                  sendCTAClickEvent(label)
                                    .then(() => {
                                      window.location.assign(link.href);
                                    })
                                    .catch(() => {
                                      window.location.assign(link.href);
                                    });
                                }}
                              >
                                {link.name}
                              </Anchor>
                            </Link>
                          </div>
                        ))}
                    </nav>
                  </Accordion>
                </div>
              ))}
              {/* Static Links */}
              <nav>
                {this.externalMenuLinks.map(link => (
                  <div key={link.title} className="menuLink">
                    <Anchor
                      href={link.url}
                      color="crusta"
                      data-event-label={link.dataLabel}
                      onClick={event => {
                        event.preventDefault();
                        sendCTAClickEvent(link.dataLabel).then(() => {
                          window.location.assign(link.url);
                        });
                      }}
                    >
                      {link.title}
                    </Anchor>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </aside>
        <style jsx>{`
          @keyframes menuEnter {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(0%);
            }
          }
          @keyframes menuExit {
            from {
              transform: translateX(0%);
            }
            to {
              transform: translateX(-100%);
            }
          }

          .menuModalContainer {
            background-color: ${colors.astronaut};
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            padding: ${MENU_MODAL_PADDING}px;
            justify-content: space-between;
            z-index: ${zIndex.menuModal};
          }
          .menuEnterAnimation {
            animation-name: menuEnter;
            animation-duration: ${ANIMATION_DURATION}ms;
            animation-fill-mode: forwards;
            animation-timing-function: ease-out;
          }
          .menuExitAnimation {
            animation-name: menuExit;
            animation-duration: ${ANIMATION_DURATION}ms;
          }
          .linkContainer {
            font-size: ${mobileFontSizes.h4}px;
          }
          .header {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 30px;
          }
          .menuLink {
            font-weight: ${fontWeights.light};
            display: flex;
            align-items: center;
            height: ${MENU_LINK_CLICK_AREA}px;
            cursor: pointer;
          }
          .list {
            display: flex;
            flex-direction: column;
            min-width: 220px;
            padding: 5px 0;
          }
          .listItem {
            padding: 5px 24px;
          }
          .accordionWrapper {
            padding: 7px 0;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default MenuModal;
