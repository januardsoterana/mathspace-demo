// @flow

import React, { Fragment } from 'react';
import Link from 'next/link';

import Page from 'components/Page';
import Button from 'components/Button';

import {
  breakPoints,
  colors,
  desktopFontSizes,
  fontWeights,
  lineHeights,
  mobileFontSizes,
} from 'utils/theme';
import { urlBuilders, urls } from 'utils/urls';
import Error from './_error';

const PAGE_SIDE_PADDING = 24;
const PAGE_TOP_BOTTOM_PADDING = 24;

type Props = { statusCode: number };
type State = {};

export default class Maintenance extends React.Component<Props, State> {
  static getInitialProps({ res, err }: Object) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    if (this.props.statusCode === 200) {
      return <Error statusCode={404} />;
    }
    return (
      <Fragment>
        <Page>
          <div className="maintenanceContainer">
            <div className="maintenanceImageWrapper">
              <img
                className="image"
                src={urlBuilders.imageUrl('common/maintenance-hero.svg')}
                alt=""
              />
            </div>
            <div className="maintenanceTextWrapper">
              <div className="title">
                We&#39;re performing scheduled maintenance today.
              </div>
              <div className="description">
                We expect Mathspace to be unavailable from 9:00am till 12:00pm
                AEDT. During this time you will not be able to work on tasks or
                browse content in the eBook.
              </div>
              <div className="buttonWrapper">
                <Link href={urls.mathspaceStatus} passHref>
                  <Button isFilled isBlock color="mountainMeadow">
                    Check status page
                  </Button>
                </Link>
              </div>
              <div className="buttonWrapper">
                <Button
                  isBlock
                  hasBorder
                  color="mountainMeadow"
                  href={urls.login}
                >
                  Reload this page
                </Button>
              </div>
            </div>
          </div>
        </Page>
        <style jsx>{`
          .maintenanceContainer {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            padding: ${PAGE_TOP_BOTTOM_PADDING}px ${PAGE_SIDE_PADDING}px;
            align-items: center;
            justify-content: center;
            background-color: ${colors.athensGray};
          }
          .maintenanceImageWrapper {
            max-width: 547px;
            max-height: 313px;
            line-height: 0;
          }
          .image {
            width: 100%;
          }
          .maintenanceTextWrapper {
            max-width: 600px;
            line-height: ${lineHeights.h1};
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: ${colors.cloudBurst};
          }
          .title {
            margin-bottom: 10px;
            font-size: ${desktopFontSizes.h2}px;
            font-weight: ${fontWeights.semibold};
          }
          .description {
            color: ${colors.grayChateau};
            margin-top: 20px;
            margin-bottom: 30px;
            font-size: ${desktopFontSizes.body}px;
          }
          .buttonWrapper {
            margin-bottom: 20px;
            max-width: 320px;
            width: 100%;
          }
          @media (max-width: ${breakPoints.medium}px) {
            .maintenanceContainer {
              padding: ${PAGE_SIDE_PADDING}px;
            }
            .title {
              font-size: ${mobileFontSizes.h2}px;
              font-weight: ${fontWeights.semibold};
            }
            .description {
              font-size: ${mobileFontSizes.body}px;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}
