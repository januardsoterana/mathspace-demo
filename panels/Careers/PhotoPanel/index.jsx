// @flow

import React, { Fragment } from 'react';
import ClassNames from 'classnames';

import { breakPoints } from 'utils/theme';
import { urlBuilders } from 'utils/urls';

type Props = {|
  animate?: boolean,
  imageName: string,
|};
type State = {|
  hideContent: boolean,
|};

// eslint-disable-next-line
class PhotoPanel extends React.Component<Props, State> {
  checkPosition: () => {};
  windowHeight: number;
  photoPanel: any;

  constructor(props: Props) {
    super(props);

    this.state = {
      hideContent: !!this.props.animate,
    };
    this.checkPosition = this.checkPosition.bind(this);
    this.photoPanel = React.createRef();
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
      this.photoPanel.current.getBoundingClientRect().top - this.windowHeight <=
      0
    ) {
      this.setState(state => ({ ...state, hideContent: false }));
      window.removeEventListener('scroll', this.checkPosition, false);
    }
  }

  render() {
    const photoPanelClass = ClassNames({
      photoPanel: true,
      hiddenPanel: true,
      fadeIn: !this.state.hideContent,
    });
    return (
      <Fragment>
        <div ref={this.photoPanel} className={photoPanelClass} />
        <style jsx>{`
          .photoPanel {
            background-image: url(${urlBuilders.imageUrl(
              this.props.imageName,
            )});
            background-size: cover;
            background-position: 50% 50%;
            display: flex;
            height: 300px;
            margin-right: 16px;
          }
          .panelImage {
            flex: 1;
          }
          .hiddenPanel {
            opacity: 0;
          }
          .fadeIn {
            animation: fade-in-text 1s forwards;
          }

          @keyframes fade-in-text {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @media (min-width: ${breakPoints.medium}px) {
            .photoPanel {
              height: 559px;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default PhotoPanel;
