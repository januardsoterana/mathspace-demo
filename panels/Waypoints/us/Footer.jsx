// @flow
import React from 'react';

import {
  breakPoints,
  colors,
  fontStacks,
  pagePadding,
} from 'utils/themeWaypoints';
import Anchor from 'components/Anchor';
import { mailtoLink, telLink, urls } from 'utils/urls';

export const Footer = () => (
  <>
    <div className="footer">
      <div className="footer__item">
        <div className="footer__item--contact">
          <Anchor color="white" href={mailtoLink}>
            hello@mathspace.co
          </Anchor>{' '}
          |{' '}
          <Anchor color="white" href={telLink}>
            +61 1300 833 194
          </Anchor>
        </div>
      </div>
      <div className="footer__item">
        <div className="footer__item--company">© Mathspace Waypoints 2021</div>
      </div>
      <div className="footer__item">
        <div className="footer__item--info">
          <Anchor color="white" href={urls.terms}>
            Terms and conditions
          </Anchor>{' '}
          |{' '}
          <Anchor color="white" href={urls.privacyUS}>
            Privacy Policy
          </Anchor>
        </div>
      </div>
    </div>
    <style jsx>{`
      .footer {
        padding: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color: ${colors.grey};
      }

      .footer__item {
        margin: 8px 0;
        text-align: center;
        color: ${colors.white};
      }

      .footer__item--contact {
        font-family: ${fontStacks.feature};
        font-size: 16px;
        font-weight: 800;
        line-height: 1.5;
      }

      .footer__item--company {
        font-size: 14px;
        line-height: 1.5;
        padding-top: 2px;
      }

      .footer__item--info {
        font-family: ${fontStacks.feature};
        font-size: 16px;
        font-weight: 800;
        line-height: 1.5;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .footer {
          flex-direction: row;
          min-height: 80px;
          flex-wrap: wrap;
          padding: 16px ${pagePadding.tablet - 8}px;
        }

        .footer__item {
          margin: 0 8px;
        }
      }

      @media (min-width: ${breakPoints.large}px) {
        .footer {
          min-height: 144px;
          padding: 0 120px;
        }
      }
    `}</style>
  </>
);
