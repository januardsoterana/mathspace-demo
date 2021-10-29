// @flow

import React, { Fragment, useState } from 'react';
import classnames from 'classnames';
import Link from 'next/link';

import Anchor from 'components/Anchor';
import Button from 'components/Button';
import Accordion from 'components/Accordion';
import Chevron from 'components/Shared/SVG/Chevron';
import CloseIcon from 'components/Shared/SVG/CloseIcon';
import { urlBuilders, urls } from 'utils/urls';
import { zIndex, colors, mobileFontSizes } from 'utils/theme';
import sendCTAClickEvent from 'utils/analytics';

const ANIMATION_DURATION = 300;
const MOBILE_LOGIN = 'mobile-login';
const MOBILE_JOIN_A_CLASS = 'mobile-join-a-class';

type Props = {
  homeUrl: string,
  sections: Array<{
    title: string,
    items: Array<{
      name: string,
      link: string,
      isExternal: boolean,
      country: string,
    }>,
  }>,
  onClose: () => void,
};
const MenuModal = ({ homeUrl, sections, onClose }: Props) => {
  const [exiting, setExiting] = useState(false);
  return (
    <Fragment>
      <div
        className={classnames({
          menuModalContainer: true,
          menuEnterAnimation: true,
          menuExitAnimation: exiting,
        })}
      >
        {/* Exit Button */}
        <div className="exitWrapper">
          <img
            className="logo"
            src={urlBuilders.imageUrl(
              'common/Mathspace-logo-flat-reversed.svg',
            )}
            alt=""
          />
          <Anchor
            color="white"
            onClick={() => {
              setExiting(true);
              if (onClose) {
                setTimeout(() => {
                  onClose();
                }, ANIMATION_DURATION);
              }
            }}
          >
            <CloseIcon />
          </Anchor>
        </div>
        <div className="contentContainer">
          {/* Menu Section */}
          <div className="linkContainer">
            <div className="homeLink">
              <Link href={homeUrl} passHref>
                <Anchor color="white">
                  <div className="homeLinkContent">
                    <div className="linkName">Home</div>
                    <div className="chevronWrapper">
                      <Chevron color={colors.white} strokeWidth={2} />
                    </div>
                  </div>
                </Anchor>
              </Link>
            </div>
            {sections.map(
              section =>
                (section.items.length === 1 && (
                  <div key={`${section.title}`} className="homeLink">
                    <Link href={section.items[0].link} passHref>
                      <Anchor color="white">
                        <div className="homeLinkContent">
                          <div className="linkName">{section.title}</div>
                          <div className="chevronWrapper">
                            <Chevron color={colors.white} strokeWidth={2} />
                          </div>
                        </div>
                      </Anchor>
                    </Link>
                  </div>
                )) || (
                  <div key={section.title} className="accordionWrapper">
                    <Accordion interactive title={section.title}>
                      <div className="menuItems">
                        {section.items.map(item => (
                          <div key={item.name} className="menuItem">
                            <Anchor href={item.link} color="java">
                              {item.name}
                            </Anchor>
                          </div>
                        ))}
                      </div>
                    </Accordion>
                  </div>
                ),
            )}
          </div>
          {/* CTAs */}
          <div className="ctaContainer">
            <div className="cta">
              <Button
                color="white"
                size="large"
                href={urls.joinClass}
                hasBorder
                isBlock
                data-event-label={MOBILE_JOIN_A_CLASS}
                onClick={event => {
                  event.preventDefault();
                  sendCTAClickEvent(MOBILE_JOIN_A_CLASS).then(() => {
                    window.location.assign(urls.joinClass);
                  });
                }}
              >
                Join a class
              </Button>
            </div>
            <div className="cta">
              <Button
                color="white"
                size="large"
                href={urls.login}
                isBlock
                data-event-label={MOBILE_LOGIN}
                onClick={event => {
                  event.preventDefault();
                  sendCTAClickEvent(MOBILE_LOGIN).then(() => {
                    window.location.assign(urls.login);
                  });
                }}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
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

        .exitWrapper {
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
          padding: 20px;
        }
        .logo {
          max-width: 160px;
        }
        .menuModalContainer {
          background-color: ${colors.cloudBurst};
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
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
        .homeLinkContent {
          display: flex;
          justify-content: space-between;
          padding: 10px 20px;
          border-bottom: 1px solid ${colors.white};
          font-size: 20px;
        }
        .chevronWrapper {
          transform: rotate(90deg);
          display: flex;
          align-items: center;
        }
        .contentContainer {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
        }
        .linkContainer {
          font-size: ${mobileFontSizes.body}px;
        }
        .accordionWrapper {
          padding: 10px 20px;
          border-bottom: 1px solid ${colors.white};
        }
        .menuItems {
          display: flex;
          flex-direction: column;
          min-width: 220px;
          padding: 5px 0;
        }
        .menuItem + .menuItem {
          margin-top: 10px;
        }
        .ctaContainer {
          display: flex;
          flex-direction: column;
          padding: 20px 20px 60px;
        }
        .cta {
          font-size: ${mobileFontSizes.h4}px;
        }
        .cta + .cta {
          margin-top: 10px;
        }
      `}</style>
    </Fragment>
  );
};

export default MenuModal;
