// @flow

import React, { Fragment } from 'react';

type Props = {| content: Array<Object> |};
const UnorderedList = ({ content }: Props) => {
  if (typeof content !== 'object') return <Fragment />;
  return (
    <Fragment>
      <ul className="list">
        {content.map((listItems, index) => (
          <li key={`${listItems.type}+${index}`}>
            {listItems.content.map(paragraphs => (
              <p key={paragraphs.content} className="paragraph">
                {paragraphs.content}
              </p>
            ))}
          </li>
        ))}
      </ul>
      <style jsx>{`
        .list {
          margin: 0;
        }
        .paragraph {
          margin: 0;
        }
      `}</style>
    </Fragment>
  );
};

export default UnorderedList;
