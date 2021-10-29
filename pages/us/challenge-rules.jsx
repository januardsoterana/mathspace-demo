// @flow

import React, { Fragment } from 'react';
import Link from 'next/link';
import Error from 'next/error';

import Page from 'components/Page';
import SimpleHeader from 'components/SimpleHeader';
import Anchor from 'components/Anchor';
import {
  breakPoints,
  colors,
  mobileFontSizes,
  desktopFontSizes,
  fontWeights,
  lineHeights,
} from 'utils/theme';
import { urls } from 'utils/urls';
import features from 'utils/features';

const ChallengeRules = () => {
  if (!features.TEACHER_CHALLENGE) return <Error statusCode={404} />;
  return (
    <Fragment>
      <SimpleHeader background={colors.cloudBurst} />
      <Page>
        <div className="container">
          <section className="wrapper">
            <h1 className="mainTitle">Challenge Terms &amp; Conditions</h1>
            <p className="paragraph">
              NO PURCHASE OR PAYMENT NECESSARY TO ENTER OR WIN.
            </p>
            <p className="paragraph">
              These Official “Challenge Terms and Conditions” are an extension
              of Mathspace’s Terms &amp; Conditions located at{' '}
              <Link href={urls.terms} passHref>
                <Anchor>https://mathspace.co/terms-of-use</Anchor>
              </Link>{' '}
              (&quot;Terms&quot;) and the Privacy Policy located at{' '}
              <Link href={urls.privacyUS} passHref>
                <Anchor>https://mathspace.co/privacy-policy</Anchor>
              </Link>
              .
            </p>
            <p className="paragraph">
              Please read the Challenge Terms and Conditions, as well as our
              Terms and Privacy Policy carefully, as they describe the
              conditions under which You are allowed to participate in the
              Challenge. By participating in the Challenge, you expressly
              consent to the Challenge Terms and Conditions, the Terms and the
              Privacy Policy.
            </p>
            <h3 className="sectionTitle">Overview</h3>
            <p className="paragraph">
              The Challenge begins 2/24/20 12:00 am (the &quot;Challenge Start
              Date&quot;) and ends 3/22/20 11:59 pm (the &quot;Challenge End
              Date&quot;) UTC, such period referred to herein as the
              &quot;Challenge Period&quot;. This is a skill-based Challenge and
              chance plays no part in the determination of any Winner.
            </p>
            <h3 className="sectionTitle">Eligibility</h3>
            <p className="paragraph">
              You must either be a US-based Mathspace for Schools paying
              customer or a Mathspace for Schools trialing customer to be
              eligible to participate in the Challenge. During the Challenge,
              any school can sign up for a trial.
            </p>
            <p className="paragraph">
              Entries are limited to individuals with Mathspace teacher accounts
              only (&quot;Teacher&quot;).
            </p>
            <p className="paragraph">
              Your school must have a minimum of 50 students with active
              Mathspace accounts at the start of the Challenge<sup>1</sup>. More
              students can join at any point during the Challenge. If you have
              less than 50 active students at the beginning of the Challenge,
              you can still participate, but your score will be calculated as
              though there were 50 active students.
            </p>
            <div className="smallDivider" />
            <p className="reference">
              <sup>1</sup> All students from your school that have logged into
              their accounts since September 1, 2019, will be considered active
              Mathspace accounts for this competition. The competition is based
              on participation of all Mathspace users in the entire school -
              teachers or classes using Mathspace in your school cannot “opt
              out” of your Challenge results.
            </p>
            <h3 className="sectionTitle">How to join the Challenge</h3>
            <p className="paragraph">
              To opt in to the Challenge, go to{' '}
              <Link href={urls.challengeUS} passHref>
                <Anchor>mathspace.co/us/challenge</Anchor>
              </Link>
              , click &quot;Register My School&quot; and follow the on-screen
              instructions to complete the Application form to receive one (1)
              School Entry into the Challenge. In order for your Entry to be
              valid and complete, you must also have a Mathspace teacher
              account. If you do not have a Mathspace teacher account, a
              Mathspace representative will contact you to set up your account.
              If you do not hear from a Mathspace representative within 5 days
              of your submission, please contact us at{' '}
              <Anchor href="mailto:hello@mathspace.co">
                hello@mathspace.co
              </Anchor>
            </p>
            <h3 className="sectionTitle">
              What are Mathspace points and how are they calculated?
            </h3>
            <p className="paragraph">
              Points are awarded to students based on effort and engagement. The
              more questions students attempt and get correct, the more points
              they earn. The points system encourages the students to work on
              new questions that they haven&apos;t tried before.{' '}
              <Anchor href="https://help.mathspace.co/understanding-features/student-points">
                Read about how points are calculated.
              </Anchor>
            </p>
            <p className="paragraph">
              <strong className="bold">Note</strong>:{' '}
              <em>
                Students can earn points for all types of tasks except for Fast
                Track tasks on Mathspace.
              </em>
            </p>
            <h3 className="sectionTitle">What is the Challenge Score?</h3>
            <p className="paragraph">
              The Challenge Score is calculated by dividing the total number of
              points earned by the students at the school over the given time
              period by the number of active students at the school.
            </p>
            <p className="paragraph">
              <strong className="bold">
                The overall winning school is calculated by:
              </strong>
              <br />
              <sup className="reference">
                [Total points (week 1) + Total points (week 2) + Total points
                (week 3) + Total points (week 4)] ÷ Total active students
              </sup>
            </p>
            <p className="paragraph">
              <strong className="bold">
                The weekly winning school is calculated by:
              </strong>
              <br />
              <sup className="reference">
                [Total points (week n) ÷ Total active students]
              </sup>
            </p>
            <h3 className="sectionTitle">Selection of Winners</h3>
            <p className="paragraph">
              <strong className="bold">Grand Prizes</strong>: The top 3 schools
              with the highest number of Challenge Points between the Challenge
              start date and the Challenge end date will be the winners. If
              there is a tie, the total mastery earned by students in a school
              will be considered in determining the winner. (Tie-breaker metric
              subject to change)
            </p>
            <p className="paragraph">
              <strong className="bold">Weekly Rewards</strong>: The top school
              with the highest Challenge Score, except for the final week, will
              win a weekly bonus reward<sup>2</sup>. The count for the Weekly
              Bonus reward is reset every week<sup>3</sup>.
            </p>
            <div className="smallDivider" />
            <p className="reference">
              <sup>2</sup> Schools may only win the weekly prize once; in the
              event of a school winning multiple weeks, the school with the next
              highest Challenge score for that week will be deemed the weekly
              winner.
            </p>
            <p className="reference">
              <sup>3</sup> Weekly points are reset each Sunday at 7pm EST.
            </p>
            <h3 className="sectionTitle">Disqualification Criteria</h3>
            <p className="paragraph">
              Mathspace reserves the right to disqualify any participating
              school we deem to be acting in a way that gives them an unfair or
              unethical advantage in the Challenge. This includes, but is not
              limited to
            </p>
            <p className="paragraph">
              <ul className="list">
                <li>
                  Creating fake student accounts and completing work on these
                  student accounts
                </li>
                <li>
                  Teachers, parents or others starting or completing work for
                  students to earn points
                </li>
                <li>Collaborating with other schools</li>
                <li>
                  Any other behavior deemed to be unfair, unethical, or against
                  the spirit of the competition
                </li>
              </ul>
            </p>
            <h3 className="sectionTitle">
              Winner Notification and Prize Claim
            </h3>
            <h4 className="subTitle">Weekly Rewards</h4>
            <p className="paragraph">
              Notification dates: 3/2/20, 3/9/20, and 3/16/20
              <br />
              Prize claim: We will contact the winners, and arrange the delivery
              of the prizes directly.
            </p>
            <h4 className="subTitle">Grand Prizes</h4>
            <p className="paragraph">
              Notification date: 3/25/20
              <br />
              Prize claim: To be negotiated with school
            </p>
            <p className="paragraph">
              If a Prize is forfeited for any reason, the entrant with the next
              highest score may be contacted as an alternate winner.
            </p>
            <h3 className="sectionTitle">Prizes</h3>
            <h4 className="subTitle">1st Place</h4>
            <p className="paragraph">
              <ul className="list">
                <li>$1,000 check for your school</li>
                <li>
                  Trip for two teachers to attend NCTM Annual Conference 2019 in
                  Chicago or St. Louis<sup>4</sup>
                </li>
                <li>1st Place trophy</li>
                <li>1st Place certificates for all students</li>
                <li>Winner logo for school website</li>
              </ul>
            </p>
            <h4 className="subTitle">2nd Place</h4>
            <p className="paragraph">
              <ul className="list">
                <li>
                  $1000 Amazon gift card to purchase technology or math
                  classroom supplies
                </li>
                <li>2nd Place trophy </li>
                <li>2nd Place certificates for all students</li>
                <li>2nd Place logo for school website</li>
              </ul>
            </p>
            <h4 className="subTitle">3rd Place</h4>
            <p className="paragraph">
              <ul className="list">
                <li>
                  $500 Amazon gift card to purchase technology or math classroom
                  supplies
                </li>
                <li>3rd Place trophy </li>
                <li>3rd Place certificates for all students</li>
                <li>3rd Place logo for school website</li>
              </ul>
            </p>
            <h4 className="subTitle">Weekly Rewards</h4>
            <p className="paragraph">
              For each of the first three weeks, the leading school will win a
              school-wide pizza party for all of the participating students.
            </p>
            <div className="smallDivider" />
            <p className="reference">
              <sup>4</sup> Prize includes: Round trip flights for two teachers
              to choice of NCTM Chicago or St. Louis from winner’s location;
              accommodation for the duration of the NCTM conference; entry to
              NCTM conference; $50 per day per person to cover incidental costs
              (food, airport transfers, etc). If winners are unable to attend
              NCTM Annual Conference in 2020, they have the option of choosing
              to attend one of the NCTM Regional conferences in 2020. Otherwise,
              this prize must be taken as stated, and is not exchangeable or
              redeemable for cash or other goods or services.
            </p>
            <p className="paragraph">
              <strong className="bold">Note</strong>:{' '}
              <em>
                A school is only eligible to win the weekly reward once. If a
                school wins more than one weekly reward, we will reward the next
                highest school instead.
              </em>
            </p>
            <h3 className="sectionTitle">Student Recognition</h3>
            <p className="paragraph">
              The top 10 students in each school with the highest number of
              points between the Challenge start date and the Challenge end date
              will receive digital certificates to recognize their efforts
              during the Challenge.
            </p>
            <p className="paragraph">
              The top 100 students nationwide with the highest number of points
              between the Challenge start date and the Challenge end date will
              also receive digital certificates to recognize their efforts
              during the Challenge.
            </p>
            <p className="paragraph">
              All participating schools will receive a digital participation
              certificate for students.
            </p>
            <h3 className="sectionTitle">Leading Schools and Winner List</h3>
            <p className="paragraph">
              The names of the Top 10 schools in each division will be posted on
              this Website during the course of the Challenge.
            </p>
            <p className="paragraph">
              At the end of the Challenge, after verification, we will announce
              the Top 3 Schools and will post about the winning schools on this
              Website, as well as our social media channels including Facebook,
              Twitter and LinkedIn.
            </p>
            <div className="subText">
              Please read the Challenge Terms and Conditions, as well as our
              Terms and Privacy Policy carefully, as they describe the
              conditions under which You are allowed to participate in the
              Challenge. By participating in the Challenge, you expressly
              consent to the Challenge Terms and Conditions, the Terms and the
              Privacy Policy.
            </div>
            <div className="text">
              ©{new Date().getFullYear()} MATHSPACE PTY LTD. ALL RIGHTS
              RESERVED.
            </div>
          </section>
        </div>
      </Page>
      <style jsx>{`
        .container {
          color: ${colors.white};
          background-color: ${colors.cloudBurst};
          padding: 1px 24px;
        }
        .wrapper {
          max-width: 800px;
          margin: 0 auto;
        }
        .mainTitle {
          font-size: ${mobileFontSizes.h1}px;
          font-weight: ${fontWeights.regular};
          line-height: ${lineHeights.h1};
          margin-top: 24px;
          margin-bottom: 12px;
        }
        .sectionTitle {
          font-size: ${mobileFontSizes.h2}px;
          font-weight: ${fontWeights.regular};
          line-height: ${lineHeights.h2};
          margin-top: 24px;
          border-bottom: 1px solid ${colors.white};
          margin-bottom: 0;
          padding-bottom: 12px;
        }
        .paragraph {
          margin-bottom: 20px;
        }
        .reference {
          font-size: 14px;
        }
        .bold {
          font-weight: ${fontWeights.semibold};
        }
        .subTitle {
          margin: 20px 0 10px;
          font-size: ${mobileFontSizes.h4}px;
          font-weight: ${fontWeights.regular};
        }
        .list {
          margin: 0;
        }
        .subText {
          color: ${colors.grayChateau};
          font-size: 12px;
          margin-top: 24px;
          margin-bottom: 24px;
        }
        .text {
          color: ${colors.grayChateau};
          font-size: ${mobileFontSizes.body}px;
        }
        .imageWrapper {
          margin-top: 20px;
          max-width: 800px;
        }
        .image {
          width: 100%;
        }
        .smallDivider {
          max-width: 300px;
          border-top: 1px solid ${colors.cloudBurst};
        }

        @media (min-width: ${breakPoints.medium}px) {
          .mainTitle {
            font-size: ${desktopFontSizes.h1}px;
          }
          .sectionTitle {
            font-size: ${desktopFontSizes.h2}px;
          }
        }
      `}</style>
    </Fragment>
  );
};
ChallengeRules.getInitialProps = async ({ res }) => {
  if (!features.TEACHER_CHALLENGE) res.statusCode = 404;
  return {};
};

export default ChallengeRules;
