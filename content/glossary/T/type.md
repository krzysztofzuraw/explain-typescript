---
title: Type
authors:
  - Krzysztof Żuraw
letter: T
summary: describes type of an object or property
---

Type is an alias that describe type of an object or property in TypeScript.

```ts
type Color = 'red';
```

Types cannot be extended, merged or implemented from. They can describe all kind of types including primitives (`undefined`,`null`, `boolean`, `string` or `number`) as well as union or intersection types. [^1]

They can be used in computed properties - it means that iterating through union keys is possible [^1]:

```ts
type Color = 'red' | 'blue';

type Computed = {
  [color in Colors]: string;
};
```

You can use type in `conditional types`:

```ts
type Num = 'number';
type Str = 'string';

type TypeOfValue<T> = T extends string ? Str : Num;

type value = TypeOfValue<'42'>; // 'string'
type value2 = TypeOfValue<42>; // 'number'
```

[^1]: [Typescript interface vs type](https://pawelgrzybek.com/typescript-interface-vs-type/)
