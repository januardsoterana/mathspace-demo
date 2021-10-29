// @flow

export const colors = {
  // Primary Colors
  ebony: '#0D0D21',
  astronaut: '#26276D',
  bayOfMany: '#2E3696',
  lochmara: '#0875BE',
  java: '#1CB7C8',
  mountainMeadow: '#1ABC9C',

  // Secondary Colors
  purpleHeart: '#7547D8',
  cornflowerBlue: '#5758F7',
  genoa: '#0B5F4D',
  saffron: '#F4B42E',
  crusta: '#FD7B33',
  cinnabar: '#E74C3C',
  shakespeare: '#3991CB',

  // Greys
  cloudBurst: '#21374D',
  pickledBluewood: '#34495E',
  nevada: '#5E6D7F',
  santasGray: '#9A9DAB',
  iron: '#F1F2F3',
  blackHaze: '#E6E7E7',
  porcelain: '#F1F2F3',
  athensGray: '#F9FAFB',
  shuttleGray: '#5E6D7F',
  snuff: '#E1E2F1',
  darkSnuff: '#F1F1F1',

  // Accent
  iceberg: '#CAEFE7', // Mountain Meadow
  tropicalBlue: '#D5E8F9', // Lochmara
  provincialPink: '#FDEBE8', // Cinnabar
  papayaWhip: '#FFECCF', // Saffron

  // Other
  regentGray: '#808D9A',
  blumine: '#195685',
  white: '#FFFFFF',
  black: '#000000',
  aquamarine: '#88FFE8',
  royalBlue: '#4C66EF',
  deepSeaGreen: '#0B5F4D',
  vulcan: '#0D1E2A',
  mako: '#424548',
  dustyGray: '#9A9A9A',
  shamrock: '#2CD880',
  eastSide: '#8D7FC0',
  chateauGreen: '#40B261',
  surfieGreen: '#0b5f4d',
  hitGray: '#9EACB2',
  grayChateau: '#99A4AF',

  // Added a new colour to cover up the background of a GIF
  alabaster: '#FBFBFB',
};

export const hoverColors = {
  lochmara: '#195E8C',
  java: '#08AABC',
  mountainMeadow: '#16A085',
  cinnabar: '#BF3F32',
  crusta: '#E2720E',
  cornflowerBlue: '#3839BE',
  regentGray: '#A6B2BF',
  dustyGray: '#7B7B7B',
  white: 'rgba(255,255,255,0.7)',
  santasGray: 'rgba(154,157,171,0.7)',
  cloudBurst: 'rgba(52,73,94,0.7)',
};

export const desktopFontSizes = {
  h1: 32,
  h2: 24,
  h3: 32,
  h4: 24,
  body: 16,
  cta: 20,
  subInfo: 16,
  description: 12,
  small: 14,
};

export const mobileFontSizes = {
  h1: 28,
  h2: 20,
  h3: 28,
  h4: 20,
  body: 16,
  cta: 20,
  subInfo: 16,
  description: 12,
  small: 14,
};

export const fontSizes = {
  desktop: {
    h1: 47,
    h2: 29,
    h3: 18,
    bodyLG: 16,
    bodySM: 14,
  },
  mobile: {
    h1: 29,
    h2: 22,
    h3: 18,
    bodyLG: 16,
    bodySM: 14,
  },
};

export const fontStacks = {
  default: `'proxima-nova', 'Helvetica Neue', Helvetica, sans-serif;`,
};

export const fontWeights = {
  light: 300,
  regular: 400,
  semibold: 600,
  bold: 700,
};

export const lineHeights = {
  h1: 0.95,
  h2: 0.95,
  h3: 1.0,
  h4: 1.0,
  body: 1.3,
  cta: 1.0,
  subInfo: 1.0,
  testimony: 1.5,
};

export const borderRadius = {
  default: 4,
  circle: 30,
};

export const transitions = {
  default: '0.15s ease',
  hover: '0.3s ease',
};

export const breakPoints = {
  small: 480,
  medium: 780,
  large: 1024,
  extraLarge: 1280,
};

export const zIndex = {
  infoPanelPattern: 1,
  header: 2,
  menuModal: 3,
};

export const panelGapMargin = { default: 16 };
