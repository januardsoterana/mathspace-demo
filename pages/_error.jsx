// @flow

import React, { Fragment } from 'react';
import Link from 'next/link';

import Page from 'components/Page';
import Button from 'components/Button';

import { colors, desktopFontSizes } from 'utils/theme';
import { urlBuilders, urls } from 'utils/urls';

type Props = { statusCode: number };
type State = {};

export default class Error extends React.Component<Props, State> {
  static getInitialProps({ res, err }: Object) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <Fragment>
        <Page>
          <div className="errorContainer">
            <div className="errorWrapper">
              <div className="errorImageWrapper">
                <img
                  className="image"
                  src={urlBuilders.imageUrl('common/not-found.svg')}
                  alt=""
                />
              </div>
              <div className="errorTextWrapper">
                <div className="title">Sorry...</div>
                <div className="description">
                  We&#39;ll find this page for you, as soon as we find the last
                  digit of π
                </div>
                <div className="errorCode">Error 404</div>
                <div className="errorCode">
                  We can&#39;t seem to find the page you are looking for.
                </div>
                <div className="buttonWrapper">
                  <Link href={urls.homeRedirect} passHref>
                    <Button isFilled isBlock color="chateauGreen">
                      Back to home
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Page>
        <style jsx>{`
          .errorContainer {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            align-items: center;
            justify-content: center;
            background-color: ${colors.athensGray};
          }
          .errorWrapper {
            display: flex;
          }
          .errorImageWrapper {
            width: 200px;
            line-height: 0;
          }
          .image {
            width: 100%;
          }
          .errorTextWrapper {
            margin-left: 60px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: ${colors.cloudBurst};
          }
          .title {
            margin-bottom: 10px;
            font-size: ${desktopFontSizes.h2}px;
          }
          .description {
            font-size: ${desktopFontSizes.h4}px;
            max-width: 400px;
            margin-bottom: 15px;
          }
          .errorCode {
            color: ${colors.grayChateau};
            margin-bottom: 5px;
            font-size: ${desktopFontSizes.subInfo}px;
          }
          .buttonWrapper {
            margin-top: 15px;
            max-width: 180px;
          }
        `}</style>
      </Fragment>
    );
  }
}
