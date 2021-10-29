// @flow

import React, { Fragment } from 'react';
import classNames from 'classnames';
import Button from 'components/Button';

import { breakPoints, colors } from 'utils/theme';

type Props = {
  selected?: number,
  switchList: string[],
  backgroundColor: string,
  fontColor: $Keys<typeof colors>,
  onSelected: (nextSelected: number) => void,
};

const SwitchControl = ({
  selected,
  switchList,
  backgroundColor,
  fontColor,
  onSelected,
}: Props) => (
  <Fragment>
    <div className="root">
      {switchList.map((value, index) => {
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
              color={fontColor}
              isBlock
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
        border-radius: 0px;
        background-color: ${backgroundColor};
      }
      .optionWrapper {
        flex: 1;
      }
      /*
        hacky css rule to increase the font size of the buttons
        for the switch control from 16px -> 13px.
        Also to increase the border radius: 4px -> 8px
        */
      .optionWrapper > :global(div) > :global(div) {
        font-size: 13px;
        font-weight: 700;
        border-radius: ${selected === 0 ? '4px 0 0 4px' : '0 4px 4px 0'};
      }
      @media (min-width: ${breakPoints.medium}px) {
        /*
        hacky css rule to increase the size of the buttons for the
        switch control from 40px -> 50px
        */
        .optionWrapper > :global(div) > :global(div) {
          font-size: 20px;
          height: 50px;
        }
      }
    `}</style>
  </Fragment>
);

export default SwitchControl;
