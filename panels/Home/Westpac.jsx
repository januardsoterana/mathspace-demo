// @flow

import React, { Fragment, useState } from 'react';

import Button from 'components/Button';
import WestpacLogo from 'components/Homepage/SVG/Westpac';
import WistiaModal from 'components/WistiaModal';
import PlayIcon from 'components/Shared/SVG/PlayIcon';

import { urlBuilders, urls } from 'utils/urls';
import sendCTAClickEvent from 'utils/analytics';
import {
  colors,
  lineHeights,
  fontSizes,
  breakPoints,
  fontWeights,
  borderRadius,
} from 'utils/theme';

const GET_IT_FREE_WESTPAC = 'get-it-free-westpac';
const OPEN_WESTPAC_VIDEO = 'open-westpac-video';

const Westpac = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <div
            className="leftSection"
            role="button"
            tabIndex="0"
            onClick={() => {
              setModalVisibility(true);
              sendCTAClickEvent(OPEN_WESTPAC_VIDEO);
            }}
            onKeyPress={() => {
              setModalVisibility(true);
              sendCTAClickEvent(OPEN_WESTPAC_VIDEO);
            }}
          >
            <div className="playButtonBackground" />
            <div className="playButton">
              <PlayIcon />
            </div>
          </div>
          <div className="rightSection">
            <h2 className="title">
              Free online maths education, thanks to Westpac
            </h2>
            <p className="body">
              Get our interactive maths textbook, Mathspace Essentials, free
              thanks to Westpac. Refresh on any maths topic, try interactive
              questions, and see maths brought to life!
            </p>
            <div className="bottomSection">
              <div className="buttonWrapper">
                <Button
                  color="lochmara"
                  hasBorder
                  isBlock
                  href={urls.signupWestpacEssentials}
                  data-event-label={GET_IT_FREE_WESTPAC}
                  onClick={event => {
                    event.preventDefault();
                    sendCTAClickEvent(GET_IT_FREE_WESTPAC).then(() => {
                      window.location.assign(urls.signupWestpacEssentials);
                    });
                  }}
                >
                  Get it free
                </Button>
              </div>
              <div className="logoWrapper">
                <WestpacLogo width={100} hasTagline={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalVisibility && (
        <WistiaModal
          onClose={() => setModalVisibility(false)}
          videoId="tlp3w4o61k"
        />
      )}
      <style jsx>{`
        .container {
          padding: 70px 24px;
        }
        .wrapper {
          margin: 0 auto;
          max-width: 1110px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .leftSection {
          position: relative;
          margin-right: 0;
          max-width: 480px;
          width: 100%;
          height: 170px;
          background-image: url(${urlBuilders.imageUrl(
            'homepage/westpac_girl.jpg',
          )});
          background-size: cover;
          background-position: center;
          border-radius: ${borderRadius.default}px;
          cursor: pointer;
          outline: none;
        }
        .playButtonBackground {
          position: absolute;
          top: calc(50% - 23px);
          left: calc(50% - 28px);
          width: 70px;
          height: 70px;
          background-color: ${colors.black};
          opacity: 0.3;
          border-radius: 50px;
        }
        .playButton {
          position: absolute;
          top: 50%;
          left: 50%;
        }
        .rightSection {
          max-width: 100%;
          margin-top: 20px;
          text-align: center;
        }
        .title {
          margin: 0;
          color: ${colors.cloudBurst};
          line-height: ${lineHeights.body};
          font-size: ${fontSizes.mobile.h2}px;
          font-weight: ${fontWeights.semibold};
        }
        .body {
          margin: 0;
          margin-top: 10px;
          color: ${colors.santasGray};
          line-height: ${lineHeights.body};
          font-size: ${fontSizes.mobile.bodyLG}px;
        }
        .bottomSection {
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column-reverse;
        }
        .buttonWrapper {
          margin-top: 20px;
          max-width: 250px;
          width: 100%;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .wrapper {
            flex-direction: row;
          }
          .leftSection {
            max-width: 50%;
            height: 230px;
            margin-right: 50px;
          }
          .rightSection {
            max-width: 50%;
            margin-top: 0;
            text-align: left;
          }
          .title {
            font-size: ${fontSizes.desktop.h2}px;
          }
          .body {
            font-size: ${fontSizes.desktop.bodyLG}px;
          }
          .bottomSection {
            flex-direction: row;
          }
          .buttonWrapper {
            margin-top: 0;
            max-width: 160px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Westpac;
