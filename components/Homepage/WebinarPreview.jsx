// @flow

import React, { Fragment } from 'react';

import Anchor from 'components/Anchor';
import { colors, borderRadius, fontSizes, lineHeights } from 'utils/theme';

type Props = {
  webinar: {
    id: number,
    duration: string,
    title: string,
    link: string,
    image: string,
    ctaText: string,
  },
};

const WebinarPreview = ({ webinar }: Props) => (
  <Fragment>
    <div className="webinarPreview">
      <div className="leftSection" />
      <div className="rightSection">
        <div className="topSection">
          <div className="duration">{webinar.duration}</div>
          <div className="title">{webinar.title}</div>
        </div>
        <div className="bottomSection">
          <Anchor href={webinar.link} color="lochmara">
            {webinar.ctaText}
          </Anchor>
        </div>
      </div>
    </div>
    <style jsx>{`
      .webinarPreview {
        display: flex;
        max-width: 333px;
        align-items: center;
      }
      .leftSection {
        min-width: 125px;
        height: 150px;
        background-image: url(${webinar.image});
        background-size: cover;
        background-position: center;
        border-radius: ${borderRadius.default}px;
      }
      .rightSection {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 20px;
      }
      .topSection {
        white-space: initial;
      }
      .duration {
        color: ${colors.dustyGray};
        font-size: ${fontSizes.mobile.bodySM}px;
      }
      .title {
        margin-top: 10px;
        color: ${colors.cloudBurst};
        font-size: ${fontSizes.mobile.h3}px;
        line-height: ${lineHeights.body};
      }
      .bottomSection {
        margin-top: 10px;
      }

      @media (max-width: 1060px) {
        .webinarPreview {
          max-width: 350px;
        }
      }
      @media (max-width: 755px) {
        .webinarPreview {
          max-width: 312px;
        }
      }
    `}</style>
  </Fragment>
);

export default WebinarPreview;
