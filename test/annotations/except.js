/* eslint-disable no-undef */
import assert from 'assert';
import { Except, Types } from '../../src';

describe('Except', () => {
  describe('#is', () => {
    it('should return false if the checked value is that of the given type.', () => {
      assert(Except(Types.Boolean).is(false) === false);
    });
    it('should return true if the checked value is not that of the given type.', () => {
      assert(Except(Types.Boolean).is(100));
    });
  });
  describe('#equals', () => {
    it('should return true if both instances had the same given type.', () => {
      assert(Except(Types.Boolean).equals(Except(Types.Boolean)));
    });
  });
  describe('toString', () => {
    it('should return the correct string format', () => {
      assert(`${Except(Types.Boolean)}` === '!boolean');
    });
  });
});
