// @flow

import React, { Fragment, useState, useEffect } from 'react';
import Head from 'next/head';

import LogoSection from 'components/Homepage/LogoSection';
import Modal from 'components/Modal';
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

type CalendlyModalProps = { country: CountryCodes, onClose: () => void };
const CalendlyModal = ({ country, onClose }: CalendlyModalProps) => (
  <Fragment>
    <Head>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
      />
    </Head>
    <Modal onClose={onClose}>
      <div className="container">
        <div
          className="calendly-inline-widget"
          data-url={
            (country === 'AU' &&
              'https://calendly.com/mathspace-australia/consultation-teaching-remotely') ||
            'https://calendly.com/mathspace/covid-free-access-consultation'
          }
          style={{ minWidth: 335, height: 580 }}
        />
      </div>
    </Modal>
    <style jsx>{`
      .container {
        width: 900px;
        padding: 0 24px;
      }
    `}</style>
  </Fragment>
);

type Props = {|
  country: CountryCodes,
|};
const Hero = ({ country }: Props) => {
  const [showModal, setModalVisibility] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(colors.cloudBurst);
  useEffect(() => {
    // Changes the background colour based on background image load.
    const background = document.createElement('img');
    background.src = urlBuilders.imageUrl('homepage/hero-background.svg');
    background.onload = () => setBackgroundColor(colors.athensGray);
  });
  const remoteUrl =
    country === 'AU' ? urls.teachingRemotelyAU : urls.coronavirus;
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <section className="leftSection">
            <div className="heroContent">
              <h2 className="sub">BLENDED LEARNING</h2>
              <h1 className="main">
                Mathspace is an all-in-one learning resource, wherever you are
              </h1>
              <h2 className="body">
                We bring all of your learning tools together in one place, from
                video lessons, textbooks, to adaptive practice. Encourage your
                students to become self-directed learners.
              </h2>
              <div className="buttonRow">
                <div className="buttonWrapper">
                  <a
                    className="heroLearnMore"
                    role="button"
                    tabIndex="0"
                    data-event-label={'hero-learn-more'}
                    href={remoteUrl}
                    onClick={event => {
                      event.preventDefault();
                      sendCTAClickEvent('hero-learn-more').then(() => {
                        window.location.assign(remoteUrl);
                      });
                    }}
                    onKeyPress={event => {
                      event.preventDefault();
                      sendCTAClickEvent('hero-learn-more').then(() => {
                        window.location.assign(remoteUrl);
                      });
                    }}
                  >
                    {country === 'AU'
                      ? 'Learn more'
                      : 'Register for free access'}
                  </a>
                </div>
                <div className="buttonWrapper">
                  <div
                    className="heroConsultation"
                    role="button"
                    tabIndex="0"
                    data-event-label={'hero-book-consultation'}
                    onClick={() => {
                      sendCTAClickEvent('hero-book-consultation');
                      setModalVisibility(true);
                    }}
                    onKeyPress={() => {
                      sendCTAClickEvent('hero-book-consultation');
                      setModalVisibility(true);
                    }}
                  >
                    Book a consultation
                  </div>
                </div>
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
                src={urlBuilders.imageUrl('homepage/covid-hero.svg')}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <CalendlyModal
          country={country}
          onClose={() => setModalVisibility(false)}
        />
      )}
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
          min-width: initial;
          width: 100%;
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
        .sub {
          color: ${colors.saffron};
          margin: 0 0 30px;
          line-height: ${lineHeights.h3};
          font-size: ${fontSizes.mobile.h3}px;
          font-weight: ${fontWeights.semibold};
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
        .buttonRow {
          display: flex;
          flex-direction: column;
        }
        .buttonWrapper {
          max-width: initial;
          width: 100%;
        }
        .buttonWrapper + .buttonWrapper {
          margin-left: 0;
          margin-top: 20px;
        }
        .heroLearnMore {
          background-color: ${colors.white};
          color: ${colors.lochmara};
          text-align: center;
          height: 50px;
          padding: 0 16px;
          border-radius: ${borderRadius.default}px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          text-decoration: none;
        }
        .heroConsultation {
          background-color: none;
          color: ${colors.white};
          text-align: center;
          height: 50px;
          padding: 0 20px;
          border: 1px solid ${colors.white};
          border-radius: ${borderRadius.default}px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
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
            min-width: 400px;
          }
          .heroContent {
            margin: 0;
            text-align: left;
          }
          .sub {
            font-size: ${fontSizes.desktop.h3}px;
          }
          .main {
            font-size: ${fontSizes.desktop.h1}px;
          }
          .buttonRow {
            flex-direction: row;
          }
          .buttonWrapper {
            max-width: 200px;
          }
          .buttonWrapper + .buttonWrapper {
            margin-left: 20px;
            margin-top: 0;
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
