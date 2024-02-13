// Exercice 10: Exécuter des promesses en série
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

    async function maFonction () {
        try {
            await wait(1000)
            console.log("5");
            await wait(1000)
            console.log("4");
            await wait(1000)
            console.log("3");
            await wait(1000)
            console.log("2");
            await wait(1000)
            console.log("1");
            await wait(1000)
            console.log("Gagné");
        } catch (e) {
            console.log("Pas gagné");
        }
    }

maFonction();