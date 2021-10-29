// @flow

import React, { Fragment } from 'react';

import Page from 'components/Page';
import Hero from 'panels/Transformative20/Hero';
import CardList from 'panels/Transformative20/CardList';
import Footer from 'panels/Home/Footer';
import Error from 'pages/_error';
import { colors, fontSizes, breakPoints, fontWeights } from 'utils/theme';

type Props = {|
  winners: Array<{
    type: string,
    name: string,
    school: string,
    description: string,
    image: string,
  }>,
  year: number,
  category: string,
|};
const Winners = ({ winners, year, category }: Props) => {
  if (!year || !category) return <Error statusCode={404} />;
  if (year !== 2020 && year !== 2019) return <Error statusCode={404} />;
  if (category !== 'teacher' && category !== 'student')
    return <Error statusCode={404} />;
  const categoryDisplay = category === 'teacher' ? 'Teacher' : 'Student';
  return (
    <Fragment>
      <Page>
        <Hero />
        <div className="container">
          <div className="wrapper">
            {category === 'teacher' && (
              <p className="teacherCategoryText">
                We&apos;ve found teachers who are exploring new and innovative
                ways of incorporating technology into maths education and
                helping students to be the best they can be.
              </p>
            )}
            {category === 'student' && (
              <p className="studentCategoryText">
                We&apos;ve found students who are taking initiative in their
                maths learning, who have a growth mindset and who like to help
                others to be the best they can be too.
              </p>
            )}
          </div>
        </div>
        <h3 className="title">
          Our {year} {categoryDisplay} Winners
        </h3>
        <CardList winners={winners} category={category} year={year} />
        <Footer country="AU" />
      </Page>
      <style jsx>{`
        .container {
          padding: 50px 24px;
          background-color: ${colors.pickledBluewood};
        }
        .wrapper {
          color: ${colors.white};
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .title {
          margin: 60px 0 10px;
          text-align: center;
          color: ${colors.cloudBurst};
          font-size: ${fontSizes.mobile.h2}px;
          font-weight: ${fontWeights.semibold};
        }
        @media (min-width: ${breakPoints.medium}px) {
          .title {
            font-size: 36px;
          }
        }
      `}</style>
    </Fragment>
  );
};

Winners.getInitialProps = async ({ req, query }) => {
  const isServerSide = !!req;
  let winners;
  if (isServerSide) {
    const winnersData = await import('public/website/transformative20.json');
    winners = winnersData.default;
  } else {
    const winnersData = await fetch('/website/transformative20.json');
    winners = await winnersData.json();
  }
  return {
    winners,
    year: parseInt(query.year, 10) || '',
    category: query.category || '',
  };
};

export default Winners;
