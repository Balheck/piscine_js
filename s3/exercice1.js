// Exercice 1: Supprimer les éléments falsy d'un tableau
let tableau = [false,0,'',null,undefined,NaN,10];

var filtreTableau = tableau.filter(Boolean);

console.log(filtreTableau);
