# Lab 2

We'll be looking at functions in this lab. In particular, we're
interested in using functions to organize our thoughts and to render our
work more readable.


#### Part 1

Open [lab2/part1-functions-are-values.html](part1-functions-are-values.html)
and follow in-comment instructions.


#### Part 2

Reopen [lab1/part4-data-transformation.html](../lab1/part4-data-transformation.html)
and reorganize the work you did there in terms of discrete functions.
Try to organize your code into these tasks:
- A function to filter values
- A function to clean data
- A function to create leaflet objects from 'clean' data
- A function to place those objects on the map


#### Part 3

Now that things are more organized, we can think about the
readability and reuse of our functions. Refactor your code so that
the only function with side-effects is the one that places objects on
the map.

```javascript
var a = "Something"

// Side effects (Note that this function reaches outside its scope and into
// the wider world - in this case, simply referring to the variable `a`)
function changeA() {
  a = "Something else";
}
changeA()

// Pure - no side-effects (Nothing in the function reaches beyond its scope.)
// More complex cases can be handled by creating functions that take arguments.
// We still refer to functions which take arguments as pure if they refer only to
// things defined within their scope or the arguments they receive. This implies that
// every single time you run a function with the same arguments, you should get
// the exact same result. This is sometimes referred to as 'referential transparency'
// and it helps us read code which would otherwise depend on wider context.
// https://en.wikipedia.org/wiki/Referential_transparency

function pureFunction() {
  return "Something else";
}
a = pureFunction()
```

#### Part 4

The data you've been working with can be found in
[lab1/part4-data-clean.js](../lab1/part4-data-clean.js) and
[lab1/part4-data-dirty.js](../lab1/part4-data-dirty.js). These files are
basically just [JSON](http://www.json.org/) records of data that was
originally stored in CSV (comma separated value) form. Try to think
through the steps necessary to convert rows of a CSV into arrays of
objects. If you have some ideas, try your luck in
[lab2/part4-convert-csv.html](part5-convert-csv.html) to see how far you get.

