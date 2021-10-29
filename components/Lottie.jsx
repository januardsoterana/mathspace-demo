// @flow

import React, { Fragment } from 'react';

type Props = {
  path: string,
  fallbackImagePath?: string,
};

type State = {
  hasLottieLoaded: boolean,
};

/*
  The lottie-web library requires client side globals which
  means we have to wait till the page is loaded on the client
  before importing the library. We can achieve this by
  dynamically loading the library inside of componentDidMount
  which will only run when the client side is ready.
*/

class Lottie extends React.Component<Props, State> {
  element: ?HTMLDivElement;
  animation: *;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasLottieLoaded: false,
    };
  }

  componentDidMount() {
    import('lottie-web').then(lottie => {
      this.setState(state => {
        const options = {
          container: this.element,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: this.props.path,
        };
        this.animation = lottie.loadAnimation(options);
        return {
          ...state,
          hasLottieLoaded: true,
        };
      });
    });
  }

  componentWillUnmount() {
    if (!this.animation) return;
    this.animation.destroy();
  }

  render() {
    return (
      <Fragment>
        <div
          ref={child => {
            this.element = child;
          }}
        />
        {!this.state.hasLottieLoaded &&
          this.props.fallbackImagePath && (
            <img
              className="fallback"
              src={this.props.fallbackImagePath}
              alt=""
            />
          )}
        <style>
          {`
            .fallback {
              height: 100%;
              width: 100%;
            }
          `}
        </style>
      </Fragment>
    );
  }
}

export default Lottie;
