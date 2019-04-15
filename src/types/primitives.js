import TypeCheckInterface from './typecheck-interface';

class Type extends TypeCheckInterface {
  constructor(typeName) {
    super();
    if (typeof typeName === 'string') {
      this.typeName = typeName;
    } else {
      throw new TypeError('argument string expected');
    }
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
