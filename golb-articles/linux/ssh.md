---
title: SSH
sidebar_name: SSH
description: SSH commands
keywords: ssh, security, linux
---

## Generate a ssh key

```sh
ssh-keygen -t ed25519 -C "$USER@$(hostname)"
```

## Change SSH server config

```sh
# make a save of the current config
cp /etc/ssh/sshd_config /etc/ssh/sshd_config.save

nano /etc/ssh/sshd_config
# change the config, for example
# Port 2233

# restart sshd daemon
systemctl restart sshd

# check if port is applied :
lsof -i -P -n | grep ssh
```

## Generate a lot a ssh keys

```sh
#!/bin/bash
mkdir -p temp

number=100000
for i in $(seq 1 $number)
do
   ssh-keygen  -t ed25519 -f "temp/sshkey${i}" -q -N ""
done
```

## Kill ssh

```sh

killSSH() {
  while true; do pkill -f "sshd: $USER"; done
}
```
