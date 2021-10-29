// @flow

import React, { Fragment, type Node } from 'react';

import { zIndex } from 'utils/theme';
import { urlBuilders } from 'utils/urls';

type Props = {|
  onClose: () => void,
  children?: Node,
|};

type State = {||};

class Modal extends React.Component<Props, State> {
  handleKeyUp: (event: Event) => void;

  // eslint-disable-next-line
  constructor(props: Props) {
    super(props);

    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleKeyUp, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleKeyUp, false);
  }

  handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.props.onClose();
      window.removeEventListener('keyup', this.handleKeyUp, false);
    }
  }

  render() {
    return (
      <Fragment>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <div className="wrapper">
          <div
            className="overlay"
            role="button"
            tabIndex="0"
            onClick={this.props.onClose}
            onKeyPress={this.props.onClose}
          />
          <div className="contetWrapper">
            <div className="modal">{this.props.children}</div>
            <div
              className="imageWrapper"
              role="button"
              tabIndex="0"
              onClick={this.props.onClose}
              onKeyPress={this.props.onClose}
            >
              <div className="exitBackground">
                <img
                  className="image"
                  src={urlBuilders.imageUrl('common/Exit.svg')}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .overlay {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.7);
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          }
          .wrapper {
            z-index: ${zIndex.menuModal};
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .contetWrapper {
            position: relative;
            max-width: 800px;
            width: 100%;
          }
          .modal {
            display: flex;
            justify-content: center;
            background-color: none;
            overflow: hidden;
            z-index: 3;
            width: 100%;
          }
          .imageWrapper {
            position: absolute;
            top: -21px;
            right: 0;
            z-index: 4;
            padding: 10px;
            cursor: pointer;
            outline: none;
          }
          .exitBackground {
            display: flex;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.4);
            border-radius: 30px;
            padding: 10px;
          }
        `}</style>
        <style jsx global>{`
          body {
            overflow: hidden;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default Modal;
