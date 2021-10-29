// @flow

import React from 'react';

import { colors } from 'utils/theme';

type Props = {| color?: string |};
const CloseIcon = ({ color = colors.white }: Props) => (
  <svg width="19" height="19" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.536 9.488l7.034-7.034A1.436 1.436 0 1 0 16.538.42L9.504 7.455 2.469.421A1.436 1.436 0 1 0 .437 2.454L7.47 9.488l-7.05 7.05a1.436 1.436 0 1 0 2.033 2.032l7.05-7.05 7.034 7.034a1.435 1.435 0 0 0 2.032 0 1.436 1.436 0 0 0 0-2.033l-7.034-7.033z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
);

export default CloseIcon;
