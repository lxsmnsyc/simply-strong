import { Like, Types, Exact, Def } from '../src';

const binomial = Def(Types.Number, Like({
  name: Types.String,
  age: Types.Number,
}))(Types.Number);

console.log(binomial.toString());
