---
title: Docker
---

## Options

```sh
docker run -it debian
```
>
> - `-it`: interactive + tty

```sh
docker run -e FOO=bar debian
```
>
> - `-e`: environment variable

```sh
docker run -v $(pwd):/mnt debian
```
>
> - `-v`: volume

```sh
docker run -d debian
```
>
> - `-d`: detached

## Build

```sh
docker build -t my_debian .
# then
docker run my_debian
```

> `-t`: tag the image

## Known bug on MacOs Apple Silicon

You need to add `--platform linux/amd64` (for example) to use the amd64 because by default, it use the platform of the computer (`arm64`)

You need to add this option during `docker build` and `docker run` commands

## Run nginx on docker

It's useful to add

```dockerfile
CMD ["nginx", "-g", "'daemon off;'"]
```

to force nginx to run in foreground (and not in background)

## Clean stuff

```sh
docker system prune -a --volumes
```

## Docker service

```sh
# as root
systemctl restart docker
# if this doesn't work because of an error
dockerd
# example error: Config at /etc/docker/daemon.json is incorrect
```
