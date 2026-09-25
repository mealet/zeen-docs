---
title: Introduction
description: An introduction to Zeen Programming Language
---

# What is Zeen
**<u>Zeen</u>** - a modern systems programming language designed for simplicity of program flow control.
It provides toolchains and compiler rules to operate data easily and drop it automatically after usage with move semantics to avoid any runtime overhead.
The main idea is to create a tool to develop efficient software where most errors are caught at compile time.

Zeen took many design choices from Rust and Zig programming languages, which makes it more familiar for most developers.
Besides that it introduces its own approach to ownership, memory management, and compile-time features.

:::note[Please Note]
- There is no borrow checker, only move semantics
- Compiles through LLVM 22 to native binary
:::

# Why was Zeen created
I, the founder of the language and the writer of the first version of this documentation — [@mealet](https://github.com/mealet), was very fascinated
by Rust's ownership and auto-drops system, but I also wanted more freedom like in Zig. I've chosen freedom of Zig and, once a day, I've got an untraceable
segmentation fault which I couldn't fix. It is probably my skill issue, but then I've decided to create a "free" systems language with automatic data drops and an ownership system.

# What's next?

This documentation will guide you through the language, from basic syntax and types to memory management, compile-time features, generic types and other advanced compiler behavior.
You'll be able to write more advanced and professional code for your amazing programs in Zeen.
