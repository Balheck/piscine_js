// Exercice 1: Somme des éléments d'un tableau
let tableau = [5,10,15];

var x = 0;
var result = tableau.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  x
);

console.log(result);