/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';
import { isObject } from '../utils';

class Super extends TypeCheckInterface {
  constructor(S) {
    super();
    this.S = S;
  }

  equals(other) {
    return other instanceof Super && this.S === other.S;
  }

  is(value) {
    return isObject(value)
      && isObject(value.prototype)
      && value.prototype.constructor === this.S;
  }

  toString() {
    return `<? super ${this.S.name}>`;
  }
}

export default S => new Super(S);
