---
title: Extern
description: Linking native symbols with extern functions, variables and sources.
---

Extern declarations use external linkage: symbols resolve at link time by the system linker. Missing symbols fail the link step.

## Functions
`extern fn` without a body declares an imported symbol. Calls use the C calling convention:
```zeen
extern fn malloc(usize) *void;
extern fn free(*void);

fn main() {
  let ptr: *i32 = malloc(4);
  *ptr = 123;
  free(ptr);
}
```

`extern fn` with a body exports the symbol for native callers:
```zeen
extern fn hello() {
  @println("hi from Zeen");
}
```

Varargs with `...`:
```zeen
extern fn printf([*]const char, ...);
```

## Variables
`extern let` declares an imported global. Storage lives in native code, no value allowed:
```zeen
extern let errno: i32;
```

## Link
`extern link` appends native files after the compiled object in the link step:
```zeen
extern link "helpers.c";
```

Object-only toolchains skip these sources with a warning.
