/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';

/**
 * @ignore
 */
class Any extends TypeCheckInterface {
  equals(other) {
    return other === this;
  }

  is(value) {
    return true;
  }

  toString() {
    return 'Any';
  }
}

export default new Any();
