// @flow

import React, { Fragment } from 'react';
import Link from 'next/link';
import Router from 'next/router';

import Anchor from 'components/Anchor';
import Button from 'components/Button';
import MenuModal from 'components/MenuModal';
import Banner from 'components/Shared/Banner';
import {
  breakPoints,
  colors,
  transitions,
  zIndex,
  borderRadius,
} from 'utils/theme';
import {
  urls,
  urlBuilders,
  getUrlsForCounty,
  teacherNavigation,
  resourceNavigation,
} from 'utils/urls';
import sendCTAClickEvent from 'utils/analytics';
import {
  type CountryRoutes,
  type CountryCodes,
  type Banner as BannerType,
} from 'utils/types';

const BUTTON_WIDTH = 127;
const BUTTON_SPACING = 10;
const LINK_SPACING = 10;

const HEADER_SIDE_PADDING = 24;
const HEADER_HEIGHT_PADDING_AT_TOP = 12;

const MOBILE_HEADER_SIDE_PADDING = 24;
const MOBILE_HEADER_HEIGHT_PADDING_AT_TOP = 8;

const HEADER_LOGIN = 'header-login';
const HEADER_JOIN_A_CLASS = 'header-join-a-class';
const TEACHER_NAV_OPENED = 'teacher-nav-opened';
const RESOURCES_NAV_OPENED = 'resources-nav-opened';
const NAV_LINK_CLICKED = 'nav-link-clicked';

type DropdownProps = {
  title: string,
  country: 'AU' | 'US',
  links: Array<{
    name: string,
    href: string,
    country: 'AU' | 'US' | 'All',
    exclude: Array<string>,
    external?: boolean,
  }>,
  onClick: Function,
  showDropdown?: boolean,
};

