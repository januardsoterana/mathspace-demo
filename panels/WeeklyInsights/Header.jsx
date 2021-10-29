// @flow

import React, { Fragment } from 'react';
import Router from 'next/router';

import Anchor from 'components/Anchor';
import Button from 'components/Button';

import { colors, breakPoints, transitions } from 'utils/theme';
import { urls, urlBuilders, getUrlsForCounty } from 'utils/urls';
import sendCTAClickEvent from 'utils/analytics';
import { type CountryRoutes } from 'utils/types';

const HEADER_LOGIN = 'header-login';

const Header = () => {
  const countryRoutes: CountryRoutes = getUrlsForCounty();
  return (
    <Fragment>
      <header className="headerWrapper">
        <div className="fixedHeader">
          <div className="headerContainer">
            <div className="leftSection">
              <div className="iconContainer">
                <Anchor href={countryRoutes.homepage}>
                  <img
                    className="headerIcon"
                    src={urlBuilders.imageUrl('common/mathspace-logo-flat.svg')}
                    alt="Mathspace"
                  />
                </Anchor>
              </div>
            </div>
            <div className="rightSection">
              <Button
                hasBorder
                color="iron"
                href={urls.login}
                onClick={event => {
                  event.preventDefault();
                  sendCTAClickEvent(HEADER_LOGIN).then(() => {
                    Router.push(urls.login);
                  });
                }}
              >
                <span className="loginAction">Login</span>
              </Button>
            </div>
          </div>
          <div className="mobileHeaderContainer">
            <div className="mobileIconContainer">
              <Anchor href={countryRoutes.homepage}>
                <img
                  className="headerIcon"
                  src={urlBuilders.imageUrl('common/mathspace-logo-flat.svg')}
                  alt="Mathspace"
                />
              </Anchor>
            </div>
            <div className="rightSection">
              <Button
                hasBorder
                color="iron"
                href={urls.login}
                onClick={event => {
                  event.preventDefault();
                  sendCTAClickEvent(HEADER_LOGIN).then(() => {
                    Router.push(urls.login);
                  });
                }}
              >
                <span className="loginAction">Login</span>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <style jsx>{`
        .headerWrapper {
          display: flex;
          align-items: center;
          height: 50px;
        }
        .fixedHeader {
          display: flex;
          position: fixed;
          left: 0;
          right: 0;
          z-index: 3;
          height: 50px;
          background: ${colors.white};
        }
        .headerContainer {
          display: none;
          justify-content: space-between;
          padding: 0 24px;
          transition: padding ${transitions.default};
          opacity: 0.97;
          max-width: 1000px;
          margin: 0 auto;
          width: 100%;
        }
        .leftSection {
          display: flex;
        }
        .rightSection {
          display: flex;
          align-items: center;
        }
        .iconContainer {
          display: flex;
          align-items: center;
          cursor: pointer;
          max-width: 144px;
        }
        .iconContainer > :global(.link) {
          display: flex;
        }
        .headerIcon {
          width: 100%;
          height: 23px;
        }
        .loginAction {
          color: ${colors.cloudBurst};
        }
        .mobileHeaderContainer {
          display: flex;
          justify-content: space-between;
          padding: 8px 24px;
          transition: padding ${transitions.default};
          width: 100%;
        }
        .mobileIconContainer {
          max-width: 144px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .mobileIconContainer > :global(.link) {
          display: flex;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .headerContainer {
            display: flex;
          }
          .headerWrapper {
            height: 65px;
          }
          .fixedHeader {
            height: 65px;
          }
          .mobileHeaderContainer {
            display: none;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Header;
