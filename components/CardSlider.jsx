// @flow

import React, { Fragment } from 'react';
import classNames from 'classnames';

import { breakPoints, colors, transitions } from 'utils/theme';

type CardProps = {|
  name: string,
  imageUrl: string,
  onClick: (selecte: string) => void,
  isSelected: boolean,
|};

const CARD_WIDTH = 100;
const CARD_HEIGHT = 200;

const Card = ({ name, imageUrl, onClick, isSelected }: CardProps) => {
  const cardContainerClass = classNames({
    cardContainer: true,
    selected: isSelected,
  });
  return (
    <Fragment>
      {/* eslint-disable-next-line */}
      <div
        key={name}
        className={cardContainerClass}
        onClick={() => onClick(name)}
      >
        <div className="imageWrapper">
          <img src={imageUrl} alt={name} className="image" />
        </div>
        <div className="cardName">{name}</div>
      </div>
      <style jsx>{`
        .cardContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: ${colors.white};
          width: ${CARD_WIDTH}px;
          height: 150px;
          justify-content: center;
          border-top: 4px solid ${colors.lochmara};
          cursor: pointer;
          transition: background-color ${transitions.default};
          text-align: center;
          font-size: 12px;
          margin: 0 auto;
        }
        .cardName {
          margin-top: 8px;
          height: 32px;
          font-size: 16px;
        }
        .image {
          max-width: 70px;
        }
        .imageWrapper {
          height: 84px;
          display: flex;
          align-items: flex-end;
        }
        @media (min-width: ${breakPoints.medium}px) {
          .cardContainer {
            height: ${CARD_HEIGHT}px;
          }
          .selected {
            border-top: 4px solid ${colors.mountainMeadow};
            background-color: rgba(26, 188, 156, 0.2);
          }
        }
      `}</style>
    </Fragment>
  );
};

type Props = {|
  cardList: Array<{
    imageUrl: string,
    name: string,
    onClick: (selected: string) => void,
  }>,
  selectedCardName: string,
|};

const CardSlider = ({ cardList, selectedCardName }: Props) => (
  <Fragment>
    <div className="root">
      <div className="list">
        {cardList.map(card => (
          <div key={card.name} className="listItem">
            <Card
              name={card.name}
              imageUrl={card.imageUrl}
              onClick={card.onClick}
              isSelected={card.name === selectedCardName}
            />
          </div>
        ))}
      </div>
    </div>
    <style jsx>{`
    .root {
      overflow-x hidden;
      position: relative;
    }
    .list {
      display: flex;
      flex-grow: 1;
      flex-wrap: wrap;
    }
    .listItem {
      box-sizing: border-box
      display: inline-block;
      vertical-align: bottom;
      flex: 0 50%;
    }
    .buttonContainer {
      display: flex;
      justify-content: space-around;
    }
    .spacer {
      flex: 1;
    }
    @media (min-width: ${breakPoints.small}px) {
      .listItem {
        flex: 0 33%;
      }
    }
    @media (min-width: ${breakPoints.large}px) {
      .buttonContainer {
        display: none;
      }
      .list {
        max-width: 100%;
      }
      .listItem {
        flex: 1;
      }
    }
    `}</style>
  </Fragment>
);

export default CardSlider;
