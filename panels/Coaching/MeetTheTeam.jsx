// @flow

import React, { Fragment } from 'react';

import WistiaModal from 'components/WistiaModal';

import {
  breakPoints,
  colors,
  fontWeights,
  desktopFontSizes,
  mobileFontSizes,
} from 'utils/theme';
import { urlBuilders } from 'utils/urls';

type MeetTheTeamProps = {
  showModal: boolean,
  onOpen: () => void,
  onClose: () => void,
};

const MeetTheTeam = ({ showModal, onOpen, onClose }: MeetTheTeamProps) => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="panelTitle">Meet the team</div>
        {/* eslint-disable-next-line */}
        <div className="imageWrapper" onClick={onOpen}>
          <img
            className="playButton"
            src={urlBuilders.imageUrl('common/play.png')}
            alt="play button"
          />
        </div>
      </div>
    </div>
    {showModal && <WistiaModal onClose={onClose} videoId="5of1k9citn" />}
    <style jsx>{`
      .container {
        background-color: ${colors.white};
        padding: 80px 24px;
      }
      .wrapper {
        max-width: 850px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .panelTitle {
        font-size: ${mobileFontSizes.h1}px;
        color: ${colors.cloudBurst};
        font-weight: ${fontWeights.semibold};
        margin-bottom: 35px;
      }
      .imageWrapper {
        background-image: url(${urlBuilders.imageUrl(
          'careers/meetTheTeam.jpg',
        )});
        height: 296px;
        width: 100%;
        position: relative;
        cursor: pointer;
        margin: 0 10px;
      }
      .playButton {
        position: absolute;
        top: 50%;
        left: 50%;
        /* half the play button's dimensions */
        margin-top: -76px;
        margin-left: -76px;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .panelTitle {
          font-size: ${desktopFontSizes.h1}px;
          margin-bottom: 48px;
        }
        .imageWrapper {
          height: 416px;
        }
      }
    `}</style>
  </Fragment>
);

export default MeetTheTeam;
