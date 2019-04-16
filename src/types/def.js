import { checkArgumentType } from "./utils";

/* eslint-disable func-names */
/* eslint-disable no-restricted-syntax */
export default (...types) => returnType => body => function (...args) {
  let i = 0;

  const tmp = args.slice(0);
  for (const type of types) {
    i += 1;
    checkArgumentType(tmp.shift(), type, i);
  }

  const result = body.apply(this, args);

  if (returnType.is(result)) {
    return result;
  }
  throw new TypeError(`Expected return type: ${returnType.toString()}`);
};
