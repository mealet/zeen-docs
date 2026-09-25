---
title: Compiler CLI
description: Command line flags and usage examples for the Zeen compiler.
---

Basic usage:
```bash
zeen main.zn output
```

## Flags
| Flag | Description |
|------|-------------|
| `-m, --mode` | `Debug` (default) or `Release` |
| `--emit` | `BIN` (default), `OBJ`, `IR`, `MIR` |
| `--target` | Target triple (see `--targets-list`) |
| `--std` | Path to std root (default: `$ZEEN_STD` or `~/.zeen/std`) |
| `--linker-path` | Override detected linker |
| `--no-warns` | Disable warnings |
| `--targets-list` | List supported targets |

## Examples
```bash
zeen main.zn output -m Release
zeen main.zn output.ll --emit IR
zeen main.zn output --target x86_64-pc-windows-gnu
```
