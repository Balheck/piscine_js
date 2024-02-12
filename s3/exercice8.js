// Exercice 8: Trier un tableau d'objets par plusieurs propriétés
let inventaire = [
    { nom: "gourde", type: "accessoire", quantite: 13},
    { nom: "dague", type: "arme", quantite: 5},
    { nom: "plastron", type: "armure", quantite: 15},
    { nom: "épée", type: "arme", quantite: 3},
    { nom: "bouclier", type: "armure", quantite: 5},
    { nom: "amulette", type: "accessoire", quantite: 1}
];

function groupBy(list, keyGetter) {
    const map = new Map();
    
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key) || [];
        
        collection.push(item);
        collection.sort((a, b) => a.quantite - b.quantite);

        map.set(key, collection);
    });
    
    return map;
}

const grouped = groupBy(inventaire, type => type.type);

console.log(grouped);
