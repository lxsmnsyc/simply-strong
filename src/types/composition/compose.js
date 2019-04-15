/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';

class Compose extends TypeCheckInterface {
  constructor(...types) {
    super();
    let i = 0;
    for (const type of types) {
      i += 1;
      if (!(type instanceof TypeCheckInterface)) {
        throw new TypeError(`Expected argument #${i} to be a TypeCheckInterface instance.`);
      }
    }

    this.types = types;

    const typeTag = types.reduce((acc, x) => `${acc}, ${x}`);
    this.typeTag = `Compose(${typeTag})`;
  }

  is(value) {
    // eslint-disable-next-line valid-typeof
    for (const type of this.types) {
      if (!type.is(value)) {
        return false;
      }
    }
    return true;
  }

  toString() {
    return this.typeTag;
  }
}

export default (...types) => new Compose(...types);
