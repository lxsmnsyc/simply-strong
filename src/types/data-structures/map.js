import { checkType, checkArgumentType } from '../utils';
import TypeCheckInterface from '../typecheck-interface';

class TypedMap extends TypeCheckInterface {
  constructor(TMG) {
    super();
    this.actual = new Map();
    this.K = TMG.K;
    this.V = TMG.V;
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

  [Symbol.iterator]() {
    return this.actual[Symbol.iterator]();
  }
}

class TypedMapGenerics extends TypeCheckInterface {
  constructor(K, V) {
    super();
    checkType(K, 1);
    checkType(V, 2);
    this.K = K;
    this.V = V;
  }

  create() {
    return new TypedMap(this);
  }

  is(value) {
    return this.K === value.K && this.V === value.V;
  }

  toString() {
    return `TypedMap<${this.K}, ${this.V}>`;
  }

  static get [Symbol.species]() {
    return TypedMap;
  }
}


export default (K, V) => new TypedMapGenerics(K, V);
