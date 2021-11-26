### What Is a Pure Function in JavaScript?

https://www.freecodecamp.org/news/what-is-a-pure-function-in-javascript-acb887375dfe/

#### Summary

- A function’s pure if it’s free from side-effects and returns the same output, given the same input.

- Side-effects include: mutating input, HTTP calls, writing to disk, printing to the screen.

- You can safely clone, then mutate, your input. Just leave the original one untouched.

- Spread syntax (``…`` syntax) is the easiest way to shallowly clone objects.

- ``JSON.parse(JSON.stringify(object))`` is the easiest way to deeply clone objects.

#### Free Course

[Functional Programming Patterns With RamdaJS!](https://www.educative.io/courses/functional-programming-patterns-with-ramdajs?authorName=Yazeed%20Bzadough) by [Yazeed Bzadough](https://yazeedb.com)  