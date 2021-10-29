// @flow

import React, { Fragment } from 'react';
import Head from 'next/head';

import Page from 'components/Page';
import { urlBuilders } from 'utils/urls';

const MenuPage = () => {
  return (
    <Fragment>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href={`${urlBuilders.cssUrl('waypoints-fonts.css')}`}
        />
      </Head>
      <Page
        title="Online Math Program | Mathspace"
        description="Looking for an online maths program that’s curriculum aligned, tracks student progress and frees you up to teach? Help students excel, book demo on 1300833194."
      >
        <div className="imageWrapper">
          <img
            className="heroImage"
            src={urlBuilders.imageUrl('homepage/menu-page-background.png')}
            alt=""
          />
        </div>
        <p className="gilroy-text">Example text using Gilroy font</p>
        <p className="proxima-nova-text">Example text using Proxima Nova font</p>
      </Page>
      <style jsx>{`
        .imageWrapper {
          margin: 0 auto;
          width: 1366px;
        }
        .heroImage {
          width: 1366px;
          height: 1274px;
        }
        .gilroy-text {
          font-family: Gilroy;
          font-weight: 800;
          font-size: 22px;
        }
        .proxima-nova-text {
          font-family: 'proxima-nova';
          font-size: 22px;
        }
      `}</style>
    </Fragment>
  );
};

export default MenuPage;
