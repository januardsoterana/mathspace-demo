// @flow

import React, { Fragment } from 'react';
import Link from 'next/link';

import Anchor from 'components/Anchor';
import sendCTAClickEvent from 'utils/analytics';
import { colors, fontSizes, breakPoints, fontWeights } from 'utils/theme';
import { urls } from 'utils/urls';
import { desktopFontSizes } from '../../utils/theme';

const nominateUrl =
  'https://mathspace.typeform.com/to/wbaFTUWd#ms_school_name=xxxxx';

const Criteria = () => (
  <Fragment>
    <div className="descriptionTop">
      <div className="wrapper">
        <h3 className="title">Application Criteria</h3>
        <div className="paragraph">
          We’re looking for individuals who reflect our{' '}
          <Link href={urls.aboutUsAU} passHref>
            <Anchor underline color="cloudburst">
              core values
            </Anchor>
          </Link>{' '}
          - those who strive for <strong>impact</strong>, work with{' '}
          <strong>purpose</strong>, focus on{' '}
          <strong>continuous improvement</strong>, and demonstrate{' '}
          <strong>selflessness</strong> through their commitment to helping
          others.
        </div>
        <div className="paragraph">
          As part of the winner selection process, we’ll also track data on
          teacher and student effort & input on Mathspace.
        </div>
        <hr className="divider" />
        <h3 className="title">How does it work?</h3>
        <div className="paragraph">
          <strong>Nomination process</strong>
        </div>
        <div className="paragraph">
          Fill in the nomination form for someone who you think deserves to be
          named a Transformative 20 teacher or student by October 25.
        </div>
        <div className="paragraph">
          <strong>Shortlisted nominees announcement</strong>
        </div>
        <div className="paragraph">
          We’ll announce the shortlisted nominees on October 30.
        </div>
        <div className="paragraph">
          <strong>Winners announcement</strong>
        </div>
        <div className="paragraph">
          We will announce the 20 teacher winners and 20 student winners on
          November 23.
        </div>
        <div className="buttonWrapper">
          <a
            role="button"
            tabIndex="0"
            data-event-label={'t20-nominate'}
            href={nominateUrl}
            onClick={event => {
              event.preventDefault();
              sendCTAClickEvent('t20-nominate').then(() => {
                window.location.assign(nominateUrl);
              });
            }}
            onKeyPress={event => {
              event.preventDefault();
              sendCTAClickEvent('t20-nominate').then(() => {
                window.location.assign(nominateUrl);
              });
            }}
          >
            Nominate someone now
          </a>
        </div>
      </div>
    </div>
    <style jsx>{`
      .descriptionTop {
        padding: 50px 24px;
      }
      .wrapper {
        max-width: 700px;
        margin: 0 auto;
        text-align: center;
      }
      .title {
        margin: 20px 0 40px;
        text-align: center;
        color: ${colors.cloudBurst};
        font-size: ${fontSizes.mobile.h2}px;
        font-weight: ${fontWeights.semibold};
      }
      .paragraph {
        color: ${colors.cloudBurst};
      }
      .paragraph + .paragraph {
        margin-top: 20px;
      }
      .divider {
        margin: 40px 0;
        height: 0;
        border: 0;
        border-top: 1px solid #c4c4c4;
      }
      .buttonWrapper {
        margin: 60px 0 20px;
        text-align: center;
      }
      .buttonWrapper a {
        background-color: ${colors.cloudBurst};
        color: ${colors.white};
        font-size: 20px;
        text-decoration: none;
        border-radius: 4px;
        padding: 10px 40px 12px;
      }
      @media (min-width: ${breakPoints.medium}px) {
        .title {
          font-size: ${fontSizes.desktop.h2}px;
        }
      }
    `}</style>
  </Fragment>
);

export default Criteria;
