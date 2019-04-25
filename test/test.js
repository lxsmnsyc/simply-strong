import { Types, Either, Like } from '../src';

const A = Like({
  a: Types.Boolean,
  b: Types.String,
});
const B = Like({
  a: Types.Boolean,
  b: Types.String,
});

console.log(A.equals(B), B.equals(A));
