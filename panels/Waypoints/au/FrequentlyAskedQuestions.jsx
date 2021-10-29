// @flow
import React from 'react';

import { PanelTitle } from 'components/Waypoints/PanelTitle';
import Separator from 'components/Separator';
import { urlBuilders } from 'utils/urls';
import { breakPoints, colors, pagePadding } from 'utils/themeWaypoints';

import Accordion from '../Accordion';

export const FrequentlyAskedQuestions = () => (
  <>
    <div className="panel">
      <PanelTitle>Frequently Asked Questions</PanelTitle>
      <Separator size={48} />
      <div className="panel__content">
        <Accordion title="How does it work?">
          <div className="accordion__content">
            We have mapped all of the standard outcomes into a knowledge graph
            with pre-requisites, and have created diagnostic questions for each
            outcome. Using an adaptive IRT algorithm powered with Machine
            Learning, we select the best outcomes to assess at each check-in
            based on the information we have for that student.
          </div>
        </Accordion>
        <Separator size={28} />
        <Accordion title="Why should I trust the results?">
          <div className="accordion__content">
            We’ve spent the last 12 months refining the models for a reasonably
            accurate diagnostic assessment from a cold start. But with machine
            learning, the more data we have the smarter the models get. We’ve
            been running trials with schools since mid-2020 and further tuning
            the algorithms based on their feedback. This pre-release will result
            in finer tuning as we gather more data and insights from early
            users.
          </div>
        </Accordion>
        <Separator size={28} />
        <Accordion title="How much does it cost?">
          <div className="accordion__content">
            RRP for students in 2021 is $10 per student, however we are offering
            special launch pricing for any school that commits to purchasing
            Waypoints next year. Minimum order size is 100 students. The cut off
            for this special offer is 1&nbsp;December 2020.
          </div>
        </Accordion>
      </div>

      <div className="panel__background-pattern">
        <img
          src={urlBuilders.imageUrl('waypoints/faq-background-pattern.svg')}
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
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 74px;
      }

      .panel__content {
        max-width: 750px;
      }

      .panel__title {
        font-size: 28px;
        line-height: 1;
        font-weight: 800;
        color: ${colors.grey};
        text-align: center;
      }

      .panel__background-pattern {
        position: absolute;
        right: -20%;
        bottom: -575px; /* Conforming with the existing implementation */
        z-index: -1;
        margin-right: -${pagePadding.mobile}px;
        width: 575px;
      }

      .panel__background-pattern__image {
        max-width: 575px;
        max-height: 614px;
      }

      .accordion__content {
        color: ${colors.grey};
        font-size: 14px;
        line-height: 1.5;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .panel {
          margin-bottom: 100px;
        }

        .panel__background-pattern {
          right: 0;
          margin-right: -${pagePadding.desktop}px;
        }
      }
    `}</style>
  </>
);
