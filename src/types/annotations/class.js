/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';

class Class extends TypeCheckInterface {
  constructor(C) {
    super();
    this.C = C;
  }

  equals(other) {
    return other instanceof Class && this.C === other.C;
  }

  is(value) {
    return value instanceof this.C;
  }

  toString() {
    return `Class(${this.C.name})`;
  }
}

export default C => new Class(C);
