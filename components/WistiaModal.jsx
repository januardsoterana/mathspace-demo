// @flow

import React, { Fragment } from 'react';

import Modal from 'components/Modal';
import { breakPoints } from 'utils/theme';

type Props = {|
  onClose: () => void,
  videoId: string,
|};

type State = {|
  matches: boolean,
|};

class WistiaModal extends React.Component<Props, State> {
  mql: ?MediaQueryList;

  constructor(props: Props) {
    super(props);
    this.state = { matches: false };
  }

  componentDidMount() {
    // Check because jsdom doesn't have matchMedia
    if (window.matchMedia) {
      this.mql = window.matchMedia(`(min-width: ${breakPoints.medium}px)`);
      // eslint-disable-next-line
      const mql = this.mql;
      mql.addListener(this.handleMediaQueryChange);
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState(() => ({ matches: mql.matches }));
    }
  }

  componentWillUnmount() {
    if (this.mql == null) return;
    this.mql.removeListener(this.handleMediaQueryChange);
  }

  handleMediaQueryChange = () => {
    if (this.mql == null) return;
    this.setState({ matches: this.mql.matches });
  };

  render() {
    return (
      <Fragment>
        <Modal onClose={this.props.onClose}>
          <iframe
            src={`https://fast.wistia.net/embed/iframe/${this.props.videoId}`}
            title="Wistia video player"
            width={this.state.matches ? 748 : 340}
            height={this.state.matches ? 422 : 192}
            className="iframe"
            name="wistia_embed"
            frameBorder="0"
            scrolling="no"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            oallowfullscreen="true"
            msallowfullscreen="true"
          />
        </Modal>
        <style jsx>{`
          .iframe {
            display: block;
            border: none;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default WistiaModal;
