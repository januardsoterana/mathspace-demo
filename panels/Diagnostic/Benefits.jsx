// @flow

import React, { Fragment, useState } from 'react';
import {
  colors,
  mobileFontSizes,
  breakPoints,
  desktopFontSizes,
  transitions,
  borderRadius,
  fontWeights,
  lineHeights,
} from 'utils/theme';
import { urlBuilders } from 'utils/urls';
import { type CountryCodes } from 'utils/types';
import sendCTAClickEvent from 'utils/analytics';

type OptionProps = {| title: string, image: string, selected: boolean |};
const Option = ({ title, image, selected }: OptionProps) => (
  <Fragment>
    <div className="option">
      <div className="imageWrapper">
        <img className="image" src={urlBuilders.imageUrl(image)} alt="" />
      </div>
      <div className="title">{title}</div>
    </div>
    <style jsx>{`
      .option {
        opacity: ${selected ? 1 : 0.5};
        display: flex;
        align-items: center;
        border-radius: ${borderRadius.default}px;
        animation: pulse 2s infinite;
        animation-play-state: ${selected ? 'paused' : 'running'};
      }
      .option:hover {
        opacity: 1;
        transition: opacity ${transitions.hover};
      }
      .imageWrapper {
        margin-right: 0;
        display: flex;
        align-items: center;
      }
      .title {
        display: none;
        color: ${colors.astronaut};
        text-transform: uppercase;
        font-size: 12px;
        font-weight: ${fontWeights.bold};
        letter-spacing: 1px;
        margin-left: 5px;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .option {
          animation: none;
        }
        .title {
          display: block;
        }
        .imageWrapper {
          margin-right: 5px;
        }
      }

      @keyframes pulse {
        0% {
          -moz-box-shadow: 0 0 0 0 rgba(117, 71, 216, 0.4);
          box-shadow: 0 0 0 0 rgba(117, 71, 216, 0.4);
        }
        70% {
          -moz-box-shadow: 0 0 0 10px rgba(117, 71, 216, 0);
          box-shadow: 0 0 0 10px rgba(117, 71, 216, 0);
        }
        100% {
          -moz-box-shadow: 0 0 0 0 rgba(117, 71, 216, 0);
          box-shadow: 0 0 0 0 rgba(117, 71, 216, 0);
        }
      }
    `}</style>
  </Fragment>
);

type SwitchProps = {|
  options: Array<{ image: string, title: string }>,
  selected: string,
  onClick: (value: string) => void,
|};
const SwitchControl = ({ options, selected, onClick }: SwitchProps) => (
  <Fragment>
    <div className="container">
      {options.map(option => (
        <div
          key={option.title}
          className="optionWrapper"
          onClick={() => {
            onClick(option.title);
            sendCTAClickEvent(
              option.title,
              'option-clicked',
              'diagnostic-landing-feature',
            );
          }}
          onKeyPress={() => {
            onClick(option.title);
            sendCTAClickEvent(
              option.title,
              'option-clicked',
              'diagnostic-landing-feature',
            );
          }}
          role="button"
          tabIndex="0"
        >
          <Option
            title={option.title}
            image={option.image}
            selected={selected === option.title}
          />
        </div>
      ))}
    </div>
    <style jsx>{`
      .container {
        display: flex;
        justify-content: space-between;
      }
      .optionWrapper {
        padding: 5px;
        cursor: pointer;
        outline: none;
        display: flex;
        justify-content: center;
      }
      .optionWrapper + .optionWrapper {
        margin-left: 10px;
      }
    `}</style>
  </Fragment>
);

const OPTIONS = {
  AU: [
    {
      image: 'diagnostics/student-level-icon.svg',
      title: 'Student Level',
    },
    {
      image: 'diagnostics/see-growth-icon.svg',
      title: 'See Growth',
    },
    {
      image: 'diagnostics/differentiate-icon.svg',
      title: 'Differentiate',
    },
    {
      image: 'diagnostics/naplan-icon.svg',
      title: 'Prepare for NAPLAN',
    },
  ],
  US: [
    {
      image: 'diagnostics/student-level-icon.svg',
      title: 'Student Level',
    },
    {
      image: 'diagnostics/see-growth-icon.svg',
      title: 'See Growth',
    },
    {
      image: 'diagnostics/differentiate-icon.svg',
      title: 'Differentiate',
    },
  ],
};

