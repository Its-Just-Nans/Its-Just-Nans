---
title: Nix
description: Nix commands
keywords: nix, linux, package manager
---

- <https://search.nixos.org/packages>

## Current channel

```sh
nix-channel --list
```

## Delete package

```sh
nix-env --uninstall <package>
```

## Update all

```sh
nix-channel --update -vv
nix-env -u '*' -v
```

## Clean store

```sh
nix-store --gc
```

## Check installed packages

```sh
nix-env --query
```

## Apparmor with nix

```sh
# as root
sysctl -w kernel.apparmor_restrict_unprivileged_unconfined=1
sysctl -w kernel.apparmor_restrict_unprivileged_userns=1

# And if you want to disable it, run the following two commands:

sysctl -w kernel.apparmor_restrict_unprivileged_unconfined=0
sysctl -w kernel.apparmor_restrict_unprivileged_userns=0
```

> <https://ubuntu.com/blog/ubuntu-23-10-restricted-unprivileged-user-namespaces>
