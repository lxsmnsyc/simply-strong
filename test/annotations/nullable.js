/* eslint-disable no-undef */
import assert from 'assert';
import { Nullable, Types } from '../../src';

describe('Nullable', () => {
  describe('#is', () => {
    it('should return true if the checked value is that of the given type or is null.', () => {
      assert(Nullable(Types.Boolean).is(false));
      assert(Nullable(Types.Boolean).is());
    });
    it('should return false if the checked value is not that of the given type and is not null.', () => {
      assert(Nullable(Types.Boolean).is(100) === false);
    });
  });
  describe('#equals', () => {
    it('should return true if both instances had the same given type.', () => {
      assert(Nullable(Types.Boolean).equals(Nullable(Types.Boolean)));
    });
  });
  describe('toString', () => {
    it('should return the correct string format', () => {
      assert(`${Nullable(Types.Boolean)}` === 'boolean?');
    });
  });
});