const NavigationDropdown = ({
  showDropdown,
  title,
  links,
  country,
  onClick,
}: DropdownProps) => {
  const filteredLinks = links.filter(
    link =>
      (country === link.country || link.country === 'All') &&
      !link.exclude.includes(country),
  );
  return (
    <Fragment>
      <div className="container">
        {filteredLinks.length === 1 ? (
          <Anchor href={filteredLinks[0].href}>{filteredLinks[0].name}</Anchor>
        ) : (
          <Button
            color={showDropdown ? 'java' : 'dustyGray'}
            size="small"
            onClick={onClick}
          >
            {title}
          </Button>
        )}
        {showDropdown && (
          <div className="dropdownContainer">
            <div className="triangleBorder" />
            <div className="triangleFill" />
            <nav className="list">
              {filteredLinks.map(link => (
                <Fragment key={link.name}>
                  {
                    <div className="listItem">
                      {link.external ? (
                        <Anchor
                          href={link.href}
                          data-event-label={NAV_LINK_CLICKED}
                          onClick={event => {
                            event.preventDefault();
                            const label = `${NAV_LINK_CLICKED}::${title.toLowerCase()}>${link.name
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
                      ) : (
                        <Link href={link.href} passHref>
                          <Anchor
                            data-event-label={NAV_LINK_CLICKED}
                            onClick={() => {
                              const label = `${NAV_LINK_CLICKED}::${title.toLowerCase()}>${link.name
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
                      )}
                    </div>
                  }
                </Fragment>
              ))}
            </nav>
          </div>
        )}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          position: relative;
        }
        .dropdownContainer {
          position: absolute;
          top: 40px;
          left: 10px;
          z-index: 4;
          background-color: ${colors.white};
          border: 1px solid ${colors.santasGray};
          border-radius: ${borderRadius.default}px;
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
        .triangleBorder {
          border-color: ${colors.santasGray} transparent;
          border-style: solid;
          border-width: 0px 13px 13px 13px;
          height: 0px;
          width: 0px;
          position: absolute;
          top: -13px;
          left: 15px;
        }
        .triangleFill {
          border-color: ${colors.white} transparent;
          border-style: solid;
          border-width: 0px 12px 12px 12px;
          height: 0px;
          width: 0px;
          position: absolute;
          top: -12px;
          left: 16px;
        }
      `}</style>
    </Fragment>
  );
};

type NavProps = { country: CountryCodes };
type NavState = {
  selected: 'Teachers' | 'Students' | 'Resources' | 'About' | '',
};

// eslint-disable-next-line
class NavigationSection extends React.Component<NavProps, NavState> {
  wrapperRef: any;
  handleClickOutside: () => {};

  constructor(props: NavProps) {
    super(props);
    this.state = { selected: '' };

    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.setState(state => ({ ...state, selected: '' }));
    }
  }

  render() {
    return (
      <Fragment>
        <div className="linksContainer" ref={this.wrapperRef}>
          {/* Teacher Section */}
          <NavigationDropdown
            title={teacherNavigation.title}
            showDropdown={this.state.selected === teacherNavigation.title}
            onClick={() => {
              if (this.state.selected !== 'Teachers')
                sendCTAClickEvent(TEACHER_NAV_OPENED);
              this.setState(state => ({
                ...state,
                selected:
                  state.selected === teacherNavigation.title
                    ? ''
                    : teacherNavigation.title,
              }));
            }}
            country={this.props.country}
            links={teacherNavigation.links}
          />
          {/* Resource Section */}
          <NavigationDropdown
            title={resourceNavigation.title}
            country={this.props.country}
            showDropdown={this.state.selected === resourceNavigation.title}
            onClick={() => {
              if (this.state.selected !== resourceNavigation.title)
                sendCTAClickEvent(RESOURCES_NAV_OPENED);
              this.setState(state => ({
                ...state,
                selected:
                  state.selected === resourceNavigation.title
                    ? ''
                    : resourceNavigation.title,
              }));
            }}
            links={resourceNavigation.links}
          />
        </div>
        <style jsx>{`
          .linksContainer {
            display: flex;
            align-items: center;
          }
        `}</style>
      </Fragment>
    );
  }
}

type Props = {|
  country: CountryCodes,
  bannerData?: Array<BannerType>,
|};
type State = {| menuOpen: boolean |};

// eslint-disable-next-line
class Header extends React.Component<Props, State> {
  currentPath: string;
  countryRoutes: CountryRoutes;
  menuRoutes: Array<{|
    title: string,
    isSelected: boolean,
    href: string,
  |}>;

  constructor(props: Props) {
    super(props);
    this.state = { menuOpen: false };
    this.currentPath = '';
    this.countryRoutes = getUrlsForCounty(this.props.country);
    this.menuRoutes = [];
  }

  componentDidMount() {
    this.currentPath = Router.pathname;
    this.menuRoutes = [
      {
        title: 'Curriculum',
        isSelected: this.currentPath === this.countryRoutes.curriculum,
        href: this.countryRoutes.curriculum,
      },
    ];
    if (this.countryRoutes.teachers) {
      this.menuRoutes.unshift({
        title: 'For teachers',
        isSelected: this.currentPath === this.countryRoutes.teachers,
        href: this.countryRoutes.teachers,
      });
    }
  }

  render() {
    const banner = this.props.bannerData
      ? this.props.bannerData.filter(item =>
          item.allowedCountries.includes(this.props.country),
        )[0]
      : undefined;
    /*
      BANNER_CONSTANT = 1 without
      BANNER_CONSTANT = 2 with banner
    */
    const BANNER_CONSTANT = banner ? 2 : 1;
    const HEADER_HEIGHT = 80 * BANNER_CONSTANT;
    const MOBILE_HEADER_HEIGHT = 58 * BANNER_CONSTANT;
    return (
      <Fragment>
        <header className="headerWrapper">
          <div className="fixedHeader">
            {/* Banner Section */}
            {BANNER_CONSTANT === 2 && <Banner data={banner} />}
            {/* Mathspace Header */}
            <div className="headerContainer">
              <div className="leftSection">
                {/* Mathspace Logo */}
                <div className="iconContainer">
                  <Link href={this.countryRoutes.homepage} passHref>
                    <Anchor>
                      <img
                        className="headerIcon"
                        src={urlBuilders.imageUrl(
                          'common/mathspace-logo-flat.svg',
                        )}
                        alt="Mathspace"
                      />
                    </Anchor>
                  </Link>
                </div>
                {/* Navigation Links */}
                <NavigationSection country={this.props.country} />
              </div>
              {/* CTAs */}
              <div className="rightSection">
                <div className="buttonsContainer">
                  <Button
                    hasBorder
                    isBlock
                    color="lochmara"
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
                  <Button
                    isFilled
                    isBlock
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
                    Join a class
                  </Button>
                </div>
              </div>
            </div>
            <div className={'mobileHeaderContainer'}>
              <div className="mobileIconContainer">
                <Link href={this.countryRoutes.homepage} passHref>
                  <Anchor>
                    <img
                      src={urlBuilders.imageUrl(
                        'common/Mathspace-flat-icon.svg',
                      )}
                      alt="Mathspace"
                    />
                  </Anchor>
                </Link>
              </div>
              <Fragment>
                <Anchor
                  onClick={() => {
                    this.setState(state => ({ ...state, menuOpen: true }));
                  }}
                >
                  <img src={urlBuilders.imageUrl('common/burger.svg')} alt="" />
                </Anchor>
              </Fragment>
            </div>
          </div>
        </header>

        {this.state.menuOpen && (
          <MenuModal
            sections={[teacherNavigation, resourceNavigation]}
            country={this.props.country}
            onClose={() => {
              this.setState(state => ({ ...state, menuOpen: false }));
            }}
          />
        )}

        <style jsx>{`
          .headerWrapper {
            height: ${MOBILE_HEADER_HEIGHT}px;
          }
          .headerContainer {
            display: none;
            justify-content: space-between;
            padding: ${HEADER_HEIGHT_PADDING_AT_TOP}px ${HEADER_SIDE_PADDING}px;
            transition: padding ${transitions.default};
            opacity: 0.97;
            max-width: 1200px;
            margin: 0 auto;
          }
          .leftSection {
            display: flex;
          }
          .iconContainer {
            display: flex;
            align-items: center;
            margin-right: ${LINK_SPACING}px;
            cursor: pointer;
            width: 144px;
          }
          .headerIcon {
            width: 100%;
          }
          .buttonsContainer {
            display: flex;
            align-items: center;
            min-width: ${BUTTON_WIDTH * 2 + BUTTON_SPACING}px;
          }
          .buttonsContainer > :global(div) + :global(div) {
            margin-left: ${BUTTON_SPACING}px;
          }
          .buttonsContainer > :global(div) {
            flex: 1;
          }
          .mobileHeaderContainer {
            display: flex;
            justify-content: space-between;
            padding: ${MOBILE_HEADER_HEIGHT_PADDING_AT_TOP}px
              ${MOBILE_HEADER_SIDE_PADDING}px;
            transition: padding ${transitions.default};
          }
          .mobileHeaderContainer > :global(a) {
            display: flex;
          }
          .mobileIconContainer {
            cursor: pointer;
          }
          .fixedHeader {
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            background: ${colors.white};
            z-index: ${zIndex.header};
          }
          .iconContainer > :global(.link) {
            display: flex;
            align-items: center;
          }
          @media (min-width: ${breakPoints.medium}px) {
            .headerWrapper {
              height: ${HEADER_HEIGHT}px;
            }
            .fixedHeader {
              top: 0;
            }
            .headerContainer {
              display: flex;
            }
            .mobileHeaderContainer {
              display: none;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default Header;
