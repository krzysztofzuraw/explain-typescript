---
title: Apparent types
authors:
  - Krzysztof Żuraw
letter: A
summary: map between variables and their equivalent in type system
---

Apparent types allows compiler to map between variables and their equivalent in type system.
By having:

```ts
let str = 'I am string';
str.startsWith('I');
```

TypeScript compiler will know that `str` (which technically doesn't have properties) has one of property called `startsWith`.

Apparent types are not constrained to object types. It is used on object too:

```tsx
const handleClick = (e: React.MouseEvent) => {
  e.preventDefault(); // telling complier to get apparent type of React.MouseEvent
  submitForm();
};
```

Based on [Widening and Narrowing in TypeScript](https://sandersn.github.io/manual/Widening-and-Narrowing-in-Typescript.html).
