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
        What comes to mind when you hear the words &#8220;test&#8221; and
        &#8220;assessment&#8221;? For a long time, students have been left
        feeling anxious and frustrated from tests, while teachers have been left
        without timely, meaningful data to inform their lesson plans.
      </div>
      <Separator size={24} />
      <div className="description">
        So, we’ve built Waypoints - the latest innovation in continuous
        assessment platforms. Utilizing adaptive, AI-powered diagnostics, it
        efficiently tracks student growth and identifies learning gaps, through
        casual, 10 minute, weekly check-ins. Simple, unobtrusive, and
        intelligent - teachers get the insights they need on student growth,
        without the stress of taking time out of class.
      </div>
      <Separator size={24} />
      <div className="description">
        Waypoints officially launches in March 2021. But, we’re offering a
        limited number of early access spots for schools to try it out for free
        in January. Are you interested in being among the first in the nation to
        try Waypoints in their classrooms? If so, register today!
      </div>
    </div>
    <Separator size={72} />
    <PanelTitle>What makes Waypoints unique?</PanelTitle>
    <Separator size={32} />
    <div className="feature__list">
      <div className="feature">
        <div className="feature__overview">
          <div className="feature__overview__title">
            The right insights, all year round
          </div>
          <Separator size={24} />
          <div className="feature__overview__description">
            Through detailed and easy-to-read reporting, teachers can access
            real-time insights identifying growth and knowledge-gaps at both the
            individual student and whole-class levels.
          </div>
        </div>
        <Separator size={IMAGE_SEPARATOR} />
        <div className="feature__visual">
          <img
            className="feature__visual__image"
            src={urlBuilders.imageUrl('waypoints/us-curriculum-report.png')}
            alt="Outcomes Report"
          />
        </div>
      </div>
      <Separator size={FEATURE_SEPARATOR} />
      <div className="feature">
        <div className="feature__visual feature__visual--skills-report">
          <img
            className="feature__visual__image"
            src={urlBuilders.imageUrl('waypoints/us-skills-report.png')}
            alt="Growth Report"
          />
        </div>
        <div className="feature__overview feature__overview--skills-report">
          <div className="feature__overview__title">
            Engage and encourage students to take charge of their learning
          </div>
          <Separator size={24} />
          <div className="feature__overview__description">
            Waypoints&apos; short, weekly assessments help alleviate test
            anxiety and rewards students with &#8220;I can...&#8221; statements
            as they improve and master new skills. This helps to build
            confidence in their math identity and encourages them to seek
            additional mastery on their own.
          </div>
        </div>
      </div>
      <Separator size={FEATURE_SEPARATOR} />
      <div className="feature">
        <div className="feature__overview">
          <div className="feature__overview__title">
            Fast and efficient assessments
          </div>
          <Separator size={24} />
          <div className="feature__overview__description">
            Our proprietary, adaptive AI engine allows Waypoints to accurately
            understand a student&apos;s total knowledge state with only a small
            sample of questions. The result: fast and efficient assessments that
            do not overwhelm teachers and students.
          </div>
        </div>
        <Separator size={IMAGE_SEPARATOR} />
        <div className="feature__visual">
          <img
            src={urlBuilders.imageUrl('waypoints/knowledge-graph.svg')}
            alt="Knowledge Graph"
          />
        </div>
      </div>
      <Separator size={FEATURE_SEPARATOR} />
      <div className="feature">
        <div className="feature__visual feature__visual--growth-report">
          <img
            className="feature__visual__image"
            src={urlBuilders.imageUrl('waypoints/us-growth-report.png')}
            alt="Growth Report"
          />
        </div>
        <div className="feature__overview feature__overview--growth-report">
          <div className="feature__overview__title">
            Flexible, simple, and easy to use
          </div>
          <Separator size={24} />
          <div className="feature__overview__description">
            Simple to set up and simple to use, Waypoints can be easily
            introduced into any classroom setting, and is flexible enough to use
            alongside any resource.
          </div>
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

      .feature__overview--skills-report {
        order: 1;
      }

      .feature__visual--skills-report {
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

        .feature__visual--skills-report {
          margin-top: 0;
          margin-right: ${IMAGE_SEPARATOR}px;
          order: 1;
        }

        .feature__overview--skills-report {
          order: 2;
        }
      }
    `}</style>
  </>
);

export { WaypointsOverview };
