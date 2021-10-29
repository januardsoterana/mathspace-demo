// @flow

import React, { Fragment } from 'react';

import Anchor from 'components/Anchor';

import { urls, urlBuilders } from 'utils/urls';
import sendCTAClickEvent from 'utils/analytics';
import {
  colors,
  desktopFontSizes,
  mobileFontSizes,
  fontWeights,
  breakPoints,
} from 'utils/theme';

const DOWNLOAD_APPLE = 'download-apple-app';
const DOWNLOAD_ANDROID = 'download-android-app';

const ForStudents = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="leftSection">
          <img
            className="image"
            src={urlBuilders.imageUrl('newWorkbook/ipad2.svg')}
            alt=""
          />
        </div>
        <div className="rightSection">
          <div className="title">Mathspace for Students</div>
          <div className="content">
            We&#39;ve redesigned our app to take full advantage of the New
            Workbook features. We&#39;ve also made enhancements to our
            handwriting panel for a more natural writing experience.
          </div>
          <div className="downloadWrapper">
            <div className="buttonWrapper">
              <Anchor
                href={urls.appleAppForStudents}
                data-event-label={DOWNLOAD_APPLE}
                onClick={event => {
                  event.preventDefault();
                  sendCTAClickEvent(DOWNLOAD_APPLE).then(() => {
                    window.location.assign(urls.appleAppForStudents);
                  });
                }}
              >
                <img
                  className="appStoreImage"
                  src={urlBuilders.imageUrl('common/apple_app_store.svg')}
                  alt=""
                />
              </Anchor>
            </div>
            <div className="buttonWrapper">
              <Anchor
                href={urls.androidApp}
                data-event-label={DOWNLOAD_ANDROID}
                onClick={event => {
                  event.preventDefault();
                  sendCTAClickEvent(DOWNLOAD_ANDROID).then(() => {
                    window.location.assign(urls.androidApp);
                  });
                }}
              >
                <img
                  className="appStoreImage"
                  src={urlBuilders.imageUrl('common/google_play_store.svg')}
                  alt=""
                />
              </Anchor>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 100px 24px 50px;
      }
      .wrapper {
        max-width: 900px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .leftSection {
        max-width: 400px;
        width: 100%;
      }
      .image {
        width: 100%;
      }
      .rightSection {
        max-width: 400px;
        width: 100%;
        padding-left: 0px;
        padding-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .title {
        color: ${colors.cloudBurst};
        font-size: ${mobileFontSizes.h3}px;
        font-weight: ${fontWeights.semibold};
      }
      .content {
        color: ${colors.cloudBurst};
        font-size: ${mobileFontSizes.body}px;
        padding: 15px 0 30px;
      }
      .downloadWrapper {
        display: flex;
      }
      .buttonWrapper {
        max-width: 300px;
      }
      .buttonWrapper + .buttonWrapper {
        margin-left: 10px;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .wrapper {
          flex-direction: row;
        }
        .leftSection {
          max-width: 450px;
        }
        .rightSection {
          padding-left: 50px;
          padding-top: 0px;
        }
        .title {
          font-size: ${desktopFontSizes.h3}px;
        }
        .content {
          font-size: ${desktopFontSizes.subInfo}px;
        }
      }
    `}</style>
  </Fragment>
);

export default ForStudents;
