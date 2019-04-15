/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';

/**
 * @ignore
 */
class AsyncIterable extends TypeCheckInterface {
  is(value) {
    return value != null && typeof value[Symbol.asyncIterator] === 'function';
  }

  toString() {
    return 'AsyncIterable';
  }
}

export default new AsyncIterable();
