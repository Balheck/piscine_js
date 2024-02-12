// Exercice 6: Trier un tableau de nombres
function compare(x, y) {
    return x - y;
}

let tableau = [1, 16, 8, 5, 2, 9, 12, 24];
tableau.sort(compare);
console.log(tableau);