// @flow

export const processOverallData = schools =>
  schools
    .map(school => ({
      position: parseInt(school[0], 10),
      name: school[1],
      score: school[3]
        ? parseInt(school[3].replace(/[^0-9 | ^.]/g, ''), 10)
        : '--',
    }))
    .slice(0, 10)
    .sort((a, b) => a.position - b.position);

export const processWeeklyData = schools =>
  schools
    .map(school => ({
      position: parseInt(school[0], 10),
      name: school[1],
      score: school[3]
        ? parseInt(school[3].replace(/[^0-9 | ^.]/g, ''), 10)
        : '--',
    }))
    .slice(10, 20)
    .sort((a, b) => a.position - b.position);

export const processScoreData = schools =>
  schools
    .map(school => ({
      position: parseInt(school[0], 10),
      name: school[1],
      score: school[3]
        ? parseInt(school[3].replace(/[^0-9 | ^.]/g, ''), 10)
        : '--',
    }))
    .sort((a, b) => a.position - b.position);
