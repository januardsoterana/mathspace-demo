// @flow

import React, { Fragment, type ComponentType } from 'react';
import classnames from 'classnames';

import {
  colors,
  borderRadius,
  lineHeights,
  fontSizes,
  fontWeights,
  breakPoints,
} from 'utils/theme';

type Props = {
  title: string,
  description: string,
  icon: ComponentType<*>,
  selected?: boolean,
  onClick: () => void,
};
const DifferenceFeature = ({
  title,
  description,
  icon,
  selected,
  onClick,
}: Props) => {
  const Icon = icon;
  const cardClass = classnames({
    card: true,
    selected: !!selected,
  });
  return (
    <Fragment>
      <section className={cardClass} onClick={onClick}>
        <div className="iconWrapper">
          <Icon color={colors.mountainMeadow} />
        </div>
        <h4 className="title">{title}</h4>
        <p className="description">{description}</p>
      </section>
      <style jsx>{`
        .card {
          background-color: ${colors.blackHaze};
          border-radius: ${borderRadius.default}px;
          padding: 20px;
          text-align: center;
          white-space: initial;
          transition: background-color 0.5s ease-in-out;
        }
        .iconWrapper {
          max-width: 100px;
          margin: 0 auto 10px;
        }
        .title {
          margin: 0;
          color: ${colors.cloudBurst};
          line-height: ${lineHeights.body};
          margin-bottom: 5px;
          font-size: ${fontSizes.mobile.h3}px;
          font-weight: ${fontWeights.semibold};
        }
        .description {
          margin: 0;
          color: ${colors.santasGray};
          line-height: ${lineHeights.body};
          font-size: ${fontSizes.mobile.bodySM}px;
          letter-spacing: -0.2px;
        }
        .selected {
          background-color: ${colors.athensGray};
        }

        @media (min-width: ${breakPoints.medium}px) {
          .card {
            background-color: ${colors.athensGray};
          }
        }
      `}</style>
    </Fragment>
  );
};

export default DifferenceFeature;
