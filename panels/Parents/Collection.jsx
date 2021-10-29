// @flow

import React, { Fragment, useState } from 'react';

import Button from 'components/Button';
import TypeformModal from 'components/TypeformModal';

import { fontSizes, fontWeights, colors, breakPoints } from 'utils/theme';
import sendEvent from 'utils/analytics';

type Props = { country: 'AU' | 'US' };
const Collection = ({ country }: Props) => {
  const [modalVisibile, setModalVisibility] = useState(false);
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <h2 className="title">Pre-register for access</h2>
          <div className="buttonWrapper">
            <Button
              color="lochmara"
              isFilled
              isBlock
              onClick={() => {
                sendEvent('email-form', 'opened', 'parents-collection');
                setModalVisibility(true);
              }}
            >
              Pre-register
            </Button>
          </div>
          <p className="paragraphBold">
            We&apos;ll contact you on March 30 with a link for you to create
            your own account.
          </p>
          <p className="paragraph">
            Mathspace is a premium adaptive{' '}
            {country === 'AU' ? 'maths' : 'math'} learning platform, normally
            available only to schools. Due to COVID-19 forcing school closures
            and many parents reaching out for access for their children,
            we&apos;ve created a school account for parents looking to purchase
            Mathspace for home use at the discounted school price of{' '}
            {country === 'AU' ? '$30' : '$20'}.
          </p>
          <p className="paragraph">
            Access will open on Thursday 30 March, and is valid until 31 Dec
            2020.
          </p>
        </div>
      </div>
      {modalVisibile && (
        <TypeformModal
          typeFormId={country === 'AU' ? 'DFS0vR' : 'BZe1in'}
          onClose={() => setModalVisibility(false)}
        />
      )}
      <style jsx>{`
        .container {
          padding: 70px 24px;
          background-color: ${colors.athensGray};
        }
        .wrapper {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .title {
          font-size: ${fontSizes.mobile.h2}px;
          font-weight: ${fontWeights.semibold};
          color: ${colors.cloudBurst};
          margin: 0 0 30px;
        }
        .paragraphBold {
          font-size: ${fontSizes.mobile.bodyLG}px;
          font-weight: ${fontWeights.semibold};
          color: ${colors.cloudBurst};
          margin: 0 0 20px;
        }
        .paragraph {
          font-size: ${fontSizes.mobile.bodyLG}px;
          font-weight: ${fontWeights.regular};
          color: ${colors.cloudBurst};
          margin: 0;
        }
        .paragraph + .paragraph {
          margin-top: 20px;
        }
        .buttonWrapper {
          max-width: initial;
          width: 100%;
          margin-bottom: 30px;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .title {
            font-size: ${fontSizes.desktop.h2}px;
          }
          .paragraphBold {
            font-size: ${fontSizes.desktop.bodyLG}px;
          }
          .paragraph {
            font-size: ${fontSizes.desktop.bodyLG}px;
          }
          .buttonWrapper {
            max-width: 250px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Collection;
