// Exercice 9: Calculer l'âge à partir d'une date de naissance
var date = "11/01/1971";


function CalculAge(date) {  
    var an=date.substr(6,4);
    var mois=date.substr(3,2);
    var day= date.substr(0,2);
    
    var today = new Date();
    
    var dateNaissance = new Date(an + "-" + mois + "-" + day);
    
    var age = today.getFullYear() - dateNaissance.getFullYear();
    var m = today.getMonth() - dateNaissance.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dateNaissance.getDate())) {
        age = age - 1;
    }
  
    return age;
}

console.log(CalculAge(date));