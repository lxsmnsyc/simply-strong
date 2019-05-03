/* eslint-disable no-undef */
import assert from 'assert';
import { Class } from '../../src';

describe('Class', () => {
  describe('#is', () => {
    it('should return false if the checked value is not an instance of the given class', () => {
      assert(Class(Array).is({}) === false);
    });
    it('should return true if the checked value is an instance of the given class', () => {
      assert(Class(Array).is([]));
    });
  });
  describe('#equals', () => {
    it('should return true if both instances had the same given type.', () => {
      assert(Class(Array).equals(Class(Array)));
    });
  });
  describe('toString', () => {
    it('should return the correct string format', () => {
      assert(`${Class(Array)}` === '<class Array>');
    });
  });
});
