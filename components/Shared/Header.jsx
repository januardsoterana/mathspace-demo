// @flow

import React, { Fragment, useState } from 'react';
import Link from 'next/link';

import MenuIcon from 'components/Shared/SVG/MenuIcon';
import Anchor from 'components/Anchor';
import Button from 'components/Button';
import MenuModal from 'components/Shared/MenuModal';
import Banner from 'components/Shared/Banner';
import {
  urlBuilders,
  urls,
  companyMenuAU,
  companyMenuUS,
  teacherMenuAU,
  teacherMenuUS,
  resourcesMenuAU,
  resourcesMenuUS,
  whyMenuAU,
  resourceMenuAU,
  priceMenuAU,
  aboutUsMenuAU,
  whyMenuUS,
  resourceMenuUS,
  priceMenuUS,
  aboutUsMenuUS,
} from 'utils/urls';
import sendCTAClickEvent from 'utils/analytics';
import { breakPoints, transitions, zIndex, colors } from 'utils/theme';
import { type CountryCodes, type Banner as BannerType } from 'utils/types';
import MegaMenuItem from 'components/Shared/MegaMenuItem';

const HEADER_LOGIN = 'header-login';
const HEADER_JOIN_A_CLASS = 'header-join-a-class';

type Props = {|
  country: CountryCodes,
  bannerData?: Array<BannerType>,
|};
const Header = ({ country, bannerData = [] }: Props) => {
  const [selected, setSelected] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const banner = bannerData.filter(item =>
    item.allowedCountries.includes(country),
  )[0];
  const HAS_BANNER = !!banner;
  const parentsUrl = country === 'AU' ? urls.parentsAU : urls.parentsUS;
  const menuModalCompany = country === 'AU' ? companyMenuAU : companyMenuUS;
  const menuModalParents = {
    title: 'Parents',
    items: [
      {
        name: 'Parents',
        link: parentsUrl,
        isExternal: false,
        country: 'All',
      },
    ],
  };
  const menuModalResources =
    country === 'AU' ? resourcesMenuAU : resourcesMenuUS;
  const menuModalTeacher = country === 'AU' ? teacherMenuAU : teacherMenuUS;
  const homeUrl = country === 'AU' ? urls.homepageAU : urls.homepageUS;
  const handleClickMegaMenu = value => {
    if (selected === value) {
      setSelected('');
    } else {
      setSelected(value);
    }
  };
  return (
    <Fragment>
      <div className="header">
        <div className="fixedHeader">
          {/* Banner Section */}
          {HAS_BANNER && <Banner data={banner} />}
          <div className="container">
            <div className="wrapper">
              <div className="logoAndNavigationWrapper">
                <div className="logoWrapper">
                  <Link href={homeUrl} passHref>
                    <Anchor>
                      <img
                        className="logo"
                        src={urlBuilders.imageUrl(
                          'common/Mathspace-logo-flat.svg',
                        )}
                        alt=""
                      />
                    </Anchor>
                  </Link>
                </div>
                <div className="navigationWrapper">
                  {country === 'AU' && (
                    <Fragment>
                      <div className="linkWrapper">
                        <MegaMenuItem
                          heading={whyMenuAU.title}
                          showMenu={selected === whyMenuAU.title}
                          visibilitySetter={handleClickMegaMenu}
                          items={whyMenuAU.items}
                        />
                      </div>
                      <div className="linkWrapper">
                        <MegaMenuItem
                          heading={resourceMenuAU.title}
                          showMenu={selected === resourceMenuAU.title}
                          visibilitySetter={handleClickMegaMenu}
                          items={resourceMenuAU.items}
                        />
                      </div>
                      <div className="linkWrapper">
                        <MegaMenuItem
                          heading={aboutUsMenuAU.title}
                          showMenu={selected === aboutUsMenuAU.title}
                          visibilitySetter={handleClickMegaMenu}
                          items={aboutUsMenuAU.items}
                        />
                      </div>
                      <div className="linkWrapper">
                        <MegaMenuItem
                          heading={priceMenuAU.title}
                          showMenu={selected === priceMenuAU.title}
                          visibilitySetter={handleClickMegaMenu}
                          items={priceMenuAU.items}
                        />
                      </div>
                    </Fragment>
                  )}
                  {country === 'US' && (
                    <Fragment>
                      <div className="linkWrapper">
                        <MegaMenuItem
                          heading={whyMenuUS.title}
                          showMenu={selected === whyMenuUS.title}
                          visibilitySetter={handleClickMegaMenu}
                          items={whyMenuUS.items}
                        />
                      </div>
                      <div className="linkWrapper">
                        <MegaMenuItem
                          heading={resourceMenuUS.title}
                          showMenu={selected === resourceMenuUS.title}
                          visibilitySetter={handleClickMegaMenu}
                          items={resourceMenuUS.items}
                        />
                      </div>
                      <div className="linkWrapper">
                        <MegaMenuItem
                          heading={aboutUsMenuUS.title}
                          showMenu={selected === aboutUsMenuUS.title}
                          visibilitySetter={handleClickMegaMenu}
                          items={aboutUsMenuUS.items}
                        />
                      </div>
                      <div className="linkWrapper">
                        <MegaMenuItem
                          heading={priceMenuUS.title}
                          showMenu={selected === priceMenuUS.title}
                          visibilitySetter={handleClickMegaMenu}
                          items={priceMenuUS.items}
                        />
                      </div>
                    </Fragment>
                  )}
                </div>
              </div>

              <div className="ctaWrapper">
                <div className="buttonWrapper">
                  <Button
                    color="cloudBurst"
                    href={urls.joinClass}
                    data-event-label={HEADER_JOIN_A_CLASS}
                    onClick={event => {
                      event.preventDefault();
                      sendCTAClickEvent(HEADER_JOIN_A_CLASS).then(() => {
                        window.location.assign(urls.joinClass);
                      });
                    }}
                  >
                    Book demo
                  </Button>
                </div>
                <div className="buttonWrapper">
                  <Button
                    hasBorder
                    isBlock
                    isRound
                    color="cloudBurst"
                    href={urls.login}
                    data-event-label={HEADER_LOGIN}
                    onClick={event => {
                      event.preventDefault();
                      sendCTAClickEvent(HEADER_LOGIN).then(() => {
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
          <div className="mobileContainer">
            <div className="mobileWrapper">
              <div className="mobileIconContainer">
                <Link href={urls.homeRedirect} passHref>
                  <Anchor>
                    <div className="mobileLogoWrapper">
                      <img
                        className="image"
                        src={urlBuilders.imageUrl(
                          'common/Mathspace-logo-flat-reversed.svg',
                        )}
                        alt="Mathspace"
                      />
                    </div>
                  </Anchor>
                </Link>
              </div>
              <Anchor
                onClick={() => {
                  setMenuOpen(true);
                }}
              >
                <MenuIcon />
              </Anchor>
            </div>
          </div>
        </div>
      </div>
      {menuOpen && (
        <MenuModal
          homeUrl={homeUrl}
          sections={[
            menuModalCompany,
            menuModalTeacher,
            menuModalParents,
            menuModalResources,
          ]}
          onClose={() => setMenuOpen(false)}
        />
      )}
      <style jsx>{`
        .header {
          height: ${HAS_BANNER ? 146 : 96}px;
        }

        .fixedHeader {
          position: fixed;
          left: 0;
          right: 0;
          top: 0;
          z-index: ${zIndex.header};
          background-color: ${colors.cloudBurst};
          box-shadow: 0 8.75px 49px rgba(33, 55, 77, 0.15);
        }

        .container {
          padding: 22px 24px;
          display: none;
        }

        .wrapper {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 24px;
          padding-left: 24px;
        }

        .logoAndNavigationWrapper {
          display: flex;
        }

        .navigationWrapper {
          display: flex;
        }

        .linkWrapper {
          white-space: nowrap;
        }

        .linkWrapper + .linkWrapper {
          margin-left: 38px;
        }

        .logoWrapper {
          margin: 0 41px 0 0;
          max-width: 166px;
          display: flex;
          align-items: center;
        }

        .logo {
          width: 100%;
        }

        .ctaWrapper {
          display: flex;
          padding-right: 70px;
        }

        .buttonWrapper {
          width: 130px;
        }

        .buttonWrapper + .buttonWrapper {
          margin-left: 14px;
          width: 90px;
        }

        .mobileWrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 24px;
          transition: padding ${transitions.default};
        }

        .mobileIconContainer {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .mobileLogoWrapper {
          max-width: 160px;
        }

        .image {
          width: 100%;
        }

        @media (min-width: ${breakPoints.large}px) {
          .header {
            height: ${HAS_BANNER ? 128 : 64}px;
          }

          .fixedHeader {
            background-color: ${colors.white};
          }

          .container {
            display: block;
          }

          .mobileWrapper {
            display: none;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Header;
