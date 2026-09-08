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
f<char> # to next <char> cursor is on <char> (same line)
F<char> # to previous <char> cursor is on <char> (same line)
t<char> # to next <char> cursor is before (same line)
F<char> # to previous <char> cursor is after (same line)

# you can combine
df" # delete to " and "
dt" #delete to "
d% # delete to the pair bracket/parenthesis

. # repead the delete
; # repeat the find
```

## Moving cursor

- `H`: move cursor to top of screen
- `M`: move cursor to middle of screen
- `L`: move cursor to bottom of screen
- `zz`: move view pane to middle this line
- `zt`: move view pane to top this line
- `zb`: move view pane to bottom this line
- `CTRL+y`: move cursor view pane up
- `CTRL+e`: move cursor view pane down

## Normal mode and insert mode

- `i`: (insert) enter insert mode (before cursor)
- `a`: (append) enter insert mode (after cursor)
- `I`: insert at the start of the line (before the first word)
- `A`: append at the end of the line (after the last word)
- `u`: undo
- `CTRL` + `a`: increment number on the line
- `CTRL` + `r`: undo undo
- `CTRL` + `R`: insert register
- `CTRL` + `R` + `=`: evaluate and insert (easing calculation)

## Edition

- `C` - delete to the end of line
- `ci[` - or ci" ci( # change between the char
- `ciw` - inner word
- `daw` - word and space
- `J` - collapse next line with space
- `gJ` - collapse next line without space
- `gU` - maj
- `gUiw` - maj current word
- `g~` - inverse on the deplacement
- `g~$` - inverse until end of line
- `dap` - delete paragraph and line
- `dip` - delete paragraph
- `gq` - reformat
- `gqip` - reformat inner paragraph

## Search

- `/<word>` - search then enter then n and N
- `?<word>` - search before then enter
- `//` - redo the search
- `*` - search the current word
- `%` - jump to bracket pair
- `ma` - place a marker
- `'a` - go to marker

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
- `CTRL` + `v`: start visual bloc
- `gh` - character-wise select mode
- `gH` - line-wise select mode
- `gCtrl-h` - block-wise select mode
- `y`: copy selection
- `d`: delete selection

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

## System clipboard

You should have a clipboard util like `xclip` installed

- `"*y`: copy on mouse clipboard
- `"*p`: paste on mouse clipboard
- `"+y`: copy on system clipboard
- `"+p`: paste on system clipboard

## Registers

 - `:registers` or `:reg` - view the registers

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

- `:s/toto/tata` - replace current line
- `:%s/toto/tata/g` - replace in file
- `:%s/toto/tata/gc` - ask yes no before replacing
- `:g/WORD/d` - delete all lines with WORD
- `:v/WORD/d` - delete all lines without WORD
- `:g/word/normal <keys>` - execute on line with word
- `1G!Gsort` - sort a file
- `:sort` - sort file
- `:sort u` - sort unique
- `:set tw=20` - set width
- `:set nowrap` - to disable wrap lines
- `:set wrap` - to enable wrap lines

## Format json

Select the json with shift + V then run

- `:!jq` - to prettify
- `:!jq -c` - to uglify

## Windows

- `CTRL+w`: windows shortcut
- `CTRL+w` + `n`: new window (or `:new`)
- `CTRL+w` + `CTRL+v`: split window (or `:vs`)
- `CTRL+w` + `l`: move to right window
- `CTRL+w` + `j`: move to down window

## Comment

- `gcc`: Comment line
- `{Visual}gc`: Comment or uncomment the selected line(s).

## Links

- <https://stackoverflow.com/a/1220118>
- <https://stackoverflow.com/a/2559262>

