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

## Transfer a private GPG key

```sh
# the --homedir options is important

# list keys to find FINGERPRINT
gpg --homedir /path/to/.gnupg --list-secret-keys --keyid-format LONG

# export private key
gpg --homedir /path/to/.gnupg --output private.asc --armor --export-secret-key FINGERPRINT

gpg --homedir /path/to/.gnupg --export-ownertrust > ownertrust.txt

# import
gpg --import private.asc
gpg --import-ownertrust ownertrust.txt

# cleanup
rm -rf private.asc

# verify
gpg --list-secret-keys
```


