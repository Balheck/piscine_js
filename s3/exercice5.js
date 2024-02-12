// Exercice 5: Créer une fonction de temporisation
function temporisation(p) {
    setTimeout(() => {
        console.log(p);
    }, 4000);
}

console.log("Avant temporisation");

var p = "Après temporisation";

temporisation(p);