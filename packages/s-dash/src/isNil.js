import _isNil from 'lodash/isNil';

// #region Public
/**
 * Checks if value is null or undefined.
 * @param {*} value
 */
function isNill(value) {
  return _isNil(value);
}

export default isNill;
// #endregion
