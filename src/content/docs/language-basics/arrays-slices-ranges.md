---
title: Arrays, Slices and Ranges
---

## Arrays
Fixed-size collection, size known at compile time. Elements access with `a[i]`, indexing starts at 0. <br/>
Syntax:
```zn
[1, 2, 3, 4]
[0; 1024]
```

Array type is `[N]T` (`[0; 1024]` is `[1024]i32`).

If elements are not `Copy`, the array is move-only.

Example:
```zn
let numbers = [10, 20, 30];

numbers[0] = 99;

@println("{} {}", numbers[0], numbers[2]);
```

Out of bounds access panics in Debug, in Release it is UB.

## Slices
Slice is a view into array data with pointer and length. It does not copy data, writes through slice change the original array. <br/>
Syntax:
```zn
numbers[1..4]
numbers[..]
numbers[..3]
numbers[2..]
numbers[1..=3]
```

Slice type is `[]T`. Slices have `.len` and `.ptr` fields. Slice is always `Copy`, it is just a view.

Example:
```zn
let numbers = [1, 2, 3, 4, 5];
let slice = numbers[1..4];

slice[0] = 99;

@println("{} {}", slice.len, slice[0]);
```

Out of bounds access panics in Debug, in Release it is UB.

## Ranges
Range is a `core` type with optional bounds, used for slicing and iteration. <br/>
Syntax:
```zn
lo..hi
lo..=hi
lo..
..hi
..=hi
..
```

Ranges can be assigned to variable:
```zn
let range: Range = 1..4;
```

Example:
```zn
let range = 0..3;

for (i : range) {
  @println("{}", i);
}
```

## Many Pointers
C-like pointer with unknown length, elements access with `ptr[i]`. <br/>
Can be made from array:
```zn
let numbers = [1, 2, 3];
let ptr: [*]i32 = numbers;
```

Example:
```zn
let numbers = [104, 101, 108];
let ptr: [*]i32 = numbers;

ptr[1] = 121;

@println("{} {}", ptr[0], ptr[1]);
```
