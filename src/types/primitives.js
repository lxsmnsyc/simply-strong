import TypeCheckInterface from './typecheck-interface';
import { assert, isString } from './utils';

class Type extends TypeCheckInterface {
  constructor(typeName) {
    super();
    assert(isString(typeName), 'Expected argument #1 to be a string.');
    this.typeName = typeName;
  }

  equals(other) {
    return other instanceof Type && (other === this || this.typeName === other.typeName);
  }

  is(value) {
    // eslint-disable-next-line valid-typeof
    return typeof value === this.typeName;
  }

  toString() {
    return this.typeName;
  }
}

export default {
  Function: new Type('function'),
  Boolean: new Type('boolean'),
  Number: new Type('number'),
  String: new Type('string'),
  Object: new Type('object'),
  Symbol: new Type('symbol'),
};
