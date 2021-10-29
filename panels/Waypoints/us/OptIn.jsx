// @flow
import React from 'react';

import { PanelTitle } from 'components/Waypoints/PanelTitle';
import TypeformModal from 'components/TypeformModal';
import Button from 'components/Waypoints/Button';
import sendCTAClickEvent from 'utils/analytics';
import {
  breakPoints,
  colors,
  fontStacks,
  maxWidth,
} from 'utils/themeWaypoints';
import { urlBuilders } from 'utils/urls';
import Separator from 'components/Separator';

const OptIn = () => {
  const [showTypeform, setShowTypeform] = React.useState(false);
  return (
    <>
      <div className="panel">
        <PanelTitle>
          Be one of the first nationally to experience Waypoints
        </PanelTitle>
        <Separator size={24} />
        <div className="panel__description">
          Don’t miss the chance to be among the first classrooms in the nation
          to experience Waypoints before its officially launched!
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
          <span>Get free early access</span>
        </Button>
        <div className="panel__background-pattern panel__background-pattern--right">
          <img
            src={urlBuilders.imageUrl('waypoints/opt-in-pattern-right.svg')}
            alt="Background pattern"
          />
        </div>
        <div className="panel__background-pattern panel__background-pattern--left">
          <img
            src={urlBuilders.imageUrl('waypoints/opt-in-pattern-left.svg')}
            alt="Background pattern"
          />
        </div>
      </div>
      {showTypeform && (
        <TypeformModal
          typeFormId="dhkSx894"
          onClose={() => setShowTypeform(false)}
        />
      )}
      <style jsx>{`
        .panel {
          position: relative;
          padding: 48px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: ${colors.pine10};
          border-radius: 8px;
          max-width: ${maxWidth}px;
          margin-bottom: 74px;
        }

        .panel__title {
          fontfamily: ${fontStacks.feature};
          font-size: 28px;
          font-weight: 800;
          line-height: 1;
          color: ${colors.grey};
          text-align: center;
        }

        .panel__description {
          max-width: 650px;
          font-size: 16px;
          line-height: 1.375;
          color: ${colors.grey};
          text-align: center;
        }

        .panel__background-pattern {
          width: 100%;
        }

        .panel__background-pattern--right {
          display: none;
        }

        .panel__background-pattern--left {
          display: none;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .panel {
            margin-bottom: 120px;
            padding: 48px 120px;
          }

          .panel__description {
            font-size: 20px;
          }

          .panel__background-pattern--right {
            display: block;
            position: absolute;
            bottom: 0;
            right: 0;
            max-width: 153px;
            max-height: 288px;
          }

          .panel__background-pattern--left {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            max-width: 105px;
            max-height: 288px;
          }
        }
      `}</style>
    </>
  );
};

export { OptIn };