const BENEFITS = {
  AU: [
    {
      image: 'diagnostics/student-level.png',
      postion: { bottom: '20%', right: '-75px' },
      section: 'Student Level',
      title: 'See what grade level your students are at',
      body: 'Use as a pre-test and get a report of gaps in knowledge',
    },
    {
      image: 'diagnostics/see-growth.png',
      postion: { bottom: '20%', left: '-75px' },
      section: 'See Growth',
      title: "Measure your students' growth",
      body: 'Use as a post-test on a strand to measure growth',
    },
    {
      image: 'diagnostics/differentiate.png',
      postion: { top: '10%', right: '-75px' },
      section: 'Differentiate',
      title: 'Differentiate students in your class',
      body:
        'Identify students who need intervention and those ready for extension',
    },
    {
      image: 'diagnostics/naplan.png',
      postion: { bottom: '20%', left: '-23%' },
      section: 'Prepare for NAPLAN',
      title: 'Prepare for NAPLAN',
      body:
        'Get a special predictive band report in the lead up to NAPLAN for years 7 and 9',
    },
  ],
  US: [
    {
      image: 'diagnostics/student-level-us.png',
      postion: { bottom: '20%', right: '-75px' },
      section: 'Student Level',
      title: 'See what grade level your students are at',
      body: 'Use as a pre-test and get a report of gaps in knowledge',
    },
    {
      image: 'diagnostics/see-growth-us.png',
      postion: { bottom: '20%', left: '-75px' },
      section: 'See Growth',
      title: "Measure your students' growth",
      body: 'Use as a post-test on a strand to measure growth',
    },
    {
      image: 'diagnostics/differentiate-us.png',
      postion: { top: '10%', right: '-75px' },
      section: 'Differentiate',
      title: 'Differentiate students in your class',
      body:
        'Identify students who need intervention and those ready for extension',
    },
  ],
};

type Props = {| country: CountryCodes |};
const Benefits = ({ country }: Props) => {
  const [selected, setSelected] = useState('Student Level');
  const options = OPTIONS[country];
  const benefits = BENEFITS[country];
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <h2 className="title">What are the benefits</h2>
          <div className="controlWrapper">
            <SwitchControl
              options={options}
              selected={selected}
              onClick={setSelected}
            />
            <div className="optionNameMobile">{selected}</div>
            <div className="imageWrapper">
              {benefits
                .filter(benefit => benefit.section === selected)
                .map(benefit => (
                  <Fragment key={benefit.section}>
                    <img
                      className="image"
                      src={urlBuilders.imageUrl(benefit.image)}
                      alt=""
                    />
                    <div className="studentLevelInfo" style={benefit.postion}>
                      <div className="infoTitle">{benefit.title}</div>
                      <div className="infoBody">{benefit.body}</div>
                    </div>
                    <div
                      className="studentLevelInfoMobile"
                      style={benefit.postion}
                    >
                      <div className="infoTitle">{benefit.title}</div>
                      <div className="infoBody">{benefit.body}</div>
                    </div>
                  </Fragment>
                ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          padding: 50px 24px;
        }
        .wrapper {
          max-width: 700px;
          margin: 0 auto;
        }
        .title {
          margin: 0;
          text-align: center;
          color: ${colors.cloudBurst};
          font-size: ${mobileFontSizes.h3}px;
          font-weight: ${fontWeights.semibold};
        }
        .controlWrapper {
          margin-top: 40px;
        }
        .optionNameMobile {
          display: block;
          margin-top: 20px;
          text-align: center;
          color: ${colors.astronaut};
          font-size: ${mobileFontSizes.h2}px;
          position: relative;
        }
        .imageWrapper {
          margin-top: 20px;
          position: relative;
        }
        .image {
          width: 100%;
          min-height: 200px;
        }
        .studentLevelInfo {
          display: none;
          background-color: ${colors.astronaut};
          color: ${colors.white};
          border-radius: ${borderRadius.default}px;
          line-height: ${lineHeights.h3};
          padding: 20px;
          max-width: 250px;
          text-align: center;
          position: absolute;
        }
        .studentLevelInfoMobile {
          display: block;
          color: ${colors.cloudBurst};
          border-radius: ${borderRadius.default}px;
          line-height: ${lineHeights.h3};
          padding: 20px;
          text-align: center;
        }
        .infoTitle {
          font-weight: ${fontWeights.semibold};
        }
        .infoBody {
          margin-top: 10px;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .title {
            font-size: ${desktopFontSizes.h3}px;
          }
          .image {
            min-height: 440px;
          }
          .optionNameMobile {
            display: none;
          }
          .studentLevelInfo {
            display: block;
          }
          .studentLevelInfoMobile {
            display: none;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Benefits;
