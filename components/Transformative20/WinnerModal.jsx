// @flow

import React, { Fragment } from 'react';

import Modal from 'components/Modal';
import {
  colors,
  borderRadius,
  fontWeights,
  fontSizes,
  breakPoints,
  lineHeights,
} from 'utils/theme';

type Props = {
  winner: {
    type: string,
    name: string,
    school: string,
    description: string,
    image: string,
  },
  onClose: () => void,
};

const WinnerModal = ({ winner, onClose }: Props) => (
  <Fragment>
    <Modal onClose={onClose}>
      {(!winner.description && (
        <div className="modal">
          <div className="name">
            {winner.name}, {winner.school}
          </div>
          <div className="centredImage">
            <img src={winner.image} alt="" />
          </div>
        </div>
      )) || (
        <div className="modal">
          <div className="name">
            {winner.name}, {winner.school}
          </div>
          <div className="container">
            <div className="leftSection">
              <img src={winner.image} alt="" />
            </div>
            <div className="rightSection">
              <div className="description">
                {winner.description.split('\n').map(paragraph => (
                  <p key={paragraph} className="paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
    <style jsx>{`
      .modal {
        background-color: ${colors.cloudBurst};
        color: ${colors.white};
        border-radius: ${borderRadius.default}px;
        padding: 30px 24px;
        margin: 0 24px;
        height: 100%;
        width: 100%;
      }
      .name {
        margin: 10px 0 40px;
        font-weight: ${fontWeights.semibold};
        font-size: ${fontSizes.mobile.h2}px;
        text-align: center;
        line-height: ${lineHeights.body};
      }
      .centredSection {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .container {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      .centredImage {
        height: 300px;
        text-align: center;
      }
      .centredImage img {
        height: 100%;
      }
      .leftSection {
        height: 250px;
        width: 100%;
        margin-right: 0;
      }
      .leftSection img {
        height: 100%;
      }
      .rightSection {
        width: 100%;
      }
      .description {
        margin-top: 20px;
        max-height: 200px;
        overflow: auto;
      }
      .paragraph {
        margin: 0;
        text-align: left;
      }
      .paragraph + .paragraph {
        margin-top: 10px;
      }

      @media (min-width: ${breakPoints.small}px) {
        .leftSection {
          height: 375px;
        }
        .modal {
          max-width: 400px;
        }
        .description {
          margin-top: 20px;
          max-height: 325px;
          overflow: auto;
        }
      }
      @media (min-width: ${breakPoints.medium}px) {
        .name {
          font-size: ${fontSizes.desktop.h2}px;
          line-height: ${lineHeights.h2};
        }
        .modal {
          max-width: 915px;
        }
        .container {
          flex-direction: row;
        }
        .leftSection {
          max-width: 300px;
          margin-right: 50px;
        }
        .rightSection {
          max-width: 450px;
        }
      }
    `}</style>
  </Fragment>
);

export default WinnerModal;
