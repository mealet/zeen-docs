---
title: Basic Types
---

Zeen has 17 builtin types: **signed ints, unsigned ints, floats, bool, char, void, never**.

## Integer Types
| Length | Signed | Unsigned |
|--------|--------|----------|
| 8-bit | `i8` | `u8` |
| 16-bit | `i16` | `u16` |
| 32-bit | `i32` | `u32` |
| 64-bit | `i64` | `u64` |
| pointer-sized | `isize` | `usize` |

Default integer literal type is `i32`.

## Float Types
| Type | Description |
|------|-------------|
| `f32` | 32-bit float |
| `f64` | 64-bit float |

Default float literal type is `f64`.

## Other Types
| Type | Description |
|------|-------------|
| `bool` | `true` or `false` |
| `char` | Single character (`'a'`) |
| `void` | No value (use `@void()` to make one) |
| `never` | Never returns (e.g. `@panic`) |

## Casts
Implicit casts happen right in expression. <br/>
Explicit casts use `@as`:
```zn
let a = @as(u8, 123);
```

#### Implicit (no `@as` needed):
| From | To |
|------|----|
| int / float literal | concrete int / float |
| `*T` | `*const T` |
| `*T` | `*void` (and back) |
| `"literal"` | `[]const char`, `[*]const char` |
| `fn` | `Fn`, `FnOnce` |
| `Fn` | `FnOnce` |
| `never` | any (e.g. `@panic` in expression) |


#### Via `@as`:
| From | To |
|------|----|
| numeric | numeric (int/float) |
| `bool`, `char` | integer (and back) |
| pointer | pointer, integer, `fn` |
| `fn` | pointer |
| integer | enum (empty-only) |
