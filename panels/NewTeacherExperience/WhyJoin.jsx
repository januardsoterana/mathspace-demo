// @flow

import React, { Fragment, useState } from 'react';

import Button from 'components/Button';
import RegistrationModal from 'components/NewTeacherExperience/RegistrationModal';

import {
  colors,
  lineHeights,
  fontWeights,
  fontSizes,
  breakPoints,
} from 'utils/theme';
import sendCTAClickEvent from 'utils/analytics';

const WHY_REGISTER = 'why-join-registration-open';

type Props = {| date: string |};
const WhyJoin = ({ date }: Props) => {
  const [modalVisibile, setModalVisibility] = useState(false);
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <h2 className="title">Why join the launch event?</h2>
          <p className="description">
            This is a panel event in which you&apos;ll get to hear from our
            Founder and our product team. Learn about why we&apos;ve launched
            the new teacher experience, get ideas on how you can use it, and ask
            us any questions.
          </p>
          <div className="buttonWrapper">
            <Button
              color="lochmara"
              isFilled
              isBlock
              invertedFill
              onClick={() => {
                sendCTAClickEvent(WHY_REGISTER);
                setModalVisibility(true);
              }}
            >
              Register now
            </Button>
            <div className="date">{date}</div>
          </div>
        </div>
      </div>
      {modalVisibile && (
        <RegistrationModal
          webinarID="998543182"
          webinarTitle="New teacher experience launch "
          webinarDate={date}
          onClose={() => setModalVisibility(false)}
        />
      )}
      <style jsx>{`
        .container {
          background-color: ${colors.bayOfMany};
          padding: 50px 24px;
        }
        .wrapper {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          color: ${colors.white};
          line-height: ${lineHeights.body};
        }
        .title {
          margin: 0 0 30px;
          font-weight: ${fontWeights.semibold};
          font-size: ${fontSizes.mobile.h2}px;
        }
        .description {
          font-size: ${fontSizes.mobile.h3}px;
        }
        .buttonWrapper {
          max-width: 200px;
          margin: 40px auto 0;
        }
        .date {
          margin-top: 10px;
          color: ${colors.white};
          font-size: ${fontSizes.mobile.bodyLG};
          font-weight: ${fontWeights.bold};
        }

        @media (min-width: ${breakPoints.medium}px) {
          .title {
            font-size: ${fontSizes.desktop.h2}px;
          }
          .description {
            font-size: ${fontSizes.desktop.h3}px;
          }
          .date {
            font-size: ${fontSizes.desktop.bodyLG};
          }
        }
      `}</style>
    </Fragment>
  );
};

export default WhyJoin;
