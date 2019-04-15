/* eslint-disable func-names */
/* eslint-disable valid-typeof */
/* eslint-disable no-restricted-syntax */

const Type = typeName => value => typeName === typeof value;

const isBoolean = Type('boolean');
const isNumber = Type('number');
const isString = Type('string');
const isFunction = Type('function');
const isSymbol = Type('symbol');
const isObject = Type('object');
const any = () => true;

export const Types = {
  Boolean: isBoolean,
  Number: isNumber,
  String: isString,
  Function: isFunction,
  Symbol: isSymbol,
  Object: isObject,
  Any: any,
};

const checkType = (type, num) => {
  if (isFunction(type)) {
    return true;
  }
  throw new TypeError(`Expected argument #${num} to be a predicate function.`);
};

const checkTypeList = (types) => {
  let i = 0;
  for (const type of types) {
    i += 1;
    checkType(type, i);
  }
  return true;
};

/**
 * An argument predicate that checks if the given value is an instance of the given class.
 * @param {Class} classInstance
 */
export const Class = classInstance => x => x.constructor === classInstance;

/**
 * An argument predicate that checks if the given value extends a class instance.
 * @param {Class} classInstance
 */
export const Extends = classInstance => x => x.prototype instanceof classInstance;

/**
 * An argument predicate composer that checks if the given value is any of the given
 * argument predicates.
 * @param  {...function} types
 */
export const Either = (...types) => checkTypeList(types) && ((x) => {
  for (const type of types) {
    if (type(x)) {
      return true;
    }
  }
  return false;
});

/**
 * An argument predicate that allows omittable arguments.
 * @param {function} type
 */
export const Option = type => checkType(type) && (x => x == null || type(x));

/**
 * A function wrapper that applies strict-type checking for arguments
 * @param  {...function} types
 */
export const StrictFunction = (...types) => checkTypeList(types) && (body => function (...args) {
  let i = 0;
  for (const arg of args) {
    i += 1;
    if (!types.shift()(arg)) {
      throw new TypeError(`argument #${i} type mismatch`);
    }
  }
  return body.apply(this, args);
});

const { isNaN, isFinite } = Number;

export const Numeric = x => !isNaN(x);
export const Finite = x => isFinite(x);

