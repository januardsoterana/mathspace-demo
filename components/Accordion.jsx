// @flow

import React, { Fragment, type Node } from 'react';
import classNames from 'classnames';

import { colors, transitions, mobileFontSizes } from 'utils/theme';

type Props = {|
  title: string,
  interactive: boolean,
  onClick?: (title: string, isOpened: boolean) => void,
  children?: Node,
  startOpened?: boolean,
  color?: $Keys<typeof colors>,
|};

type State = {
  isOpened: boolean,
};

class Accordion extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpened: !this.props.interactive || this.props.startOpened,
    };
  }

  render() {
    const sectionContentClass = classNames({
      sectionContent: true,
      opened: this.state.isOpened,
    });
    const dropdownIconClass = classNames({
      dropdownIcon: true,
      iconOpened: this.state.isOpened,
    });
    return (
      <Fragment>
        <div className="accordionContainer">
          {/* eslint-disable-next-line */}
          <div
            className="sectionHeader"
            onClick={() => {
              if (this.props.interactive) {
                this.setState(state => {
                  if (this.props.onClick)
                    this.props.onClick(this.props.title, !state.isOpened);
                  return {
                    ...state,
                    isOpened: !state.isOpened,
                  };
                });
              }
            }}
          >
            {this.props.title}
            {this.props.interactive && (
              <div className={dropdownIconClass}>
                <svg width="14" height="9" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 8l5.698-6L13 8"
                    stroke={
                      this.props.color ? colors[this.props.color] : colors.white
                    }
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            )}
          </div>
          <div className={sectionContentClass}>
            <div>{this.props.children}</div>
          </div>
        </div>
        <style jsx>{`
          .accordionContainer {
            overflow: hidden;
          }
          .sectionHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: ${this.props.color
              ? colors[this.props.color]
              : colors.white};
            font-size: ${mobileFontSizes.h4}px;
            padding-bottom: 4px;
            cursor: ${this.props.interactive ? 'pointer' : 'default'};
            user-select: none;
          }
          .sectionContent {
            margin: 0;
            overflow: hidden;
            max-height: 0;
            opacity: 0;
            transition: opacity ${transitions.default},
              max-height ${transitions.default}, margin ${transitions.default};
          }
          .dropdownIcon {
            max-width: 15px;
            transform: rotate(0.5turn);
            transition: transform ${transitions.default};
            display: flex;
          }
          .iconOpened {
            transform: rotate(0turn);
          }
          .opened {
            margin: 15px 0;
            max-height: 5000px;
            opacity: 1;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default Accordion;
