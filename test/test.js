import { TypedMap, Types, Def } from '../src';

const example = TypedMap(Types.String, Types.Number);


const test = Def(TypedMap(Types.String, Types.Number))(Types.Boolean)(
  (x) => {
    x.set('Test', 100);
    return true;
  },
);

test([]);