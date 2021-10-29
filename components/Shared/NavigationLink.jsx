// @flow

import React, { Fragment, useEffect, useRef } from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import { urlBuilders } from 'utils/urls';
import {
  borderRadius,
  colors,
  mobileFontSizes,
  transitions,
} from 'utils/theme';

type Props = {
  heading: string,
  link?: string,
  showMenu?: boolean,
  color?: string,
  menuItems?: Array<{ name: string, link: string, isExternal: boolean }>,
  visibilitySetter?: (selected: string) => void,
};
const NavigationLink = ({
  heading,
  link,
  menuItems,
  showMenu,
  color = colors.cloudBurst,
  visibilitySetter,
}: Props) => {
  const wrapperRef = useRef(null);
  const linkWrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (
        wrapperRef.current &&
        linkWrapperRef.current &&
        !linkWrapperRef.current.contains(event.target) &&
        !wrapperRef.current.contains(event.target) &&
        visibilitySetter
      ) {
        visibilitySetter('');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return function cleanup() {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
  const navLinkClass = classnames({
    navLink: true,
    nav: true,
  });
  const navClass = classnames({
    nav: true,
    selected: showMenu,
  });
  const internalLinks = menuItems
    ? menuItems.filter(item => !item.isExternal)
    : [];
  const externalLinks = menuItems
    ? menuItems.filter(item => item.isExternal)
    : [];
  return (
    <Fragment>
      <div ref={wrapperRef} className="container">
        {link ? (
          <Link href={link} passHref>
            <a className={navLinkClass}>{heading}</a>
          </Link>
        ) : (
          <div
            className={navClass}
            role="button"
            tabIndex="0"
            onClick={() => {
              if (visibilitySetter) visibilitySetter(heading);
            }}
            onKeyPress={() => {
              if (visibilitySetter) visibilitySetter(heading);
            }}
          >
            {heading}
          </div>
        )}
        {showMenu && menuItems && (
          <div className="menu">
            <div className="triangleBorder" />
            <div className="triangleFill" />
            <div ref={linkWrapperRef} className="linkWrapper">
              <div className="internalLinkWrapper">
                {internalLinks.map(item => (
                  <div key={item.name} className="item">
                    <Link href={item.link} passHref>
                      <a className="link">{item.name}</a>
                    </Link>
                  </div>
                ))}
              </div>
              {externalLinks.length > 0 && (
                <div className="externalLinkWrapper">
                  {externalLinks.map(item => (
                    <div key={item.name} className="item">
                      <div className="linkContent">
                        <a href={item.link} className="link">
                          {item.name}{' '}
                          <img
                            className="icon"
                            src={urlBuilders.imageUrl(
                              'common/External-link-new.svg',
                            )}
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .container {
          position: relative;
          display: flex;
        }
        .navLink {
          color: ${color};
          cursor: pointer;
          outline: none;
          text-decoration: none;
          transition: color ${transitions.hover};
        }
        .nav {
          color: ${color};
          font-size: ${mobileFontSizes.body}px;
          padding: 2px 0;
          border-radius: ${borderRadius.default}px;
          cursor: pointer;
          transition: color ${transitions.hover},
            background-color ${transitions.hover};
          max-width: 84px;
          width: 100%;
          outline: none;
        }
        .nav:hover {
          color: ${color};
        }
        .selected {
          color: ${color};
        }
        .menu {
          position: absolute;
          top: 45px;
          left: 10px;
          z-index: 4;
          background-color: ${colors.porcelain};
          border-radius: ${borderRadius.default}px;
        }
        .triangleFill {
          border-color: ${colors.porcelain} transparent;
          border-style: solid;
          border-width: 0 12px 12px 12px;
          height: 0;
          width: 0;
          position: absolute;
          top: -12px;
          left: 16px;
        }
        .linkWrapper {
          display: flex;
          padding: 10px;
        }
        .internalLinkWrapper {
          padding: 10px;
        }
        .externalLinkWrapper {
          padding: 10px 10px 10px 15px;
          border-left: 1px solid ${colors.blackHaze};
        }
        .item {
          display: flex;
          width: 115px;
          align-items: center;
          font-size: 15px;
        }
        .item + .item {
          margin-top: 5px;
        }
        .icon {
          margin-left: 10px;
        }
        .linkContent {
          display: flex;
          align-items: center;
        }
        .link {
          text-decoration: none;
          color: ${colors.cloudBurst};
        }
      `}</style>
    </Fragment>
  );
};

export default NavigationLink;
