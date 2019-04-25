/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';
import { checkType, zip } from '../utils';

class Compose extends TypeCheckInterface {
  constructor(...T) {
    super();
    let i = 0;
    for (const type of T) {
      i += 1;
      checkType(type, i);
    }

    this.T = T;

    const typeTag = T.reduce((acc, x) => `${acc}, ${x}`);
    this.typeTag = `Compose(${typeTag})`;
  }

  equals(other) {
    return other instanceof Compose
      && (other === this || zip(this.T, other.T).reduce((acc, [x, y]) => acc && x.equals(y), true));
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
