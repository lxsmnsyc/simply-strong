/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';
import { isObject } from '../utils';

class Extends extends TypeCheckInterface {
  constructor(E) {
    super();
    this.E = E;
  }

  equals(other) {
    return other instanceof Extends && this.E === other.E;
  }

  is(value) {
    return isObject(value)
      && isObject(value.prototype)
      && value.prototype instanceof this.E;
  }

  toString() {
    return `<? extends ${this.E.name}>`;
  }
}

export default E => new Extends(E);
