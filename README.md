# simply-strong

simple strongly-typed objects for JS

## Types

The core feature of `simply-strong` is its Type System. The Type System allows to describe `simply-strong` constructors.

### Composing Types

`simply-strong` allows composition of multiple types into a single type.

#### Either

`Either` constructs a single type given a set of types. If a value is tested to an `Either`, the value must be any of the types composed in an `Either` instance.

```js
const NumberOrString = Either(Types.Number, Types.String);

NumberOrString.is(100); // true
NumberOrString.is('100'); // true
NumberOrString.is(false); // false
```

#### Compose

`Compose` constructs a single type given a set of types. If a value is tested to a `Compose`, the value must be all of the types composed in a `Compose` instance.

### Pseudo Types

Pseudo Types are types that are usually defined by their signature property. Pseudo Types includes:

* `Iterable`
* `Thenable`
* `AsyncIterable`
* `NonNull`
* `Any`

### Type Annotations
 
Type Annotations are types that wraps the given type with another behavior or explicitly describes a new type.

* `Class` converts a class instance into a Type.
* `Extends` converts a class instance into a Type instance that checks if the given instance is that of the class but not directly from that class.
* `Super` converts a class instance into a Type instance that checks if the given instance is that of the class that is the exact parent class.
* `Nullable` converts a type into a nullable/omitable/optional type.
* `Except` accepts any other types other than the given type.

## Strict Objects

### Functions

using `Def` converts normal functions into strict-typed functions. Wrapped functions throws errors if the parameters or the returned type does not match the defined types.

```js
const binumber = Def(Types.Number, Types.Number)(Types.Number);

const add = binumber((x, y) => x + y);
const sub = binumber((x, y) => x - y);
const mul = binumber((x, y) => x * y);
const div = binumber((x, y) => x / y);
```

### Typed Maps

using `TypedMap` allows strict-typed keys and values for a `Map`.