import format from '../format';

describe('formats a date.', () => {
  it('basic format', () => {
    expect.hasAssertions();
    const date = new Date('June 25 2077 21:30:00');

    expect(format.basic(date)).toBe('2077-06-25');
  });

  it('full format', () => {
    expect.hasAssertions();
    const date = new Date('June 25 2077 21:30:00');

    expect(format.full(date)).toBe('2077-06-25T21:30:00.000');
  });
});
