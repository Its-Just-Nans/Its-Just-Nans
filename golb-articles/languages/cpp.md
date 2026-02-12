---
title: C++
sidebar_name: C++
---

## Links

- <https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines>

## `cmake`

### Start `cmake` folder

```sh
CMAKE_FOLDER=build
cmake -G Ninja -DCMAKE_BUILD_TYPE=Debug -S . -B $CMAKE_FOLDER
```

> - `-G` specify a build system generator
> - `Ninja` can be found here [https://ninja-build.org/](https://ninja-build.org/)
> - `-D` create or update a CMake CACHE entry
> - `-S <path>` path to root directory of the CMake project to build
> - `-B <path>` path to directory which CMake will use as the root of build directory
> - reference: [https://cmake.org/cmake/help/latest/manual/cmake.1.html](https://cmake.org/cmake/help/latest/manual/cmake.1.html)

### Build

```sh
CMAKE_FOLDER=build
cmake --build $CMAKE_FOLDER -j "$(nproc)"
```

> - `--build <path>` project binary directory to be built
> - `nproc` print the number of processing units available

## What to use

![CPP mindmap](./data/HNMy4.png)

## cppcheck

- <https://cppcheck.sourceforge.io/>

```sh
# install
apt install cppcheck
# use it
cppcheck --enable=style path/to/file.c
# all checks
cppcheck --enable=all path/to/file.c
```
