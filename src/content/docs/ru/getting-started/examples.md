---
title: Примеры
description: Небольшие примеры кода
---

## "Привет, Мир!"
```zn
fn main() {
  @println("Привет, Мир!");
}
```

## Форматирование строк
```zn
fn greet_message(name: []const char) []const char {
  @format("Привет, {}!", name)
}

fn main() {
  @println("{}", greet_message("mealet"));
}
```

## Работа со структурами
```zn
struct Person {
  age: u32,

  pub fn new(age: u32) Self {
    Self { .age = age }
  }

  pub fn birthday(*self) {
    self.age += 1;
    @println("С днём рождения!");
  }

  pub fn get_age(*const self) u32 {
    self.age
  }
}

fn main() {
  let person = Person.new(26);
  person.birthday();

  @println("Текущий возраст: {}", person.get_age());
}
```

## Общие типы
```zn
fn print_this[T: Display](value: T) {
  @println("Вот, я вывел для вас: {}", value);
}

fn main() {
  print_this(123);
  print_this("привет!");
}
```

## Extern функции (с общими типами)
```zn
/* декларация extern C функций */
extern fn malloc(usize) *void;
extern fn free(*void);

fn alloc_me[T](count: usize) *T {
  malloc(@sizeof(T) * count)
}

fn free_me[T](ptr: *T) {
  free(ptr);
}

fn main() {
  /* Заметьте, как мы заполняем общие типы в обычных выражениях (не типах) */
  let pointer = alloc_me #[i32](3);

  *pointer = 123;
  *(pointer + 1) = 321;
  *(pointer + 2) = 333;

  @println("{} {} {}", *pointer, *(pointer + 1), *(pointer + 2));

  free_me(pointer);
}
```

----

Больше примеров разных областей языка вы найдёте в соответствующих темах.
