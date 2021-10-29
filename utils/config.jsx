// @flow

const getConfig = (key, fallback) => {
  if (process.env[key] === undefined || process.env[key] === null)
    if (fallback !== undefined) return fallback;
  return process.env[key] || fallback;
};

export const INTERCOM_APP_ID = getConfig('INTERCOM_APP_ID', '');

export const GA_TRACKING_ID = getConfig('GA_TRACKING_ID', '');

export const GA_TRACKING_ID_UNI = getConfig('GA_TRACKING_ID_UNI', '');
