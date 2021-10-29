// @flow

import { type Curriculum } from 'utils/types';

export const getListofCountries = (data: Array<Curriculum>): Array<string> => {
  const allCountryCodes = data.map(entry => entry.code);
  return allCountryCodes.filter(
    (entry, index) => allCountryCodes.indexOf(entry) >= index,
  );
};

export const getListofStates = (
  country: string,
  data: Array<Curriculum>,
): Array<string> => {
  const allStates = data
    .filter(entry => entry.code === country && entry.country)
    .map(entry => entry.category);
  return allStates
    .filter((entry, index) => allStates.indexOf(entry) >= index)
    .sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    })
    .sort((x, y) => (x === 'Common Core' ? -1 : y === 'Common Core' ? 1 : 0));
};

export const getListofCurriculums = (
  state: string,
  data: Array<Curriculum>,
): Array<{ id: number, title: string, link: string }> => {
  if (!data) return [];
  return data
    .filter(entry => entry.category === state)
    .map(entry => ({
      id: entry.curriculumId || -1,
      title: entry.titleOfCurriculum || '',
      link: entry.link || '',
    }));
};

export const getCTAForCountry = (country: string, data: Array<Curriculum>) => {
  const filteredData = data
    .filter(entry => entry.code === country && entry.ctaLink && entry.ctaText)
    .map(entry => ({
      text: entry.ctaText,
      buttonText: entry.buttonText,
      link: entry.ctaLink,
    }));
  return filteredData[0];
};
