// @flow

import React, { Fragment, useState } from 'react';

import WistiaModal from 'components/WistiaModal';
import {
  colors,
  fontSizes,
  breakPoints,
  fontWeights,
  borderRadius,
} from 'utils/theme';
import { urlBuilders } from 'utils/urls';
import sendEvent from 'utils/analytics';

const AboutUs = () => {
  const [modalVisibile, setModalVisibility] = useState(false);
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <h2 className="title">Mathspace in 10 minutes</h2>
          <div
            className="videoPreview"
            role="button"
            tabIndex="0"
            onClick={() => {
              sendEvent('video', 'opened', 'parents-collection');
              setModalVisibility(true);
            }}
            onKeyPress={() => {
              sendEvent('video', 'opened', 'parents-collection');
              setModalVisibility(true);
            }}
          >
            <img
              className="image"
              src={urlBuilders.imageUrl('parents/preview.png')}
              alt=""
            />
          </div>
        </div>
      </div>
      {modalVisibile && (
        <WistiaModal
          videoId="p99a9e8ffi"
          onClose={() => setModalVisibility(false)}
        />
      )}
      <style jsx>{`
        .container {
          padding: 70px 24px;
        }
        .wrapper {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .title {
          margin: 0 0 30px;
          color: ${colors.cloudBurst};
          font-size: ${fontSizes.mobile.h2}px;
          font-weight: ${fontWeights.semibold};
          text-align: center;
        }
        .videoPreview {
          max-width: 700px;
          width: 100%;
          border: 2px solid ${colors.cloudBurst};
          border-radius: ${borderRadius.default}px;
          cursor: pointer;
          outline: none;
        }
        .image {
          width: 100%;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .title {
            font-size: ${fontSizes.desktop.h2}px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default AboutUs;
