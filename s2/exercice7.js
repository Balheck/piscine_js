// Exercice 7: Vérifier si un mot est un palindrome
var p = "kayak";
var pal = [...p].reverse().join('');


if (p === pal) {
    console.log('Est un palindrome');
} else {
    console.log('N\'est pas un palindrome');
};