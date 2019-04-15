/* eslint-disable func-names */
/* eslint-disable no-restricted-syntax */
export default (...types) => returnType => body => function (...args) {
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
