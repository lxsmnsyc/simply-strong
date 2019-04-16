import TypeCheckInterface from './typecheck-interface';

export const checkType = (type, number) => {
  if (!(type instanceof TypeCheckInterface)) {
    throw new TypeError(`Expected argument #${number} to be a TypeCheckInterface instance.`);
  }
};

export const checkArgumentType = (value, type, number) => {
  if (!(type.is(value))) {
    throw new TypeError(`Expected argument #${number} to be of type "${type}"`);
  }
};
