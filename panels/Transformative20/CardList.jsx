// @flow

import React, { Fragment } from 'react';

import Card from 'components/Transformative20/Card';

type Props = {|
  winners: Array<{
    type: string,
    name: string,
    school: string,
    description: string,
    image: string,
  }>,
  category: string,
  year: number,
|};
const CardList = ({ winners, category, year }: Props) => (
  <Fragment>
    <div className="container">
      <div className="wrapper">
        <ul className="cardList">
          {winners
            .filter(winner => winner.type === category)
            .filter(winner => winner.year === year)
            .sort((a, b) => {
              if (a.school < b.school) return -1;
              if (a.school > b.school) return 1;
              return 0;
            })
            .map(winner => (
              <Card key={winner.name} winner={winner} />
            ))}
        </ul>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 50px 24px;
      }
      .wrapper {
        max-width: 1228px;
        margin: 0 auto;
      }

      .cardList {
        display: flex;
        flex-wrap: wrap;
        margin: 8px 0;
        padding: 0;
        justify-content: center;
        list-style: none;
      }
    `}</style>
  </Fragment>
);

export default CardList;
