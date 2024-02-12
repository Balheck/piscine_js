// Exercice 10: Convertir une chaîne de caractères en camelCase
var p = "chaîne de caractères en camel Case";

function strCamelCase(a) {
    var b = a.normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(/[^A-Za-z0-9]/g);
    b.forEach(function(c, d) {
      b[d] = c.charAt(0).toUpperCase() + c.substr(1).toLowerCase();
    });
    return b.join('');
  }

console.log(strCamelCase(p));