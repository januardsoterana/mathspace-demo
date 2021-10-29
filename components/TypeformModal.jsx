// @flow

import React, { Fragment, useState, useEffect } from 'react';

import Modal from 'components/Modal';
import { breakPoints } from 'utils/theme';

type Props = {
  onClose: () => void,
  typeFormId: string,
};
const TypeformModal = ({ typeFormId, onClose }: Props) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    let MQL = null;
    function handleMediaQueryChange() {
      if (MQL == null) return;
      setMatches(MQL.matches);
    }
    // Check because jsdom doesn't have matchMedia
    if (window.matchMedia) {
      MQL = window.matchMedia(`(min-width: ${breakPoints.medium}px)`);
      const mql = MQL;
      mql.addListener(handleMediaQueryChange);
      setMatches(mql.matches);
    }
    return () => {
      if (MQL == null) return;
      MQL.removeListener(handleMediaQueryChange);
    };
  });
  return (
    <Fragment>
      <Modal onClose={onClose}>
        <iframe
          src={`https://mathspace.typeform.com/to/${typeFormId}`}
          title="Wistia video player"
          width={matches ? 748 : 340}
          height={matches ? 522 : 492}
          className="iframe"
        />
      </Modal>
      <style jsx>{`
        .iframe {
          display: block;
          border: none;
        }
      `}</style>
    </Fragment>
  );
};

export default TypeformModal;
