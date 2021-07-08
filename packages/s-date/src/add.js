import _addMonths from 'date-fns/addMonths';
import _addDays from 'date-fns/addDays';
import _addSeconds from 'date-fns/addSeconds';

// #region Public
/**
 * Adds aditional time to a date.
 *
 * @param {Date | number} date
 * @param {{months: number, days: number, seconds: number}} amount
 * @return {Date} the new date
 */
function add(date, amount) {
  let newDate = Number.isInteger(date) ? new Date(date) : date;

  if (amount.months) newDate = _addMonths(newDate, amount.months);
  if (amount.days) newDate = _addDays(newDate, amount.days);
  if (amount.seconds) newDate = _addSeconds(newDate, amount.seconds);

  return newDate;
}
// #endregion

export default add;
