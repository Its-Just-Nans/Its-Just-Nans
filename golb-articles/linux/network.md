---
title: Network
sidebar_name: Network
description: Linux network commands
keywords: network, linux, commands
---

## Links

- <https://www.wireshark.org/>

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

## Utils file

```sh
# IPv4 addresses:
cat /proc/net/fib_trie

# hex-encoded port data:
cat /proc/net/tcp

# ARP
cat /proc/net/arp
```

## Custom host resolution

You will need first need to ensure that the file `/etc/nsswitch.conf` is created

```txt
# /etc/nsswitch.conf

hosts:          files dns
networks:       files
```

Then you can create and use the file `/etc/hosts` to do a custom host resolution

```txt
# /etc/hosts
127.0.0.1       localhost
::1             localhost ip6-localhost ip6-loopback
192.168.1.45    my_server
```

## Get network packets

```sh
# as root
tcpdump -i any
```

> <https://www.youtube.com/watch?v=hWc-ddF5g1I>

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
# need root
apt install bridge-utils

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
