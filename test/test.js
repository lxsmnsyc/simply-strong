import { TypedMap, Types, Def } from '../src';

const StringNumMap = TypedMap(Types.String, Types.Number);

const MapNumMap = TypedMap(StringNumMap, Types.Number);

const example = StringNumMap.create();

const mnm = MapNumMap.create();

mnm.set(example, 100);

console.log(mnm.get(example));