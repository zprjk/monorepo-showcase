import User from '../user';
import {getFullName} from '../utils';

describe('typescript test', () => {
  it('my test', () => {
    expect.assertions(1);
    const user: User = {
      name: {
        first: 'José',
        last: 'Rocha',
        middle: 'Pedro',
      },
    };

    expect(getFullName(user)).toBe('José Pedro Rocha');
  });
});
