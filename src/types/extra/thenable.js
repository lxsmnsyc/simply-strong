/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';
import { isObject, isFunction } from '../utils';

/**
 * @ignore
 */
class Thenable extends TypeCheckInterface {
  equals(other) {
    return other === this;
  }

  is(value) {
    return !!value
      && (isObject(value) || isFunction(value))
      && isFunction(value.then);
  }

  toString() {
    return 'Thenable';
  }
}
export default new Thenable();
