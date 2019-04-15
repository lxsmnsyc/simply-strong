/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';

class Nullable extends TypeCheckInterface {
  constructor(type) {
    super();

    if (!(type instanceof TypeCheckInterface)) {
      throw new TypeError('Expected argument #1 to be a TypeCheckInterface instance.');
    }

    this.type = type;
  }

  is(value) {
    // eslint-disable-next-line valid-typeof
    return value == null || this.type.is(value);
  }

  toString() {
    return `Nullable(${this.type})`;
  }
}

export default type => new Nullable(type);
