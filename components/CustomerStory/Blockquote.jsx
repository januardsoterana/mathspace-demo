// @flow

import React, { Fragment } from 'react';

import Paragraph from 'components/CustomerStory/Paragraph';
import { fontSizes, breakPoints, colors } from 'utils/theme';

type Props = {| content: Array<Object> |};
const Blockquote = ({ content }: Props) => (
  <Fragment>
    <blockquote className="blockquote">
      {typeof content === 'object' &&
        content.map((item, index) => (
          <Paragraph
            key={`blockquote+paragraph+${index}+${item.content}`}
            color={colors.santasGray}
            content={item.content}
            type="blockquote"
          />
        ))}
    </blockquote>
    <style jsx>{`
      .blockquote {
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: ${fontSizes.mobile.bodyLG}px;
        position: relative;
        padding-left: 20px;
        border-left: 3px solid ${colors.santasGray};
        font-style: italic;
        z-index: -1;
      }
      @media (min-width: ${breakPoints.medium}px) {
        .blockquote {
          font-size: ${fontSizes.desktop.bodyLG}px;
        }
      }
    `}</style>
  </Fragment>
);

export default Blockquote;
