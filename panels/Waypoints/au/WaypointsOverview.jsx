// @flow
import React from 'react';

import { PanelTitle } from 'components/Waypoints/PanelTitle';
import { breakPoints, colors, fontStacks } from 'utils/themeWaypoints';
import { urlBuilders } from 'utils/urls';
import Separator from 'components/Separator';

const FEATURE_SEPARATOR = 60;
const IMAGE_SEPARATOR = 60;

const WaypointsOverview = () => (
  <>
    <div className="intro">
      <PanelTitle>What is Waypoints?</PanelTitle>
      <Separator size={32} />
      <div className="description">
        Standardised tests have long been disconnected from student learning.
        Students are left anxious and frustrated while teachers are left without
        timely, meaningful data to inform instruction.
      </div>
      <Separator size={24} />
      <div className="description">
        So we’ve built Waypoints. It’s a web application that utilises smart
        AI-powered diagnostics to track student gaps and growth. Simple,
        unobtrusive and intelligent - you get the data you need on student
        performance, without needing to take time out of class.
      </div>
    </div>
    <Separator size={72} />
    <PanelTitle>What makes Waypoints unique?</PanelTitle>
    <Separator size={32} />
    <div className="feature__list">
      <div className="feature">
        <div className="feature__overview">
          <div className="feature__overview__title">
            Identify knowledge gaps
          </div>
          <Separator size={24} />
          <div className="feature__overview__description">
            Teachers can identify individual student and whole-class knowledge
            gaps across curriculum outcomes, and make informed decisions to
            personalise learning pathways.
          </div>
        </div>
        <Separator size={IMAGE_SEPARATOR} />
        <div className="feature__visual feature__visual--outcomes-report">
          <img
            className="feature__visual__image"
            src={urlBuilders.imageUrl('waypoints/au-outcomes-report.png')}
            alt="Outcomes Report"
          />
        </div>
      </div>
      <Separator size={FEATURE_SEPARATOR} />
      <div className="feature">
        <div className="feature__visual feature__visual--growth-report">
          <img
            className="feature__visual__image"
            src={urlBuilders.imageUrl('waypoints/au-growth-report.png')}
            alt="Growth Report"
          />
        </div>
        <div className="feature__overview feature__overview--growth-report">
          <div className="feature__overview__title">Track Growth</div>
          <Separator size={24} />
          <div className="feature__overview__description">
            When students first start with Waypoints, we identify their grade
            level. After this initial assessment, students complete weekly
            check-ins and teachers gain access to continuous growth tracking
            across the complete Australian Curriculum.
          </div>
        </div>
      </div>
      <Separator size={FEATURE_SEPARATOR} />
      <div className="feature">
        <div className="feature__overview">
          <div className="feature__overview__title">
            Data you can trust, powered by the latest AI technology
          </div>
          <Separator size={24} />
          <div className="feature__overview__description">
            The key to efficiency and accuracy is our world class adaptive
            engine, which allows us to understand a student’s total knowledge
            state with only a small sample of questions.
          </div>
        </div>
        <Separator size={IMAGE_SEPARATOR} />
        <div className="feature__visual feature__visual--outcomes-report">
          <img
            src={urlBuilders.imageUrl('waypoints/knowledge-graph.svg')}
            alt="Knowledge Graph"
          />
        </div>
      </div>
    </div>
    <style jsx>{`
      .intro {
        max-width: 900px;
      }

      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .title {
        font-family: ${fontStacks.feature};
        font-size: 22px;
        font-weight: 800;
        line-height: 1;
        color: ${colors.grey};
        text-align: center;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .title {
          font-size: 28px;
        }
      }

      .description {
        font-size: 16px;
        line-height: 1.5;
        color: ${colors.grey};
        text-align: center;
      }

      .feature__list {
        margin-bottom: 74px;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .feature__list {
          margin-bottom: 120px;
        }
      }

      .feature {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
      }

      .feature__overview {
        max-width: 550px;
      }

      .feature__overview__title {
        font-family: ${fontStacks.feature};
        font-size: 16px;
        font-weight: 800;
        line-height: 1.25;
        color: ${colors.grey};
        text-align: center;
      }

      .feature__overview__description {
        font-size: 14px;
        line-height: 1.5;
        color: ${colors.grey};
        text-align: center;
      }

      .feature__visual {
        width: 100%;
        max-width: 650px;
      }

      .feature__visual__image {
        width: 100%;
      }

      .feature__overview--growth-report {
        order: 1;
      }

      .feature__visual--growth-report {
        margin-top: ${IMAGE_SEPARATOR}px;
        margin-right: 0;
        order: 2;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .feature {
          flex-direction: row;
        }

        .feature__overview {
          max-width: 360px;
        }

        .feature__overview__title {
          text-align: left;
        }

        .feature__overview__description {
          text-align: left;
        }

        .feature__visual--growth-report {
          margin-top: 0;
          margin-right: ${IMAGE_SEPARATOR}px;
          order: 1;
        }

        .feature__overview--growth-report {
          order: 2;
        }
      }
    `}</style>
  </>
);

export { WaypointsOverview };
