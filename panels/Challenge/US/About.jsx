// @flow

import React, { Fragment, useState } from 'react';

import TypeformModal from 'components/TypeformModal';
import {
  colors,
  fontWeights,
  fontSizes,
  breakPoints,
  lineHeights,
} from 'utils/theme';

const About = () => {
  const [modalVisible, setModalVisibility] = useState(false);
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <h2 className="title">About the Challenge</h2>
          <p className="paragraph">
            The 2020 United States Growth Challenge is all about problem-solving
            and celebrating student growth in mathematics, no matter what their
            starting point is!
          </p>
          <p className="paragraph">
            This is an online math challenge open to all schools looking to
            promote a positive learning environment. You can encourage teamwork
            between students and growth mindset in all students
          </p>
        </div>
      </div>
      {modalVisible && (
        <TypeformModal
          typeFormId="r6RSur"
          onClose={() => setModalVisibility(false)}
        />
      )}
      <style jsx>{`
        .container {
          padding: 0 24px;
        }
        .wrapper {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          color: ${colors.white};
        }
        .title {
          margin: 20px 0;
          font-size: ${fontSizes.mobile.h2}px;
          font-weight: ${fontWeights.semibold};
        }
        .paragraph {
          line-height: ${lineHeights.body};
          margin: 0;
        }
        .paragraph + .paragraph {
          margin: 15px 0 0;
        }
        .buttonWrapper {
          max-width: 250px;
          width: 100%;
          margin: 15px auto 0;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .title {
            font-size: ${fontSizes.desktop.h2}px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default About;
