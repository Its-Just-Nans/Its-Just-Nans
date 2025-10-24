---
title: Go
sidebar_name: Go lang
---

## Mirai botnet (Go + C) in a docker compose

- <https://github.com/3-dd-1/SR2I-project-mirai-docker>
- <https://n4n5.dev/articles/mirai-docker/>

## A very simple proxy

```go
package main

import (
    "io"
    "net/http"
    "time"
)

func main() {
    port := ":4200"
    http.HandleFunc("/https/", setProtocol("https"))
    http.HandleFunc("/http/", setProtocol("http"))
    http.HandleFunc("/", start)
    print("Server on http://localhost" + port + "\n")
    http.ListenAndServe(port, nil)
}

func start(w http.ResponseWriter, req *http.Request) {
    w.WriteHeader(200)
    w.Write([]byte("/http/<url> for http \n/https/<url> for https"))
}

func setProtocol(protocol string) http.HandlerFunc {
    length := len(protocol) + 2
    return (func(w http.ResponseWriter, req *http.Request) {
        w.Header().Set("Access-Control-Allow-Origin", "*")
        w.Header().Set("Content-Type", "application/json")
        if req.RequestURI == "/favicon.ico" {
            w.WriteHeader(404)
            w.Write([]byte(`404 not found`))
            return
        }
        print("Requesting: " + req.RequestURI[length:] + "\n")
        data := doRequest(protocol + "://" + req.RequestURI[length:])
        _, err := io.Copy(w, data)
        if err != nil {
            panic(err)
        }
    })
}

func doRequest(url string) io.ReadCloser {
    client := &http.Client{
        Timeout: time.Second * 10,
    }
    req, err := http.NewRequest("GET", url, nil)
    if err != nil {
        panic(err)
    }
    // req.Header.Set("Authorization", "If need auth")
    response, err := client.Do(req)
    if err != nil {
        panic(err)
    }
    return response.Body
}

```
