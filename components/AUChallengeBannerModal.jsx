// @flow

import React, { Fragment } from 'react';
import Router from 'next/router';

import Modal from 'components/Modal';
import Button from 'components/Button';
import {
  borderRadius,
  breakPoints,
  colors,
  fontWeights,
  desktopFontSizes,
  mobileFontSizes,
  lineHeights,
} from 'utils/theme';
import { urls } from 'utils/urls';
import sendCTAClickEvent from 'utils/analytics';

type Props = { onClose: () => void };

const TEACHER_CHALLENGE_BANNER_CTA = 'teacher-challenge-banner-cta';

const ChallengeBannerModal = ({ onClose }: Props) => (
  <Fragment>
    <Modal onClose={onClose}>
      <div className="container">
        <div className="title">It&#39;s time to challenge the teachers!</div>
        <div className="text">
          This challenge is for the maths teachers of Australia. If you&#39;re a
          student, tell your teacher to check it out.
        </div>
        <div className="buttonWrapper">
          <Button
            isFilled
            isBlock
            color="mountainMeadow"
            size="large"
            href={urls.challengeAU}
            data-event-label={TEACHER_CHALLENGE_BANNER_CTA}
            onClick={event => {
              event.preventDefault();
              sendCTAClickEvent(TEACHER_CHALLENGE_BANNER_CTA).then(() => {
                Router.push(urls.challengeAU);
              });
            }}
          >
            I&#39;m a teacher, show me more
          </Button>
        </div>
      </div>
    </Modal>
    <style jsx>{`
      .container {
        background-color: ${colors.cornflowerBlue};
        color: ${colors.white};
        text-align: center;
        border-radius: ${borderRadius.default}px;
        padding: 50px 24px;
        max-width: 500px;
        margin: 0 24px;
      }
      .title {
        font-size: ${mobileFontSizes.h4}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.body};
      }
      .text {
        font-size: ${mobileFontSizes.body}px;
        font-weight: ${fontWeights.regular};
        line-height: ${lineHeights.body};
        margin: 10px 0 30px;
      }
      .buttonWrapper {
        max-width: 312px;
        margin: 0 auto;
      }
      .buttonWrapper > :global(div) > :global(.base) {
        font-size: ${mobileFontSizes.body}px;
      }
      @media (min-width: ${breakPoints.medium}px) {
        .buttonWrapper > :global(div) > :global(.base) {
          font-size: ${desktopFontSizes.body}px;
        }
        .container {
          padding: 50px;
        }
        .title {
          font-size: ${desktopFontSizes.h4}px;
        }
        .text {
          font-size: ${desktopFontSizes.body}px;
        }
      }
    `}</style>
  </Fragment>
);

export default ChallengeBannerModal;
