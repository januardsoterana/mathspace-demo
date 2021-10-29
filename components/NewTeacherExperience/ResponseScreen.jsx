// @flow

import React, { Fragment } from 'react';

import Button from 'components/Button';
import { breakPoints, lineHeights, colors } from 'utils/theme';

type Props = { response: Object };
const ResponseScreen = ({ response }: Props) => {
  const registrationSuccess = Object.prototype.hasOwnProperty.call(
    response,
    'join_url',
  );
  return (
    <Fragment>
      {registrationSuccess ? (
        <div className="success">
          <div className="title">Registration complete!</div>
          <div className="message">
            Your registration has been recorded. We&apos;ll send you an email
            with further details on how to join the webinar.
          </div>
          <div className="message">
            If the session is starting now, you can click the button below to
            join immediately.
          </div>
          <div className="buttonWrapper">
            <Button color="lochmara" isFilled isBlock href={response.join_url}>
              Join Webinar
            </Button>
          </div>
        </div>
      ) : (
        <div className="fail">
          <div className="title">Oops, something went wrong</div>
          <div className="message">{response.message}</div>
        </div>
      )}
      <style jsx>{`
        .title {
          font-size: 20px;
          margin-bottom: 10px;
          color: ${colors.cloudBurst};
        }
        .message {
          line-height: ${lineHeights.body};
          color: ${colors.cloudBurst};
        }
        .buttonWrapper {
          margin-top: 20px;
          max-width: initial;
        }
        .message + .message {
          margin-top: 5px;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .buttonWrapper {
            margin-top: 20px;
            max-width: 200px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default ResponseScreen;
