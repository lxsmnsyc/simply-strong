/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';

class Super extends TypeCheckInterface {
  constructor(S) {
    super();
    this.S = S;
  }

  equals(other) {
    return other instanceof Super && this.S === other.S;
  }

  is(value) {
    return value.prototype.constructor === this.S;
  }

  toString() {
    return `Super(${this.S.name})`;
  }
}

export default S => new Super(S);
