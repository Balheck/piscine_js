// Exercice 4: Création d'une fonction de debounce

function debounce(callback, delay){
    var timer;
    return function(){
        var args = arguments;
        var context = this;
        clearTimeout(timer);
        timer = setTimeout(function(){
            callback.apply(context, args);
        }, delay)
    }
}

function proute() {
    console.log("MERDE");
}

const grosseMerde = debounce(proute, 1000);

grosseMerde();