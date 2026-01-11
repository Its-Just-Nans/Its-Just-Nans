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
# launch shell commands
:!echo 1

# launch shell commands and capture output in the file
:r! echo 1
# will insert 1
```

