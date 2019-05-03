/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';
import { isObject } from '../utils';

class Class extends TypeCheckInterface {
  constructor(C) {
    super();
    this.C = C;
  }

  equals(other) {
    return other instanceof Class && this.C === other.C;
  }

  is(value) {
    return isObject(value)
      && value instanceof this.C;
  }

  toString() {
    return `<class ${this.C.name}>`;
  }
}

export default C => new Class(C);
