/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';

class Compose extends TypeCheckInterface {
  constructor(...T) {
    super();
    let i = 0;
    for (const type of T) {
      i += 1;
      if (!(type instanceof TypeCheckInterface)) {
        throw new TypeError(`Expected argument #${i} to be a TypeCheckInterface instance.`);
      }
    }

    this.T = T;

    const typeTag = T.reduce((acc, x) => `${acc}, ${x}`);
    this.typeTag = `Compose(${typeTag})`;
  }

  is(value) {
    // eslint-disable-next-line valid-typeof
    for (const type of this.T) {
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

export default (...T) => new Compose(...T);
