// @flow

import React, { Fragment, useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { colors, fontSizes, fontWeights, transitions } from 'utils/theme';

import { urlBuilders } from '../../utils/urls';

type SubItem = {
  name: string,
  link: string,
  country: string,
  isExternal: boolean,
};

type Props = {
  heading: string,
  showMenu: boolean,
  items?: Array<{
    subtitle: string,
    subItems: Array<SubItem>,
  }>,
  visibilitySetter?: (selected: string) => void,
};

const MegaMenuItem = ({
  heading,
  showMenu,
  items,
  visibilitySetter,
}: Props) => {
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (
        showMenu &&
        wrapperRef.current &&
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
  }, [showMenu]);
  const handleClick = () => {
    if (visibilitySetter) {
      visibilitySetter(heading);
    }
  };
  return (
    <Fragment>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href={`${urlBuilders.cssUrl('waypoints-fonts.css')}`}
        />
      </Head>
      <div ref={wrapperRef} className={`${showMenu ? 'active' : ''} dropdown`}>
        <div className="dropBtnContainer">
          <button ref={buttonRef} onClick={handleClick} className="dropBtn">
            {heading}
          </button>
          <div className="yellowLine" />
        </div>
        <div className="dropdownContainer">
          <div className="dropdownContent">
            <div className="wrapper">
              <div className="header">
                <h1 className="title">{heading}</h1>
              </div>
              <div className="row">
                {items.map(item => (
                  <div key={item.subtitle} className="column">
                    <h3>{item.subtitle}</h3>
                    {item.subItems.map(subItem => (
                      <Link key={subItem.name} href={subItem.link} passHref>
                        <a>{subItem.name}</a>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .dropdown {
          float: left;
          overflow: hidden;
        }

        .dropdown .dropBtn {
          font-family: 'proxima-nova', 'Helvetica Neue', Helvetica, sans-serif;
          border: none;
          outline: none;
          padding: 14px 0;
          background-color: inherit;
          font-weight: ${fontWeights.semibold};
          font-size: ${fontSizes.desktop.bodySM}px;
          line-height: 18px;
          margin: 0;
          color: ${colors.cloudBurst};
        }

        .navbar a:hover,
        .dropdown:hover .dropBtn {
          cursor: pointer;
        }

        .dropdownContainer {
          height: 100vh;
          display: none;
          position: absolute;
          background-color: rgba(255, 255, 255, 0.6);
          width: 100%;
          left: 0;
          top: 100%;
          box-shadow: 0 8.75px 49px rgba(33, 55, 77, 0.15);
          z-index: 1;
          border-top: 1px solid ${colors.darkSnuff};
        }

        .dropdownContainer .dropdownContent {
          height: fit-content;
          width: 100%;
          padding: 48px 24px 88px;
          background-color: #ffffff;
        }

        .dropdownContainer .wrapper {
          padding-left: 24px;
          padding-right: 24px;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          width: 100%;
        }

        .dropdownContainer .header {
          color: ${colors.cloudBurst};
          max-width: 165px;
          width: 165px;
          margin-right: 130px;
        }

        .dropdownContainer .header h1 {
          margin: 0;
          font-family: 'Gilroy-Bold';
          font-weight: 800;
          font-size: 29px;
          line-height: 29px;
          font-style: normal;
          white-space: break-spaces;
        }

        .dropdown.active .dropdownContainer {
          display: flex;
        }

        .dropdown.active .dropBtn {
          // background: ${colors.white};
          // background: linear-gradient(180deg,
          // ${colors.white} 46%,
          // ${colors.saffron} 60%,
          // ${colors.white} 76%);
        }
        
        .dropdown .dropBtnContainer {
          position: relative;
        }
        
        .dropdown .yellowLine {
          display: none;
        }
        
        .dropdown.active .yellowLine {
          display: block;
          background-color: ${colors.saffron};
          width: 100%;
          height: 10px;
          position: absolute;
          bottom: 12px;
          z-index: -1;
        }

        /* Create three equal columns that floats next to each other */
        .column {
          float: left;
          width: 225px;
        }

        .column h3 {
          margin: 0;
          font-weight: 600;
          font-size: ${fontSizes.desktop.bodySM}px;
          line-height: 18px;
          margin-bottom: 15px;
          color: ${colors.cloudBurst};
        }

        .column a {
          float: none;
          color: ${colors.nevada};
          padding: 8px 0;
          text-decoration: none;
          display: block;
          text-align: left;
          font-size: 14px;
          line-height: 18px;
          width: 150px;
          white-space: break-spaces;
        }

        .column a:hover {
        }

        /* Clear floats after the columns */
        .row:after {
          content: '';
          display: table;
          clear: both;
        }

        /* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
        @media screen and (max-width: 600px) {
          .column {
            width: 100%;
            height: auto;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default MegaMenuItem;
