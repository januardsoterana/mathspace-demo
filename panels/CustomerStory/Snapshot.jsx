// @flow

import React, { Fragment, useState } from 'react';

import Button from 'components/Button';
import CalendlyModal from 'components/CalendlyModal';
import TypeformModal from 'components/TypeformModal';
import Paragraph from 'components/CustomerStory/Paragraph';
import UnorderedList from 'components/CustomerStory/UnorderedList';
import sendCTAClickEvent from 'utils/analytics';

import {
  colors,
  borderRadius,
  breakPoints,
  fontWeights,
  lineHeights,
} from 'utils/theme';
import { type CountryCodes } from 'utils/types';

type Props = {| content: Array<Object>, logo: string, country: CountryCodes |};
const Snapshot = ({ content, logo, country }: Props) => {
  const [showModal, setModalVisibility] = useState(false);
  const bookDemo = country === 'AU' ? 'book-a-demo-typeform' : 'get-in-touch';
  return (
    <Fragment>
      <div className="container">
        <div className="imageWrapper">
          <img className="image" src={logo} alt="" />
        </div>
        <div className="divider" />
        <div className="contentWrapper">
          {content.map((block, index) => {
            switch (block.type) {
              case 'paragraph':
                return (
                  <Paragraph key={`para+${index}`} content={block.content} />
                );
              case 'unordered-list':
                return <UnorderedList content={block.content} />;
              default:
                return <Fragment />;
            }
          })}
        </div>
        <div className="ctaTitle">Want to learn more?</div>
        <div className="buttonWrapper">
          <Button
            color="lochmara"
            isBlock
            isFilled
            data-event-label={bookDemo}
            onClick={() => {
              sendCTAClickEvent(bookDemo);
              setModalVisibility(true);
            }}
            onKeyPress={() => {
              sendCTAClickEvent(bookDemo);
              setModalVisibility(true);
            }}
          >
            {country === 'AU' ? 'Book a demo' : 'Get in touch'}
          </Button>
        </div>
      </div>
      {showModal && country === 'AU' && (
        <TypeformModal
          typeFormId="ctOtxr"
          onClose={() => setModalVisibility(false)}
        />
      )}
      {showModal && country !== 'AU' && (
        <CalendlyModal
          bookingType={'demo'}
          country={country}
          onClose={() => setModalVisibility(false)}
        />
      )}
      <style jsx>{`
        .container {
          margin: 0 auto;
          border-radius: ${borderRadius.default}px;
          box-shadow: 0px 2px 10px ${colors.blackHaze};
          color: ${colors.cloudBurst};
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          line-height: ${lineHeights.testimony};
        }
        .imageWrapper {
          display: flex;
          padding: 20px 20px 0;
        }
        .image {
          max-width: 150px;
          max-height: 70px;
        }
        .divider {
          margin: 20px 0 0;
          border-top: 1px solid ${colors.blackHaze};
        }
        .contentWrapper {
          padding: 0 20px;
        }
        .buttonWrapper {
          padding: 10px 20px 20px;
        }
        .ctaTitle {
          border-top: 1px solid ${colors.blackHaze};
          padding: 10px 20px 5px;
          font-weight: ${fontWeights.semibold};
        }

        @media (min-width: ${breakPoints.medium}px) {
        }
      `}</style>
    </Fragment>
  );
};

export default Snapshot;
