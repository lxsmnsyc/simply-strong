/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';
import { checkType } from '../utils';

class Def extends TypeCheckInterface {
  constructor(PTs, RT) {
    super();
    let i = 0;
    for (const type of PTs) {
      i += 1;
      checkType(type, i);
    }
    checkType(RT, i + 1);

    this.PTs = PTs;
    this.RT = RT;

    this.typeTag = `Def(${[...PTs, RT].reduce((acc, x) => `${acc} => ${x}`)})`;
  }

  toString() {
    return this.typeTag;
  }
}

export default (...PTs) => RT => new Def(PTs, RT);
