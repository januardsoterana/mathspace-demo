// @flow

import React, { Fragment, useState } from 'react';
import Link from 'next/link';

import Button from 'components/Button';
import Anchor from 'components/Anchor';
import TypeformModal from 'components/TypeformModal';
import WistiaModal from 'components/WistiaModal';

import { type CountryCodes } from 'utils/types';
import { urlBuilders, urls } from 'utils/urls';
import sendCTAClickEvent from 'utils/analytics';
import {
  colors,
  lineHeights,
  fontWeights,
  breakPoints,
  mobileFontSizes,
  desktopFontSizes,
} from 'utils/theme';

const WATCH_NOW = 'watch-now';
const TRY_IT_FOR_FREE = 'try-it-for-free';

const AU_REPORTS = ['Curriculum-wide', 'Strands', 'NAPLAN'];
const US_REPORTS = ['Common Core State Standards', 'Virginia SOL'];
const AU_SUB = 'A complete package of diagnostic tests and reports';
const US_SUB =
  'Be one of the first to try our recently launched package of diagnostic tests and reports';

type Props = {| country: CountryCodes |};
const Hero = ({ country }: Props) => {
  const [modalVisibility, setModalVisibility] = useState('');
  const reports = country === 'AU' ? AU_REPORTS : US_REPORTS;
  const sub = country === 'AU' ? AU_SUB : US_SUB;
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <div className="leftSection">
            <Link href={urls.homeRedirect} passHref>
              <Anchor>
                <div className="logoWrapper">
                  <img
                    className="logo"
                    src={urlBuilders.imageUrl('common/mathspace-logo-flat.svg')}
                    alt=""
                  />
                </div>
              </Anchor>
            </Link>
            {country === 'US' && <h2 className="labs">Labs</h2>}
            <h1 className="main">Mathspace Diagnostics</h1>
            <h2 className="sub">{sub}</h2>
            <div className="reportsWrapper">
              {reports.map(report => (
                <div key={report} className="report">
                  <div className="imageWrapper">
                    <img
                      className="image"
                      src={urlBuilders.imageUrl('diagnostics/check.svg')}
                      alt=""
                    />
                  </div>
                  <div className="reportName">{report}</div>
                </div>
              ))}
            </div>
            <p className="body">
              See what grade level your students are at and get deeper insights
              into student performance.
            </p>
            <div className="ctaWrapper">
              {country === 'AU' && (
                <div className="buttonWrapper">
                  <Button
                    color="cloudBurst"
                    isBlock
                    hasBorder
                    data-event-label={WATCH_NOW}
                    onClick={() => {
                      setModalVisibility('wistia');
                      sendCTAClickEvent(WATCH_NOW);
                    }}
                  >
                    Watch video
                  </Button>
                </div>
              )}
              <div className="buttonWrapper">
                <Button
                  color="bayOfMany"
                  isBlock
                  isFilled
                  data-event-label={TRY_IT_FOR_FREE}
                  onClick={() => {
                    setModalVisibility('typeform');
                    sendCTAClickEvent(TRY_IT_FOR_FREE);
                  }}
                >
                  Try it for free
                </Button>
                <div className="smallText">30 day trial</div>
              </div>
            </div>
          </div>
          <div className="rightSection">
            <img
              className="heroBlob"
              src={urlBuilders.imageUrl('diagnostics/blob.svg')}
              alt=""
            />
            <img
              className="heroImage"
              src={urlBuilders.imageUrl('diagnostics/hero.svg')}
              alt=""
            />
          </div>
        </div>
      </div>
      {modalVisibility === 'typeform' && (
        <TypeformModal
          typeFormId="MWy8zl"
          onClose={() => setModalVisibility('')}
        />
      )}
      {modalVisibility === 'wistia' && (
        <WistiaModal
          videoId="ubj6exyqs3"
          onClose={() => setModalVisibility('')}
        />
      )}
      <style jsx>{`
        .container {
          padding: 25px 24px 0;
          background-color: ${colors.athensGray};
        }
        .wrapper {
          max-width: 1500px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .leftSection {
          max-width: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .logoWrapper {
          margin-bottom: 50px;
        }
        .logo {
          height: 23px;
        }
        .labs {
          color: ${colors.cloudBurst};
          margin: 0;
          margin-bottom: 20px;
          line-height: ${lineHeights.h3};
          font-weight: ${fontWeights.semibold};
          font-size: ${mobileFontSizes.h2}px;
        }
        .main {
          color: ${colors.cloudBurst};
          margin: 0;
          line-height: ${lineHeights.body};
          font-weight: ${fontWeights.bold};
          font-size: ${mobileFontSizes.h1}px;
        }
        .sub {
          color: ${colors.cloudBurst};
          margin: 0;
          margin-top: 20px;
          line-height: ${lineHeights.h3};
          font-weight: ${fontWeights.semibold};
          font-size: ${mobileFontSizes.h2}px;
        }
        .reportsWrapper {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }
        .report {
          display: flex;
          align-items: center;
        }
        .imageWrapper {
          width: 20px;
          height: 20px;
          margin-right: 5px;
        }
        .image {
          width: 100%;
        }
        .body {
          margin: 0;
          margin-top: 20px;
          color: ${colors.grayChateau};
          line-height: ${lineHeights.body};
          font-size: ${mobileFontSizes.body}px;
        }
        .ctaWrapper {
          display: flex;
          flex-direction: column;
          margin-top: 50px;
        }
        .buttonWrapper {
          max-width: initial;
          width: 100%;
        }
        .buttonWrapper + .buttonWrapper {
          margin-left: 0;
          margin-top: 20px;
        }
        .smallText {
          text-align: center;
          font-size: 14px;
          color: ${colors.grayChateau};
          margin-top: 5px;
        }
        .rightSection {
          position: relative;
          max-width: 550px;
          width: 100%;
          margin-left: initial;
          margin-top: 20px;
        }
        .heroBlob {
          width: 100%;
        }
        .heroImage {
          width: 100%;
          position: absolute;
          left: 0;
          top: 25%;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .wrapper {
            flex-direction: row;
          }
          .labs {
            font-size: ${desktopFontSizes.h2}px;
          }
          .main {
            font-size: ${desktopFontSizes.h1}px;
          }
          .sub {
            font-size: ${desktopFontSizes.h2}px;
          }
          .imageWrapper {
            margin-right: 10px;
          }
          .body {
            font-size: ${desktopFontSizes.body}px;
          }
          .ctaWrapper {
            flex-direction: row;
          }
          .buttonWrapper {
            max-width: 190px;
          }
          .buttonWrapper + .buttonWrapper {
            margin-left: 10px;
            margin-top: 0;
          }
          .rightSection {
            margin-left: 50px;
            margin-top: initial;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Hero;
