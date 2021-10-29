// @flow

import React, { Fragment, useState } from 'react';
import Link from 'next/link';

import MenuIcon from 'components/Shared/SVG/MenuIcon';
import Anchor from 'components/Anchor';
import Button from 'components/Button';
import NavigationLink from 'components/Shared/NavigationLink';
import MenuModal from 'components/Shared/MenuModal';
import Banner from 'components/Shared/Banner';
import {
  urlBuilders,
  urls,
  teacherMenu,
  resourcesMenuAU,
  resourcesMenuUS,
} from 'utils/urls';
import sendCTAClickEvent from 'utils/analytics';
import { breakPoints, transitions, zIndex, colors } from 'utils/theme';
import { type CountryCodes, type Banner as BannerType } from 'utils/types';

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
  const menuModalResources =
    country === 'AU' ? resourcesMenuAU : resourcesMenuUS;
  return (
    <Fragment>
      <div className="header">
        <div className="fixedHeader">
          {/* Banner Section */}
          {HAS_BANNER && <Banner data={banner} />}
          <div className="container">
            <div className="wrapper">
              <div className="navigationWrapper">
                {country === 'AU' && (
                  <Fragment>
                    <div className="linkWrapper">
                      <NavigationLink
                        heading="Home"
                        link={urls.homeRedirect}
                        color={colors.blackHaze}
                      />
                    </div>
                    <div className="linkWrapper">
                      <NavigationLink
                        heading={teacherMenu.title}
                        showMenu={selected === teacherMenu.title}
                        visibilitySetter={setSelected}
                        menuItems={teacherMenu.items}
                        color={colors.blackHaze}
                      />
                    </div>
                    <div className="linkWrapper">
                      <NavigationLink
                        heading={resourcesMenuAU.title}
                        showMenu={selected === resourcesMenuAU.title}
                        visibilitySetter={setSelected}
                        menuItems={resourcesMenuAU.items}
                        color={colors.blackHaze}
                      />
                    </div>
                  </Fragment>
                )}
                {country === 'US' && (
                  <Fragment>
                    <div className="linkWrapper">
                      <NavigationLink
                        heading="Home"
                        link={urls.homeRedirect}
                        color={colors.blackHaze}
                      />
                    </div>
                    <div className="linkWrapper">
                      <NavigationLink
                        heading="Curriculum"
                        link={urls.curriculumUS}
                        color={colors.blackHaze}
                      />
                    </div>
                    <div className="linkWrapper">
                      <NavigationLink
                        heading={resourcesMenuUS.title}
                        showMenu={selected === resourcesMenuUS.title}
                        visibilitySetter={setSelected}
                        menuItems={resourcesMenuUS.items}
                        color={colors.blackHaze}
                      />
                    </div>
                  </Fragment>
                )}
              </div>
              <div className="logoWrapper">
                <img
                  className="logo"
                  src={urlBuilders.imageUrl(
                    'common/Mathspace-logo-flat-reversed.svg',
                  )}
                  alt=""
                />
              </div>
              <div className="ctaWrapper">
                <div className="buttonWrapper">
                  <Button
                    isBlock
                    hasBorder
                    color="blackHaze"
                    href={urls.joinClass}
                    data-event-label={HEADER_JOIN_A_CLASS}
                    onClick={event => {
                      event.preventDefault();
                      sendCTAClickEvent(HEADER_JOIN_A_CLASS).then(() => {
                        window.location.assign(urls.joinClass);
                      });
                    }}
                  >
                    Join a Class
                  </Button>
                </div>
                <div className="buttonWrapper">
                  <Button
                    isBlock
                    isFilled
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
          homeUrl={urls.homepageAU}
          sections={[teacherMenu, menuModalResources]}
          onClose={() => setMenuOpen(false)}
        />
      )}
      <style jsx>{`
        .header {
          height: ${HAS_BANNER ? 100 : 50}px;
        }
        .fixedHeader {
          position: fixed;
          left: 0;
          right: 0;
          top: 0;
          z-index: ${zIndex.header};
          background-color: ${colors.cloudBurst};
        }
        .container {
          padding: 12px 24px;
          display: none;
        }
        .wrapper {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .navigationWrapper {
          display: flex;
        }
        .linkWrapper + .linkWrapper {
          margin-left: 40px;
        }
        .logoWrapper {
          max-width: 150px;
          display: flex;
          align-items: center;
        }
        .logo {
          width: 100%;
        }
        .ctaWrapper {
          display: flex;
        }
        .buttonWrapper {
          width: 130px;
        }
        .buttonWrapper + .buttonWrapper {
          margin-left: 10px;
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

        @media (min-width: ${breakPoints.medium}px) {
          .header {
            height: ${HAS_BANNER ? 128 : 64}px;
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
