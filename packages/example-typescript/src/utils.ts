import User from './user';

// eslint-disable-next-line import/prefer-default-export
export function getFullName(user: User): string {
  const {
    name: {first, middle, last},
  } = user;

  return [first, middle, last].filter(Boolean).join(' ');
}
