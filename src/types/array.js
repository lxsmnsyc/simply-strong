import TypeCheckInterface from './typecheck-interface';

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

export default type => new TypedArray(type);
