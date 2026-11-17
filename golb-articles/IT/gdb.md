---
title: gdb
---

## Commands

```sh
gdb ./program

run
break path/to/file.ext:line
next
print my_var
```

> you can use these commands as a single letter
>
> `Enter` repeat the last command

## gdb TUI

```sh
gcc main.c -ggdb -o main
gdb ./main

break main
run
tui enable
# in tui mode
step
step
step
quit
```
