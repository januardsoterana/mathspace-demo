// @flow

import React, { Fragment } from 'react';
import classnames from 'classnames';
import { colors, fontSizes, breakPoints, fontWeights } from 'utils/theme';

type Props = {|
  content: Array<Object> | string,
  color?: string,
  type?: string,
|};
const Paragraph = ({ content, color = colors.cloudBurst, type }: Props) => (
  <Fragment>
    <p>
      {typeof content === 'object' &&
        content.map(item => {
          if (!item) {
            return null;
          }
          let isBold = false;
          let isItalic = false;
          if (item.mark) {
            item.mark.forEach(mark => {
              if (mark.type === 'bold') isBold = true;
              if (mark.type === 'italic') isItalic = true;
            });
          }
          const paraClass = classnames({
            bold: isBold,
            italics: isItalic,
          });
          return type === 'blockquote' ? (
            <Fragment key={item.content}>
              <span className={paraClass}>{item}</span>
              {item && item.includes('\n') && <br />}
            </Fragment>
          ) : (
            <Fragment key={item.content}>
              <span className={paraClass}>{item.content}</span>
              {item.content && item.content.includes('\n') && <br />}
            </Fragment>
          );
        })}
    </p>
    <style jsx>{`
      .paragraph {
        margin: 20px 0;
        color: ${color};
        font-size: ${fontSizes.mobile.bodyLG}px;
      }
      .bold {
        font-weight: ${fontWeights.semibold};
      }
      .italics {
        font-style: italic;
      }

      @media (min-width: ${breakPoints.medium}px) {
        .paragraph {
          font-size: ${fontSizes.desktop.bodyLG}px;
        }
      }
    `}</style>
  </Fragment>
);

export default Paragraph;
