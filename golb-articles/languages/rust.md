---
title: Rust
description: Rust programming language
keywords: rust, programming, language
---

- <https://www.rust-lang.org/>

## Install rust and tools

- <https://rustup.rs/>

## Guides

- <https://doc.rust-lang.org/book/>
- <https://doc.rust-lang.org/reference/>
- <https://cheats.rs/>
- <https://google.github.io/comprehensive-rust/>
- <https://github.com/rust-embedded/rust-raspberrypi-OS-tutorials>
- <https://upsuper.github.io/rust-cheatsheet/>
- <https://rust-unofficial.github.io/patterns/>
- <https://teach-rs.tweede.golf/>
- <https://github.com/johnthagen/min-sized-rust>
- <https://doc.rust-lang.org/nightly/nomicon/>
- <https://marabos.nl/atomics/>
- <https://docs.rs/releases/queue> - docs.rs build queue
- <https://lib.rs/~Its-Just-Nans/dash> - unofficial dashboard for crate maintainers (change username)

## Cargo commands

```sh
cargo doc --lib --no-deps --all-features

cargo clippy --all-targets --all-features -- -D warnings

# timings build
cargo build --timings
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
- <https://uutils.github.io/coreutils/docs/test_coverage.html> - comparaison to GNU coreutils
