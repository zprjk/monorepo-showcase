import _forEach from 'lodash/forEach';

// #region Public
/**
 * @param {Array|Object} collection
 * @param {Function} iteratee
 */
function forEach(collection, iteratee) {
  _forEach(collection, iteratee);
}

export default forEach;
// #endregion
