---
title: Network
sidebar_name: Network
description: Linux network commands
keywords: network, linux, commands
---

## IPs

Args of `ip` (before the action command)

- `-c`: colored output
- `-j`: json output
- `-j -p`: json indented output
- `-d`: display more information

| Command `net-tools` | Command `iproute2` | Description             |
| ------------------- | ------------------ | ----------------------- |
| `ifconfig -a`       | `ip addr`          | Show IP address         |
| `arp -a`            | `ip neigh`         | Show ARP table          |
| `route`             | `ip route`         | Show network interfaces |
| `netstat -g`        | `ip maddress`      | multicast               |

```sh
# add ip
ip address add 10.0.0.1/24 dev eth0
# up
ip link set eth0 up
```

## Linux network namespaces

```sh
# root network namespace
ip link

ip netns add red
ip netns del green
ls /var/run/netns

ip netns list

ip netns exec red ip link

# do command under a namespace
ip netns exec red bash
```

## Bridges

```sh
sudo apt install bridge-utils

# create new interface NEW_INTERFACE
tunctl -u user -t NEW_INTERFACE
ifconfig NEW_INTERFACE up promisc


# create bridge BRIDGE
brctl addbr BRIDGE
ifconfig BRIDGE up promisc
brctl addif BRIDGE eth0
brctl addif BRIDGE NEW_INTERFACE

# show bridges
brctl show

ifconfig BRIDGE up
```
