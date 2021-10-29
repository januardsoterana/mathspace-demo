// @flow
import React from 'react';

import TypeformModal from 'components/TypeformModal';
import Button from 'components/Waypoints/Button';
import sendCTAClickEvent from 'utils/analytics';
import { breakPoints, colors, fontStacks } from 'utils/themeWaypoints';
import { urlBuilders } from 'utils/urls';
import Separator from 'components/Separator';

const Hero = () => {
  const [showTypeform, setShowTypeform] = React.useState(false);
  return (
    <>
      <div className="hero__content">
        <img
          src={urlBuilders.imageUrl('waypoints/waypoints-logo.svg')}
          className="hero__logo"
          alt="Waypoints Logo"
        />
        <Separator size={40} />
        <div className="hero__title">
          A new way to continuously assess students
        </div>
        <Separator size={24} />
        <div className="hero__description">
          Track student progress and growth in less than 10 minutes a week!
        </div>
        <Separator size={32} />
        <Button
          isCTA
          isFilled
          size="large"
          onClick={() => {
            sendCTAClickEvent('hero-get-early-access');
            setShowTypeform(true);
          }}
        >
          Get free early access
        </Button>
      </div>
      <div className="hero__visual">
        <img
          className="hero__visual__image"
          src={urlBuilders.imageUrl('waypoints/us-hero-visual.png')}
          alt="Waypoints Hero"
        />
      </div>
      {showTypeform && (
        <TypeformModal
          typeFormId="dhkSx894"
          onClose={() => setShowTypeform(false)}
        />
      )}
      <style jsx>{`
        .hero__content {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 700px;
          text-align: center;
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
          margin-top: 40px;
          margin-bottom: 68px;
          width: 100%;
          max-width: 1020px;
        }

        .hero__visual__image {
          width: 100%;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .hero__title {
            font-size: 36px;
          }

          .hero__visual {
            margin-top: 16px;
            margin-bottom: 100px;
          }
        }

        @media (min-width: ${breakPoints.large}px) {
          .hero__title {
            font-size: 56px;
          }

          .hero__description {
            font-size: 20px;
          }

          .hero__visual {
            margin-top: -16px;
          }
        }
      `}</style>
    </>
  );
};

export { Hero };
