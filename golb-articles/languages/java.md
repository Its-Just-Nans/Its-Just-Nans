---
title: Java
---

## try catch with `AutoCloseable`

```java

try(
// AutoCloseable here
) {

} catch(Expression e) {

}
```

## Examples of stream

|         Input          |         Output          |
| :--------------------: | :---------------------: |
|   `FileInputStream`    |   `FileOutputStream`    |
| `BiteArrayInputStream` | `BiteArrayOutputStream` |
| `BufferedInputStream`  | `BufferedOutputStream`  |
|   `DataInputStream`    |   `DataOutputStream`    |
|  `ObjectInputStream`   |  `ObjectOutputStream`   |
|   `PipedInputStream`   |   `PipedOutputStream`   |
|   `GzipInputStream`    |   `GzipOutputStream`    |
| `SequenceInputStream`  | `SequenceOutputStream`  |
|   `AudioInputStream`   |   `AudioOutputStream`   |

## Useful class

- `FileReader`
- `Scanner`
- `PrintWriter`
- `BufferedReader`

Use buffer with a file: `FileReader`->`BufferedReader`->`Scanner`

## Protected, public private

| Access Modifier | Accessible Within Class | Accessible Within Package | Accessible in Subclass (Other Package) | Accessible in Other Packages |
| --------------- | ----------------------- | ------------------------- | -------------------------------------- | ---------------------------- |
| `public`        | Yes                     | Yes                       | Yes                                    | Yes                          |
| `protected`     | Yes                     | Yes                       | Yes                                    | No                           |
| No keyword      | Yes                     | Yes                       | No                                     | No                           |
| `private`       | Yes                     | No                        | No                                     | No                           |
