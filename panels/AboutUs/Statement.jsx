// @flow

import React, { Fragment, useState } from 'react';

import {
  colors,
  fontSizes,
  breakPoints,
  lineHeights,
  fontWeights,
} from 'utils/theme';
import { urlBuilders } from 'utils/urls';

type Props = { country: 'AU' | 'US' };
const Statement = ({ country }: Props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <h3 className="title">
            We condemn racism and support those fighting for justice.
          </h3>
          {!isOpen && (
            <Fragment>
              <p className="closed">
                We know that there is much work to be done in the educational
                technology community around equity and social justice. We must
                do better by our Black students and educators...
              </p>
              <button className="closed" onClick={() => setOpen(true)}>
                Read our statement
                <br />
                <img
                  src={urlBuilders.imageUrl('aboutUs/arrow-down.svg')}
                  alt=""
                />
              </button>
            </Fragment>
          )}
          {isOpen && (
            <Fragment>
              <p className="open">
                Mathspace is an Australian company, and we have been supporting
                educators and students in the United States for several years.
                We know in Australia and the United States there is a long
                history of racism towards Aboriginal People, African Americans,
                and other Indigenous peoples and people of color. Beyond
                slavery, {country === 'AU' ? 'colonisation' : 'colonization'},
                and exclusionary immigration policies, racism still exists in
                the systems and institutions that form the basis of our
                societies today. We are appalled at the recent and historic
                cases of unarmed Black people being killed by police officers.
                As a company, we condemn racism in all forms, and{' '}
                {country === 'AU' ? 'recognise' : 'recognize'} that good
                intentions are no longer enough. At Mathspace we want our
                product to promote anti-racism in the mathematics classroom, and
                provide a curriculum that supports the mathematical success of
                Black students.
              </p>
              <h4 className="open">
                We know that there is much work to be done in the educational
                technology community around equity and social justice. We must
                do better by our Black students and educators.
              </h4>
              <p className="open">
                Although education technology companies intend to increase
                accessibility and equity for all, we know that ed-tech has
                created a wider gap for some students and schools. The digital
                divide was all too apparent when COVID-19 caused school
                shutdowns and many students did not have access to the internet
                or devices to learn from home. We are recommitting to our
                mission statement - to be the right help at the right time for
                EVERY student. In particular, we want to improve the ways we
                support Black students, who are disproportionately affected by
                the digital divide. We also{' '}
                {country === 'AU' ? 'recognise' : 'recognize'} the value that
                Black educators add to the mathematics community, and we are
                committed to doing more to support them and make sure their
                voice is represented in our products.
              </p>
              <h4 className="open">
                We are doing the work of listening and learning to show up in
                more ways for Black students, teachers, friends, family, and
                communities.
              </h4>
              <p className="open">
                We are not where we want to be yet, but we are committed to
                educating ourselves and{' '}
                {country === 'AU' ? 'prioritising' : 'prioritizing'} anti-racism
                and equity in our company practices and in our product. We are
                reviewing our own internal practices and developing a plan to
                improve the way we embed equity and inclusion in our products,
                starting with the formation of a global Diversity, Equity and
                Inclusion Committee. We know the power of mathematics in our own
                lives and we want to make sure that Black students are empowered
                to experience mathematics in all of its beauty. In future
                iterations of our product, we promise to better include the
                voices and experiences of Black students and other minority
                traditionally under-served groups directly in our content.
                Additionally, we are committed to actively recruiting through
                job boards and listings geared towards Black and other minority
                candidates.
              </p>
              <h4 className="open">We believe Black Lives Matter.</h4>
              <p className="open">
                We invite our partners at schools and districts to join us on
                our journey towards building a more equitable world, and to hold
                us accountable as we grow and learn as a company and as
                individuals. We value your input and feedback as we strive to do
                better.
              </p>
              <button className="open" onClick={() => setOpen(false)}>
                {country === 'AU' ? 'Minimise' : 'Minimize'}
                <br />
                <img
                  src={urlBuilders.imageUrl('aboutUs/arrow-up.svg')}
                  alt=""
                />
              </button>
            </Fragment>
          )}
        </div>
      </div>
      <style jsx>{`
        .container {
          padding: 60px 24px 50px;
        }
        .wrapper {
          max-width: 920px;
          margin: 0 auto;
          margin-top: 7px;
          padding: 48px 24px 18px;

          display: flex;
          flex-direction: column;
          align-items: center;

          border-radius: 20px;
          background-color: ${colors.shuttleGray};
          background-image: url(${urlBuilders.imageUrl(
            'aboutUs/statement-bg.svg',
          )});
          background-position: top right;
          background-repeat: no-repeat;
        }
        .title {
          font-size: ${fontSizes.mobile.h2}px;
          margin: 0 0 30px;
          color: ${colors.white};
          line-height: ${lineHeights.h1};
          font-weight: ${fontWeights.semibold};
          text-align: left;
          width: 100%;
        }
        .buttonWrapper {
          max-width: 250px;
          width: 100%;
        }
        p.closed {
          line-height: 1.5;
          color: ${colors.white};
        }
        button.closed {
          font-size: 16px;
          color: ${colors.white};
          border: 0;
          background: transparent;
          line-height: 1.38;
        }
        h4.open {
          margin: 9px 0;
          color: ${colors.white};
          width: 100%;
        }
        p.open {
          font-size: 14px;
          line-height: 1.6;
          color: ${colors.white};
        }
        button.open {
          font-size: 16px;
          color: ${colors.white};
          border: 0;
          background: transparent;
          line-height: 1.38;
        }

        @media (min-width: ${breakPoints.medium}px) {
          .wrapper {
            margin-top: 7px;
            max-width: 920px;
            padding: 48px 95px 18px;
          }
          .title {
            font-size: ${fontSizes.desktop.h2}px;
            margin: 0 0 2px;
          }
          button.closed {
            margin-top: 43px;
          }
          button.open {
            margin-top: 49px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Statement;
