---
title: make and Makefile
sidebar_name: make
---

- <https://makefiletutorial.com/>
- If you use `make` for task automation, check
  - <https://github.com/casey/just>
  - <https://github.com/jdx/mise>

## Example with task

```Makefile
ARGS=-O3

all: build test

build:
    zig cc main.c $(ARGS) -o main.out

test:
    ./main.out
```

> Note: this is an example for tasks. `make` is not really used like that

## Task usage

```sh
make
# will do the first entry so "make all"

make all
# will do first "make build" then "make test"

make build
# will do the zig compilation

make test
# will launch the program
```

## Override variables

```sh
make ARGS=
make ARGS=-O2
```
