//Esercizio Dadi:

//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
var numeroGiocatore = Math.floor(Math.random()*6) + 1;
console.log('Giocatore gioca il numero ' + numeroGiocatore)
var numeroComputer = Math.floor(Math.random()*6) + 1;
console.log('Computer gioca il numero ' + numeroComputer);


//Stabilire il vincitore, in base a chi fa il punteggio più alto.

if (numeroGiocatore > numeroComputer) {
    console.log("Vince il Giocatore")
} else if (numeroComputer > numeroGiocatore) {
    console.log("Vince il Computer")
} else {
    console.log("Pareggio")
}

//Mail:




// 1 - Crea un database di e-mail.

var emailDatabase = ["Giovanni", "Antonio", "Paolo"];

// 2 - Chiedi all’utente la sua email.
var richiestaEmail = prompt("Inserisci la tua email")

// 3 - Controlla che sia nella lista di chi può accedere.
var emailTrovata = false;
for (i=0; i < emailDatabase.length; i++) {
    
    if ((richiestaEmail) == emailDatabase[i]) 
    {
        emailTrovata = true;
    } 
    
} 



// 4 - Se non può accedere invia un messaggio.

if (emailTrovata == true) {
    console.log("Non puoi accedere");
}
else {
    console.log("Puoi accedere");
}

