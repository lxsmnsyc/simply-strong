/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';
import { checkType } from '../utils';

class Except extends TypeCheckInterface {
  constructor(T) {
    super();
    checkType(T, 1);
    this.T = T;
  }

  equals(other) {
    return other instanceof Except && this.T === other.T;
  }

  is(value) {
    // eslint-disable-next-line valid-typeof
    return !this.T.is(value);
  }

  toString() {
    return `Except(${this.T})`;
  }
}

export default T => new Except(T);
