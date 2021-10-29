// @flow

import React, { Fragment, useState } from 'react';

import Anchor from 'components/Anchor';
import WistiaModal from 'components/WistiaModal';

import {
  colors,
  lineHeights,
  breakPoints,
  fontSizes,
  fontWeights,
} from 'utils/theme';

import { urlBuilders } from 'utils/urls';
import sendCTAClickEvent from 'utils/analytics';

const HERO_OPEN_VIDEO = 'hero-open-video';

type Props = {|
  title: string,
  subTitle: string,
|};
const Hero = ({ title, subTitle }: Props) => {
  const [modalVisibile, setModalVisibility] = useState(false);
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <p className="description">{subTitle}</p>
          <h1 className="title">{title}</h1>
          <Anchor
            data-event-label={HERO_OPEN_VIDEO}
            onClick={event => {
              event.preventDefault();
              sendCTAClickEvent(HERO_OPEN_VIDEO);
              setModalVisibility(true);
            }}
          >
            <div className="imageWrapper">
              <img
                className="image"
                src={urlBuilders.imageUrl(
                  'newTeacherExperience/nte-play-promo.svg',
                )}
                alt=""
              />
            </div>
          </Anchor>
        </div>
      </div>
      {modalVisibile && (
        <WistiaModal
          videoId="ixp7fj3rhk"
          onClose={() => setModalVisibility(false)}
        />
      )}
      <style jsx>{`
        .container {
          background-color: ${colors.athensGray};
          padding: 50px 24px 0;
        }
        .wrapper {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .imageWrapper {
          max-width: 550px;
          margin-top: 30px;
          line-height: 0;
        }
        .image {
          width: 100%;
        }
        .title {
          margin: 0;
          color: ${colors.cloudBurst};
          line-height: 1.2;
          font-size: ${fontSizes.mobile.h1}px;
          font-weight: ${fontWeights.semibold};
          text-align: center;
        }
        .description {
          color: ${colors.cloudBurst};
          font-size: ${fontSizes.mobile.h3}px;
          text-align: center;
          margin-top: 15px;
        }
        .buttonWrapper {
          margin-top: 15px;
          max-width: 200px;
          width: 100%;
        }
        @media (min-width: ${breakPoints.medium}px) {
          .title {
            font-size: ${fontSizes.desktop.h1}px;
          }
          .description {
            font-size: ${fontSizes.desktop.h3}px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Hero;
