---
title: Generic Types
description: Generic declarations, monomorphization, bounds and where they live.
---

Generics let one definition work with many types: write once, the compiler stamps a copy per type used.

Syntax in declarations:
```zeen
fn foo[T]() { /* */ }
struct Foo[T] { /* */ }
interface[T] Foo { /* */ }
implement[T] Foo : StructName { /* */ }
```

In type expressions:
```zeen
Box[i32]
Box[f64]
```

In value expressions:
```zeen
Box #[i32].new(5)
```

## Monomorphization
Generics stamp a separate copy per concrete type: `Box[i32]` and `Box[f64]` are different types at runtime. Generic functions stamp per call site, so fat params keep their concrete storage.

## Bounds
Bounds restrict what types pass. A concrete arg must implement the interface, a generic arg must declare the bound:
```zeen
fn min[T: Ord](a: T, b: T) T {
  if (a < b) {
    return a;
  };

  b
}
```

## Where
Generics live in functions, structs, enums, their methods and aliases:
```zeen
fn first[T](items: []T) T { ... }

struct Box[T] { ... }

enum Result[T, E] { ... }

alias Ptr[T] = *T;
```

Struct and enum methods add their own on top:
```zeen
struct Wrap[T] {
  inner: T,

  pub fn dup_inner[T: Clone](*const self) T {
    return self.inner.clone();
  }
}
```
