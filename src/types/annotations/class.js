/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';

class Class extends TypeCheckInterface {
  constructor(C) {
    super();
    this.class = C;
  }

  is(value) {
    return value instanceof this.class;
  }

  toString() {
    return `Class(${this.class.name})`;
  }
}

export default C => new Class(C);
