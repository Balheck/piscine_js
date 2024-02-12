// Exercice 8: Fusionner deux tableaux et supprimer les doublons
var tableau1 = ['banane', 'kiwi'];
var tableau2 = ['poire', 'framboise', 'banane'];

var tableau3 = tableau1.concat(tableau2);

var result = [...new Set(tableau3)]

console.log(result);