/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';

/**
 * @ignore
 */
class Iterable extends TypeCheckInterface {
  is(value) {
    return value != null && typeof value[Symbol.iterator] === 'function';
  }

  toString() {
    return 'Iterable';
  }
}

export default new Iterable();
