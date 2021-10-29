// @flow

import React, { Fragment } from 'react';
import Head from 'next/head';

import Modal from 'components/Modal';
import { urls } from 'utils/urls';

type Props = {
  bookingType: 'demo' | 'chat',
  onClose: () => void,
  country?: string,
};

const CalendlyModal = ({ bookingType, onClose, country = '' }: Props) => (
  <Fragment>
    <Head>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
      />
    </Head>
    <Modal onClose={onClose}>
      <div className="container">
        {bookingType === 'demo' ? (
          <div
            className="calendly-inline-widget"
            data-url={`${
              country === 'AU' ? urls.bookDemoAU : urls.bookDemo
            }/?utm_medium=website&utm_source=mathspace&utm_content=${country}${
              country === 'AU' ? '&month=2019-04' : ''
            }`}
            style={{ minWidth: 335, height: 580 }}
          />
        ) : (
          <div
            className="calendly-inline-widget"
            data-url={`${
              country === 'AU' ? urls.quickChatAU : urls.quickChat
            }/?utm_medium=website&utm_source=mathspace&utm_content=${country}${
              country === 'AU' ? '&month=2019-04' : ''
            }`}
            style={{ minWidth: 335, height: 580 }}
          />
        )}
      </div>
    </Modal>
    <style jsx>{`
      .container {
        width: 900px;
        padding: 0 24px;
      }
    `}</style>
  </Fragment>
);

export default CalendlyModal;
