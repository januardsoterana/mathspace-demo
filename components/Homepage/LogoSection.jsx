// @flow

import React, { Fragment } from 'react';

import { urls, urlBuilders } from 'utils/urls';
import { type CountryCodes } from 'utils/types';
import sendEvent from 'utils/analytics';

const TED_LOGO = 'ted-logo-link';
const FINANCIAL_REVIEW_LOGO = 'financial-review-logo-link';
const DAILY_TELEGRAPH_LOGO = 'daily-telegraph-logo-link';
const FORBES_LOGO = 'forbes-logo-link';
const EDUCATION_WEEK_LOGO = 'education-week-link';

type Props = {| country: CountryCodes |};
const LogoSection = ({ country }: Props) => (
  <Fragment>
    {country === 'AU' && (
      <Fragment>
        <div className="logo">
          <a
            className="link"
            href={urls.ted}
            data-event-lable={TED_LOGO}
            onClick={event => {
              event.preventDefault();
              sendEvent(TED_LOGO).then(() => {
                window.location.assign(urls.ted);
              });
            }}
          >
            <img
              className="tedLogo"
              src={urlBuilders.imageUrl('homepage/ted.svg')}
              alt="TED"
            />
          </a>
        </div>
        <div className="logo">
          <a
            className="link"
            href={urls.financialReview}
            data-event-lable={FINANCIAL_REVIEW_LOGO}
            onClick={event => {
              event.preventDefault();
              sendEvent(FINANCIAL_REVIEW_LOGO).then(() => {
                window.location.assign(urls.financialReview);
              });
            }}
          >
            <img
              className="financialReview"
              src={urlBuilders.imageUrl('homepage/financialReview.svg')}
              alt="Financial Review"
            />
          </a>
        </div>
        <div className="logo">
          <a
            className="link"
            href={urls.dailyTelegraph}
            data-event-lable={DAILY_TELEGRAPH_LOGO}
            onClick={event => {
              event.preventDefault();
              sendEvent(DAILY_TELEGRAPH_LOGO).then(() => {
                window.location.assign(urls.dailyTelegraph);
              });
            }}
          >
            <img
              className="dailyTelegraph"
              src={urlBuilders.imageUrl('homepage/dailyTelegraph.svg')}
              alt="Daily Telegraph"
            />
          </a>
        </div>
      </Fragment>
    )}
    {country === 'US' && (
      <Fragment>
        <div className="logo">
          <a
            className="link"
            href={urls.forbes}
            data-event-lable={FORBES_LOGO}
            onClick={event => {
              event.preventDefault();
              sendEvent(FORBES_LOGO).then(() => {
                window.location.assign(urls.forbes);
              });
            }}
          >
            <img
              className="forbes"
              src={urlBuilders.imageUrl('homepage/forbes.svg')}
              alt="Forbes"
            />
          </a>
        </div>
        <div className="logo">
          <a
            className="link"
            href={urls.educationWeek}
            data-event-lable={EDUCATION_WEEK_LOGO}
            onClick={event => {
              event.preventDefault();
              sendEvent(EDUCATION_WEEK_LOGO).then(() => {
                window.location.assign(urls.educationWeek);
              });
            }}
          >
            <img
              className="educationWeek"
              src={urlBuilders.imageUrl('homepage/educationWeek.svg')}
              alt="Education Wekk"
            />
          </a>
        </div>
        <div className="logo">
          <a
            className="link"
            href={urls.ted}
            data-event-lable={TED_LOGO}
            onClick={event => {
              event.preventDefault();
              sendEvent(TED_LOGO).then(() => {
                window.location.assign(urls.ted);
              });
            }}
          >
            <img
              className="tedLogo"
              src={urlBuilders.imageUrl('homepage/ted.svg')}
              alt="TED"
            />
          </a>
        </div>
      </Fragment>
    )}
    <style jsx>{`
      .link {
        display: flex;
        align-items: center;
      }
      .tedLogo {
        height: 30px;
      }
      .dailyTelegraph {
        max-width: 103px;
        display: flex;
      }
      .financialReview {
        max-width: 110px;
        height: 14px;
      }
      .forbes {
        max-width: 50px;
        height: 18px;
      }
      .educationWeek {
        max-width: 110px;
        height: 14px;
      }
      .logo + .logo {
        margin-left: 15px;
      }
    `}</style>
  </Fragment>
);

export default LogoSection;
