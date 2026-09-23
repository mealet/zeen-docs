---
title: Structures and Methods
---

## Methods
Methods live in struct bodies and take `self` as first receiver. `Self` is the struct type itself.

| Receiver | Mode |
|----------|------|
| `self` | owned value |
| `const self` | owned, read-only |
| `*self` | mutable borrow |
| `*const self` | read-only borrow |

Example:
```zn
struct Person {
  age: u32,

  pub fn birthday(*self) {
    self.age += 1;
  }
}
```

Static calls go through the type, method calls through the value:
```zn
let person = Person.new(26);
person.birthday();
```
