// @flow
import React from 'react';

import Separator from 'components/Separator';
import Button from 'components/Waypoints/Button';
import {
  breakPoints,
  colors,
  fontStacks,
  pagePadding,
} from 'utils/themeWaypoints';
import { urls, urlBuilders } from 'utils/urls';

const Hero = () => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      window.location.assign(urls.waypointsAU);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="hero__content">
        <img
          src={urlBuilders.imageUrl('waypoints/waypoints-logo.svg')}
          className="hero__logo"
          alt="Waypoints Logo"
        />
        <Separator size={40} />
        <div className="hero__title">Checkpoints is now Waypoints!</div>
        <Separator size={24} />
        <div className="hero__description">
          Don't forget to bookmark our new site! <br />
          If you're not redirected in 5 seconds, click below to go to Waypoints
          now.
        </div>
        <Separator size={32} />
        <Button
          color="grey"
          isCTA
          isFilled
          size="large"
          href={urls.waypointsAU}
        >
          Go to Waypoints
        </Button>
      </div>
      <div className="hero__visual">
        <img
          className="hero__visual__image"
          src={urlBuilders.imageUrl('checkpoints/hero.png')}
          alt="Waypoints Hero"
        />
      </div>
      <style jsx>{`
        .hero__content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          max-width: 700px;
          text-align: center;
          padding: ${pagePadding.mobile}px ${pagePadding.mobile}px 0;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .hero__content {
            padding: ${pagePadding.tablet}px ${pagePadding.tablet}px 0;
          }
        }

        @media (min-width: ${breakPoints.large}px) {
          .hero__content {
            padding: ${pagePadding.desktop}px ${pagePadding.desktop}px 0;
          }
        }

        .hero__logo {
          max-width: 40%;
        }

        .hero__title {
          font-family: ${fontStacks.feature};
          font-size: 28px;
          font-weight: 800;
          line-height: 1;
          color: ${colors.grey};
        }

        .hero__description {
          font-size: 16px;
          line-height: 1.375;
          color: ${colors.grey};
        }

        .hero__visual {
          height: 0;
          overflow: hidden;
          position: relative;
          padding-bottom: 41.5%;
          width: 100%;
        }

        .hero__visual__image {
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }

        @media (min-width: ${breakPoints.extraLarge}px) {
          .hero__visual {
            height: auto;
            padding-bottom: 0;
            max-width: 1280px;
          }

          .hero__visual__image {
            position: static;
            width: 100%;
          }
        }

        @media (min-width: ${breakPoints.medium}px) {
          .hero__title {
            font-size: 36px;
          }
        }

        @media (min-width: ${breakPoints.large}px) {
          .hero__title {
            font-size: 56px;
          }

          .hero__description {
            font-size: 20px;
          }
        }
      `}</style>
    </>
  );
};

export { Hero };
