// @flow

import React from 'react';

import { colors } from 'utils/theme';

type Props = {| color?: string |};
const MenuIcon = ({ color = colors.white }: Props) => (
  <svg width="25" height="19" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.25 0C.56 0 0 .67 0 1.5S.56 3 1.25 3h22.5C24.44 3 25 2.33 25 1.5S24.44 0 23.75 0H1.25zm0 8C.56 8 0 8.67 0 9.5S.56 11 1.25 11h22.5c.69 0 1.25-.67 1.25-1.5S24.44 8 23.75 8H1.25zm-.4 8c-.47 0-.85.67-.85 1.5S.38 19 .85 19h15.3c.47 0 .85-.67.85-1.5s-.38-1.5-.85-1.5H.85z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
);

export default MenuIcon;
