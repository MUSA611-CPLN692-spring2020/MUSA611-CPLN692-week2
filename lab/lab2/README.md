# Lab 2

We'll be looking at functions in this lab. In particular, we're
interested in using functions to organize our thoughts and to render our
work more readable.


#### Part 1

Open [part1-functions-are-values.html](part1-functions-are-values.html)
and follow in-comment instructions.


#### Part 2

Reopen [lab1/part4-data-transformation.html](../lab2/part4-data-transformation.html)
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

// Side effects
function changeA() {
  a = "Something else";
}
changeA()

// Pure - no side-effects
function pureFunction() {
  return "Something else";
}
a = pureFunction()
```


#### Part 4

It is important to be able to think about functions abstractly. When
properly written, they can be popped in and out of your code almost
seemlessly. See if you can rewrite the code you've written inside the
loop to use all of the functions you wrote without saving anything to
a variable. If your functions are written purely (all but the last
one, which necessarily accessses the map) you will be able to chain
function calls together into a data pipeline.


#### Part 5

The data you've been working with can be found in
[part4-data-clean.js](../lab1/part4-data-clean.js) and
[part4-data-dirty.js](../lab1/part4-data-dirty.js). These files are
basically just [JSON](http://www.json.org/) records of data that was
originally stored in CSV (comma separated value) form. Try to think
through the steps necessary to convert rows of a CSV into arrays of
data. If you have some ideas, try your luck in
[part5-convert-csv.html](part5-convert-csv.html) to see how far you get.

