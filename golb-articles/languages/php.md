---
title: PHP
sidebar_name: PHP
---

## How to print and get errors

```php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

//code here
```

> Reference: <https://stackoverflow.com/a/21429652>

## Start a simple PHP local server

```sh
# only localhost !
php -S localhost:8080
# for external access
php -S 0.0.0.0:8080
# or
php -S 0:8080
```

> `-S <addr>:<port>`:  Run with built-in web server

## phpMyAdmin - simple usage

```sh
cd /usr/share/phpmyadmin/
# or clone the repo
# then start a php web server
php -S localhost:8080
```
