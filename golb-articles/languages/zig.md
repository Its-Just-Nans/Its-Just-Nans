---
title: Zig
description: Zig programming language
keywords: Zig, programming, language
---

## Links

- <https://github.com/ratfactor/ziglings>
- <https://ziglearn.org/>
- <https://ziglang.org/>
- <https://github.com/ziglang/zig>
- <https://andrewkelley.me/>

## Get zig

One liner to get the latest [Zig](https://ziglang.org/) compiler using [`curl`](https://github.com/curl/curl) and [`jq`](https://github.com/jqlang/jq)

```sh
curl -s -L $(curl -s https://ziglang.org/download/index.json | jq -r '.master."x86_64-linux"."tarball"') |  tar x -J -C . && mv zig-linux* ~/.zig
```

`zig cc` compiler is just awesome!
