const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([111, 777, 333]), "111");
assertEqual(head(["Mi", "chiamo", "Dominique"]), "Mi");
assertEqual(head([5,6,7]), "5");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")

