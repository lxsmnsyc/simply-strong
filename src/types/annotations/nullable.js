/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';
import { checkType } from '../utils';

class Nullable extends TypeCheckInterface {
  constructor(T) {
    super();
    checkType(T, 1);
    this.T = T;
  }

  is(value) {
    // eslint-disable-next-line valid-typeof
    return value == null || this.T.is(value);
  }

  toString() {
    return `Nullable(${this.T})`;
  }
}

export default T => new Nullable(T);
