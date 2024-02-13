// Exercice 3: Créer une fonction de débogage

function test() {
  var p = "proute";
}

function test2() {
  var p = "Je sais pas";
}

function debogage(f) {
  function debogageMessage(f) {
    console.log("La fonction : " + f + " à été appeler !");
  }
  
}

debogage(test2.name);
