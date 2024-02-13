// Exercice 7: Implémenter une fonction de réduction personnalisée
let inventaire = [
    { nom: "gourde", type: "accessoire", quantite: 13},
    { nom: "dague", type: "arme", quantite: 5},
    { nom: "plastron", type: "armure", quantite: 15},
    { nom: "épée", type: "arme", quantite: 3},
    { nom: "bouclier", type: "armure", quantite: 5},
    { nom: "amulette", type: "accessoire", quantite: 1}
];

const reduction = (quantiteGroupe, nom) => {
    const { quantite } = nom;
    if (quantiteGroupe[quantite]) {
        quantiteGroupe[quantite] += 1;
    } else {
        quantiteGroupe[quantite] =1;
    }
    return quantiteGroupe;
}


console.log("zizi", inventaire.reduce(reduction, {}));