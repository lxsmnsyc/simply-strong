/* eslint-disable valid-typeof */
import TypeCheckInterface from './typecheck-interface';

const typeOf = y => x => typeof x === y;

export const isFunction = typeOf('function');
export const isObject = typeOf('object');
export const isString = typeOf('string');

export const assert = (cond, message) => {
  if (!cond) {
    throw new TypeError(message);
  }
};


export const checkType = (type, number) => assert(
  type instanceof TypeCheckInterface,
  `Expected argument #${number} to be a TypeCheckInterface instance.`,
);
