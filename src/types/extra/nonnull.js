/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';

/**
 * @ignore
 */
class NonNull extends TypeCheckInterface {
  is(value) {
    return !!value
      && (typeof value === 'object' || typeof value === 'function')
      && typeof value.then === 'function';
  }

  toString() {
    return 'NonNull';
  }
}

export default new NonNull();
