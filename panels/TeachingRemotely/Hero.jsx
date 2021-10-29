// @flow

import React, { Fragment, useState } from 'react';
import Head from 'next/head';

import Button from 'components/Button';
import Modal from 'components/Modal';
import { urlBuilders } from 'utils/urls';
import {
  breakPoints,
  colors,
  lineHeights,
  fontWeights,
  fontSizes,
} from 'utils/theme';
import sendEvent from 'utils/analytics';

type CalendlyModalProps = { onClose: () => void };
const CalendlyModal = ({ onClose }: CalendlyModalProps) => (
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
          data-url="https://calendly.com/mathspace-australia/consultation-teaching-remotely"
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

const LOCALE_DATA = {
  AU: {
    description:
      'Book a consultation with one of our experts to learn how we can support your transition to a digital mathematics classroom',
    ctaText: 'Book a consultation',
    ctaLink: '',
  },
  US: {
    description:
      'Book a webinar session with one of our experts to learn how we can support your transition to a digital mathematics classroom',
    ctaText: 'Book a webinar',
    ctaLink: 'https://webinar.mathspace.co/us',
  },
};

type Props = { country: 'AU' | 'US' };

const Hero = ({ country }: Props) => {
  const content = LOCALE_DATA[country];
  const [modalVisible, setModalVisibility] = useState(false);
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <div className="leftSection">
            <h2 className="title2">TEACH FROM HOME</h2>
            <h1 className="title1">
              An all-in-one teaching &amp; learning resource, wherever you are
            </h1>
            <p className="description">{content.description}</p>
            <div className="buttonWrapper">
              {country === 'US' ? (
                <Button
                  color="lochmara"
                  href={content.ctaLink}
                  isFilled
                  isBlock
                >
                  {content.ctaText}
                </Button>
              ) : (
                <Button
                  color="lochmara"
                  onClick={() => {
                    setModalVisibility(true);
                    sendEvent('hero-modal', 'opened', 'teaching-remotely');
                  }}
                  isFilled
                  isBlock
                >
                  {content.ctaText}
                </Button>
              )}
            </div>
          </div>
          <div className="rightSection">
            <div className="imageWrapper">
              <img
                className="image"
                src={urlBuilders.imageUrl('teachingRemotely/hero.svg')}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {modalVisible && (
        <CalendlyModal onClose={() => setModalVisibility(false)} />
      )}
      <style jsx>{`
        .container {
          padding: 50px 24px;
        }
        .wrapper {
          margin: 0 auto;
          max-width: 1110px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }
        .leftSection {
          max-width: 550px;
          width: 100%;
        }
        .title1 {
          margin: 0 0 20px;
          color: ${colors.cloudBurst};
          line-height: ${lineHeights.h1};
          font-weight: ${fontWeights.semibold};
          font-size: ${fontSizes.mobile.h1}px;
        }
        .title2 {
          color: ${colors.saffron};
          margin: 0 0 10px;
          font-weight: ${fontWeights.semibold};
          font-size: ${fontSizes.mobile.h3}px;
        }
        .description {
          color: ${colors.cloudBurst};
          margin: 0 0 30px;
        }
        .buttonWrapper {
          max-width: initial;
          width: 100%;
        }
        .rightSection {
          max-width: 550px;
          width: 100%;
          margin-top: 30px;
        }
        .image {
          width: 100%;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .wrapper {
            flex-direction: row;
          }
          .title1 {
            font-size: ${fontSizes.desktop.h1}px;
          }
          .title2 {
            font-size: ${fontSizes.desktop.h3}px;
          }
          .buttonWrapper {
            max-width: 250px;
          }
          .rightSection {
            margin-top: 0;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Hero;
