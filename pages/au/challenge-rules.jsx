// @flow

import React, { Fragment } from 'react';
import Link from 'next/link';
import Error from 'next/error';

import Page from 'components/Page';
import SimpleHeader from 'components/SimpleHeader';
import SimpleFooter from 'components/SimpleFooter';
import Anchor from 'components/Anchor';
import {
  breakPoints,
  colors,
  mobileFontSizes,
  desktopFontSizes,
  fontWeights,
  lineHeights,
} from 'utils/theme';
import { urls, mailtoLink } from 'utils/urls';
import features from 'utils/features';

const ChallengeRules = () => {
  if (!features.TEACHER_CHALLENGE) return <Error statusCode={404} />;
  return (
    <Fragment>
      <SimpleHeader />
      <Page>
        <div className="container">
          <div className="mainTitle">Rules</div>
          <div className="paragraph">
            NO PURCHASE OR PAYMENT NECESSARY TO ENTER OR WIN.
          </div>
          <div className="paragraph">
            These Official Rules (&quot;RULES&quot;) are an extension of the
            Terms & Conditions located at{' '}
            <Link href={urls.terms} passHref>
              <Anchor>https://mathspace.co/terms-of-use</Anchor>
            </Link>{' '}
            (&quot;Terms&quot;) and the Privacy Policy located at{' '}
            <Link href={urls.privacyAU} passHref>
              <Anchor>https://mathspace.co/privacy-policy.</Anchor>
            </Link>
          </div>
          <div className="paragraph">
            Please read the RULES, Terms and Privacy Policy carefully, as they
            describe the conditions under which You are allowed to participate
            in the Challenge. By participating in the Challenge, You expressly
            consent to these RULES, the Terms and the Privacy Policy.
          </div>

          <div className="sectionTitle">Overview</div>
          <div className="paragraph">
            The Challenge begins 20 August 12:00 am (the &quot;Challenge Start
            Date&quot;) and ends 16 September 11:59pm (the &quot;Challenge End
            Date&quot;), such period referred to herein as the &quot;Challenge
            Period.&quot; This is a skill-based Challenge and chance plays no
            part in the determination of any Winner.
          </div>

          <div className="sectionTitle">Eligibility</div>
          <div className="paragraph">
            You must either be a Mathspace for Schools customer or a Mathspace
            for Schools trialling customer to be eligible to participate in the
            Challenge.
          </div>
          <div className="paragraph">
            Entries are limited to individuals with Mathspace teacher accounts
            only (&quot;Teacher&quot;); individuals with a Mathspace Essentials
            or a Mathspace Plus account are not eligible.
          </div>
          <div className="paragraph">
            Teachers must have assigned tasks to at least 10 unique students to
            be eligible.
          </div>

          <div className="sectionTitle">What is Mastery?</div>
          <div className="paragraph">
            Mastery is our measurement of a student’s proficiency of a
            particular subtopic on Mathspace. Some students will achieve mastery
            faster than others, depending upon their level of proficiency in a
            given subtopic.
          </div>

          <div className="sectionTitle">Mastery Data</div>
          <div className="paragraph">
            During the 4 week Challenge period we will track the student mastery
            data for all students who complete tasks assigned by the Teacher, in
            all classes linked to the Teacher. You represent and warrant that
            (i) A person who is not a student has not impersonated a student to
            contribute to the mastery points for a teacher and (ii) A single
            student has not made multiple accounts and contributed points from
            more than one account.
          </div>
          <div className="paragraph">
            Mastery points earned from tasks get counted for the week they’re
            earned. It is recommended that each tasks’ expiry date is set for
            the week you would like the points to be earned for.
          </div>
          <div className="paragraph">Here is a scenario to explain:</div>
          <div className="paragraph">
            Students A, B and C are assigned a task in week 1 which expires in
            week 2. The following marks were achieved by each student:
            <ul>
              <li>
                Student A partially completes the task, earning 50 mastery in
                week 1 and 0 mastery in week 2.
              </li>
              <li>
                Student B completes the task in Week 2, earning 60 mastery in
                Week 1 and 40 mastery in week 2.
              </li>
              <li>
                Student C completes the task in Week 1, earning 100 mastery in
                Week 1
              </li>
            </ul>
          </div>
          <div className="paragraph">
            We calculate the teacher’s average mastery for each week as follows
            <ul>
              <li>Week 1 = (50 + 60 + 100 )/3</li>
              <li>Week 2 = (0 + 40)/2</li>
            </ul>
          </div>
          <div className="paragraph">
            Summary: To maximise your average mastery score each week and for
            the grand prize, assign tasks every week. And, set the expiry to be
            the end of that week.
          </div>

          <div className="sectionTitle">How to join the Challenge</div>
          <div className="paragraph">
            To opt in to the Challenge, go to mathspace.co.au/challenge, click
            &quot;Enter&quot; and follow the on-screen instructions to complete
            the Application form to receive one (1) School Entry into the
            Challenge. In order for your Entry to be valid and complete, You
            must also have a Mathspace teacher account. If you do not have a
            Mathspace teacher account, a Mathspace representative will contact
            you to set up your account. If you do not hear from a Mathspace
            representative within 5 days of your submission, please contact us
            at <Anchor href={mailtoLink}>hello@mathspace.co</Anchor>
          </div>

          <div className="sectionTitle">Selection of Winners</div>
          <div className="paragraph">
            <span className="bold">Grand Prize</span>
          </div>
          <div className="paragraph">
            The teacher with the highest average mastery scored by students
            between 20 August and 16 September 2018, for tasks that were
            assigned, will be the winner. If there is a tie, the overall mastery
            scored by the students of a teacher will be considered in
            determining the winner. (Tie-breaker metric subject to change)
          </div>
          <div className="paragraph">
            <span className="bold">Weekly Prize</span>
          </div>
          <div className="paragraph">
            The top three teachers with the highest average mastery scored by
            students for each week of the Challenge will win the weekly prize.
            The count for the Weekly Prize is reset every week.
          </div>

          <div className="sectionTitle">Disqualification Criteria</div>
          <div className="paragraph">
            <ul>
              <li>
                You will be disqualified if you assign tasks from an
                ‘inappropriate year level.’ For example, assigning Year 9
                students Year 3- level tasks. You must assign tasks from the
                appropriate year level of the curriculum. You can assign tasks
                from one year level above or below your class’s year level.
              </li>
              <li>
                Creating fake student accounts and completing work on these
                student accounts
              </li>
              <li>Completing work for students you have assigned tasks to.</li>
              <li>Collaborating with other schools</li>
            </ul>
          </div>

          <div className="sectionTitle">
            Winner Notification and Prize Claim
          </div>
          <div className="paragraph">
            <span className="bold">Weekly Prizes</span>
          </div>
          <div className="paragraph">
            Notification dates: 28 August, 4 September, 11 September
          </div>
          <div className="paragraph">
            Prize claim: We will contact the winners, and send the winning
            teacher a cheque Prize to be sent via the email that you provide us
          </div>
          <div className="paragraph">
            <span className="bold">Grand Prize</span>
          </div>
          <div className="paragraph">
            Notification: 19 September<br />
            The $10,000 cheque to be presented to the school on a date that
            suits the school.
          </div>
          <div className="paragraph">
            Other prize claims to be negotiated with school and Adam Spencer,
            and FiftySix Creations.
          </div>

          <div className="sectionTitle">Prizes</div>
          <div className="paragraph">
            <span className="bold">Grand Prize</span>
            <br />
            The overall top Australian maths teacher will win:
          </div>
          <div className="paragraph">
            $10,000 cash prize for your school<br />
            Exclusive dinner with Adam Spencer for your maths department at a
            top restaurant<br />
            Entrepreneur Workshop for your students with FiftySix Creations
          </div>
          <div className="paragraph">
            <span className="bold">Weekly Prizes</span>
            <br />
            The top 3 teachers each week will win:
          </div>
          <div className="paragraph">
            $200 cash prize<br />
            Use of the Mathspace Teacher Challenge finalist logo to display and
            use on your school’s website
          </div>

          <div className="sectionTitle">Winner List</div>
          <div className="paragraph">
            The name of the Winner will be posted on this Website after
            verification and announcement of the Winner and will remain posted
            for at least ninety (90) days thereafter.
          </div>

          <SimpleFooter />
        </div>
      </Page>
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          color: ${colors.cloudBurst};
          padding: 0 24px 30px;
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
          margin-bottom: 12px;
        }
        .paragraph {
          margin-bottom: 20px;
        }
        .bold {
          font-weight: ${fontWeights.semibold};
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
