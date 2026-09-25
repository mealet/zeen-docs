---
title: Builtin Macros
description: Compiler macros for casts, sizes, printing, panic and debug output.
---

Compiler macros use `@name(...)` syntax.

| Macro | Returns |
|-------|---------|
| `@as(T, expr)` | `T`, explicit cast |
| `@sizeof(T)` | `usize`, type size |
| `@alignof(T)` | `usize`, type alignment |
| `@typename(T)` | `[]const char`, type name |
| `@print(fmt, ...)` | `void`, stdout without newline |
| `@println(fmt, ...)` | `void`, stdout with newline |
| `@format(fmt, ...)` | `String`, heap string |
| `@panic(fmt, ...)` | `never` |
| `@unreachable()` | `never` |
| `@todo()` | `never` |
| `@dbg(expr)` | `expr`, prints `[file:line]` with the value (Debug only, silent in Release) |
| `@uninit()` | any, uninitialized value (reading it is UB) |
| `@enumTag(expr)` | `u8`, enum variant tag |
| `@void()` | `void` |

`@todo()` and `@unreachable()` lower to `@panic` with a message. Format strings use `{}` for values and `{:?}` for `Debug`.
