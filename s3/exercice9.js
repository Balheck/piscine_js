// Exercice 9: Vérifier si tous les éléments d'un tableau passent un test
let inventaire = [
    { nom: "gourde", type: "accessoire", quantite: 13},
    { nom: "dague", type: "arme", quantite: 5},
    { nom: "plastron", type: "armure", quantite: 15},
    { nom: "épée", type: "arme", quantite: 3},
    { nom: "bouclier", type: "armure", quantite: 5},
    { nom: "amulette", type: "accessoire", quantite: 1}
];

var test = (currentValue) => currentValue <= 10;

console.log(inventaire.every(quant => test(quant.quantite)));