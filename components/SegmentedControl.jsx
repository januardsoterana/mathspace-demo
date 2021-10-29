// @flow

import React, { Fragment } from 'react';
import classNames from 'classnames';
import Button from 'components/Button';

import { breakPoints, borderRadius, colors } from 'utils/theme';

type Props = {
  selected?: number,
  segmentList: string[],
  onSelected: (nextSelected: number) => void,
};

// Gives extra spacing around the buttons
const SEGMENTED_CONTROL_BACKGROUND_PADDING = 15;

const SegmentedControl = ({ selected, segmentList, onSelected }: Props) => (
  <Fragment>
    <div className="root">
      {segmentList.map((value, index) => {
        const isSelected = index === selected;
        const key = `value+${index}`;
        return (
          <div
            key={key}
            className={classNames({
              optionWrapper: true,
              selected: isSelected,
            })}
          >
            <Button
              color={isSelected ? 'shakespeare' : 'white'}
              isBlock
              invertedFillColor="pickledBluewood"
              invertedFill={isSelected}
              onClick={() => {
                onSelected(index);
              }}
            >
              {value}
            </Button>
          </div>
        );
      })}
    </div>
    <style jsx>{`
      .root {
        display: flex;
        border-radius: ${borderRadius.default * 2}px;
        padding: ${SEGMENTED_CONTROL_BACKGROUND_PADDING}px;
      }
      .optionWrapper {
        flex: 1;
      }
      /*
        hacky css rule to increase the font size of the buttons
        for the segmented control from 16px -> 13px.
        Also to increase the border radius: 4px -> 8px
        */
      .optionWrapper > :global(div) > :global(div) {
        font-size: 13px;
        font-weight: 700;
        border-radius: ${borderRadius.default * 2}px;
      }

      .selected {
        box-shadow: 1px 1px 16px rgba(0, 0, 0, 0.1);
        border-radius: ${borderRadius.default}px;
      }
      @media (min-width: ${breakPoints.medium}px) {
        /*
        hacky css rule to increase the size of the buttons for the
        segmented control from 40px -> 50px
        */
        .optionWrapper > :global(div) > :global(div) {
          font-size: 20px;
          height: 50px;
        }
      }
    `}</style>
  </Fragment>
);

export default SegmentedControl;
