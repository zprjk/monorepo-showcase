/* eslint-disable max-classes-per-file */
import isEmpty from '../isEmpty';

describe('checks if a given value is empty.', () => {
  it('empty values', () => {
    expect.assertions(5);

    expect(isEmpty({})).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(null)).toBe(true);
  });

  it('not empty values', () => {
    expect.assertions(5);

    expect(isEmpty({foo: 'bar'})).toBe(false);
    expect(isEmpty(['foo', 'bar'])).toBe(false);
    expect(isEmpty('foo')).toBe(false);
    expect(isEmpty('undefined')).toBe(false);
    expect(isEmpty('null')).toBe(false);
  });
});
