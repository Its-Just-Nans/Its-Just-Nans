---
title: Rust
description: Rust programming language
keywords: rust, programming, language
---

## Guides

- <https://www.rust-lang.org/> - official language
- <https://rustup.rs/> - install rust and tools
- <https://doc.rust-lang.org/book/>
- <https://doc.rust-lang.org/reference/>
- <https://google.github.io/comprehensive-rust/>
- <https://github.com/rust-embedded/rust-raspberrypi-OS-tutorials>
- <https://rust-unofficial.github.io/patterns/>
- <https://teach-rs.tweede.golf/>
- <https://github.com/johnthagen/min-sized-rust>
- <https://doc.rust-lang.org/nightly/nomicon/>
- <https://marabos.nl/atomics/> - book on atomics and concurrency
- <https://docs.rs/releases/queue> - docs.rs build queue
- <https://lib.rs/~Its-Just-Nans/dash> - unofficial dashboard for crate maintainers (change username)

## Cargo commands

```sh
cargo doc --lib --no-deps --all-features

cargo clippy --all-targets --all-features -- -D warnings

# timings build
cargo build --timings
```

## Default `lib.rs`

```rust
#![warn(clippy::all, rust_2018_idioms)]
#![deny(
    missing_docs,
    clippy::all,
    clippy::missing_docs_in_private_items,
    clippy::missing_errors_doc,
    clippy::missing_panics_doc,
    clippy::cargo,
    clippy::unwrap_used,
    clippy::expect_used
)]
#![warn(clippy::multiple_crate_versions)]
```

## Tests

```sh
cargo test --features feat,second
cargo test -- --nocapture
```

## List installed packages

```sh
cargo install --list
```

## Tests with cargo-hack

```sh
cargo +stable install cargo-hack --locked

cargo hack check --feature-powerset --all-targets
cargo hack test --feature-powerset --all-targets
```

> <https://github.com/taiki-e/cargo-hack>

## Update all installed packages

```sh
cargo install cargo-update
cargo install-update -a
```

> <https://github.com/nabijaczleweli/cargo-update>

## Test coverage

```sh
cargo +stable install cargo-llvm-cov --locked
cargo llvm-cov --html
cd target/llvm-cov/html && python -m http.server
```

> <https://github.com/taiki-e/cargo-llvm-cov>

## cargo tree

```sh
cargo tree -e features

cargo tree -f "{p} {f}"
```

## uutils

- <https://github.com/uutils/coreutils> - repo
- <https://uutils.github.io/coreutils/docs/test_coverage.html> - comparison to GNU coreutils

## Builder pattern but with a single struct - Builder Lite

<https://rust-unofficial.github.io/patterns/patterns/creational/builder.html>

The builder pattern use a builder struct to create a new struct. In this case, we can use the struct itself to create a new struct. This is useful when we have a struct with many optional fields and we want to create a new struct with only a few fields changed.

```rust
#[derive(Default)]
pub struct Foo {
    bar: Option<String>,
}

impl Foo {
    pub fn new() -> Self {
        Self {
            ..Default::default(),
        }
    }

    pub fn with_bar(mut self, bar: String) -> Self {
        self.bar = Some(bar);
        self
    }
}

fn main() {
    let foo = Foo::new().with_bar("Y".to_string());
}
```

> This is commonly called the Builder Lite - <https://matklad.github.io/2022/05/29/builder-lite.html>

## Question mark operator

<https://doc.rust-lang.org/rust-by-example/std/result/question_mark.html>

Simply put, the question mark operator is a shortcut for unwrapping a Result. It is used to propagate errors up the call stack.

Replace

```rust
fn do_something() -> Result<Response, MyCustomError> {
    let smth = do_something(); // returns Result<Response, RandomError>
    match smth {
        Ok(response) => {
            // do stuff
            Ok(response)
        }
        Err(e) => {
            // create custom error
            let error = MyCustomError::new(e);
            Err(e)
        }
    }
}
```

with

```rust

// impl from to use .into() method
impl From<MyCustomError> for RandomError {
    fn from(e: MyCustomError) -> Self {
        e
    }
}

fn do_something() -> Result<Response, MyCustomError> {
    let smth = do_something()?;
    // do stuff
    Ok(smth)
}
```

## AsRef for `&str` arg

Replace

```rust
pub fn my_func(text: &str) {
    println!("{}", text);
}

pub fn my_func_with_string(text: String) {
    println!("{}", &text);
}
```

with

```rust
pub fn my_func<S: AsRef<str>>(my_str: S) {
    let text = my_str.as_ref();
    println!("{}", text);
}
```

## `Into<>` as arg

```rust
fn my_func<S: Into<String>>(my_str: S) {
    let text: String = my_str.into();
    println!("{}", text);
}
```

## PartialEq with full destructuring

> This pattern will ensure that the compilation break if you add a new field to the struct

```rust
impl PartialEq for PizzaOrder {
    fn eq(&self, other: &Self) -> bool {
        let Self {
            a_field,
            b_field,
        } = self;
        let Self {
            a_field: other_a_field,
            b_field: other_b_field,
        } = other;
        a_field == other_a_field && b_field == other_b_field
    }
}
```

## Use `#[non_exhaustive]` attribute

> Indicates that a type or variant may have more fields or variants added in the future.
> It also ensure cannot be constructed outside of the defining crate - useful for library

```rust
#[non_exhaustive]
pub struct MyStruct {
    pub a_field: u64,
    pub b_field: u64
}
```

## Useful conversions with Result and Option

```rust
// Convert Result error type
let variable: Result<T, E> = Ok(42);
let variable_t = variable.map_err(|e| format!("Error {e}"))?; // note the ?

// Convert Option to Result
let variable: Option<T> = Some(42);
let variable_t = variable.ok_or("Error: None value")?; // note the ?

// Convert Result to Option
let res: Result<u8, ()> = Ok(42);
let opt: Option<u8> = res.ok();

/// Convert Option<Result<T, E>> to Result<Option<T>, E> - also works in reverse
let opt_res: Option<Result<u8, ()>> = Some(Ok(42));
let res_opt: Result<Option<u8>, ()> = opt_res.transpose();
```

> - <https://cheats.rs/>
> - <https://upsuper.github.io/rust-cheatsheet/>

## Match patterns (with ignoring)

```rust
match foo {
    Type::Struct { a, b, .. } => {},
    Type::Tuple(_, _, x) => {},
    Type::Number(x) if x % 2 == 0 => println!("even"),
    s @ Type::Value(x) if x > 10 => {
        println!("I use s {s:?} and x {x}");
    }
    _ => {}
}
```
