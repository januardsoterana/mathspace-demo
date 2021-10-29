// @flow

import React, { Fragment, useState } from 'react';

import WistiaModal from 'components/WistiaModal';

import {
  fontSizes,
  lineHeights,
  fontWeights,
  colors,
  breakPoints,
} from 'utils/theme';
import { urlBuilders } from 'utils/urls';
import { type CustomerStory } from 'utils/types';

type Props = {|
  story: CustomerStory,
|};
const Hero = ({ story }: Props) => {
  const [modalVisible, setModalVisibility] = useState(false);
  return (
    <Fragment>
      <section className="container">
        <div className="wrapper">
          <div className="leftSection">
            <div className="featured">
              <img className="logo" src={story.logo} alt={story.oragnisation} />
            </div>
            <h1 className="title">{story.title}</h1>
            <div className="testimony">&quot;{story.testimony}&quot;</div>
            <div className="quoteeWrapper">
              <div className="quotee">{story.quotee}</div>
              <div className="quoteeRole">{story.quoteeRole}</div>
            </div>
          </div>
          <div className="rightSection">
            {!!story.videoLink && !!story.videoCover ? (
              <div
                role="button"
                tabIndex="0"
                className="videoCover"
                onClick={() => setModalVisibility(true)}
                onKeyPress={() => setModalVisibility(true)}
              >
                <img className="image" src={story.videoCover} alt="" />
                <img
                  className="playIcon"
                  src={urlBuilders.imageUrl('common/play.png')}
                  alt=""
                />
              </div>
            ) : (
              <img className="image" src={story.coverImage} alt="" />
            )}
          </div>
        </div>
      </section>
      {!!modalVisible && !!story.videoLink && (
        <WistiaModal
          videoId={story.videoLink}
          onClose={() => setModalVisibility(false)}
        />
      )}
      <style jsx>{`
        .container {
          padding: 70px 24px;
        }
        .wrapper {
          max-width: 1110px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }
        .leftSection {
          max-width: initial;
        }
        .featured {
          display: flex;
          align-items: center;
        }
        .logo {
          max-width: 140px;
          max-height: 70px;
        }
        .title {
          font-size: ${fontSizes.mobile.h1}px;
          line-height: ${lineHeights.h1};
          font-weight: ${fontWeights.semibold};
          color: ${colors.cloudBurst};
          margin: 10px 0 0;
        }
        .testimony {
          font-size: ${fontSizes.mobile.h3}px;
          color: ${colors.santasGray};
          line-height: ${lineHeights.testimony};
          font-style: italic;
          margin: 20px 0 0;
        }
        .quotee {
          margin: 10px 0 0;
          font-size: ${fontSizes.mobile.bodySM}px;
          font-weight: ${fontWeights.semibold};
          line-height: ${lineHeights.body};
        }
        .quoteeRole {
          font-size: ${fontSizes.mobile.bodySM}px;
          line-height: ${lineHeights.body};
        }
        .ctaWrapper {
          margin: 30px 0 0;
          max-width: inherit;
        }
        .rightSection {
          max-width: initial;
          display: flex;
          align-items: center;
          margin-top: 30px;
        }
        .image {
          width: 100%;
        }
        .videoCover {
          cursor: pointer;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          outline: none;
        }
        .playIcon {
          position: absolute;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .wrapper {
            flex-direction: row;
          }
          .leftSection {
            max-width: 495px;
          }
          .logo {
            max-width: 150px;
          }
          .title {
            font-size: ${fontSizes.desktop.h1}px;
          }
          .testimony {
            font-size: ${fontSizes.desktop.h3}px;
          }
          .ctaWrapper {
            max-width: 250px;
          }
          .rightSection {
            margin-top: 0;
            max-width: 495px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Hero;
