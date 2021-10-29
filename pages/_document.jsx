// @flow

import React, { Fragment } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
// eslint-disable-next-line import/no-extraneous-dependencies
import flush from 'styled-jsx/server';

import {
  GA_TRACKING_ID,
  GA_TRACKING_ID_UNI,
  INTERCOM_APP_ID,
} from 'utils/config';
import { urlBuilders } from 'utils/urls';
import { colors } from 'utils/theme';

const Favicons = () => (
  <Fragment>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href={urlBuilders.faviconUrl('apple-touch-icon.png')}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href={urlBuilders.faviconUrl('android-chrome-192x192.png')}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={urlBuilders.faviconUrl('favicon-32x32.png')}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={urlBuilders.faviconUrl('favicon-16x16.png')}
    />
    <link rel="manifest" href={urlBuilders.faviconUrl('site.webmanifest')} />
    <link
      rel="mask-icon"
      href={urlBuilders.faviconUrl('safari-pinned-tab.svg')}
      color={colors.mountainMeadow}
    />
    <meta name="msapplication-TileColor" content={colors.astronaut} />
    <meta name="theme-color" content={colors.white} />
  </Fragment>
);

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }: any) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <Html lang="en" prefix="og: http://ogp.me/ns#">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="format-detection" content="telephone=no" />
          <Favicons />
          {/* Google Analytics */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
              ga('create', '${GA_TRACKING_ID}', 'auto');
              ga('create', '${GA_TRACKING_ID_UNI}', 'auto', 'universal');
              ga('send', 'pageview');
              ga('universal.send', 'pageview');
              `,
            }}
          />
          <script async src="https://www.google-analytics.com/analytics.js" />
          {/* Intercom */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.intercomSettings = { app_id: '${
              INTERCOM_APP_ID
            }', hide_default_launcher: true };
            (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${
              INTERCOM_APP_ID
            }';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}} })()
            `,
            }}
          />
        </Head>
        <body className="custom_class">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
