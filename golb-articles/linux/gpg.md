---
title: GPG
sidebar_name: GPG
description: GPG commands
keywords: gpg, encryption, security
---

```sh
gpg --full-generate-key
# default
# 4096 size
# 0 (do not expire)
# real name: your-name
# email: your@mail.com

gpg --list-secret-keys --keyid-format=long

# Encrypt
gpg --encrypt --sign --armor -r FINGERPRINT name_of_file

# Decrypt
gpg file_name.asc

## Export key
gpg --output public.pgp --armor --export FINGERPRINT

## Export private key !!!
gpg --output private.pgp --armor --export-secret-key FINGERPRINT
```

## Key edition

```sh
# FINGERPRINT is the key fingerprint or the email
gpg --edit-key FINGERPRINT

> notation # add a notation, put a minus to remove
> save

> showpref # show key
> quit

gpg --armor --export FINGERPRINT > public.asc
```
