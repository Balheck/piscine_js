// Exercice 5: Création d'une fonction throttle
function throttle(callback, delay) {
    var last;
    var timer;
    return function () {
        var context = this;
        var now = +new Date();
        var args = arguments;
        if (last && now < last + delay) {
            // le délai n'est pas écoulé on reset le timer
            clearTimeout(timer);
            timer = setTimeout(function () {
                last = now;
                callback.apply(context, args);
            }, delay);
        } else {
            last = now;
            callback.apply(context, args);
        }
    };
}

function multi(a,b) {
    var result = a * b;
    console.log(result);
}

const run = throttle(multi,4000);

run(5,5);
run(5,6);
run(5,7);
run(5,8);