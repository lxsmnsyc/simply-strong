/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';

class Extends extends TypeCheckInterface {
  constructor(E) {
    super();
    this.class = E;
  }

  is(value) {
    return value.prototype instanceof this.class;
  }

  toString() {
    return `Extends(${this.class.name})`;
  }
}

export default E => new Extends(E);
