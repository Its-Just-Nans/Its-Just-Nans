---
title: Commands
description: A list of useful Linux commands
keywords: linux, commands, shell, terminal
---

<!-- One command per paragraph -->

## Basic commands

### create a file

```sh
touch
# touch FILE
```

### create a folder

```sh
mkdir
# mkdir DIR
```

### delete a folder

```sh
rmdir
# rmdir DIR
rm -r
# rm -r DIR
```

### compare file

```sh
diff
# diff FILE_1 FILE_2
cmp
# cmp FILE_1 FILE_2
comm
# comm FILE_1 FILE_2
```

### compression

```sh
gzip
gunzip
# gzip FILE
bzip2
# bzip2 FILE
```

### get information about a file

```sh
file <file>
# file temp.txt
```

### delete duplicate lines

```sh
uniq
```

### get limits of the OS

```sg
ulimit -a
```

### fusion files

```sh
cat
# cat FILE_1 FILE_2
paste
# paste FILE_1 FILE_2
```

### set file mode creation mask

```sh
umask
```

## See kill signals

```sh
# show all signals
kill -L
kill -SIGKILL <PID>
kill -9 <PID>
```

## Pagination

```sh
cmd | less
cmd | more

# for raw inoput mode
less -R
```

## sort a file

Note that `sort` is locale dependent.

```sh
sort sample.txt
# test
test 1
test2
#test3

LC_ALL=C sort sample.txt
# test
#test3
test 1
test2
```

## Others

```sh
pstree
kill
crontab
nice
write
mesg
telnet
ssh
ftp
```

## Switch between background and foreground

```sh
command &
fg # change to foreground
# pause with CTRL+Z
bg # sent it to background

# list processes
jobs
```

## `tar` and `untar`

```sh
# create
# -c create -v verbose -z gzip -f archivename
tar -cvzf archive.tar.gz directory

# extract
# -x extract -v verbose -f archivename -C directory
tar -xvf archive.tar.gz -C extracted
```

## `zip` and `unzip`

```sh
# create
zip -r archivename.zip directory

# extract
unzip archivename.zip -d extracted
```

## Grep everything

```sh
grep -rni "pandoc" *
grep -rni "pandoc" ./**/Makefile # in specific file
```
>
> `-r`: recursive
> `-n`: line number
> `-i`: ignore  case

Or use ripgrep <https://github.com/BurntSushi/ripgrep>

```sh
rg -uu "pandoc"
```

## systemctl and journalctl

```sh
SERVICE=service_name.service
systemctl start $SERVICE
journalctl -u $SERVICE -f
```

## Get disk space with `df`

```sh
df -h

# also know type of partition
df -Th
```

> - `-T`: `--print-type`
> - `-h`: `--human-readable`

## Get size of files with `du` or `dust`

```sh
cargo install du-dust

dust
# or
du -d 1 -h | sort -h
```

## timeout

```sh
timeout 3 COMMAND
# in a script
timeout  --foreground 3 COMMAND
```
>
> check also `--preserve-status` arg

## screen command

```sh
# start new "infinite" shell - read the manual for more info
# CTRL + A then "D" to leave
screen

# list screens shell
screen -ls

# resume screen shell
screen -r <screen_id>
```

Alternatives:

- [https://www.byobu.org/](https://www.byobu.org/)
- [https://github.com/tmux/tmux](https://github.com/tmux/tmux)

## Search path of a command

```sh
which <command>
whereis <command>
type <command>
command -v <command>
```
