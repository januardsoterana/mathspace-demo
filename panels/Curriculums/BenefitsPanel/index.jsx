// @flow

import React, { Fragment } from 'react';

import BenefitsBox from 'components/BenefitsBox';
import { urlBuilders } from 'utils/urls';
import {
  desktopFontSizes,
  mobileFontSizes,
  breakPoints,
  lineHeights,
  fontWeights,
  colors,
} from 'utils/theme';

const TITLE_SPACING_TOP = 144;
const TITLE_SPACING_TOP_MOBILE = 56;
const TITLE_SPACING_BOTTOM = 20;
const SUBTITLE_SPACING_BOTTOM = 50;
const SPACING_BOTTOM = 104;

const MAX_BENEFIT_BOX_WRAPPER_SIZE = 900;
const BENEFIT_BOX_SPACING = 50;
const BENEFIT_WRAPPER_SPACING_DESKTOP = 48;

const Benefits = () => (
  <Fragment>
    <div className="benefitBoxWrapper">
      <BenefitsBox
        imagePath={urlBuilders.imageUrl('curriculum/Update-content.svg')}
        title="Always up-to-date"
        description="All content is up-to-date with any changes made by your curriculum authority."
      />
      <BenefitsBox
        imagePath={urlBuilders.imageUrl('curriculum/Content-refine.svg')}
        title="Improved everyday"
        description="Our in-house content team refines and creates content every single day."
      />
      <BenefitsBox
        imagePath={urlBuilders.imageUrl('curriculum/Read-through.svg')}
        title="Helpful context"
        description="Easily read through prerequisite content for your curriculum."
      />
    </div>
    <div className="benefitBoxWrapper">
      <BenefitsBox
        imagePath={urlBuilders.imageUrl('curriculum/Necessary-subtopic.svg')}
        title="Meets curriculum requirements"
        description="Necessary skills and subtopics are included to support the curriculum requirements."
      />
      <BenefitsBox
        imagePath={urlBuilders.imageUrl('curriculum/Scaffolded.svg')}
        title="Enhance engagement"
        description="Scaffolded to enhance engagement for a wide variety of learners."
      />
      <BenefitsBox
        imagePath={urlBuilders.imageUrl('curriculum/open-ended-task.svg')}
        title="Open-ended tasks"
        description="Explore our investigations that encourage student conversations and connections between concepts."
      />
    </div>
    <style jsx>{`
      .benefitBoxWrapper {
        display: flex;
        max-width: ${MAX_BENEFIT_BOX_WRAPPER_SIZE}px;
        margin: 0 auto;
        align-items: center;
        flex-direction: column;
      }
      .benefitBoxWrapper > :global(div) + :global(div) {
        margin-top: ${BENEFIT_BOX_SPACING}px;
      }
      @media (min-width: ${breakPoints.medium}px) {
        .benefitBoxWrapper {
          flex-direction: row;
          justify-content: space-between;
          align-items: baseline;
        }
        .benefitBoxWrapper > :global(div) + :global(div) {
          margin-top: 0;
        }
      }
    `}</style>
  </Fragment>
);

type Props = {|
  title: string,
  subtitle?: string,
|};

const BenefitsPanel = ({ title, subtitle }: Props) => (
  <Fragment>
    <div className="benefitsContainer">
      <h2 className="header">{title}</h2>
      <p className="subtitle">{subtitle}</p>
      <div className="benefitBoxContainer">
        <Benefits />
      </div>
    </div>
    <style jsx>{`
      .benefitsContainer {
        padding: 0 24px;
        margin: ${TITLE_SPACING_TOP_MOBILE}px 0;
      }
      .benefitBoxContainer > :global(div) + :global(div) {
        margin-top: ${BENEFIT_BOX_SPACING}px;
      }
      .header {
        font-size: ${mobileFontSizes.h1}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.h1};
        display: flex;
        justify-content: center;
        color: ${colors.nevada};
        margin-bottom: ${TITLE_SPACING_BOTTOM}px;
        text-align: center;
      }
      .subtitle {
        font-size: ${mobileFontSizes.h4}px;
        font-weight: ${fontWeights.light};
        line-height: ${lineHeights.h4};
        display: flex;
        justify-content: center;
        color: ${colors.nevada};
        margin-bottom: ${SUBTITLE_SPACING_BOTTOM}px;
        text-align: center;
      }
      @media (min-width: ${breakPoints.medium}px) {
        .header {
          margin-top: ${TITLE_SPACING_TOP}px;
          font-size: ${desktopFontSizes.h1}px;
          text-align: left;
        }
        .subtitle {
          font-size: ${desktopFontSizes.h4}px;
          text-align: left;
        }
        .benefitBoxContainer {
          margin-bottom: ${SPACING_BOTTOM}px;
        }

        .benefitBoxContainer > .benefitBoxWrapper + .benefitBoxWrapper {
          margin-top: ${BENEFIT_WRAPPER_SPACING_DESKTOP}px;
        }
      }
    `}</style>
  </Fragment>
);

export default BenefitsPanel;
