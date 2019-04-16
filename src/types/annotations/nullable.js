/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';

class Nullable extends TypeCheckInterface {
  constructor(T) {
    super();

    if (!(T instanceof TypeCheckInterface)) {
      throw new TypeError('Expected argument #1 to be a TypeCheckInterface instance.');
    }

    this.T = T;
  }

  is(value) {
    // eslint-disable-next-line valid-typeof
    return value == null || this.T.is(value);
  }

  toString() {
    return `Nullable(${this.T})`;
  }
}

export default T => new Nullable(T);
