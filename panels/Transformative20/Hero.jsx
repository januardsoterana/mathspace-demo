// @flow

import React, { Fragment } from 'react';

import { urlBuilders } from 'utils/urls';
import { colors } from 'utils/theme';

const Hero = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="mathspaceLogoWrapper">
          <img
            className="image"
            src={urlBuilders.imageUrl(
              'common/Mathspace-logo-flat-reversed.svg',
            )}
            alt=""
          />
        </div>
        <div className="transformative20LogoWrapper">
          <img
            className="image"
            src={urlBuilders.imageUrl('transformative20/trans20logo.svg')}
            alt=""
          />
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 50px 24px;
        background-color: ${colors.cloudBurst};
      }
      .wrapper {
        max-width: 650px;
        margin: 0 auto;
      }
      .mathspaceLogoWrapper {
        max-width: 200px;
        margin: 0 auto 20px;
      }
      .transformative20LogoWrapper {
        max-width: 500px;
        margin: 0 auto;
      }
      .image {
        width: 100%;
      }
    `}</style>
  </Fragment>
);

export default Hero;
