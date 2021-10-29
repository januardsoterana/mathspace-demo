// @flow

import React, { Fragment } from 'react';

import Accordion from 'components/Accordion';
import Anchor from 'components/Anchor';

import { type ClassCode } from 'utils/types';
import { breakPoints, colors, borderRadius, fontSizes } from 'utils/theme';
import sendEvent from 'utils/analytics';

const getListofRegions = (data: Array<ClassCode>): Array<string> => {
  const allRegions = data.map(entry => entry.region.split(', '));
  const flatRegions = [].concat.apply([], allRegions);
  return flatRegions
    .filter((entry, index) => flatRegions.indexOf(entry) >= index)
    .sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    })
    .sort((x, y) => (x === 'Common Core' ? -1 : y === 'Common Core' ? 1 : 0));
};

const getListForRegions = (
  data: Array<ClassCode>,
  region: string,
): Array<ClassCode> =>
  data
    .map(entry => ({
      ...entry,
      region: entry.region.split(', '),
    }))
    .filter(entry => entry.region.includes(region))
    .map(entry => ({ ...entry, region: entry.region.join(', ') }));

type Props = { country: 'AU' | 'US', data: Array<ClassCode> };
const List = ({ country, data }: Props) => {
  const listOfRegions = getListofRegions(data);
  const signupURL =
    country === 'AU'
      ? '/signup/homeschool/join/au/?code='
      : '/signup/homeschool/join/us/?code=';
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          {listOfRegions.map(region => (
            <div key={region} className="accordionWrapper">
              <Accordion title={region} color="cloudBurst" interactive>
                <ul className="list">
                  {getListForRegions(data, region).map((entry, index) => (
                    <Anchor
                      key={entry.courseName}
                      color="cloudBurst"
                      href={`${signupURL}${entry.classCode}`}
                      onClick={event => {
                        event.preventDefault();
                        sendEvent(
                          entry.classCode,
                          'class-code-clicked',
                          'parents-landing',
                        ).then(() => {
                          window.location.assign(
                            `${signupURL}${entry.classCode}`,
                          );
                        });
                      }}
                    >
                      <li
                        className="item"
                        style={{
                          borderTop: index === 0 ? 'none' : '1px solid #fff',
                        }}
                      >
                        <div className="text">{entry.courseName}</div>
                        <div className="button">Get account</div>
                      </li>
                    </Anchor>
                  ))}
                </ul>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .container {
          padding: 20px 24px 70px;
          background-color: ${colors.tropicalBlue};
        }
        .wrapper {
          max-width: 500px;
          width: 100%;
          margin: 0 auto;
        }
        .accordionWrapper + .accordionWrapper {
          margin-top: 10px;
        }
        .list {
          background-color: #ecf4fc;
          border-radius: ${borderRadius.default}px;
          margin: 0;
          padding: 0;
        }
        .item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: ${fontSizes.mobile.h3}px;
          padding: 10px 0;
          margin: 0 15px;
          border-top: 1px solid ${colors.white};
        }
        .button {
          padding: 5px 15px;
          background-color: ${colors.lochmara};
          border-radius: ${borderRadius.default}px;
          color: ${colors.white};
        }

        @media (min-width: ${breakPoints.medium}px) {
          .item {
            font-size: ${fontSizes.desktop.h3}px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default List;
