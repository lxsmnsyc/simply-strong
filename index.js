'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/* eslint-disable func-names */
/* eslint-disable no-restricted-syntax */
var def = (...types) => returnType => body => function (...args) {
  let i = 0;
  for (const arg of args) {
    i += 1;
    const type = types.shift();
    if (!type.is(arg)) {
      throw new TypeError(`Expected argument #${i} of type "${type.toString()}"`);
    }
  }

  const result = body.apply(this, args);

  if (returnType.is(result)) {
    return result;
  }
  throw new TypeError(`Expected return type: ${returnType.toString()}`);
};

/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/**
 * @interface
 */
class TypeCheckInterface {
  /**
   *
   * @param {any} value
   * @returns {boolean}
   * @abstract
   */
  is(value) { }

  /**
   * @returns {string}
   */
  toString() {}
}

const { isNaN } = Number;

const MEMORY = new WeakMap();

class TypedArray {
  constructor(type) {
    if (!(type instanceof TypeCheckInterface)) {
      throw new TypeError('Expected argument #1 to be a TypeCheckInterface instance.');
    }

    MEMORY.set(this, []);

    const ref = this;

    return new Proxy(this, {
      get(target, p) {
        return MEMORY.get(ref)[p];
      },
      set(target, p, value) {
        if (!isNaN(p)) {
          if (type.is(value)) {
            MEMORY.get(ref)[p] = value;
          } else {
            throw new TypeError(`expected value type "${type.toString()}"`);
          }
        }
      },
    });
  }

  get length() {
    return MEMORY.get(this).length;
  }

  [Symbol.iterator]() {
    return MEMORY.get(this)[Symbol.iterator];
  }
}

var array = type => new TypedArray(type);

/* eslint-disable no-restricted-syntax */

class Compose extends TypeCheckInterface {
  constructor(...types) {
    super();
    let i = 0;
    for (const type of types) {
      i += 1;
      if (!(type instanceof TypeCheckInterface)) {
        throw new TypeError(`Expected argument #${i} to be a TypeCheckInterface instance.`);
      }
    }

    this.types = types;

    const typeTag = types.reduce((acc, x) => `${acc}, ${x}`);
    this.typeTag = `Compose(${typeTag})`;
  }

  is(value) {
    // eslint-disable-next-line valid-typeof
    for (const type of this.types) {
      if (!type.is(value)) {
        return false;
      }
    }
    return true;
  }

  toString() {
    return this.typeTag;
  }
}

var compose = (...types) => new Compose(...types);

/* eslint-disable no-restricted-syntax */

class Either extends TypeCheckInterface {
  constructor(...types) {
    super();
    let i = 0;
    for (const type of types) {
      i += 1;
      if (!(type instanceof TypeCheckInterface)) {
        throw new TypeError(`Expected argument #${i} to be a TypeCheckInterface instance.`);
      }
    }

    this.types = types;

    const typeTag = types.reduce((acc, x) => `${acc}, ${x}`);
    this.typeTag = `Either(${typeTag})`;
  }

  is(value) {
    // eslint-disable-next-line valid-typeof
    for (const type of this.types) {
      if (type.is(value)) {
        return true;
      }
    }
    return false;
  }

  toString() {
    return this.typeTag;
  }
}

var either = (...types) => new Either(...types);

/* eslint-disable no-restricted-syntax */

class Nullable extends TypeCheckInterface {
  constructor(type) {
    super();

    if (!(type instanceof TypeCheckInterface)) {
      throw new TypeError('Expected argument #1 to be a TypeCheckInterface instance.');
    }

    this.type = type;
  }

  is(value) {
    // eslint-disable-next-line valid-typeof
    return value == null || this.type.is(value);
  }

  toString() {
    return `Nullable(${this.type})`;
  }
}

var nullable = type => new Nullable(type);

/* eslint-disable no-restricted-syntax */

class Class extends TypeCheckInterface {
  constructor(classInstance) {
    super();
    this.class = classInstance;
  }

  is(value) {
    return value instanceof this.class;
  }

  toString() {
    return `Class(${this.class.name})`;
  }
}

var _class = classInstance => new Class(classInstance);

/* eslint-disable class-methods-use-this */

/**
 * @ignore
 */
class Iterable extends TypeCheckInterface {
  is(value) {
    return value != null && typeof value[Symbol.iterator] === 'function';
  }

  toString() {
    return 'Iterable';
  }
}

var iterable = new Iterable();

/* eslint-disable class-methods-use-this */

/**
 * @ignore
 */
class Thenable extends TypeCheckInterface {
  is(value) {
    return !!value
      && (typeof value === 'object' || typeof value === 'function')
      && typeof value.then === 'function';
  }

  toString() {
    return 'Thenable';
  }
}

var thenable = new Thenable();

/* eslint-disable class-methods-use-this */

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

var nonnull = new NonNull();

/* eslint-disable class-methods-use-this */

/**
 * @ignore
 */
class AsyncIterable extends TypeCheckInterface {
  is(value) {
    return value != null && typeof value[Symbol.asyncIterator] === 'function';
  }

  toString() {
    return 'AsyncIterable';
  }
}

var asyncIterable = new AsyncIterable();

/* eslint-disable no-unused-vars */

/**
 * @ignore
 */
class Any extends TypeCheckInterface {
  is(value) {
    return true;
  }

  toString() {
    return 'Any';
  }
}

var any = new Any();

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

var primitives = {
  Function: new Type('function'),
  Boolean: new Type('boolean'),
  Number: new Type('number'),
  String: new Type('string'),
  Object: new Type('object'),
  Symbol: new Type('symbol'),
};

exports.Any = any;
exports.AsyncIterable = asyncIterable;
exports.Class = _class;
exports.Compose = compose;
exports.Def = def;
exports.Either = either;
exports.Iterable = iterable;
exports.NonNull = nonnull;
exports.Nullable = nullable;
exports.Thenable = thenable;
exports.TypedArray = array;
exports.Types = primitives;
