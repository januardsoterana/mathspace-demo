// @flow
import React from 'react';

import { PanelTitle } from 'components/Waypoints/PanelTitle';
import { urlBuilders } from 'utils/urls';
import Separator from 'components/Separator';
import {
  breakPoints,
  colors,
  fontStacks,
  maxWidth,
  pagePadding,
} from 'utils/themeWaypoints';

const Testimonials = () => (
  <>
    <div className="panel">
      <PanelTitle>What do teachers say?</PanelTitle>
      <Separator size={52} />
      <div className="panel__cards">
        <div className="panel__card">
          <div className="panel__card__testimonial">
            Starting a lesson with Waypoints freed up my time to prep for the
            lesson itself. Many students also started using the outcome codes to
            actually go to Mathspace and practice skills for their gaps, all on
            their own!
          </div>
          <Separator size={24} grow />
          <div className="panel__card__info__teacher">Jennifer Missen</div>
          <div className="panel__card__apostrophe panel__card__apostrophe--top">
            <img
              src={urlBuilders.imageUrl('waypoints/apostrophe.svg')}
              alt="Apostrophe"
            />
          </div>
          <div className="panel__card__apostrophe panel__card__apostrophe--bottom">
            <img
              src={urlBuilders.imageUrl('waypoints/apostrophe.svg')}
              alt="Apostrophe"
            />
          </div>
        </div>
        <Separator size={28} />
        <div className="panel__card">
          <div className="panel__card__testimonial">
            I’ve found Waypoints to be great for identifying areas that students
            need additional work on. I have been able to use this to plan
            activities over the last couple of weeks. I have had students
            working through their check-ins aiming to improve their results
            which has been a great talking point. Overall, I have found that
            most students are engaging well in the program, with some even
            striving to improve and using their own initiative to complete
            Mathspace tasks for the skills they are struggling with.
          </div>
          <Separator size={24} grow />
          <div className="panel__card__info__teacher">Rebecca King</div>
          <div className="panel__card__apostrophe panel__card__apostrophe--top">
            <img
              src={urlBuilders.imageUrl('waypoints/apostrophe.svg')}
              alt="Apostrophe"
            />
          </div>
          <div className="panel__card__apostrophe panel__card__apostrophe--bottom">
            <img
              src={urlBuilders.imageUrl('waypoints/apostrophe.svg')}
              alt="Apostrophe"
            />
          </div>
        </div>
      </div>
      <div className="panel__background-pattern">
        <img
          src={urlBuilders.imageUrl(
            'waypoints/testimonials-background-pattern.svg',
          )}
          alt="Testimonials background pattern"
          className="panel__background-pattern__image"
        />
      </div>
    </div>
    <style jsx>{`
      .panel {
        position: relative;
        z-index: 1;
        width: 100%;
        margin-bottom: 90px;
      }

      .panel__title {
        font-size: 28px;
        font-weight: 800;
        line-height: 1;
        color: ${colors.grey};
        text-align: center;
      }

      .panel__cards {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        max-width: ${maxWidth}px;
      }

      .panel__card {
        position: relative;
        padding: 52px 48px 40px;
        max-width: 455px;
        box-sizing: border-box;
        box-shadow: 0px 4px 38px 0px ${colors.grey10};
        background-color: ${colors.almond50};
        border-radius: 8px;
        display: flex;
        flex-basis: 50%;
        flex-direction: column;
        transition: transform ease 0.25s;
      }

      .panel__card:hover {
        transform: scale(1.05);
      }

      .panel__card__apostrophe {
        position: absolute;
        width: 100%;
        max-width: 30px;
      }

      .panel__card__apostrophe--top {
        left: 20px;
        top: -10px;
      }

      .panel__card__apostrophe--bottom {
        right: 20px;
        bottom: -15px;
      }

      .panel__card__testimonial {
        font-size: 14px;
        line-height: 1.5;
        color: ${colors.grey};
      }

      .panel__card__info__teacher {
        font-family: ${fontStacks.feature};
        font-size: 16px;
        font-weight: 800;
        color: ${colors.grey};
        line-height: 1.25;
      }

      .panel__background-pattern {
        position: absolute;
        left: -10%;
        top: 45%;
        margin-left: -${pagePadding.mobile}px;
        width: 100%;
        z-index: -1;
      }

      .panel__background-pattern__image {
        max-width: 575px;
        max-height: 614px;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .panel {
          margin-bottom: 150px;
        }

        .panel__cards {
          flex-direction: row;
          align-items: stretch;
        }

        .panel__card {
          min-height: 420px;
        }

        .panel__background-pattern {
          left: -10%;
          top: 55%;
          margin-left: -${pagePadding.desktop}px;
        }
      }
    `}</style>
  </>
);

export { Testimonials };
