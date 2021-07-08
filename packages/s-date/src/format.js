import _format from 'date-fns/format';

// #region Private
const BASIC_FORMAT = 'yyyy-MM-dd';
const FULL_FORMAT = "yyyy-MM-dd'T'HH:mm:ss.SSS";
// #endregion

// #region Public
/**
 * @param {Date | number} date
 */
function basic(date) {
  return _format(date, BASIC_FORMAT);
}

/**
 * @param {Date | number} date
 */
function full(date) {
  return _format(date, FULL_FORMAT);
}

export default {
  basic,
  full,
};
// #endregion
