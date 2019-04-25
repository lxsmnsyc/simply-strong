/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';
import { isFunction } from '../utils';

/**
 * @ignore
 */
class Iterable extends TypeCheckInterface {
  equals(other) {
    return other === this;
  }

  is(value) {
    return value != null && isFunction(value[Symbol.iterator]);
  }

  toString() {
    return 'Iterable';
  }
}

export default new Iterable();
