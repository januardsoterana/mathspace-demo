// @flow
import React from 'react';

const Separator = ({ size, grow }: { size: number, grow?: boolean }) => (
  <>
    <div className="separator" />
    <style jsx>{`
      .separator {
        height: ${size}px;
        width: ${size}px;
        flex-shrink: 0;
        flex-grow: ${grow ? 1 : 0};
      }
    `}</style>
  </>
);

export default Separator;
