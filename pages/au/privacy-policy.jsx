// @flow

import React, { Fragment } from 'react';

import Page from 'components/Page';
import SimpleHeader from 'components/SimpleHeader';
import SimpleFooter from 'components/SimpleFooter';
import Anchor from 'components/Anchor';

import {
  breakPoints,
  colors,
  fontWeights,
  lineHeights,
  desktopFontSizes,
  mobileFontSizes,
} from 'utils/theme';

const Privacy = () => (
  <Fragment>
    <SimpleHeader />
    <Page title="Privacy Policy :: Mathspace">
      <main className="container">
        <h1 className="title">Our Privacy Policy</h1>
        <p className="paragraph">
          Protecting the privacy of all individuals, and particularly students,
          using Mathspace is a priority for us. Details of how we do this are
          provided below.
        </p>
        <h2 className="subTitle">Our Privacy Principles</h2>
        <p className="paragraph">
          <ul>
            <li>
              We abide by all Australian Privacy Principles outlined in the
              Privacy Act.
            </li>
            <li>We abide by all FERPA and GDPR requirements.</li>
            <li>
              We are committed to creating a safe and secure online environment
              for our users.
            </li>
            <li>
              We strive to be as open and transparent as possible. We have
              endeavoured to write this policy in a way that is clear and easy
              to navigate. It is important to us that our users can easily
              understand the personal information we collect about them and how
              we protect their privacy.
            </li>
            <li>
              We will never sell your personal information to third parties.
            </li>
            <li>
              We take the protection of your personal information very
              seriously, using the best of modern technology feasible for us to
              protect data and restrict unauthorised access to that information.
            </li>
          </ul>
        </p>

        <h2 className="subTitle">Introduction</h2>
        <p className="paragraph">
          This Privacy Policy provides important information about the privacy
          practices of Mathspace Pty Ltd (&quot;Mathspace&quot;, &quot;us&quot;,
          or &quot;we&quot;) for our website (www.mathspace.co) and mobile
          applications.
        </p>
        <p className="paragraph">
          If you are under 18 years of age, please be sure to read this Privacy
          Policy with a parent or guardian and gain their consent prior to
          giving us your personal information.
        </p>
        <p className="paragraph">
          This Privacy Policy explains how we collect, use, store and disclose
          the personal information you provide to us as part of your use of our
          services. With respect to personal information, Mathspace is referring
          to information which can be used to personally identify a user, such
          as full name, email address or a photograph.
        </p>

        <h2 className="subTitle">Collection of personal information</h2>
        <p className="paragraph">
          We take the information you provide to us very seriously, and we
          strive to put you in control of decisions around that information.
        </p>
        <p className="paragraph">
          Mathspace collects the following information about you and your use of
          our services:
        </p>
        <h3 className="heading">Personal information</h3>
        <p className="paragraph">
          When you register for, browse and/or use our services, you may provide
          Mathspace with &quot;personal information&quot; (such as your full
          name, email address or a photograph) that can be used to identify you.
          You may choose to present that personal information to other users
          (generally your parents/guardians), if you submit a request for them
          to follow your progress. For students, your personal information is
          also presented to educators in your school or district.
        </p>
        <h3 className="heading">
          Information about your use of our services and other user-provided
          information
        </h3>
        <p className="paragraph">
          We may collect usage information about your use of certain features of
          our services, such as the number of problems you have attempted, the
          number of videos you have viewed and the amount of time spent to
          complete a problem. This enables us to better tailor educational
          experiences that are most appropriate for you.
        </p>
        <h3 className="heading">Information from integrated services</h3>
        <p className="paragraph">
          Mathspace allows for various single-sign-on (SSO) login options to
          make it easier for students to get started and save users having to
          remember multiple passwords for various services. If you choose to
          login through SSO or otherwise via an integrated service such as
          Google, Facebook, Microsoft or other learning management system, then
          Mathspace may collect personal information that is already associated
          with your integrated service account. By choosing to provide such
          information during registration or otherwise, you are giving Mathspace
          the permission to use, share and store it in a manner consistent with
          this Privacy Policy.
        </p>
        <h3 className="heading">Information obtained from other users</h3>
        <p className="paragraph">
          We make available certain features on our services that allow other
          users to provide us with information about you. This information may
          include personal information. Generally, this occurs when teachers
          provide information relating to a student. For example, a teacher may
          register an account for their student and provide us with certain
          information, such as the student’s name and email.
        </p>
        <h3 className="heading">Location information</h3>
        <p className="paragraph">
          We may collect and use information about your location (such as your
          country) to provide you with tailored educational experiences for your
          region, but we do not collect the precise geolocation of you or your
          device.
        </p>
        <h2 className="subTitle">
          Mathspace uses personal information in the following ways:
        </h2>
        <h3 className="heading">
          To enhance our services and the services we provide
        </h3>
        <p className="paragraph">
          Mathspace uses the personal information you provide or that we collect
          to enhance our relationship with you and to operate, maintain, enhance
          and provide all of the features and services that we provide.
          Mathspace, for instance, remembers your recent activity so we can
          recommend the most appropriate content for you on your next visit. If
          you have given Mathspace consent, we may use your personal information
          to provide you with information about Mathspace’s features, services
          and other offerings that may be of interest to you. Under certain
          circumstances and if we obtain your consent (for example, if you
          submit a testimonial and agree to make it public), we may post your
          personal information on our website.
        </p>
        <h3 className="heading">
          To understand how you and other users use our services
        </h3>
        <p className="paragraph">
          Mathspace uses any non-personally identifiable information that you
          provide or that we collect from users in an aggregated format to
          understand and analyse the usage trends, learning behaviours and
          preferences of our users, to improve the way our services work and
          look, and to create new features and functionality.
        </p>
        <h2 className="subTitle">Ownership of student data</h2>
        <p className="paragraph">
          In addition to presenting student data within our service we provide
          Schools the ability to download data of student activity on our
          Services to a CSV file. This data is owned by the School and continues
          to be the property of and under the control of the School.
        </p>
        <h3 className="heading">Data retention</h3>
        <p className="paragraph">
          Any user may request a deletion of account details at any time. School
          administrators may also request a deletion of account details at any
          time on behalf of their School users. In such cases we will first
          allow the school to download any data to a CSV file for their
          ownership. We will then proceed to delete any personal data including
          names, emails and School name from our database. We will maintain
          deidentified transactional data for the purposes of improving our
          adaptive recommendations to all users which is a core part of our
          service.
        </p>
        <p className="paragraph">
          For all account deletion requests we may continue to store data on our
          backup databases for a period of up to 90 days as part of our regular
          backup processes for restoring user data in case of emergency.
        </p>
        <h3 className="heading">Technical information</h3>
        <p className="paragraph">
          To provide a personalised learning and high-quality experience for our
          users, we may use various technologies that automatically record
          certain technical information from your browser or device, including
          standard log files, or web beacons. This technical information may
          include your internet protocol (IP) address, device or browser type,
          internet service provider (ISP), referring or exit pages, clickstream
          data, operating system and the dates and times that you visit our
          website. We do this to better understand how our users are using our
          website so we can improve site functionality and the services we offer
          you.
        </p>
        <p className="paragraph">
          Like most websites, whether or not you are a registered member, we may
          send one or more cookies – small text files containing a string of
          alphanumeric characters – to your computer. Cookies remember
          information about your activities on a website and enable us to
          provide you with a more personalised learning experience. Mathspace
          may use both session cookies and persistent cookies. A session cookie
          disappears automatically after you close your browser. A persistent
          cookie remains after you close your browser and may be used by your
          browser on subsequent visits to our website. You can, however, remove
          a persistent cookie at any time. Please review your web browser
          &quot;Help&quot; file to learn the proper way to modify your cookie
          settings. However, without cookies you will not have access to certain
          services and features on our website.
        </p>
        <p className="paragraph">
          Mathspace WILL NOT sell, trade or assign any unaggregated personal
          information that it collects to third parties. We, however, may
          aggregate the information that we collect from users of our website to
          create demographic profiles and performance profiles regarding the
          progress of students who use our services.
        </p>
        <p className="paragraph">
          We may be required to disclose personal information in response to
          lawful requests, such as subpoenas or court orders, or in compliance
          with applicable laws.
        </p>
        <h3 className="heading">Access and update your personal information</h3>
        <p className="paragraph">
          You can access the personal information we hold about you in a human
          readable and/or industry standard format. We also provide facilities
          on our services for you to update your personal information. If you
          cannot find a way to update certain personal information yourself, or
          if you think that any personal information we hold about you is
          inaccurate, contact us and we will take reasonable steps to ensure
          that it is corrected.
        </p>
        <p className="paragraph">
          You can request to have your personal information permanently deleted
          from our services. Please allow 90 days from the date of the request
          for removal from our services and those of our third parties to be
          completed.
        </p>
        <h2 className="subTitle">Data security</h2>
        <p className="paragraph">
          Mathspace uses a combination of physical, managerial and technical
          safeguards designed to preserve the integrity and security of your
          personal information and other information we store in connection with
          our services.
        </p>
        <p className="paragraph">
          Our privacy policy has been specifically designed to meet Australian
          Privacy Principles outlined in the Privacy Act, FERPA and GDPR laws.
        </p>
        <h3 className="heading">Annual review</h3>
        <p className="paragraph">
          We review our data security and privacy policies annually to ensure
          they are effective, reasonable, and meet regulatory requirements.
        </p>
        <h3 className="heading">Third party service providers</h3>
        <p className="paragraph">
          We work with third party service providers with agreements that ensure
          that our data security and privacy requirements are protected.
        </p>
        <h3 className="heading">Hosting services</h3>
        <p className="paragraph">
          Mathspace uses Amazon Web Services (AWS) to host our web application
          and store data, including personal data, in encrypted formats. Use of
          AWS abides by the Australian Privacy Act and the Privacy Principles
          governing data collection in Australia. For more information, please
          refer to{' '}
          <Anchor href="https://aws.amazon.com/compliance/programs/">
            AWS Compliance Programs
          </Anchor>{' '}
          and{' '}
          <Anchor href="https://d1.awsstatic.com/whitepapers/compliance/Using_AWS_in_the_context_of_Australian_Privacy_Considerations.pdf">
            Whitepaper: Using AWS in the context of Australian Privacy
            Considerations
          </Anchor>
          .
        </p>
        <h2 className="subTitle">Changes and updates to this Privacy Policy</h2>
        <p className="paragraph">
          Our Privacy Policy may be updated periodically. Mathspace will contact
          users via email if any policy change diminishes privacy rights that
          they were entitled to prior to those policy changes. Please ensure you
          have added an email address to your Mathspace account if you wish to
          be notified of any Privacy Policy changes.
        </p>
        <h2 className="subTitle">Making a complaint</h2>
        <p className="paragraph">
          If you think we have breached any laws relating to privacy, or you
          wish to make a complaint about the way we have handled your personal
          information, you can contact us using the details set out below (under
          &quot;Contact Us&quot;). Please include your name, email address
          and/or telephone number and clearly describe your complaint. We will
          acknowledge your complaint and respond to you regarding your complaint
          within a reasonable period of time. If you think that we have failed
          to resolve the complaint satisfactorily, we will provide you with
          information about the further steps you can take.
        </p>
        <h3 className="heading">Contact Us</h3>
        <p className="paragraph">
          For further information about this Privacy Policy, or our privacy
          practices, or to access or correct your personal information, or to
          make a complaint, please contact us using the details set out below:
        </p>
        <p className="paragraph">
          <div>Mathspace Pty Ltd</div>
          <div>Suite 1102 418A Elizabeth St</div>
          <div>Surry Hills NSW 2010, Australia</div>
          <Anchor href="mailto:privacy@mathspace.co">
            privacy@mathspace.co
          </Anchor>
        </p>
        <SimpleFooter />
      </main>
    </Page>
    <style jsx>{`
      .container {
        max-width: 800px;
        margin: 0 auto;
        color: ${colors.cloudBurst};
        padding: 0 24px 30px;
      }
      .title {
        font-size: ${mobileFontSizes.h1}px;
        font-weight: ${fontWeights.regular};
        line-height: ${lineHeights.h1};
        margin-top: 24px;
        margin-bottom: 12px;
      }
      .subTitle {
        font-size: ${mobileFontSizes.h2}px;
        font-weight: ${fontWeights.regular};
        line-height: ${lineHeights.h2};
        margin-top: 24px;
        margin-bottom: 12px;
      }
      .heading {
        font-size: ${mobileFontSizes.h4}px;
        font-weight: ${fontWeights.regular};
        line-height: ${lineHeights.h4};
        margin-top: 24px;
        margin-bottom: 12px;
      }
      .paragraph {
        margin-bottom: 20px;
      }
      .italics {
        font-style: italic;
      }
      .bold {
        font-weight: ${fontWeights.semibold};
      }

      @media (min-width: ${breakPoints.medium}px) {
        .title {
          font-size: ${desktopFontSizes.h1}px;
        }
        .subTitle {
          font-size: ${desktopFontSizes.h2}px;
        }
        .heading {
          font-size: ${desktopFontSizes.h4}px;
        }
      }
    `}</style>
  </Fragment>
);

export default Privacy;
