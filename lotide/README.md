# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dominiquemkhonza/lotide`

**Require it:**

`const _ = require('@dominiquemkhonza/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: function takes an array as input and returns the first element of the array
* `tail(array)`: function takes an array as input and returns the same array sans the first element
* `middle(array)`: function takes an array as input and returns the middle element (when the length of the array is odd) or returns the middle two elements (when the array length is even)
* `countLetters(string)`: function is given a string of letters and returns corresponding number of occurances 
* `countOnly(array, object)`: function takes an array and an object and returns an object containing the count of occurances of input listed
* `findKey(array, object)`: function identifies key when given an object and callback function
* `eqArrays()`: function compares two arrays, returns boolean statement
* `eqObjects()`: function compares two objects, returns boolean statement