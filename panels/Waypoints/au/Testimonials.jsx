// @flow
import React from 'react';

import {
  breakPoints,
  colors,
  fontStacks,
  maxWidth,
  pagePadding,
} from 'utils/themeWaypoints';
import { urlBuilders } from 'utils/urls';
import Separator from 'components/Separator';
import { PanelTitle } from 'components/Waypoints/PanelTitle';

const Testimonials = () => (
  <>
    <div className="panel">
      <PanelTitle>What do teachers say?</PanelTitle>
      <Separator size={52} />
      <div className="panel__cards">
        <div className="panel__card">
          <div className="panel__card__testimonial">
            Waypoints is accessible for all students. My students engaged with
            the straightforward manner of entering their solutions. Students
            found the information reflecting their growth motivating, helping
            them to target their efforts in their learning. As a teacher, the
            data from Waypoints allows me to quickly identify gaps in
            student&#39;s learning, gaps in our curriculum coverage across
            multiple classes, and strength areas that students have mastered and
            are ready to move on from.
          </div>
          <Separator size={24} grow />
          <div className="panel__card__info__teacher">Kylie Armstrong</div>
          <Separator size={4} />
          <div className="panel__card__info__teacher-detail">
            Teacher: Mathematics, Psychology, Peer Support
            <br />
            Wantirna College
          </div>
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
            Waypoints allows me as a teacher to find specific gaps that students
            have, and more importantly find gaps that groups of students have,
            so that I can address them in class, and see students be able to
            access higher levels of the curriculum due to having fewer gaps. On
            the other hand, it also allows me to have another piece of
            information that supports my understanding of the wide range of
            levels within a class, and thus support being able to plan a
            differentiated curriculum so students at different levels can reach
            what I work with them on.
          </div>
          <Separator size={24} grow />
          <div className="panel__card__info__teacher">
            Juan David Ospina León
          </div>
          <Separator size={4} />
          <div className="panel__card__info__teacher-detail">
            Director of Accountability and School Improvement
            <br />
            South Oakleigh College
          </div>
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

      .panel__card__info__teacher-detail {
        font-size: 14px;
        color: ${colors.grey90};
        line-height: 1.5;
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
