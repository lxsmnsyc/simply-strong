const { TypedArray, Types } = require('./index');

const example = TypedArray(Types.Number);

example[0] = 100;
example[1] = 200;
