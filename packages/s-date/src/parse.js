import _parseISO from 'date-fns/parseISO';

// #region Public
/**
 * @param {string} dateString - ISO 8601 format
 */
function parse(dateString) {
  return _parseISO(dateString);
}

export default parse;
// #endregion
