/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';

class Super extends TypeCheckInterface {
  constructor(S) {
    super();
    this.class = S;
  }

  is(value) {
    return value.prototype.constructor === this.class;
  }

  toString() {
    return `Super(${this.class.name})`;
  }
}

export default S => new Super(S);
