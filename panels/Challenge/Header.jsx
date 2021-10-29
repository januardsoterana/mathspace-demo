// @flow

import React, { Fragment } from 'react';
import Link from 'next/link';

import Anchor from 'components/Anchor';
import { urlBuilders, urls } from 'utils/urls';
import { colors } from 'utils/theme';

const Header = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <Link href={urls.homepageUS} passHref>
          <Anchor>
            <div className="imageWrapper">
              <img
                className="image"
                src={urlBuilders.imageUrl(
                  'common/Mathspace-logo-flat-reversed.svg',
                )}
                alt="Mathspace"
              />
            </div>
          </Anchor>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 15px 24px;
        background-color: ${colors.cloudBurst};
      }
      .wrapper {
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        align-items: center;
      }
      .imageWrapper {
        width: 170px;
        display: flex;
      }
      .image {
        width: 100%;
      }
    `}</style>
  </Fragment>
);

export default Header;
