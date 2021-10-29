// @flow

import React, { Fragment } from 'react';
import ClassNames from 'classnames';

import Anchor from 'components/Anchor';
import {
  breakPoints,
  colors,
  desktopFontSizes,
  fontWeights,
  mobileFontSizes,
  panelGapMargin,
  zIndex,
} from 'utils/theme';
import { urlBuilders, urls } from 'utils/urls';
import sendCTAClickEvent from 'utils/analytics';

const WORKABLE_LINK = 'workable-link';

type JobSectionProps = {|
  jobList: Array<{ position: string, location: string, link: string }>,
|};

const JobSection = ({ jobList }: JobSectionProps) => (
  <Fragment>
    {jobList.map((job, index) => (
      <a
        // eslint-disable-next-line
        key={`${job.position}+${index}`}
        className="section"
        data-event-label={WORKABLE_LINK}
        href={job.link}
        onClick={event => {
          event.preventDefault();
          sendCTAClickEvent(WORKABLE_LINK).then(() => {
            window.location.assign(job.link);
          });
        }}
      >
        <div className="position">{job.position}</div>
        <div className="location">{job.location}</div>
      </a>
    ))}
    <style jsx>{`
      .title {
        color: ${colors.white};
        font-weight: ${fontWeights.semibold};
      }
      .section {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        color: ${colors.white};
        font-weight: ${fontWeights.regular};
        font-size: ${mobileFontSizes.body}px;
        text-decoration: none;
        border-bottom: 1px dotted ${colors.white};
        padding: 15px 0;
        cursor: pointer;
      }
      .position {
        min-width: 140px;
      }
      .location {
        padding-left: 20px;
        opacity: 0.5;
      }
      @media (min-width: ${breakPoints.medium}px) {
        .section {
          font-size: ${desktopFontSizes.body}px;
        }
      }
    `}</style>
  </Fragment>
);

type JobProps = {|
  animate?: boolean,
  jobs: Array<Object>,
|};

type JobState = {|
  hideContent: boolean,
|};

class JobsPanel extends React.Component<JobProps, JobState> {
  checkPosition: () => {};
  windowHeight: number;
  jobPanel: any;
  engineeringJobs: Array<Object>;

  constructor(props: JobProps) {
    super(props);

    this.state = {
      hideContent: !!this.props.animate,
    };
    this.checkPosition = this.checkPosition.bind(this);
    this.jobPanel = React.createRef();
    this.engineeringJobs =
      props.jobs &&
      props.jobs
        .filter(
          job =>
            job.department === 'Engineering' ||
            job.department === 'Product & Engineering',
        )
        .map(job => ({
          position: job.title,
          location: job.country,
          link: job.shortlink,
        }));
  }

