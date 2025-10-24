---
title: golb
description: golb is a static site generator, it renders Markdown files. Maybe you will find them useful.
keywords: golb, static site generator, markdown, javascript
---

## Hi

Welcome to `golb` or simply: `"golb".split("").reverse().join("")`

In reality, this site is more like a code knowledge base

Links:

- <https://golb.n4n5.dev/> website
- <https://github.com/Its-Just-Nans/golb> repo
- <https://yakb.n4n5.dev/> - for less code and more words

Also some articles are moved to <https://n4n5.dev/articles/>

## About golb

`golb` is a static site generator, it renders Markdown files. Maybe you will find them useful.

`golb` is working without client JavaScript (navbar, file) - except the searchbar. You can still use javascript inside files - look below !

<p id="a">0</p>
<script>
    let a = 1;
    setInterval(() => {
        document.getElementById("a").innerHTML = a;
        a++;
    }, 1000);
</script>

<img src="favicon.png" alt="favicon" width="100" height="100" />
