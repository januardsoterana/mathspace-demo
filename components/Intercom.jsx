// @flow

import React from 'react';

type Props = {||};

type State = {||};

class Intercom extends React.Component<Props, State> {
  componentDidMount() {
    if (window.Intercom) {
      window.Intercom('update', {
        hide_default_launcher: false,
      });
    }
  }

  componentWillUnmount() {
    if (window.Intercom) {
      window.Intercom('update', {
        hide_default_launcher: true,
      });
    }
  }

  render() {
    return null;
  }
}

export default Intercom;
