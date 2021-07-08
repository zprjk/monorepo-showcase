import _isEmpty from 'lodash/isEmpty';

// #region Private
/**
 * https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_isempty:
 * It's cool and stuff not needing other lib but doing this way is SLOW:
 * https://www.measurethat.net/Benchmarks/Show/6326/0/isempty-vs-you-dont-need-lodash-underscoreisempty
 */
// const _isEmpty = obj =>
//   [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length;
// #endregion

// #region Public
/**
 * Checks if value is an empty object or collection.
 *
 * @param {*} value
 */
function isEmpty(value) {
  return _isEmpty(value);
}
// #endregion

export default isEmpty;
