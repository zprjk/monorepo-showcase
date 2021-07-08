import add from '../add';

describe('adds aditional time to a date.', () => {
  it('adds 1 month, 6 days and 60 seconds to a date', () => {
    expect.hasAssertions();
    const date = new Date('2019-12-25');
    const amount = {
      months: 1,
      days: 6,
      seconds: 60,
    };

    expect(add(date, amount)).toStrictEqual(new Date('2020-01-31T00:01:00'));
  });
});
