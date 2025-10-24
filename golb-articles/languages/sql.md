---
title: SQL
sidebar_name: SQL
description: SQL commands
keywords: sql, commands
---

## MySQL using MariaDB

```sh
# as root
mysql -u root

# in mysql
SHOW DATABASES;

# create database
CREATE DATABASE db_name;

# create user
CREATE USER username@localhost IDENTIFIED BY 'password';
# check creation
SELECT User FROM mysql.user;

GRANT ALL PRIVILEGES ON db_name.* TO 'username'@'localhost';
exit

# load old database
mysql -u root db_name < save.sql

# verify
mysql -u root db_name -e "SHOW TABLES;"
```

> - replace `db_name`, `username`, `password`

## MySQL docker

```sh
# remove docker if exists
docker rm --force docker-mysql

docker run --name docker-mysql -d -p 3306:3306 \
-e MYSQL_ROOT_PASSWORD="random-root-password" \
-e MYSQL_DATABASE="DATABASE_NAME" \
-e MYSQL_USER="username" \
-e MYSQL_PASSWORD="password" \
-v $(pwd)/save.sql:/docker-entrypoint-initdb.d/dump.sql \
mysql:latest
```

> - replace `DATABASE_NAME`, `username`, `password` (and `random-root-password`)
> - or you can use `-e MYSQL_ROOT_PASSWORD="$(openssl rand -base64 42)"` to have a random password
> - `docker-mysql` is the name of the docker
> - [hub.docker.com -mysql](https://hub.docker.com/_/mysql)
> - more info on docker at [/golb/docker](https://its-just-nans.github.io/golb/docker)

## PostgreSQL commands

```plaintext
\l to list databases
\c database to change database
\dt to list tables
\d table to show details about a table

EXPLAIN ... -- plan
EXPLAIN ANALYZE ... -- time
```
