// @flow

import React, { Fragment } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Error from 'next/error';

import Page from 'components/Page';
import Button from 'components/Button';
import Anchor from 'components/Anchor';
import Accordion from 'components/Accordion';

import {
  breakPoints,
  colors,
  fontWeights,
  desktopFontSizes,
  mobileFontSizes,
  lineHeights,
  panelGapMargin,
  borderRadius,
} from 'utils/theme';
import { urlBuilders, urls } from 'utils/urls';
import sendCTAClickEvent from 'utils/analytics';
import features from 'utils/features';

const JOIN_CHALLENGE_1 = 'join-challenge-1';
const JOIN_CHALLENGE_2 = 'join-challenge-2';
const SIGN_UP_HERE = 'sign-up-here';

const LandingHero = () => (
  <Fragment>
    <div className="container">
      <div className="leftSection">
        {/* logo */}
        <div className="mathspaceLogo">
          <img
            src={urlBuilders.imageUrl(
              'common/Mathspace-logo-flat-reversed.svg',
            )}
            alt="Mathspace"
            className="image"
          />
        </div>
        {/* title */}
        <div className="titleWrapper">
          <div className="title">Teacher</div>
          <div className="title">Challenge</div>
        </div>
        {/* date */}
        <div className="dateContainer">20 August - 16 September</div>
        {/* description */}
        <div className="descriptionContainer">
          Enter for the chance to win $10,000 for your school, and dinner with
          Adam Spencer!
        </div>
        {/* CTA */}
        <div className="CTAWrapper">
          <Button
            color="mountainMeadow"
            size="large"
            isFilled
            isBlock
            href={urls.challengeAUSignup}
            data-event-label={JOIN_CHALLENGE_1}
            onClick={event => {
              event.preventDefault();
              sendCTAClickEvent(JOIN_CHALLENGE_1).then(() => {
                Router.push(urls.challengeAUSignup);
              });
            }}
          >
            Join the Challenge
          </Button>
        </div>
      </div>
      <div className="rightSection">
        <div className="imageWrapper">
          <img
            src={urlBuilders.imageUrl('challenge/tournamentHero.svg')}
            alt="Challenge"
            className="image"
          />
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        display: flex;
        max-width: 1000px;
        margin: 0 auto;
        justify-content: center;
        padding: 0 24px;
        flex-direction: column;
        align-items: center;
      }
      .leftSection {
        color: ${colors.white};
        max-width: 350px;
        padding-top: 24px;
        text-align: left;
        margin-right: 20px;
      }
      .mathspaceLogo {
        width: 160px;
        margin-bottom: 20px;
      }
      .titleWrapper {
        display: inline-flex;
        flex-direction: column;
        align-items: baseline;
      }
      .title {
        display: inline-flex;
        font-size: 50px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.h4};
        background-color: rgba(0, 0, 0, 0.2);
        padding: 10px;
        margin-top: 5px;
        border-radius: ${borderRadius.default}px;
      }
      .dateContainer {
        background-color: rgba(0, 0, 0, 0.2);
        padding: 5px;
        text-align: center;
        margin-top: 10px;
        font-size: ${mobileFontSizes.h4}px;
        line-height: ${lineHeights.body};
        font-weight: ${fontWeights.semibold};
        max-width: 300px;
        border-radius: ${borderRadius.default}px;
      }
      .descriptionContainer {
        font-size: ${mobileFontSizes.h4}px;
        line-height: ${lineHeights.body};
        font-weight: ${fontWeights.regular};
        margin: 24px 0;
      }
      .imageWrapper {
        line-height: 0;
      }
      .image {
        width: 90%;
      }
      .rightSection {
        margin-top: 80px;
        align-self: flex-end;
      }
      @media (min-width: ${breakPoints.medium}px) {
        .dateContainer {
          margin: 10px 0 0;
          font-size: ${desktopFontSizes.h4}px;
        }
        .leftSection {
          text-align: left;
        }
        .container {
          flex-direction: row;
          align-items: flex-start;
        }
        .mathspaceLogo {
          margin: 0 0 20px;
        }
        .descriptionContainer {
          font-size: ${desktopFontSizes.h4}px;
        }
        .CTAWrapper {
          max-width: 220px;
        }
        .rightSection {
          margin-top: 0;
        }
        .title {
          font-size: 58px;
        }
      }
    `}</style>
  </Fragment>
);

type HowItWorksProps = { onClickFAQ: () => {}, onClickRewards: () => {} };

const HowItWorks = ({ onClickFAQ, onClickRewards }: HowItWorksProps) => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="panelTitle">
          The Challenge is open to all Australian schools, no matter if you’re
          already using Mathspace or not!
        </div>
        <div className="contentWrapper">
          <div className="leftSection">
            <div className="boldContent">
              We&#39;re looking for the teachers who are making the biggest
              impact on their students&#39; growth.
            </div>
            <div className="content">
              Running over 4 weeks, everyone can use Mathspace for free.
              We&#39;ll track your students&#39; growth, and the winning teacher
              will be the one who achieves the highest growth for the period.
            </div>
          </div>
          <div className="rightSection">
            <div className="rightSectionTitle">How it works</div>
            <div className="stepsContainer">
              <div className="stepsNumber">1</div>
              <div className="stepsContent">
                <div className="stepsTitle">Join the Challenge</div>
                <div className="stepsText">
                  To join, your school can{' '}
                  <Anchor
                    underline
                    color="white"
                    data-event-label={SIGN_UP_HERE}
                    onClick={event => {
                      event.preventDefault();
                      sendCTAClickEvent(SIGN_UP_HERE).then(() => {
                        Router.push(urls.challengeAUSignup);
                      });
                    }}
                  >
                    sign up here
                  </Anchor>{' '}
                </div>
              </div>
            </div>
            <div className="stepsContainer">
              <div className="stepsNumber">2</div>
              <div className="stepsContent">
                <div className="stepsTitle">Get Mathspace</div>
                <div className="stepsText">
                  If you&#39;re not already using Mathspace, we&#39;ll set you
                  up for free
                </div>
              </div>
            </div>
            <div className="stepsContainer">
              <div className="stepsNumber">3</div>
              <div className="stepsContent">
                <div className="stepsTitle">Set tasks</div>
                <div className="stepsText">
                  Over the 4 weeks, set your students Mathspace tasks{' '}
                </div>
              </div>
            </div>
            <div className="stepsContainer">
              <div className="stepsNumber">4</div>
              <div className="stepsContent">
                <div className="stepsTitle">Track growth</div>
                <div className="stepsText">
                  You&#39;ll get your own dashboard to track student growth,
                  known as{' '}
                  <Anchor color="white" underline onClick={onClickFAQ}>
                    &#39;mastery&#39;
                  </Anchor>{' '}
                  on Mathspace
                </div>
              </div>
            </div>
            <div className="stepsContainer">
              <div className="stepsNumber">5</div>
              <div className="stepsContent">
                <div className="stepsTitle">Collect rewards</div>
                <div className="stepsText">
                  Every week the top 3 teachers will get{' '}
                  <Anchor color="white" underline onClick={onClickRewards}>
                    rewarded.
                  </Anchor>{' '}
                  At the end, the top teacher will win the{' '}
                  <Anchor color="white" underline onClick={onClickRewards}>
                    grand prize.
                  </Anchor>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        background-color: ${colors.white};
        margin-right: ${panelGapMargin.default}px;
        padding: 80px 24px;
      }
      .wrapper {
        max-width: 800px;
        margin: 0 auto;
      }
      .panelTitle {
        font-size: ${mobileFontSizes.h2}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.h2};
        color: ${colors.cloudBurst};
      }
      .contentWrapper {
        margin-top: 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .leftSection {
        max-width: 400px;
        margin-right: 25px;
      }
      .boldContent {
        font-size: ${mobileFontSizes.h4}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.body};
        color: ${colors.grayChateau};
        margin-bottom: 16px;
      }
      .content {
        font-size: ${mobileFontSizes.h4}px;
        font-weight: ${fontWeights.regular};
        line-height: ${lineHeights.body};
        color: ${colors.grayChateau};
      }
      .rightSection {
        padding: 24px 24px 36px;
        background-color: ${colors.java};
        border-radius: ${borderRadius.default}px;
        max-width: 375px;
        color: ${colors.white};
        margin-top: 50px;
      }
      .rightSectionTitle {
        font-size: ${mobileFontSizes.h4}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.body};
        color: ${colors.white};
      }
      .stepsContainer {
        display: flex;
        margin-top: 20px;
      }
      .stepsNumber {
        height: 25px;
        min-width: 25px;
        background-color: ${colors.astronaut};
        display: flex;
        justify-content: center;
        border-radius: ${borderRadius.circle}px;
        align-items: center;
        margin-right: 10px;
        font-size: ${mobileFontSizes.subInfo}px;
        line-height: ${lineHeights.subInfo};
        font-weight: ${fontWeights.semibold};
      }
      .stepsTitle {
        font-size: ${mobileFontSizes.body}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.body};
      }
      .stepsText {
        font-size: ${mobileFontSizes.body}px;
        font-weight: ${fontWeights.light};
        line-height: ${lineHeights.body};
      }
      @media (min-width: ${breakPoints.medium}px) {
        .panelTitle {
          font-size: ${desktopFontSizes.h2}px;
          text-align: left;
        }
        .boldContent {
          font-size: ${desktopFontSizes.h4}px;
          text-align: left;
        }
        .contentWrapper {
          flex-direction: row;
          align-items: flex-start;
        }
        .content {
          font-size: ${desktopFontSizes.h4}px;
          text-align: left;
        }
        .rightSection {
          margin-top: 0;
        }
        .rightSectionTitle {
          font-size: ${desktopFontSizes.h4}px;
        }
      }
    `}</style>
  </Fragment>
);

