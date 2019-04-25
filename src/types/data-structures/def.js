/* eslint-disable func-names */
/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';
import {
  checkType, isFunction, assert, zip,
} from '../utils';

class Def extends TypeCheckInterface {
  constructor(PTs, RT) {
    super();
    let i = 0;
    for (const type of PTs) {
      i += 1;
      checkType(type, i);
    }
    checkType(RT, i + 1);

    this.PTs = PTs;
    this.RT = RT;

    this.typeTag = `Def(${[...PTs, RT].reduce((acc, x) => `${acc} => ${x}`)})`;
  }

  create(fn) {
    assert(isFunction(fn), 'Expected argument #1 to be a function.');

    const { PTs, RT } = this;

    const newFunction = function (...args) {
      let counter = 0;
      for (const [a, b] of zip(PTs, args)) {
        counter += 1;
        assert(a.is(b), `Expected argument #${counter} to be of type "${a}"`);
      }

      const result = fn.apply(this, args);
      assert(RT.is(result), `Expected return type to be "${RT}"`);
      return result;
    };

    newFunction.origin = this;

    return newFunction;
  }

  equals(other) {
    return other instanceof Def
      && (this === other || (
        this.RT.equals(other.RT)
          && zip(this.PTs, other.PTs)
            .reduce((acc, [a, b]) => acc && a.equals(b))
      ));
  }

  is(value) {
    return isFunction(value) && value.origin instanceof Def && this.equals(value.origin);
  }

  toString() {
    return this.typeTag;
  }
}

export default (...PTs) => RT => new Def(PTs, RT);
