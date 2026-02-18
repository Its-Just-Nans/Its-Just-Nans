---
title: Python
---

## How to print the error name

```python
import traceback

try:
    #code here
except Exception as exception:
    print(type(exception).__name__)
    print(exception.__class__.__name__)
    print(exception.__class__.__qualname__)
    print(traceback.format_exc())
```

> <https://stackoverflow.com/a/18176682>

## Check if python2

```python
import sys

_IS_PY2 = sys.version_info[0] < 3
```

## Super easy multiprocess

```python
from multiprocessing import Pool

def multi_process(my_func, my_args, num_processes=10):
    """my_args is a table of arguments for my_func"""
    results = []

    with Pool(processes=num_processes) as pool:
        for result in pool.imap(my_func, my_args):
            results.append(result)

    return results
```

## Debug a string with `repr`

```python
my_str = 'my string\x00'

print(my_str)
# my string

print(repr(my_str))
# my string\x00
```

## How to get the path of the current folder

```python
import pathlib
pathlib.Path(__file__).parent.resolve()
```

## How to get the KeyboardInterrupt

```python
try:
    #code here
except KeyboardInterrupt:
    pass
    #or do something
```

## Pylint

```sh
python3 -m pip install pylint
pylint <filename>
```

## The Zen of Python

```sh
python -c "import this"
```

## Get the path to a package

```sh
python -c "import numpy as _;print(_.__path__)"
python -c "import numpy as _;print(_.__file__)"
```

## Simple http server

```sh
python -m http.server
```

## Prettify json

```sh
python -m json.tool file.json
```

## Pip config

Location:

- Windows: `$HOME/pip/pip.ini`
- Linux: `$HOME/.pip/pip.conf`

```sh
# show the location
pip config debug
# location location and config
pip config -v list
```

## Poor man's JSON parser/loader

Can be useful for loading log data that is not properly formatted JSON. Note that this can be unsecure (RTFM).

```python
import ast

weird_json = """{'a': 1, 'b': "2"}"""

obj = ast.literal_eval(weird_json)
print(type(obj["a"]), "=", obj["a"])  # <class 'int'> = 1
print(type(obj["b"]), "=", obj["b"])  # <class 'str'> = 2
```

## Break system packages

Get rid of the warning `--break-system-packages`

Edit `~/.config/pip/pip.conf`

```toml
[global]
break-system-packages = true
```
