// @flow

import React, { Fragment } from 'react';

import Heading from 'components/CustomerStory/Heading';
import Blockquote from 'components/CustomerStory/Blockquote';
import Paragraph from 'components/CustomerStory/Paragraph';
import Asset from 'components/CustomerStory/Asset';

type Props = {| article: Object |};

const Article = ({ article }: Props) => (
  <Fragment>
    <div className="container">
      {article.map((block, index) => {
        switch (block.type) {
          case 'embedded-asset-block':
            return (
              <Asset
                key={`asset+article+${index}`}
                src={typeof block.content === 'string' ? block.content : ''}
              />
            );
          case 'paragraph':
            return (
              <Paragraph
                key={`paragraph+article+${index}`}
                content={block.content}
              />
            );
          case 'blockquote':
            return (
              <Blockquote
                key={`paragraph+article+${index}`}
                content={block.content}
              />
            );
          case 'heading-1':
            return (
              <Heading
                key={`h1+article+${index}`}
                type={1}
                content={block.content}
              />
            );
          case 'heading-2':
            return (
              <Heading
                key={`h2+article+${index}`}
                type={2}
                content={block.content}
              />
            );
          case 'heading-3':
            return (
              <Heading
                key={`h3+article+${index}`}
                type={3}
                content={block.content}
              />
            );
          default:
            return <Fragment />;
        }
      })}
    </div>
    <style jsx>{``}</style>
  </Fragment>
);

export default Article;
