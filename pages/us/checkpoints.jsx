// @flow
import React from 'react';
import Head from 'next/head';

import Page from 'components/Page';
import { Hero } from 'panels/Checkpoints/us';
import { colors, fontStacks } from 'utils/themeWaypoints';
import { urlBuilders } from 'utils/urls';

const Waypoints = () => (
  <>
    <Head>
      <link
        rel="stylesheet"
        type="text/css"
        href={`${urlBuilders.cssUrl('waypoints-fonts.css')}`}
      />
    </Head>
    <Page
      title="Checkpoints"
      description="A new way to continuously assess students"
      useDefaultFont={false}
    >
      <div className="page">
        <div className="page__content">
          <Hero />
        </div>
      </div>
    </Page>
    <style global jsx>
      {`
        body {
          font-family: ${fontStacks.default}, 'Helvetica Neue', Helvetica,
            sans-serif;
        }
        svg {
          flex-shrink: 0;
        }
      `}
    </style>
    <style jsx>{`
      .page {
        display: flex;
        min-height: 100vh;
        background-color: ${colors.white};
        overflow: hidden;
      }

      .page__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        flex-grow: 1;
      }
    `}</style>
  </>
);

export default Waypoints;
