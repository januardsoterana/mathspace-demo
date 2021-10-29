// @flow

import React, { Fragment, type Node } from 'react';

import SegmentedControl from 'components/SegmentedControl';

import {
  colors,
  desktopFontSizes,
  mobileFontSizes,
  breakPoints,
  fontWeights,
  lineHeights,
} from 'utils/theme';

type Props = {|
  showSegmentControl?: boolean,
  title: string,
  segmentList: Array<{ name: string, content: Array<Node> }>,
|};

type State = {|
  selected: number,
|};

const SEGMENT_CONTROL_MAX_SIZE_DESKTOP = 580;
const SEGMENT_CONTROL_MAX_SIZE_MOBILE = 400;
const MOBILE_SECTION_SPACING = 24;
const INFO_STEP_MAX_SIZE = 960;
const INFO_STEP_MAX_SIZE_MOBILE = 350;
const WHY_MATHSPACE_WRAPPER_SPACING = 50;

class SegmentedPanel extends React.Component<Props, State> {
  segmentNames: Array<string>;
  segementContent: Array<Node>;

  constructor(props: Props) {
    super(props);

    this.segmentNames = [];
    this.segementContent = [];
    this.props.segmentList.forEach(segment => {
      this.segmentNames.push(segment.name);
      this.segementContent.push(segment.content);
    });
    this.state = { selected: 0 };
  }

  render() {
    return (
      <Fragment>
        <section className="segmentedPanelContainer">
          <h2 className="panelHeader">{this.props.title}</h2>
          <div className="segmentControlWrapper">
            {this.props.showSegmentControl && (
              <SegmentedControl
                selected={this.state.selected}
                segmentList={this.segmentNames}
                onSelected={selected =>
                  this.setState(state => ({ ...state, selected }))
                }
              />
            )}
          </div>
          <div className="infoStepContainer">
            {this.segementContent[this.state.selected]}
          </div>
        </section>
        <style jsx>{`
          .segmentedPanelContainer {
            padding: 0 ${MOBILE_SECTION_SPACING}px;
            color: ${colors.white};
            background-color: ${colors.cloudBurst};
          }
          .panelHeader {
            padding: 80px 0 32px;
            margin: 0;
            font-size: ${mobileFontSizes.h2}px;
            font-weight: ${fontWeights.semibold};
            line-height: ${lineHeights.h3};
            display: flex;
            justify-content: center;
          }
          .segmentControlWrapper {
            max-width: ${SEGMENT_CONTROL_MAX_SIZE_MOBILE}px;
            margin: 0 auto;
          }
          .infoStepContainer {
            max-width: ${INFO_STEP_MAX_SIZE_MOBILE}px;
            margin: ${WHY_MATHSPACE_WRAPPER_SPACING}px auto 0;
          }

          @media (min-width: ${breakPoints.medium}px) {
            .panelHeader {
              font-size: ${desktopFontSizes.h2}px;
            }
            .segmentControlWrapper {
              max-width: ${SEGMENT_CONTROL_MAX_SIZE_DESKTOP}px;
            }
            .infoStepContainer {
              max-width: ${INFO_STEP_MAX_SIZE}px;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default SegmentedPanel;