const Rewards = () => (
  <Fragment>
    <div className="container">
      {/* Title */}
      <div className="panelTitle">Rewards</div>
      {/* Prizes Container */}
      <div className="prizesContainer">
        <div className="leftSection">
          <div className="grandPrizePanel">
            <div className="grandPrizeWrapper">
              <div className="grandPrizeImageWrapper">
                <img
                  src={urlBuilders.imageUrl('challenge/grand-prize.svg')}
                  alt="Grand Prize"
                  className="image"
                />
              </div>
              <div className="grandPrizeTitle">Grand Prize</div>
              <div className="grandPrizeText">
                The overall top Australian maths teacher will win
              </div>
              <ul className="grandPrizeList">
                <li>
                  <span className="highLight">$10,000 cash prize</span> for your
                  school
                </li>
                <li>
                  <span className="highLight">
                    Exclusive dinner with Adam Spencer
                  </span>{' '}
                  for your maths department at a top restaurant
                </li>
                <li>
                  Entrepreneur Workshop for your students with{' '}
                  <Anchor color="white" underline href={urls.fifySixCreations}>
                    Fiftysix Creations
                  </Anchor>
                </li>
              </ul>
            </div>
            <div className="imageWrapper">
              <img
                src={urlBuilders.imageUrl('challenge/adam-spencer.jpg')}
                alt="Grand Prize"
                className="image"
              />
            </div>
          </div>
        </div>
        <div className="rightSection">
          <div className="weeklyPrizePanel">
            <div className="weeklyPrizeImageWrapper">
              <img
                src={urlBuilders.imageUrl('challenge/weekly-prize.svg')}
                alt="Weekly Prize"
                className="image"
              />
            </div>
            <div className="weeklyPrizeTitle">Weekly Prize</div>
            <div className="weeklyPrizeText">
              The top 3 teachers each week will win
            </div>
            <ul className="weeklyPrizeList">
              <li>
                <span className="highLight">$200 cash prize</span>
              </li>
              <li>
                Use of the Mathspace Teacher Challenge finalist logo to display
                and use on your school&#39;s website
              </li>
            </ul>
          </div>
          <div className="certificatePanel">
            <div className="certificateImageWrapper">
              <img
                src={urlBuilders.imageUrl('challengecertificate.svg')}
                alt="Certificate"
                className="image"
              />
            </div>
            <div>
              All participating schools will get digital participation
              certificates for students
            </div>
          </div>
        </div>
      </div>
      <div className="divider" />
      {/* Join Container */}
      <div className="joinContainer">
        <div className="joinTitle">How do I join?</div>
        <div className="joinText">
          Simply enter for your school below and someone from our team will be
          in touch. You can check out the Challenge rules{' '}
          <Link href={urls.challengeRulesAU} passHref>
            <Anchor color="white" underline>
              here
            </Anchor>
          </Link>
          .
        </div>
        <div className="joinCTAWrapper">
          <Button
            isFilled
            isBlock
            size="large"
            color="mountainMeadow"
            data-event-label={JOIN_CHALLENGE_2}
            href={urls.challengeAUSignup}
            onClick={event => {
              event.preventDefault();
              sendCTAClickEvent(JOIN_CHALLENGE_2).then(() => {
                Router.push(urls.challengeAUSignup);
              });
            }}
          >
            Join the Challenge
          </Button>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 80px 24px;
        max-width: 800px;
        margin: 0 auto;
      }
      .panelTitle {
        color: ${colors.white};
        font-size: ${mobileFontSizes.h1}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.h1};
        display: flex;
        justify-content: center;
      }
      .prizesContainer {
        display: flex;
        justify-content: space-between;
        margin-top: 130px;
        flex-direction: column;
        align-items: center;
      }
      .grandPrizePanel {
        max-width: 430px;
        background-color: ${colors.crusta};
        border-radius: ${borderRadius.default}px;
        color: ${colors.white};
      }
      .grandPrizeWrapper {
        padding: 48px 32px 20px;
        position: relative;
      }
      .grandPrizeImageWrapper {
        max-width: 97px;
        position: absolute;
        top: -95px;
        left: calc(50% - 45px);
        width: 100%;
      }
      .grandPrizeTitle {
        font-size: ${mobileFontSizes.h2}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.h2};
      }
      .grandPrizeText {
        font-size: ${mobileFontSizes.h4}px;
        font-weight: ${fontWeights.regular};
        line-height: ${lineHeights.body};
        margin: 8px 0;
      }
      .grandPrizeList {
        font-size: ${mobileFontSizes.subInfo}px;
      }
      .imageWrapper {
        line-height: 0;
        padding-bottom: 20px;
        width: 100%;
      }
      .image {
        width: 100%;
      }
      .rightSection {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 0;
      }
      .weeklyPrizePanel {
        position: relative;
        max-width: 276px;
        background-color: ${colors.royalBlue};
        padding: 48px 32px 60px;
        border-radius: ${borderRadius.default}px;
        flex: 1;
        color: ${colors.white};
        margin-top: 80px;
      }
      .weeklyPrizeImageWrapper {
        position: absolute;
        max-width: 148px;
        top: -55px;
        left: calc(50% - 65px);
        width: 100%;
      }
      .weeklyPrizeTitle {
        font-size: ${mobileFontSizes.h2}px;
        font-weight: ${fontWeights.semibold};
        line-height: ${lineHeights.h2};
      }
      .weeklyPrizeText {
        font-size: ${mobileFontSizes.h4}px;
        font-weight: ${fontWeights.regular};
        line-height: ${lineHeights.body};
        margin: 8px 0;
      }
      .weeklyPrizeList {
        font-size: ${mobileFontSizes.subInfo}px;
      }
      .certificatePanel {
        flex: 1;
        display: flex;
        align-items: center;
        position: relative;
        max-width: 272px;
        margin-top: 50px;
        border: 2px solid ${colors.royalBlue};
        padding: 48px 32px 60px;
        border-radius: ${borderRadius.default}px;
        color: ${colors.white};
        font-size: ${mobileFontSizes.h4}px;
      }
      .certificateImageWrapper {
        max-width: 105px;
        position: absolute;
        top: -25px;
        left: calc(50% - 50px);
        width: 100%;
      }
      .divider {
        margin: 56px 0;
        border-bottom: 1px solid ${colors.royalBlue};
      }
      .joinTitle {
        color: ${colors.white};
        font-size: ${mobileFontSizes.h3}px;
        line-height: ${lineHeights.h3};
        font-weight: ${fontWeights.semibold};
        margin-bottom: 15px;
      }
      .joinText {
        color: ${colors.white};
        font-size: ${mobileFontSizes.h4}px;
        line-height: ${lineHeights.body};
        font-weight: ${fontWeights.regular};
        margin-bottom: 30px;
      }
      .joinCTAWrapper {
        max-width: 270px;
      }
      .highLight {
        font-weight: ${fontWeights.semibold};
      }

      @media (min-width: ${breakPoints.medium}px) {
        .panelTitle {
          font-size: ${desktopFontSizes.h1}px;
        }
        .prizesContainer {
          flex-direction: row;
          align-items: inherit;
        }
        .rightSection {
          margin-left: 30px;
        }
        .weeklyPrizePanel {
          margin-top: 0;
        }
        .grandPrizeTitle {
          font-size: ${desktopFontSizes.h2}px;
        }
        .weeklyPrizeTitle {
          font-size: ${desktopFontSizes.h2}px;
        }
      }
    `}</style>
  </Fragment>
);

const FAQ = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="title">Frequently Asked Questions</div>
        <div className="accordionWrapper">
          <Accordion
            title="Q: What are the key dates for the challenge?"
            interactive
            color="cloudBurst"
          >
            <div className="content">
              A: These are the key dates to keep in your diary!
            </div>
            <div className="content">20 August: Challenge starts</div>
            <div className="content">27 August: Week 1 finalists announced</div>
            <div className="content">
              3 September: Week 2 finalists announced
            </div>
            <div className="content">
              10 September: Week 3 finalists announced
            </div>
            <div className="content">16 September: Challenge closes</div>
            <div className="content">
              19 September: The top Australian maths teacher is announced
            </div>
          </Accordion>
        </div>
        <div className="accordionWrapper">
          <Accordion
            title="Q: Is there any cost to join the Challenge?"
            interactive
            color="cloudBurst"
          >
            <div className="content">
              A: No! It&#39;s free to join. If you don&#39;t already use
              Mathspace, we will set you up with a temporary free account so
              that you can participate.
            </div>
          </Accordion>
        </div>
        <div className="accordionWrapper">
          <Accordion
            title="Q: Do I have to be using Mathspace to join the Challenge?"
            interactive
            color="cloudBurst"
          >
            <div className="content">
              A: No! We want all Australian maths teachers to join, so we will
              set you up with a free account for the duration of the Challenge.
            </div>
          </Accordion>
        </div>
        <div className="accordionWrapper">
          <Accordion
            title="Q:  How do you pick the winners?"
            interactive
            color="cloudBurst"
          >
            <div className="content">
              A: The winners are picked according to the highest average mastery
              scored by all students you have assigned a task to in Mathspace.
            </div>
            <div className="content">
              The weekly winners will be the top three teachers whose students
              have scored the highest average mastery. These teachers will be
              selected on a Sunday night, and will be notified the following
              Monday.
            </div>
            <div className="content">
              The overall winner will be the teacher who achieves the highest
              average student mastery score at the end of the four week period.
            </div>
          </Accordion>
        </div>
        <div className="accordionWrapper">
          <Accordion title="Q: What is mastery?" interactive color="cloudBurst">
            <div className="content">
              A: Mastery is our measurement of a student’s proficiency of a
              particular subtopic on Mathspace. Some students will achieve
              mastery faster than others, depending upon their level of
              proficiency in a given subtopic.
            </div>
          </Accordion>
        </div>
        <div className="accordionWrapper">
          <Accordion
            title="Q: How can I keep track of how my students are performing?"
            interactive
            color="cloudBurst"
          >
            <div className="content">
              A: We will send you your own Challenge dashboard so that you can
              easily see how your students are tracking, and where you rank in
              the Challenge. This will not be publicly visible, and will only be
              visible to you and the other teachers at your school.
            </div>
          </Accordion>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        background-color: ${colors.white};
        padding: 80px 24px;
      }
      .wrapper {
        max-width: 800px;
        margin: 0 auto;
      }
      .title {
        font-size: ${mobileFontSizes.h1}px;
        line-height: ${lineHeights.h1};
        font-weight: ${fontWeights.semibold};
        color: ${colors.cloudBurst};
        margin-bottom: 40px;
      }
      .accordionWrapper {
        padding: 20px 0;
        border-bottom: 1px solid ${colors.iron};
      }
      .content {
        color: ${colors.grayChateau};
        font-size: ${mobileFontSizes.subInfo}px;
        line-height: ${lineHeights.body};
        font-weight: ${fontWeights.light};
        padding-bottom: 10px;
      }
      .content:last-child {
        padding-bottom: 0;
      }
    `}</style>
  </Fragment>
);

