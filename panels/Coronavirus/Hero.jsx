// @flow

import React, { Fragment, useState } from 'react';

import TypeformModal from 'components/TypeformModal';
import Button from 'components/Button';
import {
  colors,
  breakPoints,
  fontSizes,
  fontWeights,
  lineHeights,
} from 'utils/theme';
import { urlBuilders } from 'utils/urls';
import sendEvent from 'utils/analytics';

const Hero = () => {
  const [modalVisible, setModalVisibile] = useState(false);
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <h1 className="title">Support for Coronavirus-Impacted Schools</h1>
          <p className="paragraph">
            Mathspace is offering free access for all schools with forced
            closures due to Coronavirus. We are doing this to ensure that
            teachers and students can continue to work through the curriculum
            from home.
          </p>
          <p className="paragraph">
            Any school that has closed is eligible for free access. Please
            submit your school if it has already closed or if it is currently
            evaluating closure
          </p>
          <p className="paragraph">
            If a school is already on a Mathspace contract, and they want to
            extend to access to more grade levels, we will also offer the
            additional students that were not already covered in the agreement
            free of charge.
          </p>
          <div className="buttonWrapper">
            <Button
              color="lochmara"
              isFilled
              data-event-label="hero-form-opened"
              onClick={() => {
                sendEvent('hero-form-opened');
                setModalVisibile(true);
              }}
            >
              Submit your school for free access
            </Button>
          </div>
          <div className="imageWrapper">
            <img
              className="image"
              src={urlBuilders.imageUrl('coronavirus/hero.svg')}
              alt=""
            />
          </div>
        </div>
      </div>
      {modalVisible && (
        <TypeformModal
          typeFormId="c8nJvN"
          onClose={() => setModalVisibile(false)}
        />
      )}
      <style jsx>{`
        .container {
          padding: 50px 24px 200px;
          background-color: ${colors.athensGray};
        }
        .wrapper {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
        }
        .title {
          color: ${colors.cloudBurst};
          font-size: ${fontSizes.mobile.h1}px;
          font-weight: ${fontWeights.semibold};
          line-height: ${lineHeights.body};
          text-align: center;
        }
        .paragraph {
          color: ${colors.cloudBurst};
          font-size: ${fontSizes.mobile.bodyLG}px;
          line-height: ${lineHeights.body};
          margin: 20px 0;
          text-align: center;
        }
        .buttonWrapper {
          text-align: center;
          margin-bottom: 30px;
        }
        .imageWrapper {
          position: absolute;
          left: 0px;
          max-width: 500px;
          width: 100%;
        }
        .image {
          width: 100%;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .title {
            font-size: ${fontSizes.desktop.h1}px;
          }
        }

        @media (min-width: ${breakPoints.small}px) {
          .imageWrapper {
            left: 100px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Hero;
