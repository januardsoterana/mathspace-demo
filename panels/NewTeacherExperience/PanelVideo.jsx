// @flow

import React, { Fragment, useState } from 'react';

import Anchor from 'components/Anchor';
import WistiaModal from 'components/WistiaModal';
import { urlBuilders } from 'utils/urls';
import {
  fontWeights,
  colors,
  fontSizes,
  lineHeights,
  breakPoints,
  borderRadius,
} from 'utils/theme';
import sendEvent from 'utils/analytics';

const PANEL_VIDEO_OPENED = 'panel-video-opened';

const PanelVideo = () => {
  const [modalVisibile, setModalVisibility] = useState(false);
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <div className="leftSide">
            <div className="title">
              Watch our panel discussion to see how it works
            </div>
            <div className="duration">
              <strong>Duration</strong> 52min
            </div>
            <div className="description">
              This is a panel event in which you’ll get to hear from our Founder
              and our product team. Learn about why we’ve launched the new
              teacher experience, and get ideas on how you can use it.
            </div>
          </div>
          <div className="rightSide">
            <Anchor
              data-event-label={PANEL_VIDEO_OPENED}
              onClick={() => {
                sendEvent(PANEL_VIDEO_OPENED);
                setModalVisibility(true);
              }}
            >
              <div className="imageWrapper">
                <img
                  className="cover"
                  src={urlBuilders.imageUrl(
                    'newTeacherExperience/panelVideo.png',
                  )}
                  alt=""
                />
                <img
                  className="playIcon"
                  src={urlBuilders.imageUrl('common/play.png')}
                  alt=""
                />
              </div>
            </Anchor>
          </div>
        </div>
      </div>
      {modalVisibile && (
        <WistiaModal
          videoId="taiht9abde"
          onClose={() => setModalVisibility(false)}
        />
      )}
      <style jsx>{`
        .container {
          padding: 70px 24px;
          background-color: ${colors.athensGray};
        }
        .wrapper {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .leftSide {
          color: ${colors.cloudBurst};
        }
        .title {
          font-weight: ${fontWeights.semibold};
          font-size: ${fontSizes.mobile.h2}px;
          line-height: ${lineHeights.body};
          margin-bottom: 10px;
        }
        .duration {
          font-size: ${fontSizes.mobile.h3}px;
          margin-bottom: 10px;
        }
        .description {
          font-size: ${fontSizes.mobile.bodyLG}px;
        }
        .rightSide {
          display: flex;
          align-items: center;
          margin-top: 20px;
        }
        .imageWrapper {
          width: 100%;
          position: relative;
        }
        .cover {
          width: 100%;
          border-radius: ${borderRadius.default}px;
        }
        .playIcon {
          position: absolute;
          left: 50%;
          top: 50%;
          margin-top: -76px;
          margin-left: -76px;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .wrapper {
            flex-direction: row;
          }
          .leftSide {
            max-width: 385px;
          }
          .title {
            font-size: ${fontSizes.desktop.h2}px;
          }
          .duration {
            font-size: ${fontSizes.desktop.h3}px;
          }
          .description {
            font-size: ${fontSizes.desktop.bodyLG}px;
          }
          .rightSide {
            max-width: 385px;
            margin-top: 0;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default PanelVideo;
