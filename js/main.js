//Esercizio Dadi:

//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
var numeroGiocatore = Math.floor(Math.random()*5) + 1;
console.log('Giocatore gioca il numero ' + numeroGiocatore)
var numeroComputer = Math.floor(Math.random()*5) + 1;
console.log('Computer gioca il numero ' + numeroComputer);


//Stabilire il vincitore, in base a chi fa il punteggio più alto.

if (numeroGiocatore > numeroComputer) {
    console.log("Vince il Giocatore")
} else if (numeroComputer > numeroGiocatore) {
    console.log("Vince il Computer")
} else {
    console.log("Pareggio")
}
