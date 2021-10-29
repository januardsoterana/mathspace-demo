// @flow
import React from 'react';

import { PanelTitle } from 'components/Waypoints/PanelTitle';
import {
  breakPoints,
  colors,
  fontStacks,
  maxWidth,
} from 'utils/themeWaypoints';
import { urlBuilders } from 'utils/urls';
import Separator from 'components/Separator';

const IMAGE_SIZE = 125;

const Team = () => (
  <>
    <div className="panel">
      <PanelTitle>
        Built by the team behind the leading math platform, Mathspace
      </PanelTitle>
      <div className="profiles">
        <div className="profile profile--mo">
          <div className="profile__picture">
            <img
              src={urlBuilders.imageUrl('waypoints/profile-squiggly-1.svg')}
              alt="Background pattern"
              className="profile__picture__background-pattern profile__picture__background-pattern--mo"
            />
            <img
              src={urlBuilders.imageUrl('waypoints/profile-mo.jpg')}
              alt="Background pattern"
              className="profile__picture__image"
            />
          </div>
          <Separator size={28} />
          <div>
            <div className="profile__title">Mohamad Jebara</div>
            <div className="profile__title">CEO</div>
            <Separator size={20} />
            <div className="profile__description">
              More data is not what teachers need. Ed-tech is filled with
              applications that are data rich but information poor. With
              Waypoints the AI does the heavy lifting, wading through the data,
              leaving only the insights.
            </div>
          </div>
        </div>
        <Separator size={85} />
        <div className="profile profile--paulina">
          <div className="profile__picture">
            <img
              src={urlBuilders.imageUrl('waypoints/profile-squiggly-2.svg')}
              alt="Background pattern"
              className="profile__picture__background-pattern profile__picture__background-pattern--paulina"
            />
            <img
              src={urlBuilders.imageUrl('waypoints/profile-paulina.jpg')}
              alt="Background pattern"
              className="profile__picture__image"
            />
          </div>
          <Separator size={28} />
          <div>
            <div className="profile__title">Paulina Morrison Fell</div>
            <div className="profile__title">Product Manager</div>
            <Separator size={20} />
            <div className="profile__description">
              One thing we’ve learnt over the years is that trying anything new
              in the classroom is a challenge. We made sure Waypoints would be
              intuitive for any student to pick up and start.
            </div>
          </div>
        </div>
        <Separator size={85} />
        <div className="profile profile--alvin">
          <div className="profile__picture">
            <img
              src={urlBuilders.imageUrl('waypoints/profile-squiggly-3.svg')}
              alt="Background pattern"
              className="profile__picture__background-pattern profile__picture__background-pattern--alvin"
            />
            <img
              src={urlBuilders.imageUrl('waypoints/profile-alvin.jpg')}
              alt="Background pattern"
              className="profile__picture__image"
            />
          </div>
          <Separator size={28} />
          <div>
            <div className="profile__title">Alvin Savoy</div>
            <div className="profile__title">CTO</div>
            <Separator size={20} />
            <div className="profile__description">
              In the 10 years I’ve been involved in ed-tech, this is one of the
              most exciting applications of machine learning I’ve seen in
              education.
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .panel {
        position: relative;
        width: 100%;
        z-index: 1;
        margin-bottom: 74px;
      }

      .panel__title {
        font-size: 28px;
        font-weight: 800;
        line-height: 1;
        color: ${colors.grey};
        text-align: center;
      }

      .profiles {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
      }

      .profile {
        margin-top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .profile--mo {
        margin-top: 60px;
      }

      .profile__title {
        font-family: ${fontStacks.feature};
        font-size: 16px;
        font-weight: 800;
        color: ${colors.grey};
        line-height: 1.25;
      }

      .profile__description {
        max-width: 400px;
        font-size: 14px;
        color: ${colors.grey};
        line-height: 1.5;
      }

      .profile__picture {
        position: relative;
        height: ${IMAGE_SIZE}px;
        width: ${IMAGE_SIZE}px;
      }

      .profile__picture__background-pattern {
        position: absolute;
      }

      .profile__picture__background-pattern--mo {
        top: 30px;
        left: -20px;
      }

      .profile__picture__background-pattern--paulina {
        top: -10px;
        left: -10px;
      }

      .profile__picture__background-pattern--alvin {
        top: 40px;
        right: -25px;
      }

      .profile__picture__image {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: ${IMAGE_SIZE / 2}px;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .panel {
          margin-bottom: 120px;
        }

        .profiles {
          flex-direction: row;
          justify-content: center;
          align-items: flex-start;
          margin: 0 auto;
          max-width: ${maxWidth}px;
        }

        .profile {
          align-items: flex-start;
          text-align: left;
          flex-basis: 33%;
        }

        .profile__description {
          max-width: 250px;
        }

        .profile--mo {
          margin-top: 240px;
        }

        .profile--paulina {
          margin-top: 140px;
        }

        .profile--alvin {
          margin-top: 40px;
        }
      }
    `}</style>
  </>
);

export { Team };
