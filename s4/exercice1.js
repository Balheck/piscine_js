// Exercice 1: Utilisation de Promise.all
function wait (duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(duration), duration)
    })
}

function waitAndFaile (duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(duration), duration)
    })
}


Promise.all([wait(1000), wait(2000)])
    .then(console.log)
    .catch(console.log)