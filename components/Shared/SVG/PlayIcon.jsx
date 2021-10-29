// @flow

import React from 'react';

type Props = {| color?: string |};
const PlayIcon = ({ color = '#FFFFFF' }: Props) => (
  <svg width="17" height="23" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M.313 2.018v18.57A2 2 0 0 0 3.5 22.2l12.613-9.285a2 2 0 0 0 0-3.221L3.499.407A2 2 0 0 0 .313 2.018z"
      fill={color}
      fillRule="evenodd"
    />
  </svg>
);

export default PlayIcon;
