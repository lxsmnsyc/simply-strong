/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';

class Extends extends TypeCheckInterface {
  constructor(classInstance) {
    super();
    this.class = classInstance;
  }

  is(value) {
    return value.prototype instanceof this.class;
  }

  toString() {
    return `Extends(${this.class.name})`;
  }
}

export default classInstance => new Extends(classInstance);
