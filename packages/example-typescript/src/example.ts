import User from './user';
import {getFullName} from './utils';

const zpr: User = {
  name: {
    first: 'José',
    last: 'Rocha',
    middle: 'Pedro',
  },
};

getFullName(zpr);

// --------------------------------------------
function add(a: number, b: number): number {
  return a + b;
}

add(1, 2);

// TODO
// I think VSCODE TS is giving the error because this is fine since we using ts@+3.7
// Try npm run build @root and see the example-typescript/dist/example.js. It gets transpiled. It works.
const x = 1;
const y = 2;
const z = x ?? y;
