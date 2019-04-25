/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';

class Extends extends TypeCheckInterface {
  constructor(E) {
    super();
    this.E = E;
  }

  equals(other) {
    return other instanceof Extends && this.E === other.E;
  }

  is(value) {
    return value.prototype instanceof this.E;
  }

  toString() {
    return `Extends(${this.E.name})`;
  }
}

export default E => new Extends(E);
