---
title: Vim
sidebar_name: Vim
description: Vim shortcuts
keywords: vim, shortcuts
---

## Survival

- `h`, `j`, `k`, `l`: move cursor
- `i`: enter insert mode
- `ESC`: leave mode
- `:wq`: write and quit
- `:q!` quit (force)

## Moving cursor

```txt
# move cursor
h j k l

# move relative
8j
# will move 8 line down

# go to last line
G
# go to line 5
5G
```

## Shortcuts Normal mode

- `x`: delete character
- `ro`: replace current letter by `o`
- `dd`: delete and copy line

## Files

```vim
# open/create file in new tab
:new filename.ext

# open/create file in new vertical split
:vert new filename.ext
```

```vim
# switch between splits
CTRL-w h
CTRL-w j
CTRL-w k
CTRL-w l
```

```vim
# copy full file
:%y+

# paste
"P+
```

```vim
# read and insert a file
:r file.txt

# launch shell commands
:!echo 1

# launch shell commands and capture output in the file
:r! echo 1
# will insert 1
```

```vi
# sort a file
1G!Gsort
```


## Links

- <https://stackoverflow.com/a/1220118>
- <https://stackoverflow.com/a/2559262>

