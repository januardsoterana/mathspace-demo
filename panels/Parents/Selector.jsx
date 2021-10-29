// @flow

import React, { Fragment } from 'react';

import { urlBuilders } from 'utils/urls';
import { breakPoints, colors, fontSizes } from 'utils/theme';
import sendEvent from 'utils/analytics';

type CardProps = {
  onClick: () => void,
  icon: string,
  countryName: string,
  selected: boolean,
};
const Card = ({ onClick, icon, countryName, selected }: CardProps) => (
  <Fragment>
    <button
      tabIndex="0"
      className="card"
      onClick={onClick}
      onKeypress={onClick}
    >
      <div className="content">
        <div className="imageWrapper">
          <img className="image" src={icon} alt="" />
        </div>
        <div className="countryName">{countryName}</div>
      </div>
    </button>
    <style jsx>{`
      .card {
        background: none;
        box-shadow: none;
        border: none;
        border-top: 4px solid
          ${selected ? colors.mountainMeadow : colors.tropicalBlue};
        background-color: ${selected
          ? 'rgba(26, 188, 156, 0.2)'
          : colors.tropicalBlue};

        height: 170px;
        outline: none;
      }
      .content {
        height: 135px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        cursor: pointer;
      }
      .countryName {
        font-size: ${fontSizes.mobile.bodyLG}px;
        color: ${colors.cloudBurst};
        margin-top: 5px;
      }
    `}</style>
  </Fragment>
);

type Props = {
  onClick: (selected: 'AU' | 'US') => void,
  selected: 'AU' | 'US',
};
const Selector = ({ onClick, selected }: Props) => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="cardWrapper">
          <Card
            onClick={() => {
              sendEvent('US', 'country-switch', 'parents-landing');
              onClick('US');
            }}
            icon={urlBuilders.imageUrl('curriculum/US-Curriculum.svg')}
            countryName="US"
            selected={selected === 'US'}
          />
        </div>
        <div className="cardWrapper">
          <Card
            onClick={() => {
              sendEvent('AU', 'country-switch', 'parents-landing');
              onClick('AU');
            }}
            icon={urlBuilders.imageUrl('curriculum/AU-Curriculum.svg')}
            countryName="AU"
            selected={selected === 'AU'}
          />
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 70px 24px 20px;
        background-color: ${colors.tropicalBlue};
      }
      .wrapper {
        max-width: 300px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
      }
      .countrySelectRow {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .countrySelectRow {
          flex-direction: row;
        }
      }
    `}</style>
  </Fragment>
);
export default Selector;
