/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/**
 * @interface
 */
export default class TypeCheckInterface {
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
