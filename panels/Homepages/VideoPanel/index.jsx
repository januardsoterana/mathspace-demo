// @flow

import React, { Fragment } from 'react';
import classNames from 'classnames';

import WistiaModal from 'components/WistiaModal';

import { breakPoints, colors } from 'utils/theme';
import { urlBuilders } from 'utils/urls';

type VideoSectionProps = {
  videoTitle: string,
  backgroundImage: string,
  onClick: () => void,
};

const VideoSection = ({
  videoTitle,
  backgroundImage,
  onClick,
}: VideoSectionProps) => (
  <Fragment>
    {/* eslint-disable-next-line */}
    <div
      className={classNames({ videoWrapper: true, video: true })}
      onClick={onClick}
    >
      <img
        className="playButton"
        src={urlBuilders.imageUrl('common/play.png')}
        alt="play button"
      />
      <div className="videoTitle">{videoTitle}</div>
    </div>
    <style jsx>{`
      .videoWrapper {
        width: 100%;
        height: 296px;
        position: relative;
        line-height: 0;
        cursor: pointer;
        background-size: cover;
        background-position: 50% 0%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
      }
      .playButton {
        position: absolute;
        top: 50%;
        left: 50%;
        /* half the play button's dimensions */
        margin-top: -76px;
        margin-left: -76px;
      }
      .videoTitle {
        color: ${colors.white};
        margin-bottom: 40px;
      }
      .video {
        background-image: url(${urlBuilders.imageUrl(backgroundImage)});
      }

      @media (min-width: ${breakPoints.medium}px) {
        .videoWrapper {
          height: 416px;
        }
      }
    `}</style>
  </Fragment>
);

type VideoPanelProps = {|
  animate?: boolean,
  video1: {
    id: string,
    title: string,
    preview: string,
  },
  video2: {
    id: string,
    title: string,
    preview: string,
  },
|};

type VideoPanelState = {|
  videoId: string,
  showModal: boolean,
  hideContent: boolean,
|};

class VideoPanel extends React.Component<VideoPanelProps, VideoPanelState> {
  videoPanel: any;
  windowHeight: number;
  checkPosition: () => {};

  constructor(props: VideoPanelProps) {
    super(props);
    this.state = {
      videoId: '',
      showModal: false,
      hideContent: !!this.props.animate,
    };
    this.videoPanel = React.createRef();
    this.checkPosition = this.checkPosition.bind(this);
  }

  componentDidMount() {
    this.windowHeight = window.innerHeight;
    window.addEventListener('scroll', this.checkPosition, false);
    setTimeout(this.checkPosition, 0);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkPosition, false);
  }

  checkPosition() {
    if (
      this.videoPanel.current.getBoundingClientRect().top - this.windowHeight <=
      0
    ) {
      this.setState(state => ({ ...state, hideContent: false }));
      window.removeEventListener('scroll', this.checkPosition, false);
    }
  }

  render() {
    const videoPanelContaierClass = classNames({
      videoPanelContainer: true,
      hiddenPanel: true,
      fadeIn: !this.state.hideContent,
    });
    return (
      <Fragment>
        <div ref={this.videoPanel} className={videoPanelContaierClass}>
          <VideoSection
            videoTitle={this.props.video1.title}
            backgroundImage={this.props.video1.preview}
            onClick={() =>
              this.setState(state => ({
                ...state,
                showModal: true,
                videoId: this.props.video1.id,
              }))
            }
          />
          <VideoSection
            videoTitle={this.props.video2.title}
            backgroundImage={this.props.video2.preview}
            onClick={() =>
              this.setState(state => ({
                ...state,
                showModal: true,
                videoId: this.props.video2.id,
              }))
            }
          />
        </div>
        {this.state.showModal && (
          <WistiaModal
            onClose={() =>
              this.setState(state => ({ ...state, showModal: false }))
            }
            videoId={this.state.videoId}
          />
        )}
        <style jsx>{`
          .videoPanelContainer {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            background-color: ${colors.astronaut};
          }
          .hiddenPanel {
            opacity: 0;
          }
          .fadeIn {
            animation: fade-in-panel 1s forwards;
          }
          @keyframes fade-in-panel {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @media (min-width: ${breakPoints.medium}px) {
            .videoPanelContainer {
              flex-direction: row;
              justify-content: center;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default VideoPanel;
