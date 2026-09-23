---
title: Closures
---

## Literals
Closure is an anonymous function that captures values from its scope:
```zn
let n = 5;
let add = fn(x: i32) i32 { return x + n; };

@println("{}", add(10));
```

A closure without captures is a basic `fn` pointer and is `Copy`.

## Fat Types
A capturing closure has a fat type: `Fn` or `FnOnce`. Both are move-only: captures live in a heap block that travels with the value and is dropped with it. Calls dispatch through the stored pointer, an `Fn` value can be called many times, `FnOnce` at most once. Both types are plain structs with static layout (`{ ptr, env }`) and `Drop`.

```zn
fn apply(f: Fn(i32) i32, x: i32) i32 {
  return f(x);
}

let m = 6;
let r = apply(fn(x: i32) i32 { return x * m; }, 2);
```

## Coercions
| From | To |
|------|----|
| `fn` | `Fn`, `FnOnce` |
| `Fn` | `FnOnce` |

`FnOnce` to `Fn` and fat to basic are forbidden.

## Generics
Functions over fat params monomorphize per call site:
```zn
fn apply[T](val: T, f: FnOnce(T) T) T {
  f(val)
}

fn main() {
  let f = fn(x: i32) i32 { x * 2 };
  @println("{}", apply(5, f));
}
```
