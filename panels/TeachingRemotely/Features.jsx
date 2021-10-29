// @flow

import React, { Fragment } from 'react';
import { urlBuilders } from 'utils/urls';
import { breakPoints, fontSizes, fontWeights, colors } from 'utils/theme';

type FeatureProps = {
  imageurl: string,
  title: string,
  description: string,
  reversed?: boolean,
};

const Feature = ({ imageurl, title, description, reversed }: FeatureProps) => (
  <Fragment>
    <div className="feature">
      <div className="leftSection">
        <div className="imageWrapper">
          <img className="image" src={imageurl} alt="" />
        </div>
      </div>
      <div className="rightSection">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
    <style jsx>{`
      .feature {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }
      .leftSection {
        max-width: 550px;
        width: 100%;
        margin-bottom: 20px;
      }
      .imageWrapper {
        max-width: 550px;
        width: 100%;
      }
      .image {
        width: 100%;
      }
      .rightSection {
        max-width: 550px;
        width: 100%;
      }
      .title {
        font-size: ${fontSizes.mobile.h3}px;
        font-weight: ${fontWeights.semibold};
        color: ${colors.cloudBurst};
        margin: 0 0 20px;
      }
      .description {
        font-size: ${fontSizes.mobile.bodyLG}px;
        font-weight: ${fontWeights.regular};
        color: ${colors.cloudBurst};
        margin: 0 0 20px;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .feature {
          flex-direction: ${reversed ? 'row-reverse' : 'row'};
        }
        .title {
          font-size: ${fontSizes.mobile.h3}px;
        }
        .description {
          font-size: ${fontSizes.desktop.bodyLG}px;
        }
        .leftSection {
          margin-bottom: 0;
        }
      }
    `}</style>
  </Fragment>
);

const LOCALE_DATA = {
  AU: [
    {
      imageUrl: urlBuilders.imageUrl('teachingRemotely/1.svg'),
      title: 'More than multiple choice',
      description:
        'Students can show their work and get scaffolded hints and video lessons along the way, no matter how they solve the problem.',
      reversed: false,
    },
    {
      imageUrl: urlBuilders.imageUrl('teachingRemotely/2.svg'),
      title: 'Share lessons with students',
      description:
        'Access our standards-aligned lessons which include videos and hands-on GeoGebra applets. Share these lessons directly with students.',
      reversed: true,
    },
    {
      imageUrl: urlBuilders.imageUrl('teachingRemotely/3.svg'),
      title: 'Encourage self-directed learning',
      description:
        'Three core elements of Mathspace encourage self-directed learning. These include our mastery-based platform which focuses on knowledge, not grades; our real-time step-by-step feedback; and personal record tracking for students to keep tabs on what they have learnt.',
      reversed: false,
    },
    {
      imageUrl: urlBuilders.imageUrl('teachingRemotely/4.svg'),
      title: 'Monitor effort and progress',
      description:
        'Teachers can access a range of student and class reports, including a live student report which shows which students are active and working. Teachers can also see students’ progress, and can tailor lessons.',
      reversed: true,
    },
  ],
  US: [
    {
      imageUrl: urlBuilders.imageUrl('teachingRemotely/1.svg'),
      title: 'More than multiple choice',
      description:
        'Students can show their work and get scaffolded hints and video lessons along the way, no matter how they solve the problem.',
      reversed: false,
    },
    {
      imageUrl: urlBuilders.imageUrl('teachingRemotely/2.svg'),
      title: 'Share lessons with students',
      description:
        'Access our standards-aligned lessons which include videos and hands-on GeoGebra applets. Share these lessons directly with students.',
      reversed: true,
    },
    {
      imageUrl: urlBuilders.imageUrl('teachingRemotely/3.svg'),
      title: 'Encourage self-directed learning',
      description:
        'Three core elements of Mathspace encourage self-directed learning. These include our mastery-based platform which focuses on knowledge, not grades; our real-time step-by-step feedback; and personal record tracking for students to keep tabs on what they have learnt.',
      reversed: false,
    },
    {
      imageUrl: urlBuilders.imageUrl('teachingRemotely/4.svg'),
      title: 'Monitor effort and progress',
      description:
        'Teachers can access a range of student and class reports, including a live student report which shows which students are active and working. Teachers can also see students’ progress, and can tailor lessons.',
      reversed: true,
    },
  ],
};

type Props = { country: 'AU' | 'US' };
const Features = ({ country }: Props) => {
  const content = LOCALE_DATA[country];
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          {content.map(feature => (
            <div key={feature.title} className="featureWrapper">
              <Feature
                imageurl={feature.imageUrl}
                title={feature.title}
                description={feature.description}
                reversed={feature.reversed}
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .container {
          padding: 50px 24px;
        }
        .wrapper {
          max-width: 1110px;
          margin: 0 auto;
        }
        .featureWrapper + .featureWrapper {
          margin-top: 20px;
        }
      `}</style>
    </Fragment>
  );
};

export default Features;
