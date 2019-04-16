/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';

class Super extends TypeCheckInterface {
  constructor(classInstance) {
    super();
    this.class = classInstance;
  }

  is(value) {
    return value.prototype.constructor === this.class;
  }

  toString() {
    return `Super(${this.class.name})`;
  }
}

export default classInstance => new Super(classInstance);
