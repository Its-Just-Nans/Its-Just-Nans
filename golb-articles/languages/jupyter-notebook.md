---
title: Jupyter notebook - ipynb
---

## Ignore warnings

```python
import warnings

warnings.filterwarnings("ignore", category=DeprecationWarning)
warnings.filterwarnings("ignore", category=RuntimeWarning)
```

## HTML block

```html
<div class='alert alert-block alert-info'>
Blue box - info
</div>

<div class='alert alert-block alert-success'>
Green box - success
</div>

<div class='alert alert-block alert-warning'>
Orange box - warning
</div>

<div class='alert alert-block alert-danger'>
Red box - danger
</div>
```

## Answer function

```python
def answer(*args):
    FOREGROUND='\x1b[30m' # green
    BACKGROUND='\x1b[42m'# green
    DEFAULT = '\x1b[39m' # reset color
    print(BACKGROUND + FOREGROUND, *args, DEFAULT)
```

## Exporting notebook

```sh
# execute
jupyter nbconvert --log-level ERROR --execute --to notebook --inplace --ClearOutputPreprocessor.enabled=True --ClearMetadataPreprocessor.enabled=True stats.ipynb

# markdown
jupyter nbconvert --to markdown stats.ipynb --log-level ERROR
```
