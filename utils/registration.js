// @flow

import 'isomorphic-unfetch';

export const postData = (webinarID: string, data: Object) =>
  fetch('/au/api/register', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...data, webinarID }),
  }).then(response => response.json());

export const validation = (values: Object) => {
  const errors = {
    firstName: '',
    lastName: '',
    email: '',
    userType: '',
    schoolName: '',
    canSubmit: true,
  };

  if (!values.firstName) {
    errors.firstName = 'First name is required';
    errors.canSubmit = false;
  }
  if (!values.lastName) {
    errors.lastName = 'Last name is required';
    errors.canSubmit = false;
  }
  if (!values.schoolName) {
    errors.schoolName = 'School name is required';
    errors.canSubmit = false;
  }
  if (!values.email) {
    errors.email = 'Email address is required';
    errors.canSubmit = false;
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
    errors.canSubmit = false;
  }

  return errors;
};
