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
        <article>
          <h1 className="title">
            Privacy Policy for US Educational Institutions and Students
          </h1>
          <p className="paragraph">
            Protecting the privacy of all individuals, and particularly
            students, using Mathspace is a priority for us. Details of how we do
            this are provided below.
          </p>
          <section>
            <h2 className="subTitle">Our Privacy Principles</h2>
            <p className="paragraph">
              <ul>
                <li>
                  We are committed to creating a safe and secure online
                  environment for our users.
                </li>
                <li>
                  We strive to be as open and transparent as possible. We have
                  endeavored to write this policy in a way that is clear and
                  easy to navigate. It is important to us that our users can
                  easily understand the personal information we collect about
                  them and how we protect their privacy.
                </li>
                <li>
                  We will never sell your personal information to third parties.
                </li>
                <li>
                  We take the protection of your personal information very
                  seriously, using the best of modern technology feasible for us
                  to protect data and restrict unauthorized access to that
                  information.
                </li>
              </ul>
            </p>
          </section>
          <section>
            <h2 className="subTitle">Introduction</h2>
            <p className="paragraph">
              This Privacy Policy provides important information about the
              privacy practices of Mathspace Inc. (&quot;Mathspace&quot;,
              &quot;us&quot;, or &quot;we&quot;) for our website
              (www.mathspace.co) and mobile applications.
            </p>
            <p className="paragraph">
              This Privacy Policy explains how we collect, use, store and
              disclose the personal information you provide to us as part of
              your use of our services. With respect to personal information,
              Mathspace is referring to information which can be used to
              personally identify a user, such as full name, email address,
              school name or a photograph.
            </p>
          </section>
          <section>
            <h2 className="subTitle">Collection of Personal Information</h2>
            <p className="paragraph">
              We take the information you provide to us very seriously, and we
              strive to put you in control of decisions around that information.
            </p>
            <p className="paragraph">
              Mathspace collects the following information about you and your
              use of our services:
            </p>
            <h3 className="heading">Personal information.</h3>
            <p className="paragraph">
              When you register for, browse and/or use our services, you may
              provide Mathspace with &quot;personal information&quot; (such as
              your full name, email address or a photograph) that can be used to
              identify you. For School Users, your personal information is also
              presented to educators in your school or district.
            </p>
            <h3 className="heading">
              Information about your use of our services and other user-
              provided information.
            </h3>
            <p className="paragraph">
              We may collect usage information about your use of certain
              features of our services, such as the number of problems you have
              attempted, the number of videos you have viewed and the amount of
              time spent to complete a problem. This enables us to better tailor
              educational experiences that are most appropriate for you.
            </p>
            <h3 className="heading">Location information.</h3>
            <p className="paragraph">
              We may collect and use information about your location (such as
              your country) to provide you with tailored educational experiences
              for your region, but we do not collect the precise geolocation of
              you or your device.
            </p>
          </section>
          <section>
            <h2 className="subTitle">
              Mathspace uses personal information in the following ways:
            </h2>
            <h3 className="heading">
              To enhance our services and the services we provide.
            </h3>
            <p className="paragraph">
              Mathspace uses the personal information you provide or that we
              collect to enhance our relationship with you and to operate,
              maintain, enhance and provide all of the features and services
              that we provide. Mathspace, for instance, remembers your recent
              activity so we can recommend the most appropriate content for you
              on your next visit.
            </p>
            <h3 className="heading">
              To understand how you and other users use our services.
            </h3>
            <p className="paragraph">
              Mathspace uses any non-personally identifiable information that
              you provide or that we collect from users in an aggregated format
              to understand and analyze the usage trends, learning behaviors and
              preferences of our users, to improve the way our services work and
              look, and to create new features and functionality.
            </p>
            <h3 className="heading">Ownership of Data for School Users</h3>
            <p className="paragraph">
              In addition to presenting student data within our service we
              provide Schools the ability to download data of student activity
              on our Services to a CSV file. This data is owned by the School
              and continues to be the property of and under the control of the
              School.
            </p>
            <h3 className="heading">Data Retention and Backup</h3>
            <p className="paragraph">
              Any user may request a deletion of account details at any time.
              School administrators may also request a deletion of account
              details at any time on behalf of their School users. In such cases
              we will first allow the school to download any data to a CSV file
              for their ownership. We will then proceed to delete any personal
              data including names, emails and School name from our database. We
              will maintain deidentified transactional data for the purposes of
              improving our adaptive recommendations to all users which is a
              core part of our service.
            </p>
            <p className="paragraph">
              For all account deletion requests we may continue to store data on
              our backup databases for a period of up to 90 days as part of our
              regular backup processes for restoring user data in case of
              emergency.
            </p>
            <h3 className="heading">Backup Measures</h3>
            <p className="paragraph">
              <ul>
                <li>
                  Database backups are produced daily by an automated system.
                </li>
                <li>Database backups are stored encrypted with AES-256.</li>
                <li>Database backups are kept up to 90 days.</li>
                <li>
                  Any data requested to be deleted will be retained for the 90
                  days of backups only.
                </li>
                <li>
                  Our Recovery Time Objective is 8 hours and Recovery Point
                  Objective is 24 hours.
                </li>
                <li>
                  Audit logs for site users are kept only for admin user
                  transactions, and are stored permanently. The elements stored
                  are timestamp, description of changes, and user ID, and kept
                  as a history against each admin user and affected record.
                </li>
                <li>
                  Audit logs are visible only to admin users. Only engineers are
                  able to access the log storage to delete audit logs.
                </li>
              </ul>
            </p>
          </section>
          <section>
            <h2 className="subTitle">Our Approach to Data Security</h2>
            <h3 className="heading">
              Data security is important to you, and to us.
            </h3>
            <p className="paragraph">
              Mathspace uses a combination of physical, managerial and technical
              safeguards designed to preserve the integrity and security of your
              personal information and other information we store in connection
              with our services. For example, when you enter sensitive
              information, we encrypt the transmission of that information using
              secure socket layer technology (SSL) or similar technologies.
              However, no data transmissions over the internet can be guaranteed
              to be 100% secure. We take every precaution available to protect
              all data provided to us in the educational pursuit of digital
              content.
            </p>
            <p className="paragraph">
              Mathspace uses Amazon Web Services to host our website, with
              personal information stored in an encrypted database. Our website
              is hosted in the United States.
            </p>
            <h2 className="heading">Data Breaches</h2>
            <p className="paragraph">
              If we learn of a data security incident that compromises or
              appears to compromise your personal information, then we will
              attempt to notify you electronically so that you can take
              appropriate protective steps. We may also post a notice on our
              website if a data security incident occurs.
            </p>
            <p className="paragraph">
              <ul>
                <li>
                  Data breaches should be reported immediately to the Mathspace
                  support team with full and accurate details of the incident,
                  including who is reporting the incident, what type of incident
                  it is, if the data relates to people, and how many people are
                  involved. Contact details are{' '}
                  <Anchor href="mailto:security@mathspace.co">
                    security@mathspace.co
                  </Anchor>{' '}
                  and{' '}
                  <Anchor href="mailto:suppport@mathspace.co">
                    suppport@mathspace.co
                  </Anchor>
                  .
                </li>
                <li>
                  Our Data Breach Policy describes a response plan with the
                  following stages:
                  <ol>
                    <li>
                      Contain the breach and make a preliminary assessment
                    </li>
                    <li>Evaluate risks associated with the breach</li>
                    <li>Notification of the breach</li>
                    <li>Review and respond to prevent future breaches</li>
                  </ol>
                </li>
                <li>
                  Mathspace will immediately notify affected users and conduct
                  an internal investigation of the breach, and remedy as
                  appropriate. We attempt to respond quickly to any data breach
                  through the following measures:
                  <ul>
                    <li>
                      Automated vulnerability scanning will immediately detect
                      changes to files that match malware signatures.
                    </li>
                    <li>
                      Daily code deployment process raises warnings for other
                      unexpected changes to files.
                    </li>
                  </ul>
                </li>
              </ul>
            </p>
            <h3 className="heading">Transmission of Data</h3>
            <p className="paragraph">
              All website data is transmitted over HTTPS, with preference for
              TLS 1.2. Please see our A+ rating with Qualys SSL Server Test:{' '}
              <Anchor href="https://www.ssllabs.com/ssltest/analyze.html?d=mathspace.co">
                https://www.ssllabs.com/ssltest/analyze.html?d=mathspace.co
              </Anchor>
              .
            </p>
            <p className="paragraph">
              Other protocols in place for backend processes are also always
              encrypted, and make use of TLS 1.2 or SSLv3.
            </p>
            <h3 className="heading">Technical Security Architecture</h3>
            <p className="paragraph">
              Mathspace makes use of the following security architecture to
              insure data privacy.
              <ul>
                <li>Layered defense approach to security architecture.</li>
                <li>CloudFlare to mitigate against DDOS attacks.</li>
                <li>
                  Web application firewall to detect and prevent common web
                  application attacks and intrusions.
                </li>
                <li>
                  HTTPS enforced through HSTS and HSTS preload registration.
                </li>
                <li>Single-sign on for authentication is supported.</li>
                <li>Secured email transmission.</li>
                <li>Automated vulnerability scanning.</li>
                <li>
                  Firewall whitelists are configured to control access to
                  non-public servers.
                </li>
                <li>
                  Masking and stripping of personal information whenever not
                  strictly required.
                </li>
                <li>Data is encrypted at rest and in transmission.</li>
                <li>
                  Hosting provider (Amazon Web Services) is ISO 27018 certified
                  and verified by an independent third party assessor.
                </li>
                <li>
                  User-based and role-based permissions are implemented to
                  restrict access to information as appropriate.
                </li>
                <li>
                  Penetration testing by an independent third party is conducted
                  on a yearly basis.
                </li>
              </ul>
            </p>
            <h3 className="heading">Encryption and Authentication Protocols</h3>
            <p className="paragraph">
              <h4 className="paragraphTitle">
                Data at rest and data in transit
              </h4>
              <ul>
                <li>All data is encrypted in transit and in rest.</li>
                <li>
                  Database storage is encrypted with AWS RDS encryption
                  features.
                </li>
                <li>
                  Data in transit is secured with HTTPS/TLS 1.2, TLS 1.2 or
                  SSLv3.
                </li>
              </ul>
              <h4 className="paragraphTitle">
                Encryption and authentication mechanisms
              </h4>
              <ul>
                <li>
                  All website data is transmitted over HTTPS, with preference
                  for TLS 1.2. (Please see our A+ rating with Qualys SSL Server
                  Test:{' '}
                  <Anchor href="https://www.ssllabs.com/ssltest/analyze.html?d=mathspace.co">
                    https://www.ssllabs.com/ssltest/analyze.html?d=mathspace.co
                  </Anchor>
                  .)
                </li>
                <li>SAML 2.0 through Shibboleth 2.5.2</li>
                <li>
                  Clever Instant Login through custom Django 1.9.3 integration
                  (OAuth 2.0 Authorization Grant flow)
                </li>
                <li>
                  OAuth 2.0 Authorization Grant flow through custom Django 1.9.3
                  integration
                </li>
                <li>
                  Our SSL certificate is signed with RSA 2048 bits
                  (SHA256withRSA). HTTPS enforced through HSTS and HSTS preload
                  registration.
                </li>
                <li>
                  Protocols in place for backend communication are also always
                  encrypted, and make use of TLS 1.2 or SSLv3.
                </li>
                <li>
                  Data at rest is encrypted with AES-256 and AWS Key Management
                  Service (KMS) which uses a hardware security module to protect
                  our keys.
                </li>
                <li>
                  Passwords are stored using the PBKDF2 algorithm with a SHA256
                  hash and per- user salt. The work factor and algorithm used is
                  frequently updated.
                </li>
                <li>
                  We do not implement our own encryption or cryptography
                  algorithms.
                </li>
                <li>
                  SSO-enabled users are authenticated through the SSO mechanisms
                  above - SAML 2.0 or OAuth 2.0 protocols.
                </li>
                <li>
                  Authorization is managed through a graph-based access control
                  (GBAC) system.
                </li>
              </ul>
              <h4 className="paragraphTitle">Password Authentication</h4>
              <ul>
                <li>
                  SSO-enabled users will not have passwords stored within
                  Mathspace.
                </li>
                <li>
                  Mathspace users without SSO have their passwords stored using
                  the PBKDF2 algorithm with a SHA256 hash and per-user salt. The
                  work factor and algorithm used is frequently updated.
                </li>
                <li>
                  Passwords and other credentials are never stored or
                  transmitted in plaintext in the database nor in logs, nor over
                  insecure protocols.
                </li>
                <li>
                  (SSO-enabled users will not have passwords stored within
                  Mathspace.)
                </li>
                <li>Passwords must be at least 6 characters long.</li>
                <li>Passwords can’t be entirely numeric.</li>
                <li>
                  Passwords may not be similar to user attributes such as
                  first/last name or email.
                </li>
                <li>
                  Passwords may not be one of the 1000 most common passwords.
                  Input/Output Controls
                </li>
                <li>
                  Input controls implemented include error reporting and
                  handling, authorization checks, data consistency checks, and
                  transaction logs.
                </li>
                <li>
                  Processing controls include data validation checks,
                  completeness checks, checksums, and versioning.
                </li>
                <li>
                  Output controls include one-time use links, expiration-based
                  links and output logs.
                </li>
              </ul>
            </p>
          </section>
          <section>
            <h2 className="subTitle">
              Vulnerability Assessment, Identification, Remediation and Patch
              Management
            </h2>
            <p className="paragraph">
              <ul>
                <li>
                  System patches that are security fixes must be applied by a
                  daily automated process.
                </li>
                <li>
                  Systems must run automated vulnerability and malware scanning
                  software.
                </li>
                <li>
                  All code changes must be reviewed by another team member.
                </li>
                <li>
                  All code changes must be scanned by a software security
                  vulnerability scanner.
                </li>
                <li>
                  Penetration tests performed by an external party must be
                  conducted yearly.
                </li>
                <li>
                  Issues arising from the above processes must be urgently
                  attended to assess impact and appropriate prioritization
                </li>
              </ul>
            </p>
          </section>
          <section>
            <h2 className="subTitle">Third Party Service Providers</h2>
            <p className="paragraph">
              Mathspace uses a variety of third-party service providers to
              provide the best possible service to our users such as Intercom
              for customer support, Google Analytics to understand our website
              usage and New Relic to monitor the performance of our servers. We
              may share information with such parties only as far as we need to
              for the purposes of customer support, communication with users and
              for improving our services. We may also allow third-party service
              providers to place and read their own cookies, web beacons and
              similar technologies to collect information through our website.
              This information is collected directly and automatically by these
              third parties, and Mathspace does not participate in these data
              transmissions. Mathspace does not share personally identifiable
              information with these third parties. Mathspace will, wherever
              feasible, contractually obligate our third-party service providers
              to abide by the terms of our Privacy Policy.
            </p>
            <p className="paragraph">
              Mathspace does not conduct any remarketing or retargeting using
              Google Analytics.
            </p>
            <p className="paragraph">
              Except for the purposes provided in our Privacy Policy, Mathspace
              WILL NOT disclose the information that it obtains from you to
              third parties without user’s express written permission, or where
              we believe, in good faith, that the law requires us to disclose
              the information.
            </p>
          </section>
          <section>
            <h2 className="subTitle">Single Sign On Security Protocols</h2>
            <p className="paragraph">
              We support a few SSO protocols:
              <ul>
                <li>SAML2.0 through Shibboleth 2.5.2</li>
                <li>SAML2.0 through Shibboleth 2.5.2</li>
                <li>
                  Clever Instant Login through custom Django 1.9.3 integration
                  (OAuth 2.0 Authorization Grant flow)
                </li>
                <li>
                  OAuth 2.0 Authorization Grant flow through custom Django 1.9.3
                  integration
                </li>
              </ul>
            </p>
            <h4 className="paragraphTitle">Secure Data Exchange</h4>
            <p className="paragraph">
              Districts integrate with Clever to sync their data. Districts send
              a request through Clever to add the Mathspace application, and
              enable Data Sharing with Mathspace. The district is able to select
              how much data to share. Mathspace needs teachers, students,
              sections and schools data, with names. Emails are recommended.
              Mathspace will then be able to sync the data shared through Clever
              Secure Sync. Data accessed from Clever is only transmitted through
              HTTPS/TLS 1.2 encrypted protocols. Mathspace runs a daily
              automated sync task, as well as can sync on demand.
            </p>
            <p className="paragraph">
              Alternatively, districts may upload CSV files onto our SFTP
              server, which can be processed on an automated daily schedule.
              Districts must provide Mathspace with a public key to initiate an
              account. Districts must then upload complete CSV files of
              teachers, students, enrolments, sections and schools with ID, name
              and email records.
            </p>
            <p className="paragraph">
              Data accessed from Clever is only transmitted through HTTPS/TLS
              1.2 encrypted protocols. Data accessed from our SFTP server is
              only transmitted through SSL 2/3 encrypted protocols. All access
              to and from Mathspace servers is through encrypted protocols such
              as HTTPS or SSL.
            </p>
          </section>
          <section>
            <h2 className="subTitle">Use of Cookies</h2>
            <p className="paragraph">
              To provide a personalized learning and high-quality experience for
              our users, we may use various technologies that automatically
              record certain technical information from your browser or device,
              including standard log files, or web beacons. This technical
              information may include your internet protocol (IP) address,
              device or browser type, internet service provider (ISP), referring
              or exit pages, clickstream data, operating system and the dates
              and times that you visit our website. We do this to better
              understand how our users are using our website so we can improve
              site functionality and the services we offer you.
            </p>
            <p className="paragraph">
              Like most websites, whether or not you are a registered member, we
              may send one or more cookies – small text files containing a
              string of alphanumeric characters – to your computer. Cookies
              remember information about your activities on a website and enable
              us to provide you with a more personalized learning experience.
              Mathspace may use both session cookies and persistent cookies. A
              session cookie disappears automatically after you close your
              browser. A persistent cookie remains after you close your browser
              and may be used by your browser on subsequent visits to our
              website. You can, however, remove a persistent cookie at any time.
              Please review your web browser &quot;Help&quot; file to learn the
              proper way to modify your cookie settings. However, without
              cookies you will not have access to certain services and features
              on our website.
            </p>
          </section>
          <section>
            <h2 className="subTitle">
              Changes and Updates to this Privacy Policy
            </h2>
            <p className="paragraph">
              Our Privacy Policy may be updated periodically. Mathspace will
              contact users via email if any policy change diminishes privacy
              rights that they were entitled to prior to those policy changes.
              Please ensure you have added an email address to your Mathspace
              account if you wish to be notified of any Privacy Policy changes.
            </p>
          </section>
          <section>
            <h2 className="subTitle">
              Accessing or Correcting Your Personal Information
            </h2>
            <p className="paragraph">
              You can access the personal information we hold about you by
              contacting us using the details set out below (under &quot;Contact
              Us&quot;). Sometimes, we may not be able to provide you with
              access to all of your personal information and, where this is the
              case, we will tell you why. We may also need to verify your
              identity when you request your personal information. If you think
              that any personal information we hold about you is inaccurate,
              please contact us and we will take reasonable steps to ensure that
              it is corrected.
            </p>
          </section>
          <section>
            <h2 className="subTitle">Making a Complaint</h2>
            <p className="paragraph">
              If you think we have breached any laws relating to privacy, or you
              wish to make a complaint about the way we have handled your
              personal information, you can contact us using the details set out
              below (under &quot;Contact Us&quot;). Please include your name,
              email address and/or telephone number and clearly describe your
              complaint. We will acknowledge your complaint and respond to you
              regarding your complaint within a reasonable period of time. If
              you think that we have failed to resolve the complaint
              satisfactorily, we will provide you with information about the
              further steps you can take.
            </p>
          </section>
          <h2 className="subTitle">Contact Us</h2>
          <section className="contactUsSection">
            <div className="paragraph">
              <div>Mathspace Pty Ltd</div>
              <div>Suite 1102 418a Elizabeth St</div>
              <div>Surry Hills NSW 2010, Australia</div>
              <div>
                <Anchor href="mailto:legal@mathspace.co">
                  legal@mathspace.co
                </Anchor>
              </div>
            </div>
            <div className="paragraph">
              <div>Mathspace Inc.</div>
              <div>
                228 Park Ave S #15992
              </div>
              <div>New York, NY 10003-1502</div>
              <div>
                <Anchor href="mailto:support@mathspace.co">
                  support@mathspace.co
                </Anchor>
              </div>
            </div>
          </section>
          <section>
            <h2 className="subTitle">Federal Compliance Statements</h2>
            <h3 className="heading">
              Children’s Online Privacy Protection Act (COPPA)
            </h3>
            <p className="paragraph">
              The student information provided by the district to the Company
              will be used only for the
            </p>
            <p className="paragraph">
              student’s use of the educational program. The information
              collected will be used strictly for
            </p>
            <p className="paragraph">
              educational purposes and not for any commercial purpose.
            </p>
            <h3 className="heading">
              Family Educational Rights and Privacy Act (FERPA)
            </h3>
            <p className="paragraph">
              Mathspace complies with all requirements of the Family Educational
              Rights and Privacy Act (20 U.S.C. § 1232g; 34 C.F.R. Part 99)
            </p>
            <h3 className="heading">
              Protection of Pupil Rights Amendment (PPRA)
            </h3>
            <p className="paragraph">
              Mathspace complies with all requirements of the PPRA.
            </p>
          </section>
          <SimpleFooter />
        </article>
      </main>
    </Page>
    <style jsx>{`
      .container {
        max-width: 800px;
        margin: 0 auto;
        color: ${colors.cloudBurst};
        padding: 0 24px 30px;
      }
      .contactUsSection {
        display: flex;
        flex-direction: column;
        max-width: 600px;
      }
      .title {
        font-size: ${mobileFontSizes.h1}px;
        font-weight: ${fontWeights.regular};
        line-height: ${lineHeights.h1};
        margin-top: 24px;
        margin-bottom: 12px;
        text-align: center;
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
      .paragraphTitle {
        font-size: ${mobileFontSizes.body}px;
        font-weight: ${fontWeights.regular};
        line-height: ${lineHeights.h4};
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
        .contactUsSection {
          flex-direction: row;
          justify-content: space-between;
        }
        .title {
          font-size: ${desktopFontSizes.h1}px;
        }
        .subTitle {
          font-size: ${desktopFontSizes.h2}px;
        }
        .heading {
          font-size: ${desktopFontSizes.h4}px;
        }
        .paragraphTitle {
          font-size: ${desktopFontSizes.body}px;
        }
      }
    `}</style>
  </Fragment>
);

export default Privacy;
