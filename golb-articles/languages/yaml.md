---
title: YAML
sidebar_name: YAML
---

## Validate YAML file

```sh
python -m pip install pyyaml
python -c 'import yaml, sys; print(yaml.safe_load(sys.stdin))' < data.yaml
```

> https://stackoverflow.com/a/20420243

