/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';

class Class extends TypeCheckInterface {
  constructor(classInstance) {
    super();
    this.class = classInstance;
  }

  is(value) {
    return value instanceof this.class;
  }

  toString() {
    return `Class(${this.class.name})`;
  }
}

export default classInstance => new Class(classInstance);
