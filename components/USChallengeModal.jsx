// @flow

import React, { Fragment } from 'react';

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

type Props = { onClose: () => void };

const USChallengeBannerModal = ({ onClose }: Props) => (
  <Fragment>
    <Modal onClose={onClose}>
      <div className="container">
        <div className="title">It&#39;s time for a challenge!</div>
        <div className="text">
          This challenge is for schools in the United States. If you&#39;re a
          student, ask your teacher to check it out.
        </div>
        <div className="buttonWrapper">
          <Button
            isFilled
            isBlock
            color="mountainMeadow"
            size="large"
            href={urls.challengeUS}
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

export default USChallengeBannerModal;