const ChallengeFooter = () => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="leftSection">
          <div className="imageWrapper">
            <Link href={urls.homepageAU} passHref>
              <Anchor>
                <img
                  className="image"
                  src={urlBuilders.imageUrl(
                    'common/Mathspace-logo-flat-reversed.svg',
                  )}
                  alt="Mathspace"
                />
              </Anchor>
            </Link>
          </div>
          <div className="copyrightWrapper">
            <span className="copyrightLabel">
              © Mathspace {new Date().getFullYear()}
            </span>{' '}
            <span className="contactLinks">
              <Link
                as={urls.terms}
                href={{
                  pathname: urls.terms,
                  query: 'AU',
                }}
                passHref
              >
                <Anchor color="regentGray">Terms and conditions</Anchor>
              </Link>{' '}
              |{' '}
              <Link
                as={urls.privacyAU}
                href={{
                  pathname: urls.privacyAU,
                  query: 'AU',
                }}
                passHref
              >
                <Anchor color="regentGray">Privacy Policy</Anchor>
              </Link>{' '}
              |{' '}
              <Link href={urls.challengeRulesAU} passHref>
                <Anchor color="regentGray">Challenge Rules</Anchor>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 80px 24px;
        background-color: ${colors.pickledBluewood};
      }
      .wrapper {
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      }
      .imageWrapper {
        max-width: 150px;
      }
      .image {
        width: 100%;
      }
      .copyrightWrapper {
        margin-top: 25px;
        display: flex;
        flex-direction: column;
      }
      .copyrightLabel {
        color: ${colors.white};
      }
      .contactLinks {
        color: ${colors.regentGray};
      }
      .rulesWrapper {
        color: ${colors.white};
        text-transform: capitalize;
      }

      @media (min-width: ${breakPoints.medium}px) {
      }
    `}</style>
  </Fragment>
);

type Props = {||};
type State = {||};

class Tournament extends React.Component<Props, State> {
  howItWorksMarker: any;
  rewardsMarker: any;
  FAQMarker: any;
  handlePanelTransitionClick: (markerName: string) => {};

  static async getInitialProps({ res }: any) {
    if (!features.TEACHER_CHALLENGE) res.statusCode = 404;
    return {};
  }

  constructor(props: Props) {
    super(props);
    this.howItWorksMarker = React.createRef();
    this.rewardsMarker = React.createRef();
    this.FAQMarker = React.createRef();
    this.handlePanelTransitionClick = this.handlePanelTransitionClick.bind(
      this,
    );
  }

  handlePanelTransitionClick(markerName: string) {
    switch (markerName) {
      case 'howItWorksMarker':
        this.howItWorksMarker.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;
      case 'rewardsMarker':
        this.rewardsMarker.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;
      case 'FAQMarker':
        this.FAQMarker.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;
      default:
        break;
    }
  }

  render() {
    if (!features.TEACHER_CHALLENGE) return <Error statusCode={404} />;
    return (
      <Fragment>
        <div className="background">
          <Page>
            <div className="heroWrapper">
              <LandingHero />
              <div className="transitionButtonWrapper">
                {/* eslint-disable-next-line */}
                <img
                  className="downIcon"
                  src={urlBuilders.imageUrl('common/down_arrow.svg')}
                  alt=""
                  onClick={() =>
                    this.handlePanelTransitionClick('howItWorksMarker')
                  }
                />
              </div>
            </div>
            <div ref={this.howItWorksMarker} className="scrollMarker" />
            <HowItWorks
              onClickRewards={() =>
                this.handlePanelTransitionClick('rewardsMarker')
              }
              onClickFAQ={() => this.handlePanelTransitionClick('FAQMarker')}
            />
            <div ref={this.rewardsMarker} className="scrollMarker" />
            <Rewards />
            <div ref={this.FAQMarker} className="scrollMarker" />
            <FAQ />
            <ChallengeFooter />
          </Page>
        </div>
        <style jsx>{`
          .background {
            background-color: ${colors.bayOfMany};
          }
          .heroWrapper {
            position: relative;
          }
          .transitionButtonWrapper {
            position: absolute;
            bottom: -20px;
            right: 16px;
            display: flex;
            align-items: flex-end;
            z-index: 1;
            cursor: pointer;
          }
          .downIcon {
            width: 40px;
          }
          :global(.background) > :global(.pageWrapper) {
            padding-top: 56px;
          }

          @media (min-width: ${breakPoints.medium}px) {
            .transitionButtonWrapper {
              bottom: -30px;
            }
            .downIcon {
              width: 60px;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default Tournament;
