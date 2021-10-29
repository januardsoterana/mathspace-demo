// @flow

import React, { Fragment } from 'react';

import { breakPoints } from 'utils/theme';
import { urlBuilders } from 'utils/urls';

type Props = { backgroundImage: string };
const PhotoPanel = ({ backgroundImage }: Props) => (
  <Fragment>
    <div className="photoPanel" />
    <style jsx>{`
      .photoPanel {
        background-image: url(${urlBuilders.imageUrl(`${backgroundImage}`)});
        background-size: cover;
        background-position: 50% 25%;
        margin-right: 16px;
        display: flex;
        height: 300px;
      }
      .panelImage {
        flex: 1;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .photoPanel {
          height: 559px;
        }
      }
    `}</style>
  </Fragment>
);

export default PhotoPanel;
