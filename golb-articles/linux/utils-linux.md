---
title: Linux utils
sidebar_name: utils linux
description: Linux utils
keywords: linux, utils, commands
---

<!-- multiples commands per paragraph -->

## Links

- Cron helper <https://crontab.guru/>
- <https://www.commandlinefu.com>

## Learn multiplications

```sh
for i in {5..7}; do  for e in {5..7}; do echo "$i*$e=$(bc<<<$i*$e)" | spd-say -e ;sleep 2; done; done
```

## Get sound update

```sh
watch -n 10 'mycommand && spd-say done || echo "no"'
```

## Change partition

```sh
# list partitions
fdisk -l

fdisk /dev/sdx

# touch d for delete partition

# touch n for new partition
```

## Format partition

```sh
mkfs.vfat /dev/sdx1
```

## Use dd to copy an ISO

```sh
dd if=file.iso of=/dev/sdx bs=1M status=progress
```

> - `if`: input file
> - `of`: output file here `/dev/sdx`
> - `bs`: block size

## Copy file to clipboard

```sh
xclip -sel c < input_file
```

> Reference: [https://stackoverflow.com/a/62168635](https://stackoverflow.com/a/62168635)

## Show listening ports

```sh
ss -ptulwn | grep LISTEN
```

## Change the pager

Change the pager of `man` :

```sh
export PAGER=less
```

## Download urls

```sh
cat a | while read f; do curl -L -b 'cookie=value' -O -J "${f}"; done
```

## iftop

```sh
# display bandwidth usage on an interface by host
# as root
iftop -s wlp0
# change to your interface
```

## slock

```sh
# lock your screen
slock
```

## aspell

```sh
aspell -l en -c file.txt
```

## Using `su` on Linux (Debian)

The `su` command allows you to switch users for the duration of a session (after entering the password, if there is one). To use it, type:

```sh
su USERNAME
```

You can also use it to become root simply by typing:

```sh
su
```

To become a superuser on Linux, you can use the su command. However, sometimes this is not enough, and you still won't have the proper permissions. This is normal — you haven't loaded the superuser's environment variables.

To fix this, simply run:

```sh
su -l
# or
su -
```

> <https://manpages.debian.org/stretch/login/su.1.fr.html>

## Sudo usage

Add a user to sudoers

```sh
# as root
adduser USERNAME sudo
# then reload session
```

Launch the last command with sudo

```sh
sudo !!
```

## Swap

```sh
# should be root
# Turn swap off
swapoff -a

# Create an empty swapfile 10GB
dd if=/dev/zero of=/swapfile bs=1G count=10

chmod 0600 /swapfile
mkswap /swapfile  # Set up a Linux swap area
swapon /swapfile  # Turn the swap on
```

> <https://askubuntu.com/a/1177939>

## Oneliner favicon.ico generator

```sh
TO_ICONIFY=IMAGE.png
for i in 48 96 144 192; do convert -background none $TO_ICONIFY -resize ${i}x${i} favicon-${i}x${i}.png; done; convert -background none favicon-* favicon.ico
```

> `-background none` is used to keep the transparency with `png`

## txt to pdf

```sh
apt install paps

paps file.txt | ps2pdf - file.pdf
```

## exiftool rename

```sh
exiftool -d '%Y-%m-%d_%H-%M%-S%%-c.%%e' '-filename<CreateDate' .
```

> Reference <https://blog.wxm.be/2024/07/26/exiftool-rename-from-date.html>

## exiftool check

```sh
# for all supported format
exiftool -r .

# for jpg
exiftool -r -ext jpg .
```

## Convert jpg to png with background

```sh
convert image.png -background white -flatten -alpha off image.jpg
```

> Reference <https://stackoverflow.com/a/5280262>

## Fast ram folder

```sh
mkdir -p /mnt/ram
mount -t tmpfs tmpfs /mnt/ram -o size=4096M # create a (fast) in-ram folder of 4GB
```

## Reset root password

```sh
# reboot and press `e` on grub
# add `init=/bin/bash` at the end of the line starting with `linux`
# press `F10` to boot
mount -no remount,rw /
passwd
# enter new password
```

## Share files

- <https://www.commandlinefu.com/commands/view/9589/create-a-file-server-listening-in-port-7000>

```sh
# Create a file server, listening in port 7000
while true; do nc -l 7000 | tar -xvf -; done


# Then, at client side (router)

# Send file myfile to server
tar c myfile | nc localhost 7000

# Send directory mydir to server
tar c mydir | nc localhost 7000
```

## Check links in file

```sh
grep -oP '(http|https)://[^<"]+' rss.xml | uniq | xargs -n1 lychee -vv
# or without -n1
```

> <https://github.com/lycheeverse/lychee/>

## Run command on file system change

```sh
apt install inotify-tools
# here we do 'ls .' every change
while true; do inotifywait -r -e MODIFY . && ls .; done
```

## List fonts

```sh
fc-list
```

## Change GRUB settings

```sh
# update grub config - needs root
vi /etc/default/grub

# in the file - for example add a background image
# note that the image format is important
GRUB_BACKGROUND=/etc/default/back.png

# update grub - needs root
update-grub
```
