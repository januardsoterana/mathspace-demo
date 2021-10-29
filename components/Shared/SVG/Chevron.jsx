// @flow

import React from 'react';

type Props = {| color: string, strokeWidth?: number |};
const Chevron = ({ color, strokeWidth = 2 }: Props) => (
  <svg width="14" height="9" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1 8l5.698-6L13 8"
      stroke={color}
      strokeWidth={strokeWidth}
      fill="none"
    />
  </svg>
);

export default Chevron;
