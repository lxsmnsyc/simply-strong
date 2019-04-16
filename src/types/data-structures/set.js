import TypeCheckInterface from '../typecheck-interface';
import { checkType, checkArgumentType } from '../utils';

class TypedSet extends TypeCheckInterface {
  constructor(V) {
    super();
    checkType(V, 1);
    this.actual = new Set();
    this.V = V;
  }

  get size() {
    return this.actual.size;
  }

  add(value) {
    checkArgumentType(value, this.V, 1);
    return this.actual.add(value);
  }

  clear() {
    return this.actual.clear();
  }

  delete(value) {
    checkArgumentType(value, this.V, 1);
    return this.actual.delete(value);
  }

  entries() {
    return this.actual.entries();
  }

  has(value) {
    checkArgumentType(value, this.V, 1);
    return this.actual.has(value);
  }

  values() {
    return this.actual.values();
  }

  is(value) {
    return value instanceof TypedSet
      && this.V === value.V;
  }

  toString() {
    return `TypedSet<${this.V}>`;
  }

  [Symbol.iterator]() {
    return this.actual[Symbol.iterator]();
  }

  static get [Symbol.species]() {
    return TypedSet;
  }
}

export default V => new TypedSet(V);
