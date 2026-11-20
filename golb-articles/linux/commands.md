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
gzip FILE
gzip -d FILE

bzip2 FILE
bzip2 -d FILE
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

```sh
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

# for raw input mode
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
