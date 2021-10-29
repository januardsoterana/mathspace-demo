// @flow

import React, { Fragment, useState } from 'react';

import WinnerModal from 'components/Transformative20/WinnerModal';
import {
  borderRadius,
  colors,
  fontWeights,
  lineHeights,
  transitions,
} from 'utils/theme';
import sendCTAClickEvent from 'utils/analytics';

const T20_WINNER = 't20-winner';

type Props = {|
  winner: {
    type: string,
    name: string,
    school: string,
    description: string,
    image: string,
  },
|};
const Card = ({ winner }: Props) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <Fragment>
      <li
        key={winner.name}
        className="card"
        role="button"
        tabIndex="0"
        data-event-label={T20_WINNER}
        onKeyPress={() => {
          setModalVisibility(true);
          sendCTAClickEvent(
            winner.name.replace(/\s+/g, '-').toLowerCase(),
            'clicked',
            T20_WINNER,
          );
        }}
        onClick={() => {
          setModalVisibility(true);
          sendCTAClickEvent(
            winner.name.replace(/\s+/g, '-').toLowerCase(),
            'clicked',
            T20_WINNER,
          );
        }}
      >
        <div className="backgroundImage" />
        <div className="details">
          <div className="name">{winner.name}</div>
          <div className="school">{winner.school}</div>
        </div>
      </li>
      {modalVisibility && (
        <WinnerModal
          winner={winner}
          onClose={() => setModalVisibility(false)}
        />
      )}
      <style jsx>{`
        .card {
          border-radius: 4px;
          width: 281px;
          height: 341px;
          margin: 0 13px 34px;
          position: relative;
          color: ${colors.white};
          cursor: pointer;
        }
        .backgroundImage {
          border-radius: 4px;
          transition: filter ${transitions.hover};
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          background-image: url(${winner.image});
          background-size: cover;
          background-position: center;
        }
        .details {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          min-height: 64px;
          padding: 5px 10px;
          background-color: ${colors.cloudBurst};
          border-bottom-left-radius: ${borderRadius.default}px;
          border-bottom-right-radius: ${borderRadius.default}px;
        }
        .name {
          font-weight: ${fontWeights.semibold};
        }
        .school {
          line-height: ${lineHeights.h2};
        }
      `}</style>
    </Fragment>
  );
};

export default Card;
