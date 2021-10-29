// @flow

import React, { Fragment } from 'react';

import Button from 'components/Button';
import {
  colors,
  fontSizes,
  breakPoints,
  lineHeights,
  fontWeights,
} from 'utils/theme';
import { urlBuilders } from 'utils/urls';
import sendEvent from 'utils/analytics';

const LOCALE_DATA = {
  AU: {
    title: '7 Step Guide: How to run a remote mathematics classroom',
    ctaText: 'Download the Guide',
    ctaLink: 'Running_an_Online_Maths_Classroom_(AU).pdf',
  },
  US: {
    title: '7 Step Guide: How to set-up a remote mathematics classroom',
    ctaText: 'Download the Guide',
    ctaLink: 'Running_an_Online_Math_Classroom_(US).pdf',
  },
};

type Props = { country: 'AU' | 'US' };

const CTA = ({ country }: Props) => {
  const content = LOCALE_DATA[country];
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <h3 className="title">{content.title}</h3>
          <div
            className="buttonWrapper"
            onClick={() =>
              sendEvent('CTA-panel-guide', 'download', 'teaching-remotely')
            }
          >
            <Button
              href={urlBuilders.downloadUrl(
                `teachingRemotely/${content.ctaLink}`,
              )}
              download
              color="lochmara"
              isFilled
              isBlock
              size="large"
            >
              {content.ctaText}
            </Button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          padding: 50px 24px;
          background-color: ${colors.cloudBurst};
        }
        .wrapper {
          background: none;
          background-repeat: no-repeat;
          margin: 0 auto;
          max-width: 1110px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .title {
          font-size: ${fontSizes.mobile.h2}px;
          margin: 0 0 30px;
          color: ${colors.white};
          line-height: ${lineHeights.h1};
          font-weight: ${fontWeights.semibold};
          text-align: center;
        }
        .buttonWrapper {
          max-width: 250px;
          width: 100%;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .title {
            font-size: ${fontSizes.desktop.h2}px;
          }
          .container {
            background-color: ${colors.white};
          }
          .wrapper {
            background-color: ${colors.white};
            background-image: url(${urlBuilders.imageUrl(
              'teachingRemotely/bg-blob.svg',
            )});
            background-position: center;
            background-size: contain;
            padding: 43px 0;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default CTA;