  componentDidMount() {
    this.windowHeight = window.innerHeight;
    window.addEventListener('scroll', this.checkPosition, false);
    setTimeout(this.checkPosition, 0);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkPosition, false);
  }

  checkPosition() {
    if (
      this.jobPanel.current.getBoundingClientRect().top - this.windowHeight <=
      0
    ) {
      this.setState(state => ({ ...state, hideContent: false }));
      window.removeEventListener('scroll', this.checkPosition, false);
    }
  }

  render() {
    const patternLeftClass = ClassNames({
      patternLeft: true,
      fadeInPatternLeft: !this.state.hideContent,
    });
    const patternRightClass = ClassNames({
      patternRight: true,
      fadeInPatternRight: !this.state.hideContent,
    });
    const jobsPanelContainerClass = ClassNames({
      jobPanelContainer: true,
      fadeInBackground: !this.state.hideContent,
    });
    const careersPanelWrapperClass = ClassNames({
      careersPanelWrapper: true,
      fadeInMainContent: !this.state.hideContent,
    });

    return (
      <Fragment>
        <div ref={this.jobPanel} className={jobsPanelContainerClass}>
          {/* Patterns */}
          <div className="patternContainer">
            <img
              className={patternLeftClass}
              src={urlBuilders.imageUrl('common/pattern.svg')}
              alt=""
            />
          </div>
          <div className={careersPanelWrapperClass}>
            {/* Careers Description */}
            <section className="careersDescriptionContainer">
              {this.props.jobs.length > 0 ? (
                <Fragment>
                  <h2 className="careersDescriptionText">
                    Product + Engineering roles
                  </h2>
                  <p className="careersDescriptionContent">
                    If you love learning, growing, and seeing others do the
                    same, then we want you to work with us, and bring your big
                    ideas to the table.
                  </p>
                  <JobSection jobList={this.engineeringJobs} />
                </Fragment>
              ) : (
                <div className="missingJobsWrapper">
                  <div className="missingJobsTitle">
                    We are encountering difficulties loading our available jobs.
                    Check out Workable for the full list.
                  </div>
                  <div className="homeLink">
                    <Anchor href={urls.workable} color="crusta">
                      Go to Workable
                    </Anchor>
                  </div>
                </div>
              )}
            </section>
          </div>
          {/* Patterns */}
          <div className="patternContainer">
            <img
              className={patternRightClass}
              src={urlBuilders.imageUrl('common/pattern1.svg')}
              alt=""
            />
          </div>
        </div>
        <style jsx>{`
          .jobPanelContainer {
            background-color: ${colors.purpleHeart};
            margin-right: ${panelGapMargin.default}px;
            padding: 50px 24px;
            transform: translateX(-100%);
          }
          .careersPanelWrapper {
            display: flex;
            flex-direction: column;
            max-width: 800px;
            margin: 0 auto;
            opacity: 0;
            transform: translateY(50%);
          }
          .careersDescriptionContainer {
            margin-top: 24px;
            margin-bottom: 24px;
          }
          .careersDescriptionText {
            color: ${colors.white};
            font-size: ${mobileFontSizes.h1}px;
          }
          .careersDescriptionContent {
            color: ${colors.white};
            font-size: ${mobileFontSizes.body}px;
            margin-top: 10px;
          }
          .missingJobsWrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .missingJobsTitle {
            font-size: ${mobileFontSizes.h3}px;
            color: ${colors.white};
          }
          .homeLink {
            margin-top: 20px;
          }
          .patternContainer {
            display: none;
            position: relative;
            z-index: ${zIndex.infoPanelPattern};
          }
          .patternLeft {
            position: absolute;
            left: -24px;
            top: -135px;
            opacity: 0;
            transform: translateX(-50%);
          }
          .patternRight {
            position: absolute;
            right: -24px;
            top: -105px;
            opacity: 0;
            transform: translateX(50%);
          }
          .fadeInBackground {
            animation: fade-in-panel 1s forwards;
          }
          .fadeInMainContent {
            animation: fade-in-content 1s forwards;
            animation-delay: 1s;
          }
          .fadeInPatternLeft {
            animation: fade-in-pattern-left 1s forwards;
            animation-delay: 1.5s;
          }
          .fadeInPatternRight {
            animation: fade-in-pattern-right 1s forwards;
            animation-delay: 1.5s;
          }

          @keyframes fade-in-content {
            from {
              opacity: 0;
              transform: translateY(50%);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fade-in-pattern-left {
            from {
              opacity: 0;
              transform: translateX(-50%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes fade-in-pattern-right {
            from {
              opacity: 0;
              transform: translateX(50%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes fade-in-panel {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(0);
            }
          }
          @media (min-width: ${breakPoints.extraLarge}px) {
            .patternContainer {
              display: block;
            }
          }
          @media (min-width: ${breakPoints.medium}px) {
            .careersDescriptionText {
              font-size: ${desktopFontSizes.h1}px;
            }
            .missingJobsTitle {
              font-size: ${desktopFontSizes.h3}px;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default JobsPanel;
