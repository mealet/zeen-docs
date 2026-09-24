---
title: Compiler Interfaces
---

Interfaces with compiler meaning live in `core`. They split by module.

## Ops
| Interface | Method | Meaning |
|-----------|--------|---------|
| `Copy` | - | value copies on assign |
| `Clone` | `clone(*const self) Self` | explicit data clone |
| `Drop` | `drop(self) void` | cleanup at scope end |
| `Eq` | `eq(*const self, *const Self) bool` | `==` `!=` |
| `Ord` | `cmp(*const self, *const Self) Ordering` | `<`, `>`, `<=`, `>=` for generics |
| `Hash` | `hash(*const self) u64` | hash collections |
| `Add`/`Sub`/`Mul`/`Div`/`Mod` | `add`/`sub`/`mul`/`div`/`mod` | `+ - * / %` |
| `BitAnd`/`BitOr`/`BitXor` | `bit_and`/`bit_or`/`bit_xor` | `& \| ^` |
| `BitShl`/`BitShr` | `bit_shl`/`bit_shr` | `<< >>` |
| `BitNot`/`Neg`/`Not` | `bit_not`/`neg`/`not` | `~`/`-`/`!` |
| `Deref[T]`/`DerefPtr[T]` | `deref`/`deref_ptr` | `*expr` read / write |
| `Index[T]`/`IndexPtr[T]` | `index`/`index_ptr` | `expr[i]` read / write |

## IO
| Interface | Method | Meaning |
|-----------|--------|---------|
| `StrWriter` | `write_str`/`write_str_raw`/`write_str_single` | format sink |
| `Display` | `display[T: StrWriter](*const self, *T)` | `{}` |
| `Debug` | `debug[T: StrWriter](*const self, *T)` | `{:?}`, `@dbg` |

## Iter
| Interface | Method | Meaning |
|-----------|--------|---------|
| `Iterator[T]` | `next(*self) Option[T]` | `for` over structs |
| `PtrIterator` | `iter[I: Iterator](*self) I` | borrow as iterator |
| `OwnedIterator` | `into_iter[I: Iterator](self) I` | consume as iterator |
