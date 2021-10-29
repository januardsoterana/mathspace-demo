// @flow

import React, { Fragment, useState } from 'react';
import classnames from 'classnames';

import { postData, validation } from 'utils/registration';
import {
  colors,
  borderRadius,
  desktopFontSizes,
  breakPoints,
  lineHeights,
} from 'utils/theme';
import sendEvent from 'utils/analytics';

const REGISTRATION_SUCCESS = 'registration-success';
const REGISTRATION_FAIL = 'registration-fail';

type Props = { webinarID: string, responseSetter: (data: Object) => void };
const RegistrationForm = ({ webinarID, responseSetter }: Props) => {
  const [values, setValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    schoolName: '',
    state: '',
    nesa: '',
    referral: '',
  });
  const [errors, setError] = useState({
    firstName: '',
    lastName: '',
    email: '',
    schoolName: '',
    state: '',
    referral: '',
    canSubmit: true,
  });
  const [loading, setLoading] = useState(false);
  const submitButtonClass = classnames({
    submit: true,
    disabledSubmit: loading,
  });
  const inputFieldClass = classnames({
    input: true,
    disabledInput: loading,
  });

  return (
    <Fragment>
      <form
        className="form"
        onSubmit={event => {
          event.preventDefault();
          if (!loading) {
            setLoading(true);
            const formErrors = validation(values);
            if (formErrors.canSubmit) {
              setError(errors);
              postData(webinarID, values).then(data => {
                const registrationSuccess = Object.prototype.hasOwnProperty.call(
                  data,
                  'join_url',
                );
                if (registrationSuccess)
                  sendEvent(webinarID, REGISTRATION_SUCCESS, 'webinar');
                else sendEvent(webinarID, REGISTRATION_FAIL, 'webinar');
                setLoading(false);
                responseSetter(data);
              });
            } else {
              setError(formErrors);
              setLoading(false);
            }
          }
        }}
      >
        <div className="inputRow">
          <label className="inputLabel" htmlFor="firstName">
            <div>
              <span className="label">First Name</span>
              <span className="requiredIcon">*</span>
            </div>
            <input
              className={inputFieldClass}
              type="text"
              name="firstName"
              value={values.firstName}
              disabled={loading}
              onChange={event =>
                setValue({ ...values, firstName: event.target.value })
              }
            />
            {errors.firstName && (
              <div className="errorMessage">{errors.firstName}</div>
            )}
          </label>
          <label className="inputLabel" htmlFor="lastName">
            <div>
              <span className="label">Last Name</span>
              <span className="requiredIcon">*</span>
            </div>
            <input
              className={inputFieldClass}
              type="text"
              name="lastName"
              value={values.lastName}
              disabled={loading}
              onChange={event =>
                setValue({ ...values, lastName: event.target.value })
              }
            />
            {errors.lastName && (
              <div className="errorMessage">{errors.lastName}</div>
            )}
          </label>
        </div>

        <div className="inputRow">
          <label className="inputLabel" htmlFor="email">
            <div>
              <span className="label">Email</span>
              <span className="requiredIcon">*</span>
            </div>
            <input
              className={inputFieldClass}
              type="text"
              name="email"
              value={values.email}
              disabled={loading}
              onChange={event =>
                setValue({ ...values, email: event.target.value })
              }
            />
            {errors.email && <div className="errorMessage">{errors.email}</div>}
          </label>
          <label className="inputLabel" htmlFor="schoolName">
            <div>
              <span className="label">School Name</span>
            </div>
            <input
              className={inputFieldClass}
              type="text"
              name="schoolName"
              value={values.schoolName}
              disabled={loading}
              onChange={event =>
                setValue({ ...values, schoolName: event.target.value })
              }
            />
          </label>
        </div>

        <div className="buttonWrapper">
          <input
            className={submitButtonClass}
            type="submit"
            value="Register"
            disabled={loading}
          />
        </div>
      </form>
      <style jsx>{`
        .form {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .inputRow {
          display: flex;
          width: 100%;
          justify-content: space-between;
          flex-direction: column;
        }
        .inputLabel {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-top: 5px;
        }
        .labelWrapper {
          line-height: ${lineHeights.h3};
        }
        .label {
          font-size: ${desktopFontSizes.description}px;
        }
        .requiredIcon {
          color: ${colors.cinnabar};
        }
        .input {
          border-radius: ${borderRadius.default}px;
          border: 1px solid ${colors.iron};
          font-size: ${desktopFontSizes.description}px;
          padding: 6px 10px;
          margin-top: 5px;
        }
        .disabledInput {
          color: ${colors.white};
        }
        .errorMessage {
          color: ${colors.cinnabar};
          font-size: ${desktopFontSizes.description}px;
        }
        .buttonWrapper {
          margin-top: 25px;
          max-width: 150px;
        }
        .submit {
          background-color: ${colors.lochmara};
          color: ${colors.white};
          border: none;
          border-radius: ${borderRadius.default}px;
          width: 100%;
          font-size: ${desktopFontSizes.subInfo}px;
          height: 40px;
          cursor: pointer;
        }
        .disabledSubmit {
          background-color: ${colors.iron};
        }

        @media (min-width: ${breakPoints.medium}px) {
          .inputRow {
            flex-direction: row;
          }
          .inputLabel {
            max-width: 300px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default RegistrationForm;
