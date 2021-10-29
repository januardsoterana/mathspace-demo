// @flow

import React, { Fragment, type Node } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { NextSeo } from 'next-seo';

import { urlBuilders } from 'utils/urls';
import { fontStacks } from 'utils/theme';

Router.onRouteChangeComplete = url => {
  if (window.ga) {
    window.ga('set', 'page', url);
    window.ga('send', 'pageview');
  }
};

type Props = {|
  children: Node,
  description?: string,
  title?: string,
  useDefaultFont?: boolean,
|};

const GlobalFontStyles = () => (
  <style global jsx>{`
      body {
        font-family: ${fontStacks.default};
      }

      @font-face {
        font-family: 'proxima-nova';
        src: url('${urlBuilders.fontUrl(
          'ProximaNova/proximanova-bold-webfont.woff2',
        )}') format('woff2'),
          url('${urlBuilders.fontUrl(
            'ProximaNova/proximanova-bold-webfont.woff',
          )}') format('woff');
        font-weight: bold;
        font-style: normal;
      }

      @font-face {
        font-family: 'proxima-nova';
        src: url('${urlBuilders.fontUrl(
          'ProximaNova/proximanova-bold-webfont.woff2',
        )}') format('woff2'),
          url('${urlBuilders.fontUrl(
            'ProximaNova/proximanova-bold-webfont.woff',
          )}') format('woff');
        font-weight: 700;
        font-style: normal;
      }

      @font-face {
        font-family: 'proxima-nova';
        src: url('${urlBuilders.fontUrl(
          'ProximaNova/proximanova-light-webfont.woff2',
        )}')
            format('woff2'),
          url('${urlBuilders.fontUrl(
            'ProximaNova/proximanova-light-webfont.woff',
          )}') format('woff');
        font-weight: light;
        font-style: normal;
      }

      @font-face {
        font-family: 'proxima-nova';
        src: url('${urlBuilders.fontUrl(
          'ProximaNova/proximanova-light-webfont.woff2',
        )}')
            format('woff2'),
          url('${urlBuilders.fontUrl(
            'ProximaNova/proximanova-light-webfont.woff',
          )}') format('woff');
        font-weight: 300;
        font-style: normal;
      }

      @font-face {
        font-family: 'proxima-nova';
        src: url('${urlBuilders.fontUrl(
          'ProximaNova/proximanova-regular-webfont.woff2',
        )}')
            format('woff2'),
          url('${urlBuilders.fontUrl(
            'ProximaNova/proximanova-regular-webfont.woff',
          )}') format('woff');
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: 'proxima-nova';
        src: url('${urlBuilders.fontUrl(
          'ProximaNova/proximanova-regular-webfont.woff2',
        )}')
            format('woff2'),
          url('${urlBuilders.fontUrl(
            'ProximaNova/proximanova-regular-webfont.woff',
          )}') format('woff');
        font-weight: 400;
        font-style: normal;
      }

      @font-face {
        font-family: 'proxima-nova';
        src: url('${urlBuilders.fontUrl(
          'ProximaNova/proximanova-regularit-webfont.woff2',
        )}')
            format('woff2'),
          url('${urlBuilders.fontUrl(
            'ProximaNova/proximanova-regularit-webfont.woff',
          )}') format('woff');
        font-weight: normal;
        font-style: italic;
      }

      @font-face {
        font-family: 'proxima-nova';
        src: url('${urlBuilders.fontUrl(
          'ProximaNova/proximanova-regularit-webfont.woff2',
        )}')
            format('woff2'),
          url('${urlBuilders.fontUrl(
            'ProximaNova/proximanova-regularit-webfont.woff',
          )}') format('woff');
        font-weight: 400;
        font-style: italic;
      }

      @font-face {
        font-family: 'proxima-nova';
        src: url('${urlBuilders.fontUrl(
          'ProximaNova/proximanova-semibold-webfont.woff',
        )}')
            format('woff2'),
          url('${urlBuilders.fontUrl(
            'ProximaNova/proximanova-semibold-webfont.woff',
          )}') format('woff');
        font-weight: 600;
        font-style: normal;
      }

      @font-face {
        font-family: 'proxima-nova';
        src: url('${urlBuilders.fontUrl(
          'ProximaNova/proximanova-semibold-webfont.woff2',
        )}')
            format('woff2'),
          url('${urlBuilders.fontUrl(
            'ProximaNova/proximanova-semibold-webfont.woff2',
          )}') format('woff');
        font-weight: 600;
        font-style: normal;
      }
    `}</style>
);

const Page = ({
  children,
  description = '',
  title = 'Mathspace',
  useDefaultFont = true,
}: Props) => (
  <Fragment>
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        type: 'website',
        title: 'Mathspace',
        description,
        locale: 'en_AU',
        url: 'https://http://mathspace.co/',
        site_name: 'Mathspace',
        images: [
          {
            url: `https://mathspace.co${urlBuilders.imageUrl(
              'common/mathspace-devices-preview.png',
            )}`,
            alt: 'Mathspace Devices',
          },
        ],
      }}
      twitter={{
        handle: '@mathspace',
        site: '@mathspace',
        cardType: 'summary',
      }}
    />
    <div className="pageWrapper">
      <Head>
        <meta
          name="ahrefs-site-verification"
          content="8322a39f87f3416c8a01b4d390f2023dd92d629301785b7f9251f662ba81ca8c"
        />
      </Head>
      {children}
      <style global jsx>{`
        body {
          margin: 0;
        }
      `}</style>
      {useDefaultFont && <GlobalFontStyles />}
    </div>
  </Fragment>
);

export default Page;
