---
title: Interface vs type
authors:
  - Krzysztof Żuraw
letter: I
summary: what to use?
---

There is no definitive answer what should you use. General rule - **be consistent**.

Yet below I present you two different approaches:

## Use interface

_Use interfaces where you can._

⚠ They look better in error messages (subjective)

☝ They require explicit index signatures

✅ Extending is better then intersections (you cannot override property by accident)

📚 They can be augmented when necessary (good for library authors)

👣 Smaller memory footprint (lazy & cacheable)

| Aspect                                          | Type | Interface |
| ----------------------------------------------- | ---- | --------- |
| Can describe functions                          | ✅   | ✅        |
| Can describe constructors                       | ✅   | ✅        |
| Can describe tuples                             | ✅   | ✅        |
| Interfaces can extend it                        | ⚠️   | ✅        |
| Classes can extend it                           | 🚫   | ✅        |
| Classes can implement it (implements)           | ⚠️   | ✅        |
| Can intersect another one of its kind           | ✅   | ⚠️        |
| Can create a union with another one of its kind | ✅   | 🚫        |
| Can be used to create mapped types              | ✅   | ✅        |
| Expands in error messages and logs              | ✅   | 🚫        |
| Can be augmented                                | 🚫   | ✅        |
| Can be recursive                                | ⚠️   | ✅        |
| Declaration merging                             | 🚫   | ✅        |
| Has an implicit index signature                 | ✅   | 🚫        |

Taken from [WTF TypeScript](https://paper.dropbox.com/doc/WTF-TypeScript-fyxWXDfqYssUzsAzmGmZL) by [Karol Majewski](https://twitter.com/karoljmajewski)

## Use types

What should I use for React `Props` and `State`?

✒ It’s shorter to write `type Props = {}`

🏿 Your syntax is consistent (you are not mixing interfaces with type aliases for possible type intersections)

```ts
interface Props extends OwnProps, InjectedProps, StoreProps {}
type OwnProps = {};
type StoreProps = {};
```

```ts
type Props = OwnProps & InjectedProps & StoreProps;
type OwnProps = {};
type StoreProps = {};
```

Taken from [Interface vs Type alias in TypeScript 2.7
](https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c) by [Martin Hochel](https://twitter.com/martin_hotell)
