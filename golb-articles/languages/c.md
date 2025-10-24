---
title: C
sidebar_name: C
---

## Understand C pointer with examples

The program used :

```c
#include <stdio.h>

int main(){
    int number = 7;
    int *pointerTOnumber = &number;
    printf("%%d number = %d\n", number);
    printf("%%p number = %p\n", number);
    printf("%%d &number = %d\n", &number);
    printf("%%p &number = %p\n", &number);
    printf("%%d pointerTOnumber = %d\n", pointerTOnumber);
    printf("%%p pointerTOnumber = %p\n", pointerTOnumber);
    printf("%%d &pointerTOnumber = %d\n", &pointerTOnumber);
    printf("%%p &pointerTOnumber = %p\n", &pointerTOnumber);
    printf("%%d *pointerTOnumber = %d\n", *pointerTOnumber);
    printf("%%p *pointerTOnumber = %p\n", *pointerTOnumber);
}
```

> Note that `%%` is used to print `%`

The result:

```c
%d number = 7                            // value of number in decimal form
%p number = 0x7                          // value of number in Hex since %p
%d &number = -1104070188                 // value of the address of number in decimal form
%p &number = 0x7ffdbe3139d4              // value of the address in Hex since %p
%d pointerTOnumber = -1104070188         // value of the address of number in decimal form
%p pointerTOnumber = 0x7ffdbe3139d4      // value of the address of number in Hex since %p
%d &pointerTOnumber = -1104070184        // value of the address of the pointer in decimal form
%p &pointerTOnumber = 0x7ffdbe3139d8     // value of the address of the pointer in Hex since %p
%d *pointerTOnumber = 7                  // value pointed to by the pointer (thus that of number) in decimal form
%p *pointerTOnumber = 0x7                // value pointed to by the pointer (thus that of number) in Hex since %p
```

> Caption:
>
> - `&` : Can be read as `the address of`
> - `*` : `the value pointed to by`
> - Accessing a value with `*` is called dereferencing

## Compilation

| Input |     Name      | Output |
| :---: | :-----------: | :----: |
| `.c`  | Preprocessor  |  `.i`  |
| `.i`  |   Compiler    |  `.s`  |
| `.s`  |   Assembler   |  `.o`  |
| `.o`  | Linker/Loader | `.out` |

## Vocabulary

- A `function` returns a value
- A `procedure` takes a pointer as an argument and fills the pointer

## `main` Parameters in C

`argv[0]` will always contain the name of the program

```c
int main(int argc, char *argv[]){
    for(int o=0; o < argc; o++){
        printf("Argument %d : %s\n", o, argv[o]);
    }
    return 0;
}
```

---

## GCC useful options

- `-Wall` : This enables all the warnings about constructions that some users consider questionable, and that are easy to avoid (or modify to prevent the warning), even in conjunction with macros.

- `-E` : Stop after the preprocessing stage; do not run the compiler proper. The output is in the form of preprocessed source code, which is sent to the standard output

- `-D DEBUG` : Predefine name as a macro, with definition 1.

- `-E` : Displays the output of the preprocessor

- `-g` : Adds debugging information

- `-l` : Link with a library

- `-v` : Print (on standard error output) the commands executed to run the stages of compilation

- `-save-temps` : Store the usual "temporary" intermediate files permanently

- `-c` : Create object files

- `-fno-builtin` : Don't recognize built-in functions that do not begin with `_builtin` as prefix (see below)

## Note

```c
#include <stdio.h>

int main()
{
    // imagine you made a mistake a write 11
    // possible infinite loop if "a" and "i" and next to each other in memory
    unsigned char a[10], i;
    for (i = 0; i < 11; i++)
    {
        a[i] = 0;
    }
    // for (i = 0; i < 10; i++)
    // {
    //     printf("%d", a[i]);
    // }
    return 0;
}
```

> from [https://www.youtube.com/watch?v=443UNeGrFoM](https://www.youtube.com/watch?v=443UNeGrFoM)

## C Donut

- [https://www.youtube.com/watch?v=DEqXNfs_HhY](https://www.youtube.com/watch?v=DEqXNfs_HhY)
- [https://www.a1k0n.net/2011/07/20/donut-math.html](https://www.a1k0n.net/2011/07/20/donut-math.html)
- compile with `gcc donut.c -lm -o donut && ./donut`

## Valgrind

```sh
gcc main.c -o main.out -Wall -ggdb3
valgrind --leak-check=full --show-leak-kinds=all --track-origins=yes --verbose --log-file=out.txt ./main.out # you can add args
```

## `exec` family functions

- `execv`;: Replace the current process with a new program by specifying its full path and arguments; does not search `PATH`.

- `execvp` Like `execv`, but searches the `PATH` environment variable to find the program by name.

- `execvpe`: Like `execvp`, but also lets you specify a custom environment for the new process.

- `execve`: Replace the current process with a new program by full path, arguments, and a custom environment; no `PATH` search.

- `execveat`: Execute a program relative to a directory file descriptor, with arguments and environment; useful for sandboxed or relative-path execution.

- `fexecve`: Execute a program from an open file descriptor, passing arguments and environment; no path lookup needed.

## system function

```c
# include <stdlib.h>

int main() {
    int ret = system("echo 'Hello, World!'");
    if(ret == -1) {
        // Failed to execute system command
    } else if (WIFEXITED(ret) && WEXITSTATUS(ret) != 0) {
        // error
    }
}
```

## `char *star` vs `char table[]`

```c
// array of char, the stack is filled with {'t','a','b','l','e', '\0'}
char table[] = "Table";
// pointer to a static memory
char *star = "Star";

// that's why you cannot edit star
star[0] = 's'; // segfault
```
