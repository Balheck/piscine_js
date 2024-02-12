// Exercice 2: Regrouper des éléments d'un tableau par propriété
 
    let inventaire = [
        { nom: "dague", type: "arme"},
        { nom: "épée", type: "arme"},
        { nom: "plastron", type: "armure"},
        { nom: "bouclier", type: "armure",},
        { nom: "gourde", type: "accessoire"},
      ];




function groupBy(list, keyGetter) {

    const map = new Map();
    
    list.forEach((item) => {
         const key = keyGetter(item);
         const collection = map.get(key);
    
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    
    return map;
}
    
const grouped = groupBy(inventaire, type => type.type);
    
console.log(grouped);