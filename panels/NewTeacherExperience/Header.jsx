// @flow

import React, { type ComponentType, Fragment } from 'react';

import Anchor from 'components/Anchor';

import { breakPoints, transitions, colors } from 'utils/theme';
import { urlBuilders, getUrlsForCounty } from 'utils/urls';
import { type CountryRoutes } from 'utils/types';

const HEADER_SIDE_PADDING = 40;

const MOBILE_HEADER_SIDE_PADDING = 24;
const MOBILE_HEADER_HEIGHT_PADDING_AT_TOP = 8;

type Props = {
  cta?: ComponentType<*>,
};

const Header = ({ cta }: Props) => {
  const countryRoutes: CountryRoutes = getUrlsForCounty();
  const CTA = cta;
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
            {CTA && <div className="rightSection">{<CTA />}</div>}
          </div>
          <div className="mobileHeaderContainer">
            <div className="mobileIconContainer">
              <Anchor href={countryRoutes.homepage}>
                <img
                  className="headerIcon"
                  src={urlBuilders.imageUrl('common/Mathspace-flat-icon.svg')}
                  alt="Mathspace"
                />
              </Anchor>
            </div>
            {CTA && <div className="rightSection">{<CTA />}</div>}
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
          background: ${colors.athensGray};
        }
        .headerContainer {
          display: none;
          justify-content: space-between;
          padding: 0 ${HEADER_SIDE_PADDING}px;
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
        }
        .mobileHeaderContainer {
          display: flex;
          justify-content: space-between;
          padding: ${MOBILE_HEADER_HEIGHT_PADDING_AT_TOP}px
            ${MOBILE_HEADER_SIDE_PADDING}px;
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
