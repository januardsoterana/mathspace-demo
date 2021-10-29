// @flow

const PROMISE_TIMEOUT = 1000;

/**
 * A factory function which takes a "promise executor" function and returns a
 * new promise.  This promise behaves identically to a standard promise defined
 * with the same executor, **but will resolve early** if the executor fails to
 * resolve before the timeout.
 *
 * @param {*} executor — A callback function which defines the behaviour of
 * this promise.
 * @returns {*} A new promise
 */
const createPromiseWithTimeout = (
  executor: (resolve: () => void, reject: (e: any) => void) => void,
): Promise<void> =>
  new Promise((resolve, reject) => {
    let isPending = true;

    const resolveOnce = () => {
      if (isPending) {
        isPending = false;
        resolve();
      }
    };

    const rejectOnce = e => {
      if (isPending) {
        isPending = false;
        reject(e);
      }
    };

    window.setTimeout(resolveOnce, PROMISE_TIMEOUT);
    executor(resolveOnce, rejectOnce);
  });

/**
 * Format the pathname to replace all numeric ids with ":id" string.
 * It's necessary to avoid including the variable part in the url, e.g. the user's id.
 *
 * @private
 * @param {string} pathname The pathname
 * @returns {string} A string without numeric ids
 */
const formatPathname = (pathname: string) =>
  pathname
    .split('/')
    .map(str => str.replace(new RegExp(/^\d+$/g), ':id'))
    .join('/');

/**
 * Sends an event to Google Analytics in the following format:
 * window.ga('send', 'event', 'CTA', 'clicked', 'https://mathspace.co/accounts/choose-plan#signup1');
 *
 * @param {*} eventLabel The Google Analytics event label
 * @param {*} eventAction Optional. The Google Analytics event action
 * @param {*} eventCategory Optional. The Google Analytics event category
 * @returns {*} A promise which resolve on both failure and success with undefined.
 */
export default (
  eventLabel: string,
  eventAction: string = 'clicked',
  eventCategory: string = 'CTA',
): Promise<void> =>
  createPromiseWithTimeout(resolve => {
    const label = `${formatPathname(window.location.pathname)}#${eventLabel}`;
    if (window.ga) {
      const defaultPromise = window.ga('send', 'event', {
        eventCategory,
        eventAction,
        eventLabel: label,
      });
      const universalPromise = window.ga('universal.send', 'event', {
        eventCategory,
        eventAction,
        eventLabel: label,
      });
      Promise.all([defaultPromise, universalPromise]).then(() => resolve());
    } else {
      resolve();
    }
  });
