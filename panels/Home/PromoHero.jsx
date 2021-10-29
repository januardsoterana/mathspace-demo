// @flow

import React, { Fragment, useState, useEffect } from 'react';
import Router from 'next/router';

import LogoSection from 'components/Homepage/LogoSection';
import { urlBuilders, urls } from 'utils/urls';
import {
  breakPoints,
  colors,
  lineHeights,
  fontSizes,
  fontWeights,
  borderRadius,
} from 'utils/theme';
import sendCTAClickEvent from 'utils/analytics';
import { type CountryCodes } from 'utils/types';

const NTE_LANDING = 'nte-landing-cta';

const LOCAL_DATA = {
  au: {
    title: 'Special event for teachers: 23 January',
    description:
      "Join us for the webinar launch of the new teacher experience on Mathspace. Learn about why we're launching a new interface, get ideas on how you can use it, and ask us any questions.",
    cta: 'Register Now',
  },
  us: {
    title: 'Special event for teachers: 22 January',
    description:
      "Join us for the webinar launch of the new teacher experience on Mathspace. Learn about why we're launching a new interface, get ideas on how you can use it, and ask us any questions.",
    cta: 'Register Now',
  },
};

type Props = { country: CountryCodes };
const Hero = ({ country }: Props) => {
  const [backgroundColor, setBackgroundColor] = useState(colors.cloudBurst);
  useEffect(() => {
    // Changes the background colour based on background image load.
    const background = document.createElement('img');
    background.src = urlBuilders.imageUrl('homepage/promo-hero.svg');
    background.onload = () => setBackgroundColor(colors.athensGray);
  });
  const countryRoute = country === 'US' ? 'us' : 'au';
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <section className="leftSection">
            <div className="heroContent">
              <h1 className="main">{LOCAL_DATA[countryRoute].title}</h1>
              <h2 className="body">{LOCAL_DATA[countryRoute].description}</h2>
              <div className="buttonWrapper">
                <a
                  className="heroCTA"
                  href={`/${countryRoute}/${urls.nteLanding}`}
                  data-event-label={NTE_LANDING}
                  onClick={event => {
                    event.preventDefault();
                    sendCTAClickEvent(NTE_LANDING).then(() => {
                      Router.push(`/${countryRoute}${urls.nteLanding}`);
                    });
                  }}
                >
                  {LOCAL_DATA[countryRoute].cta}
                </a>
              </div>
            </div>
            <div className="logoList">
              <LogoSection country={country} />
            </div>
          </section>
          <div className="rightSection">
            <div className="imageWrapper">
              <img
                className="heroImage"
                src={urlBuilders.imageUrl('homepage/promo-hero.svg')}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          padding: 70px 24px;
          background-color: ${backgroundColor};
          background-image: url(${urlBuilders.imageUrl(
            'homepage/hero-background.svg',
          )});
          background-size: cover;
          background-position: bottom center;
          background-repeat: no-repeat;
        }
        .wrapper {
          max-width: 1110px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }
        .leftSection {
          max-width: 480px;
          margin: 0 auto;
          padding: 0 0 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        .imageWrapper {
          max-width: 600px;
          width: 100%;
          display: flex;
          align-items: center;
        }
        .heroImage {
          width: 100%;
        }
        .rightSection {
          max-width: 700px;
          width: 100%;
          display: flex;
          justify-content: center;
          margin-right: 0;
        }
        .heroContent {
          margin: 20px 0px 35px;
          text-align: center;
        }
        .main {
          color: ${colors.white};
          margin: 0;
          line-height: ${lineHeights.h3};
          font-size: ${fontSizes.mobile.h1}px;
          font-weight: ${fontWeights.semibold};
        }
        .body {
          margin: 20px 0 30px;
          color: ${colors.white};
          font-size: ${fontSizes.mobile.bodyLG}px;
          font-weight: ${fontWeights.regular};
        }
        .buttonWrapper {
          max-width: initial;
          width: 100%;
        }
        .heroCTA {
          background-color: ${colors.white};
          color: ${colors.lochmara};
          text-align: center;
          height: 50px;
          padding: 0 20px;
          border-radius: ${borderRadius.default}px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          text-decoration: none;
        }
        .logoList {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 5px;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .wrapper {
            flex-direction: row;
          }
          .leftSection {
            margin-right: 50px;
            padding: 40px 0;
          }
          .heroContent {
            margin: 0;
            text-align: left;
          }
          .main {
            font-size: ${fontSizes.desktop.h1}px;
          }
          .buttonWrapper {
            max-width: 235px;
          }
          .logoList {
            margin-top: 30px;
            justify-content: flex-start;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Hero;
