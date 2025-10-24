---
title: Bash
---

- <https://github.com/dylanaraps/pure-bash-bible>

## Redirection

```sh
# override to FILE
cmd > FILE
# append to FILE
cmd >> FILE
```

```sh
cmd &> FILE

cmd >& FILE
```

> redirect stdout and stderr to FILE

```sh
cmd | cmd2
```

> The standard output of cmd is connected via a pipe to the standard input of cmd2.

```sh
cmd |& cmd2
```

> cmd's standard error, in addition to its standard output, is connected to cmd2's standard input through the pipe

## Standard input

```sh
cmd < FILE
cmd <<< "string"
```

## Pipe

```sh
CMD_1 | CMD_2
```

## Multiple commands

```sh
CMD_1 ; CMD_2 ; CMD_3
```

## Background task

```sh
CMD &
```

## Conditional commands

```sh
CMD_1 && CMD_2
CMD_1 || CMD_2
```

## Test flags

- `-e` : True if the file exists (any type: file, directory, etc.)
- `-s` : True if the file exists and is non-empty
- `-f` : True if the file exists and is a regular file
- `-d` : True if the file exists and is a directory
- `-r` : True if the file exists and is readable
- `-w` : True if the file exists and is writable
- `-x` : True if the file exists and is executable
- `-L` : True if the file exists and is a symbolic link
- `-h` : True if the file exists and is a symbolic link (same as `-L`)
- `-p` : True if the file exists and is a named pipe (FIFO)
- `-S` : True if the file exists and is a socket
- `-b` : True if the file exists and is a block device
- `-c` : True if the file exists and is a character device
- `-t` : True if the file descriptor is open and refers to a terminal
- `-N` : True if the file exists and has been modified since it was last read

## Shell tricks

```sh
!! # last command
 ls # with a trailing space -> not in history

disown -a && exit # leave terminal but don't kill running processes
```

## Basic command completion

```sh
_my_cmd(){
    local cur opts
    # Current word being completed
    cur="${COMP_WORDS[COMP_CWORD]}"

    # The words you want to complete
    opts='run copy $(ls)' # or however you want to list them

    # Fill COMPREPLY with matches
    COMPREPLY=( $(compgen -W "${opts}" -- "$cur") )
}

# some completion for my_cmd
if [[ -v BASH_VERSINFO && "$BASH" == */bash ]]; then
    complete -F _my_cmd my_cmd
fi
```

## Bash symlink

To enable physical path (vs logical) of symlinks you can set a bash option

```sh
set -o physical
# same as
set -P
```
