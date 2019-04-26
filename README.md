# simply-strong

simple run-time type system for JS

## Types

The core feature of `simply-strong`. The Type System allows to describe `simply-strong` constructors.

### Primitive Types

The primitive types are fundamental JS types. They are built-in types that can only be checked with the `typeof` feature.

The list of primitive types:
* `Number`
* `Boolean`
* `String`
* `Object`
* `Function`
* `Symbol`

### Pseudo Types

Pseudo types are a group of types that are known for their signature behavior. Such behavior includes a signature property, assertive property, etc.

List of pseudo types:
* `Any` : Any value.
* `AsyncIterable`: Objects with the `[Symbol.asyncIterator]` property.
* `Iterable`: Objects with the `[Symbol.iterator]` property.
* `NonNull` : Any non-null value.
* `Thenable` : An Promise/A+ Object which is an Object that has a `then` property.

### Record/Object Types

Record/Object types are types that allows to assert the fields of an Objec

#### Exact

`Exact` describes a type that checks if an object has the exact given structure.

```js
const Info = Exact({
  name: Types.String,
  age: Types.Number,
});

console.log(Info.is({ name: 'John Doe', age: 100 })); // true
console.log(Info.is({ name: 100, age: 100 })); // false
console.log(Info.is({ name: 'John', address: 'NY' })); // false
console.log(Info.is({ name: 'John', age: 100, address: 'NY' })); // false
```

#### Like

`Exact` describes a type that checks if an object contains the given structure.

```js
const Info = Like({
  name: Types.String,
  age: Types.Number,
});

console.log(Info.is({ name: 'John Doe', age: 100 })); // true
console.log(Info.is({ name: 100, age: 100 })); // false
console.log(Info.is({ name: 'John', address: 'NY' })); // false
console.log(Info.is({ name: 'John', age: 100, address: 'NY' })); // true
```


### Class-related Types

To turn your classes into types, Class-related Types are required.

List of class-related Types:
* `Class` : Converts the given class into a type.
* `Super` : Converts the given class into a type that checks if an asserted value is a direct descendant of the given class.
* `Extends` : Converts the given class into a type that checks if an asserted value is a descendant of the given class.

### Annotations

Annotations are type wrappers that modifies how types checks.

List of annotations:
* `Except` : checks for types other than the given type.
* `Nullable`: Allows omitable types.

### Composing Types

`simply-strong` allows composition of multiple types into a single type.

#### Either

`Either` constructs a single type given a set of types. If a value is tested to an `Either`, the value must be any of the types composed in an `Either` instance.

```js
/**
 * This is equivalent to:
 * 
 * NumberOrString = Number | String
 */
const NumberOrString = Either(Types.Number, Types.String);

NumberOrString.is(100); // true
NumberOrString.is('100'); // true
NumberOrString.is(false); // false
```

#### Compose

`Compose` constructs a single type given a set of types. If a value is tested to a `Compose`, the value must be all of the types composed in a `Compose` instance.
```js
/**
 * This is equivalent to:
 * 
 * ThenableAndPromise = Thenable & !Promise
 */
const ThenableAndNotPromise = Compose(Thenable, Except(Class(Promise)));

ThenableAndNotPromise.is({ then: () => console.log('Hello World')); // true
ThenableAndNotPromise.is(Promise.resolve()); // false
```