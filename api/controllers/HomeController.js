/**
 * Show application name in index page.
 *
 * @returns {string}
 */
const index = () => process.env.APP_NAME;

/**
 * Show route endpoint not found.
 *
 * @returns {string}
 */
const notFound = () => 'Not Found';

export default {
  index,
  notFound,
};
