// @flow

import React, { Fragment } from 'react';
import Link from 'next/link';

import Page from 'components/Page';
import SimpleHeader from 'components/SimpleHeader';
import SimpleFooter from 'components/SimpleFooter';
import Anchor from 'components/Anchor';

import {
  colors,
  mobileFontSizes,
  desktopFontSizes,
  breakPoints,
  fontWeights,
  lineHeights,
} from 'utils/theme';
import { urls } from 'utils/urls';
import { type CountryCodes } from 'utils/types';

type Props = {|
  country: CountryCodes,
|};

type State = {||};

class TermsOfUse extends React.Component<Props, State> {
  static async getInitialProps({ req, query }: any) {
    let country;
    if (req != null) {
      if (
        req.headers['cf-ipcountry'] === 'AU' ||
        (req.query.country && req.query.country === 'AU')
      ) {
        country = 'AU';
      } else {
        country = 'US';
      }
    } else {
      ({ country } = query);
    }
    return { country };
  }

  render() {
    return (
      <Fragment>
        <SimpleHeader />
        <Page title="Terms and Conditions :: Mathspace">
          <main className="container">
            <article>
              <section>
                <h1 className="title">Mathspace Terms and Conditions</h1>
                <p className="paragraph">
                  Thank you for visiting our website. This website is owned and
                  operated by Mathspace Pty Ltd (ABN 18 142 406 308). By
                  accessing and/or using this website and our services, you
                  agree to these terms and conditions, which include our Privacy
                  Policy (available at mathspace.co/public/privacy-policy)
                  (Terms). You should review our Privacy Policy and these Terms
                  carefully and immediately cease using our website or services
                  if you do not agree to these Terms.
                </p>
                <p className="paragraph">
                  In these Terms, &#39;us&#39;, &#39;we&#39; and &#39;our&#39;
                  means Mathspace Pty Ltd.
                </p>
                <div className="divider" />
                <p className="paragraph">
                  In these Terms, there are two categories of
                  &quot;subscriber&quot;:
                </p>
                <p className="paragraph">
                  <ol>
                    <li>
                      Personal Users (Mathspace Essentials Learners, Mathspace
                      Plus Learners and Parents linked to a Mathspace Plus
                      Learner&#39;s account; and
                    </li>
                    <li>
                      School Users (Mathspace for Schools Learners, Mathspace
                      for Schools Educators and Parents linked to a Mathspace
                      for Schools Learner&#39;s account).
                    </li>
                  </ol>
                </p>
                <p className="paragraph">
                  In the case of a Learner who is not at the time 18 years of
                  age, permission must be sought by that Learner&#39;s school or
                  by a parent, tutor, educator, guardian or carer of that
                  Learner before signing up to this website or to use our
                  services.
                </p>
              </section>
              <section>
                <h2 className="subTitle">
                  Who is responsible for what you see and do on Mathspace?
                </h2>
                <p className="paragraph">
                  Any information or content publicly posted or privately
                  transmitted through our services is the sole responsibility of
                  the person from whom such content originated, and you access
                  all such information and content at your own risk. Mathspace
                  will not be liable for any errors or omissions in that
                  information or content or for any damages or loss you might
                  suffer in connection with it.
                </p>
                <p className="paragraph">
                  Mathspace does not and cannot control the content of posts by
                  individual users. As such, all users and subscribers release
                  Mathspace from all liability unrelated to its actions or
                  omissions which it cannot control and acknowledge that
                  Mathspace does not have a duty to take action regarding how
                  that content is interpreted.
                </p>
                <p className="paragraph">
                  Each subscriber accepts that if Mathspace becomes aware of any
                  posts which may be considered inappropriate, it will remove
                  them immediately without the consent of the user being
                  obtained.
                </p>
                <p className="paragraph">
                  You, as a user, are responsible for the content you contribute
                  to our website. You warrant to keep your registration
                  information accurate and current.
                </p>
              </section>
              <section>
                <h2 className="subTitle">Warranties</h2>
                <p className="paragraph">
                  Each subscriber warrants that all information contained in any
                  application for registration is true and acknowledges that it
                  is their responsibility to advise Mathspace within seven (7)
                  days of that information changing in any way including, but
                  not limited to, updating email addresses by means of the
                  relevant link.
                </p>
                <p className="paragraph">
                  Each subscriber will take, and where applicable will ensure
                  that the relevant user takes, all reasonable steps to prevent
                  the user&#39;s password becoming known to any other person.
                  The subscriber will advise Mathspace immediately if the
                  subscriber or the relevant user becomes aware of any
                  unauthorised use of the password.
                </p>
              </section>
              <section>
                <h2 className="subTitle">Special provisions / Copyright</h2>
                <p className="paragraph">
                  Each subscriber acknowledges that any website material is the
                  property of Mathspace and is the copyright of Mathspace.
                  Except as permitted by law or these Terms, the subscriber will
                  not, and where applicable the subscriber will procure that the
                  relevant user will not, allow any other person to use the
                  website or reproduce or otherwise transmit any website
                  material in any way whatsoever without first obtaining the
                  written permission of Mathspace. Mathspace reserves its
                  entitlements under Part VB and Section 183 of the Copyright
                  Act. [For information about Part VB (educational use) and
                  Section 183 (government use) visit www.copyright.com.au and
                  www.copyright.org.au].
                </p>
                <p className="paragraph">
                  An educator user, may use website material for classroom
                  instructional purposes such as projecting it onto a
                  whiteboard, displaying it by means of other electronic media
                  or printing it and distributing it to his or her students.
                  However, the use of the website materials by an educator user,
                  for any purpose other than the instruction of the students in
                  their class at a time when their right to use the website
                  materials is current, will constitute a breach of these Terms.
                </p>
              </section>
              <section>
                <h2 className="subTitle">Disputes</h2>
                <p className="paragraph">
                  Each subscriber and relevant user will resolve any claim,
                  cause of action or dispute its has with us arising out of or
                  relating to these Terms or Mathspace exclusively in the State
                  of New South Wales, Australia, and agrees to submit to the
                  exclusive jurisdiction of such courts for the purpose of
                  litigating all such claims. The laws of the State of New South
                  Wales will govern these Terms, as well as any claim that might
                  arise between you and us, without regard to conflict of law
                  provisions.
                </p>
              </section>
              <section>
                <h2 className="subTitle">Indemnity</h2>
                <p className="paragraph">
                  Each subscriber agrees to indemnify and hold Mathspace, its
                  affiliates, officers, agents, employees, contractors and
                  partners harmless from and against any and all claims,
                  liabilities, damages, losses and legal costs arising from or
                  in any way related to any third party claims relating to (a)
                  the user&#39;s and/or subscriber&#39;s use of our services
                  (including any actions taken by a third party using the
                  user&#39;s or subscriber&#39;s account), and (b) breach of
                  these Terms. In the event of such a claim, suit or action
                  (Claim), we will provide notice of the Claim to the contact
                  information we have for your account (failure to deliver will
                  not eliminate your indemnification obligations contained
                  herein).
                </p>
                <p className="paragraph">
                  Each subscriber acknowledges that circumstances may exist
                  where damages are not an appropriate remedy and Mathspace is
                  entitled to obtain injunctive relief.
                </p>
                <p className="paragraph">
                  If at any time a subscriber or relevant user is referred
                  through our website to any other publication or information
                  source, that referral will be made by Mathspace in good faith.
                  However, Mathspace accepts no responsibility for any error in
                  the information supplied by such other publication or source.
                </p>
              </section>
              <section>
                <h2 className="subTitle">Payments</h2>
                <p className="paragraph">
                  There are three products on Mathspace:
                </p>
                <p className="paragraph">
                  (1) Mathspace Essentials (2) Mathspace Plus and; (3) Mathspace
                  for Schools
                </p>
                <p className="paragraph">
                  The terms and conditions for each product vary. Please ensure
                  you read the section that is relevant to you.
                </p>
                <p className="paragraph">
                  A Mathspace Essentials subscription allows a student to access
                  the eBook. A subscription may be procured through the sign up
                  or within the settings section of the Mathspace product.
                  Subscriptions commence when we make them available to the
                  student. They incur an upfront payment, which lasts for 12
                  months. Subscriptions automatically renew at the end of the 12
                  month period, unless the subscription is cancelled or changed.
                </p>
                <p className="paragraph">
                  Credit/Debit card is the only accepted payment method for
                  Mathspace Essentials subscriptions.
                </p>
                <p className="paragraph">
                  If a student downgrades from a Mathspace Plus to a Mathspace
                  Essentials subscription, then upon downgrade, the saved credit
                  card will incur an upfront cost for 12 months. If there is any
                  remaining Mathspace Plus credit, this will be used before we
                  charge the saved credit card.
                </p>
                <p className="paragraph">
                  Where applicable, Mathspace will debit the credit card,
                  particulars of which are given in an application, with a
                  subscription fee as identified in the application.
                </p>
                <p className="paragraph">
                  All payments are processed through{' '}
                  <Link href={urls.stripeDocumentation} passHref>
                    <Anchor>Stripe&#39;s secure payment gateway</Anchor>
                  </Link>
                  . Mathspace does not directly collect or store any credit card
                  information.
                </p>
                <p className="paragraph">
                  Each subscriber (on its own behalf and on behalf of the
                  relevant user) acknowledges that Mathspace will collect
                  personal information about subscribers and users which is
                  disclosed in an application for the purposes of the operation
                  of the website and provision of its services, and authorises
                  Mathspace to do so.
                </p>
                <p className="paragraph">
                  Mathspace may terminate its arrangements with a subscriber or
                  user immediately if at any time a subscriber or user is in
                  breach of the subscriber&#39;s or user&#39;s obligations
                  (including as a result of some act or omission by the
                  subscriber or user).
                </p>
              </section>
              <section>
                <h2 className="subTitle">Mathspace Plus Subscriptions</h2>
                <p className="paragraph">
                  A Mathspace Plus subscription allows a student to access the
                  eBook, the adaptive learning engine and we will track data on
                  the student&#39;s progress. A subscription may be procured
                  through the sign up or within the settings section of the
                  Mathspace product. Subscriptions commence when we make them
                  available to student. They incur a weekly payment.
                </p>
                <p className="paragraph">
                  Subscriptions automatically renew at the end of each week,
                  unless the subscription is cancelled or changed.
                </p>
                <p className="paragraph">
                  Credit/Debit card is the only accepted payment method for
                  Mathspace Plus subscriptions.
                </p>
                <p className="paragraph">
                  If a student upgrades from a Mathspace Essentials to a
                  Mathspace Plus subscription then upon upgrade any remaining
                  Mathspace Essentials credit will be used before we charge the
                  saved credit card.
                </p>
                <p className="paragraph">
                  Where applicable, Mathspace will debit the credit card,
                  particulars of which are given in an application, with a
                  subscription fee as identified in the application.
                </p>
                <p className="paragraph">
                  All payments are processed through{' '}
                  <Link href={urls.stripeDocumentation} passHref>
                    <Anchor>Stripe&#39;s secure payment gateway</Anchor>
                  </Link>
                  . Mathspace does not directly collect or store any credit card
                  information.
                </p>
                <p className="paragraph">
                  Each subscriber (on its own behalf and on behalf of the
                  relevant user) acknowledges that Mathspace will collect
                  personal information about subscribers and users which is
                  disclosed in an application for the purposes of the operation
                  of the website and provision of its services, and authorises
                  Mathspace to do so.
                </p>
                <p className="paragraph">
                  Mathspace may terminate its arrangements with a subscriber or
                  user immediately if at any time a subscriber or user is in
                  breach of the subscriber&#39;s or user&#39;s obligations
                  (including as a result of some act or omission by the
                  subscriber or user).
                </p>
                <h2 className="subTitle">
                  Mathspace for Schools Subscriptions
                </h2>
                <p className="paragraph">
                  For our school customers we enter into separate / bespoke
                  ordering arrangements.
                </p>
                <p className="paragraph">
                  <em className="italics">
                    Please note that, in Australia, our services come with
                    guarantees that cannot be excluded under the Australian
                    consumer law. Nothing in these terms purports to modify or
                    exclude the conditions, warranties and undertakings, and
                    other legal rights, under the Australian Competition and
                    Consumer Act and other laws. Any and all other warranties or
                    conditions which are not guaranteed by the Australian
                    Consumer Law or the Competition and Consumer Regulation 2010
                    are expressly excluded where permitted, including liability
                    for incidental or consequential damages caused by breach of
                    any express or implied warranty or condition.
                  </em>
                </p>
              </section>
              <section>
                <h2 className="subTitle">
                  Mathspace Promotions and Sponsorships.
                </h2>
                <p className="paragraph">
                  Mathspace has partnered with Westpac Banking Corporation (ABN
                  33 007 457 141) to run a sponsorship promotion in Australia.
                </p>
                <p className="paragraph">
                  Mathspace will permit Australian users to register for access
                  to Mathspace Essentials using their email address without
                  being required to pay any fees to Mathspace courtesy of a
                  sponsorship from Westpac.
                </p>
              </section>
              <section>
                <h2 className="subTitle">Linked sites</h2>
                <p className="paragraph">
                  Our website may contain links to websites operated by third
                  parties. Those links are provided for convenience and may not
                  remain current or be maintained. Unless expressly stated
                  otherwise, we do not endorse and are not responsible for the
                  content on those linked websites and have no control over or
                  rights in those linked websites.
                </p>
              </section>
              <section>
                <h2 className="subTitle">Termination</h2>
                <p className="paragraph">
                  Each subscriber and/or user acknowledges that Mathspace is
                  entitled to terminate its arrangement with them for cause if
                  there has been a breach of these Terms, the Privacy Policy or
                  otherwise there is a risk of possible legal exposure for us.
                  You will be notified via email or the next time you attempt to
                  access your account.
                </p>
                <p className="paragraph">
                  Each subscriber and/or user acknowledges that termination for
                  any reason will not entitle the subscriber to a refund of any
                  payments made to Mathspace prior to the date of such
                  termination.
                </p>
                <p className="paragraph">
                  Any notice given under these Terms must be in writing. Notices
                  given to Mathspace should be forwarded to{' '}
                  <Anchor href="mailto:legal@mathspace.co">
                    legal@mathspace.co
                  </Anchor>{' '}
                  and notices to be given to a subscriber or user will be
                  forwarded to the email address specified in that person&#39;s
                  application.
                </p>
                <p className="paragraph">
                  Mathspace will refund any subscriber payments upon receipt of
                  a written submission from the subscriber that the website or
                  services do not deliver that which they claim to provide.
                </p>
                <p className="paragraph">
                  Refunds will not be given where the subscriber is using
                  systems other than those identified in the &#39;Systems
                  requirements&#39; or where the subscriber is misusing the
                  system.
                </p>
              </section>
              <section>
                <h2 className="subTitle">Unacceptable activity</h2>
                <p className="paragraph">
                  You must not do any act that we would deem to be
                  inappropriate, is unlawful or is prohibited by any laws
                  applicable to our website, including but not limited to:
                </p>
                <p className="paragraph">
                  <ul>
                    <li>
                      any act that would constitute a breach of either the
                      privacy (including uploading private or personal
                      information without an individual&#39;s consent) or any
                      other of the legal rights of individuals;
                    </li>
                    <li>
                      using this website to defame or libel us, our employees or
                      other individuals;
                    </li>
                    <li>
                      uploading files that contain viruses that may cause damage
                      to our property or the property of other individuals; or
                    </li>
                    <li>
                      posting or transmitting to this website any non-authorised
                      material including, but not limited to, material that is,
                      in our opinion, likely to cause annoyance, or which is
                      defamatory, racist, obscene, threatening, pornographic or
                      otherwise or which is detrimental to or in violation of
                      our systems or a third party&#39;s systems or network
                      security.
                    </li>
                  </ul>
                </p>
                <p className="paragraph">
                  If we allow you to post any information to our website, we
                  have the right to take down this information at our sole
                  discretion and without notice.
                </p>
              </section>
              <section>
                <h2 className="subTitle">Warranties and disclaimers</h2>
                <p className="paragraph">
                  To the maximum extent permitted by law, including the
                  Australian Consumer Law, we make no warranties or
                  representations about this website or its content, including
                  but not limited to warranties or representations that they
                  will be complete, accurate or up-to-date, that access will be
                  uninterrupted or error-free or free from viruses, or that this
                  website will be secure.
                </p>
                <p className="paragraph">
                  We reserve the right to restrict, suspend or terminate without
                  notice your access to this website, any content, or any
                  feature of this website at any time without notice and we will
                  not be responsible for any loss, cost, damage or liability
                  that may arise as a result.
                </p>
                <h2 className="subTitle">Liability</h2>
                <p className="paragraph">
                  To the maximum extent permitted by law, including the
                  Australian Consumer Law, in no event shall we be liable for
                  any direct and indirect loss, damage or expense – irrespective
                  of the manner in which it occurs – which may be suffered due
                  to your use of our website and/or the information or materials
                  contained on it, or as a result of the inaccessibility of this
                  website and/or the fact that certain information or materials
                  contained on it are incorrect, incomplete or not up-to-date.
                </p>
              </section>
              <section>
                <h2 className="subTitle">Reservation of Rights</h2>
                <p className="paragraph">
                  Mathspace reserves the right to alter its product and pricing
                  systems at any time.
                </p>
              </section>
              <section>
                <h2 className="subTitle">Enquiries</h2>
                <p className="paragraph">
                  All enquiries and comments regarding these Terms should be
                  made to:
                </p>
                <section className="enquiriesSection">
                  <p className="paragraph">
                    <div>Mathspace Pty Ltd</div>
                    <div>ABN 18 142 406 308</div>
                    <div>Suite 1102, 418A Elizabeth St</div>
                    <div>Surry Hills NSW 2010, Australia</div>
                    <Anchor href="mailto:legal@mathspace.co">
                      legal@mathspace.co
                    </Anchor>
                  </p>
                  <p className="paragraph">
                    <div>Mathspace Inc.</div>
                    <div>228 Park Ave S #15992</div>
                    <div>New York NY 10003-1502</div>
                    <Anchor href="mailto:legal@mathspace.co">
                      legal@mathspace.co
                    </Anchor>
                  </p>
                </section>
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
          .paragraph {
            margin-bottom: 20px;
          }
          .divider {
            margin: 20px 0;
            border-bottom: 1px solid ${colors.porcelain};
          }
          .italics {
            font-style: italic;
          }
          .enquiriesSection {
            display: flex;
            flex-direction: column;
            max-width: 600px;
          }

          @media (min-width: ${breakPoints.medium}px) {
            .title {
              font-size: ${desktopFontSizes.h1}px;
            }
            .subTitle {
              font-size: ${desktopFontSizes.h2}px;
            }
            .enquiriesSection {
              flex-direction: row;
              justify-content: space-between;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default TermsOfUse;
