// @flow

import React, { Fragment } from 'react';
import ClassNames from 'classnames';

import Button from 'components/Button';
import Anchor from 'components/Anchor';

import { urlBuilders, urls } from 'utils/urls';
import {
  breakPoints,
  colors,
  desktopFontSizes,
  mobileFontSizes,
  fontWeights,
  lineHeights,
  panelGapMargin,
  borderRadius,
  zIndex,
} from 'utils/theme';
import sendCTAClickEvent from 'utils/analytics';

const WORKABLE_LINK = 'workable-link';

type JobSectionProps = {|
  teamTitle: string,
  jobList: Array<{ position: string, location: string, link: string }>,
|};

const JobSection = ({ teamTitle, jobList }: JobSectionProps) => (
  <Fragment>
    <h2 className="title">{teamTitle}</h2>
    {jobList.map((job, index) => (
      <a
        // eslint-disable-next-line
        key={`${teamTitle}+${index}`}
        className="section"
        href={job.link}
        data-event-label={WORKABLE_LINK}
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
        text-transform: uppercase;
        font-size: ${mobileFontSizes.body}px;
        padding: 10px;
        display: flex;
        background-color: rgba(225, 225, 225, 0.25);
      }
      .section {
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        color: ${colors.white};
        font-weight: ${fontWeights.regular};
        font-size: ${mobileFontSizes.body}px;
        text-decoration: none;
        cursor: pointer;
      }
      .position {
        max-width: 560px;
      }
      .location {
        padding-left: 20px;
      }
      @media (min-width: ${breakPoints.medium}px) {
        .title {
          font-size: ${desktopFontSizes.body}px;
          display: inline-flex;
        }
        .section {
          font-size: ${desktopFontSizes.body}px;
        }
      }
    `}</style>
  </Fragment>
);

type Props = {|
  animate?: boolean,
  jobs: Array<Object>,
|};

type State = {|
  hideContent: boolean,
|};

class JobsPanel extends React.Component<Props, State> {
  checkPosition: () => {};
  windowHeight: number;
  careersPanel: any;
  salesJobs: Array<Object>;
  contentJobs: Array<Object>;
  hrJobs: Array<Object>;

  constructor(props: Props) {
    super(props);

    this.state = {
      hideContent: !!this.props.animate,
    };
    this.checkPosition = this.checkPosition.bind(this);
    this.careersPanel = React.createRef();
    this.salesJobs =
      props.jobs &&
      props.jobs
        .filter(job => job.department === 'Sales')
        .map(job => ({
          position: job.title,
          location: job.country,
          link: job.shortlink,
        }));
    this.contentJobs =
      props.jobs &&
      props.jobs
        .filter(job => job.department === 'Content')
        .map(job => ({
          position: job.title,
          location: job.country,
          link: job.shortlink,
        }));
    this.hrJobs =
      props.jobs &&
      props.jobs
        .filter(job => job.department === 'Business & Operations')
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
      this.careersPanel.current.getBoundingClientRect().top -
        this.windowHeight <=
      0
    ) {
      this.setState(state => ({ ...state, hideContent: false }));
      window.removeEventListener('scroll', this.checkPosition, false);
    }
  }

  render() {
    const careersPanelContainerClass = ClassNames({
      careersPanelContainer: true,
      fadeInBackground: !this.state.hideContent,
    });
    const careersPanelWrapperClass = ClassNames({
      careersPanelWrapper: true,
      fadeInMainContent: !this.state.hideContent,
    });
    const patternLeftClass = ClassNames({
      patternLeft: true,
      fadeInPatternLeft: !this.state.hideContent,
    });
    const patternRightClass = ClassNames({
      patternRight: true,
      fadeInPatternRight: !this.state.hideContent,
    });
    const contentJobsContainerClass = ClassNames({
      jobContainer: this.hrJobs.length > 0,
    });
    const salesJobsContainerClass = ClassNames({
      jobContainer: this.hrJobs.length > 0 || this.salesJobs.length > 0,
    });
    const hrJobsContainerClass = ClassNames({
      jobContainer: false,
    });

    return (
      <Fragment>
        <div ref={this.careersPanel} className={careersPanelContainerClass}>
          {/* Patterns */}
          <div className="patternContainer">
            <img
              className={patternLeftClass}
              src={urlBuilders.imageUrl('common/pattern.svg')}
              alt=""
            />
          </div>
          {this.contentJobs.length === 0 &&
          this.salesJobs.length === 0 &&
          this.hrJobs.length === 0 ? (
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
          ) : (
            <div className={careersPanelWrapperClass}>
              {/* Careers Description */}
              <div className="careersDescriptionContainer">
                <h2 className="careersDescriptionText">Open Positions</h2>
                <p className="careersDescriptionContent">
                  If you love learning, growing, and seeing others do the same,
                  then we want you to work with us, and bring your ideas to the
                  table.
                </p>
              </div>
              {/* Careers Info */}
              <section className="careersInfoContainer">
                {this.salesJobs.length > 0 ? (
                  <div className={salesJobsContainerClass}>
                    <JobSection
                      teamTitle="Sales and Marketing"
                      jobList={this.salesJobs}
                    />
                  </div>
                ) : (
                  <div />
                )}
                {this.contentJobs.length > 0 ? (
                  <div className={contentJobsContainerClass}>
                    <JobSection
                      teamTitle="Content Team"
                      jobList={this.contentJobs}
                    />
                  </div>
                ) : (
                  <div />
                )}
                {this.hrJobs.length > 0 ? (
                  <div className={hrJobsContainerClass}>
                    <JobSection
                      teamTitle="Business & Operations"
                      jobList={this.hrJobs}
                    />
                  </div>
                ) : (
                  <div />
                )}
              </section>
              {/* Careers CTA */}
              <div className="careersCTAContainer">
                <div className="careersCTAText">
                  We&#39;re looking for engineers!
                </div>
                <div className="careersCTAButtonWrapper">
                  <Button
                    isFilled
                    color="crusta"
                    href={urls.careersEngineering}
                  >
                    View Engineering Positions
                  </Button>
                </div>
              </div>
            </div>
          )}
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
          .careersPanelContainer {
            background-color: ${colors.pickledBluewood};
            margin-right: ${panelGapMargin.default}px;
            padding: 70px 24px;
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
          .careersCTAContainer {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            background-color: rgba(225, 225, 225, 0.25);
            padding: 10px;
            border-radius: ${borderRadius.default}px;
            margin-top: 50px;
          }
          .careersCTAButtonWrapper {
            padding-top: 20px;
          }
          .careersCTAText {
            color: ${colors.white};
            font-weight: ${fontWeights.semibold};
            font-size: ${mobileFontSizes.body}px;
            line-height: ${lineHeights.body};
          }
          .careersDescriptionContainer {
            margin-top: 0;
            margin-bottom: 50px;
          }
          .careersDescriptionText {
            color: ${colors.white};
            font-size: ${mobileFontSizes.h1}px;
            font-weight: ${fontWeights.semibold};
          }
          .careersDescriptionContent {
            color: ${colors.white};
            font-size: ${mobileFontSizes.body}px;
            margin-top: 10px;
          }
          .jobContainer {
            border-bottom: 1px dotted ${colors.white};
            margin-bottom: 20px;
            padding-bottom: 20px;
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
          .missingJobsWrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .missingJobsTitle {
            font-size: ${mobileFontSizes.h3}px;
            color: ${colors.white};
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
            .careersDescriptionContent {
              font-size: ${desktopFontSizes.body}px;
            }
            .careersCTAText {
              font-size: ${desktopFontSizes.body}px;
            }
            .careersCTAContainer {
              flex-direction: row;
            }
            .careersCTAButtonWrapper {
              padding-top: 0;
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
