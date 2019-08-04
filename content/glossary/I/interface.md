---
title: Interface
authors:
  - Krzysztof Żuraw
letter: I
summary: describes type of an object
---

Interface is the most flexible way of describing types. [^1]

To define interface use `interface` keyword:

```ts
interface Props {
  onClick: (event: MouseEvent) => void;
}
```

This defines a type `Props` that has a function `onClick` that
takes `event` of type `MouseEvent` as an argument. This can be used
to get type safety on event parameter:

```ts
function handleClick(props: Props) {
  props.onClick(event); // works fine
  props.onClick('42'); // error: event is not a string
}
```

Example based on [^1].

You can merge interfaces:

```ts
interface Form {
  onClick: (event: MouseEvent) => void;
}

interface Form {
  onSubmit: () => void;
}

const formHandler: Form = {
  onClick: () => {},
  onSubmit: () => {},
};
```

Resolution of `interface` is deferred by TypeScript compiler so you
can use them to recursively chain types. [^2]

[^1]: [Walkthrough: Interfaces | TypeScript](https://devblogs.microsoft.com/typescript/walkthrough-interfaces/)
[^2]: [Typescript interface vs type](https://pawelgrzybek.com/typescript-interface-vs-type/)
