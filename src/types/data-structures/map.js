import { checkType, checkArgumentType } from '../utils';
import TypeCheckInterface from '../typecheck-interface';

class TypedMap extends TypeCheckInterface {
  constructor(K, V) {
    super();
    checkType(K, 1);
    checkType(V, 2);
    this.actual = new Map();
    this.K = K;
    this.V = V;
  }

  get size() {
    return this.actual.size;
  }

  clear() {
    this.actual.clear();
  }

  delete(key) {
    checkArgumentType(key, this.K, 1);
    return this.actual.delete(key);
  }

  entries() {
    return this.actual.entries();
  }

  forEach(callback, thisArg) {
    this.actual.forEach(callback, thisArg);
  }

  get(key) {
    checkArgumentType(key, this.K, 1);
    return this.actual.get(key);
  }

  has(key) {
    checkArgumentType(key, this.K, 1);
    return this.actual.has(key);
  }

  keys() {
    return this.actual.keys();
  }

  set(key, value) {
    checkArgumentType(key, this.K, 1);
    checkArgumentType(value, this.V, 2);
    return this.actual.set(key, value);
  }

  values() {
    return this.actual.values();
  }

  is(value) {
    return value instanceof TypedMap
      && this.K === value.K
      && this.V === value.V;
  }

  toString() {
    return `TypedMap<${this.K}, ${this.V}>`;
  }

  [Symbol.iterator]() {
    return this.actual[Symbol.iterator]();
  }
}

export default (key, value) => new TypedMap(key, value);
