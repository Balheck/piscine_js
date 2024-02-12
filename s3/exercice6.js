// Exercice 6: Filtrer un tableau d'objets par une plage de dates
let tableau = [
    { nom: "PC 1", date: new Date("2015-11-15") },
    { nom: "PC 2", date: new Date("2012-02-10") },
    { nom: "PC 3", date: new Date("2024-03-15") },
    { nom: "PC 4", date: new Date("2013-08-24") }
]

function filtrer(tableau, dateDebut, dateFin) {
    return tableau.filter(date => date.date >= dateDebut && date.date <= dateFin);
}

var dateDebut = new Date("2012-01-01");
var dateFin = new Date("2016-12-31");

console.log(filtrer(tableau, dateDebut, dateFin));