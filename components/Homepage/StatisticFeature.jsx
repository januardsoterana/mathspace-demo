// @flow

import React, { Fragment, type ComponentType } from 'react';

import {
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
  breakPoints,
} from 'utils/theme';

type Props = {| icon: ComponentType<*>, stat: string, title: string |};
const StatisticFeature = ({ icon, stat, title }: Props) => {
  const Icon = icon;
  return (
    <Fragment>
      <div className="statistic">
        <div className="icon">
          <Icon color={colors.cloudBurst} />
        </div>
        <p className="stats">{stat}</p>
        <p className="title">{title}</p>
      </div>
      <style jsx>{`
        .statistic {
          max-width: 120px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .icon {
          width: 60px;
        }
        .stats {
          margin: 0;
          margin-top: 10px;
          color: ${colors.cloudBurst};
          font-size: ${fontSizes.mobile.h2}px;
          font-weight: ${fontWeights.semibold};
        }
        .title {
          margin: 0;
          margin-top: 5px;
          line-height: ${lineHeights.h4};
          color: ${colors.santasGray};
          font-size: ${fontSizes.mobile.bodyLG}px;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .stats {
            font-size: ${fontSizes.desktop.h2}px;
          }
          .title {
            font-size: ${fontSizes.desktop.bodyLG}px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default StatisticFeature;
