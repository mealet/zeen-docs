---
title: Compiler
description: Command line flags and usage examples for the Zeen compiler.
---

Basic usage:
```bash
zeen <source> <output>
```

## Flags
| Flag | Description |
|------|-------------|
| `-m, --mode` | `Debug` (default) or `Release` |
| `--emit` | `BIN` (default), `OBJ`, `IR`, `MIR` |
| `--target <TRIPLE>` | Compilation target triple (see `--targets-list`) |
| `--std <PATH>` | Std library project root, the directory containing `src` (default: `$ZEEN_STD`, `~/.zeen/std`, then `share/zeen/std`) |
| `--linker-path <PROGRAM>` | Override the detected linker |
| `--pkg NAME=PATH` | Map a package name to a source directory (repeatable) |
| `--link <LIB>` | Link an extra native library, e.g. `raylib` (repeatable) |
| `--link-dir <PATH>` | Add a native library search directory (repeatable) |
| `--check` | Run all checks without codegen |
| `--no-warns` | Disable compiler warnings |
| `--no-color` | Disable colored output |
| `--targets-list` | List supported target triples |

## Examples
```bash
zeen main.zn output -m Release
zeen main.zn output.ll --emit IR
zeen main.zn output --target x86_64-pc-windows-gnu
zeen main.zn game --link raylib
zeen main.zn --check
```
