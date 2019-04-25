/* eslint-disable no-restricted-syntax */
/* eslint-disable eol-last */
import TypeCheckInterface from '../typecheck-interface';
import { isObject, assert, zip } from '../utils';

class Exact extends TypeCheckInterface {
  constructor(structure) {
    super();
    assert(isObject(structure), 'Expected argument #1 to be an object.');
    for (const [k, v] of Object.entries(structure)) {
      assert(v instanceof TypeCheckInterface, `Expected field "${k}" to be a TypeCheckInterface instance.`);
    }

    this.structure = Object.assign({}, structure);

    const tag = Object.entries(structure).reduce((acc, x) => {
      acc[x[0]] = x[1].toString();
      return acc;
    }, {});

    this.typeTag = `Exact${JSON.stringify(tag)}`;
  }

  equals(other) {
    return other instanceof Exact && (this === other || zip(
      Object.entries(this.structure),
      Object.entries(other.structure),
    ).reduce((acc, [a, b]) => acc && a[0] === b[0] && a[1].equals(b[1]), true));
  }

  is(value) {
    if (isObject(value)) {
      const entries = Object.entries(value);
      let pending = entries.length;
      for (const [k, v] of Object.entries(this.structure)) {
        if (!entries.find(e => e[0] === k && v.is(e[1]))) {
          return false;
        }
        pending -= 1;
      }
      return pending === 0;
    }
    return false;
  }

  toString() {
    return this.typeTag;
  }
}

export default T => new Exact(T);