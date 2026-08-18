---
title: Zeen Modules
---

# Modules
Modules in Zeen are just source code files with a `.zn` extension. Name of the module is just a name without extension (no extra declarations required).

Mostly module can look like this:
```zn
fn main() {
  let calculation = 2 + 2 * 2;

  @println("Result: {}", calculation);
}
```

Code separates into 3 different levels:
1. Declarations - top level code description (functions, structures, interfaces, etc.)
2. Statements - members of declarations, contains executable sequence (annotations, assigns, calls, etc.)
3. Expressions - little elements of data operating (like arithmetic, comparison, literals annotation, etc.)

We can split up our previous code with these levels:
```zn
// Declarations Level

// `main` is a function declaration
fn main() {
  // Statements Level

  // annotation statement
  let calculation = 2 + 2 * 2 /* value expression */;

  // macro call,
  // 2 expressions arguments: string literal, variable reference
  @println("Result: {}", calculation);
}
```
