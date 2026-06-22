---
title: Vim && Neovim
sidebar_name: Vim
description: Vim and Neovim shortcuts
keywords: vim, neovim, shortcuts
---

- <https://www.vim.org/>
- <https://neovim.io/>

## Survival

- `h`, `j`, `k`, `l`: move cursor
- `i`: enter insert mode
- `ESC`: leave current mode
- `ESC` + `:wq`: write and quit
- `ESC` + `:q!`: quit (force)

## Moving cursor

```txt
# move cursor
h j k l

# move relative
8j
# will move 8 line down

G # go to last line
gg # go to first line
5G # go to line 5


w  # move to beginning of next word
b  # move to previous beginning of word
e  # move to end of word
W  # move to beginning of next word after a whitespace
B  # move to beginning of previous word before a whitespace
E  # move to end of word before a whitespace

0  # move to beginning of line
$  # move to end of line
_  # move to first non-blank character of the line
g_ # move to last non-blank character of the line
```

## Normal mode and insert mode

- `i`: (insert) enter insert mode (before cursor)
- `a`: (append) enter insert mode (after cursor)
- `I`: insert at the start of the line (before the first word)
- `A`: append at the end of the line (after the last word)
- `u`: undo
- `CTRL` + `r`: undo undo

## Shortcuts Normal mode

- `x`: delete character
- `ro`: replace current letter by `o`
- `dd`: delete and copy line
- `yy`: copy (yank) a line
- `p`: paste after cursor
- `P`: paste before cursor

## Selection

- `v`: select inside line (complete with `h` or `l`)
- `V`: select lines (complete with `j` or `k`)
- `y`: copy selection
- `d`: delete selection

## Search

- `/SEARCH`: then `Enter` then `N` (previous) and `n` (next)

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

## System clipboard

You should have a clipboard util like `xclip` installed

- `"*y`: copy on mouse clipboard
- `"*p`: paste on mouse clipboard
- `"+y`: copy on system clipboard
- `"+p`: paste on system clipboard

## Registers

```vi
# view the registers
:registers
```

- The unnamed register `""`
- The numbered registers `"0-9`: previously copied things
- The small delete register `"-`
- The named registers `"a` `"b`..`"z`
- The read-only registers `":` `".` `"%`
- The alternate file register `"#`
- The expression register `"=`
- The selection registers `"*` and `"+`
- The black hole register `"_`
- The last search pattern register `"/`

## Macros

```vi
q<register><commands>q

# then to play it
@<register>
# then
@@
```

## Commands

```
# to replace
:%s/toto/tata/g

# to wrap lines
:set nowrap
:set wrap
```

## Format json

```txt
# select the json with shift + V then run
# to prettify
:!jq

# to uglify
:!jq -c
```

## Windows

- `CTRL+W`: windows shortcut
- `CTRL+W` + `n`: new window (or `:new`)
- `CTRL+W` + `CTRL+V`: split window (or `:vs`)
- `CTRL+W` + `l`: move to right window
- `CTRL+W` + `j`: move to down window

## Comment

- `gcc`: Comment line
- `{Visual}gc`: Comment or uncomment the selected line(s).

## Links

- <https://stackoverflow.com/a/1220118>
- <https://stackoverflow.com/a/2559262>

