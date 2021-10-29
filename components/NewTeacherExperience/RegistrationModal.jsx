// @flow

import React, { Fragment, useState } from 'react';

import Modal from 'components/Modal';
import RegistrationForm from 'components/NewTeacherExperience/RegisterForm';
import ResponseScreen from 'components/NewTeacherExperience/ResponseScreen';
import { urlBuilders } from 'utils/urls';
import {
  colors,
  borderRadius,
  lineHeights,
  breakPoints,
  desktopFontSizes,
  mobileFontSizes,
  fontWeights,
} from '../../utils/theme';

type Props = {|
  webinarID: string,
  webinarTitle: string,
  webinarDate: string,
  onClose: () => void,
|};
const RegisterModal = ({
  webinarID,
  webinarTitle,
  webinarDate,
  onClose,
}: Props) => {
  const [response, setResponse] = useState({});
  return (
    <Fragment>
      <Modal onClose={onClose}>
        <div className="container">
          <div className="header">
            <div className="topSection">
              <div className="logoWrapper">
                <img
                  className="image"
                  src={urlBuilders.imageUrl('common/mathspace-logo-flat.svg')}
                  alt=""
                />
              </div>
            </div>

            <div className="informationSection">
              <div className="webinarTopic">{webinarTitle}</div>
              <div className="webinarDate">{webinarDate}</div>
            </div>
          </div>
          {Object.keys(response).length === 0 ? (
            <RegistrationForm
              webinarID={webinarID}
              responseSetter={setResponse}
            />
          ) : (
            <ResponseScreen response={response} />
          )}
        </div>
      </Modal>
      <style jsx>{`
        .container {
          background-color: ${colors.white};
          border-radius: ${borderRadius.default}px;
          padding: 24px;
          width: 100%;
          max-width: 800px;
          margin: 24px;
        }
        .header {
          margin-bottom: 20px;
        }
        .topSection {
          display: flex;
          justify-content: space-between;
        }
        .logoWrapper {
          max-width: 150px;
          width: 100%;
          display: flex;
          align-items: center;
        }
        .image {
          width: 100%;
        }
        .webinarTopic {
          margin: 20px 0 5px;
          line-height: ${lineHeights.h3};
          font-size: ${mobileFontSizes.body}px;
          font-weight: ${fontWeights.semibold};
        }
        .webinarDate {
        }
        @media (min-width: ${breakPoints.medium}px) {
          .webinarTopic {
            font-size: ${desktopFontSizes.body}px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default RegisterModal;
