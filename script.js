
// Mail
// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota:
// Non è necessario provvedere alla validazione delle email
let mailInvitati = [];
let numeroPartecipanti;
let mail;
let emailCheck = false;
numeroPartecipanti = parseInt(prompt("Inserisci il numero dei partecipanti"))
for( i = 0; i < numeroPartecipanti; i++){
    mailInvitati [i] = prompt(`Inserisci la mail dell' invitato numero ${i+1}`)
}
console.log(mailInvitati);

mail = prompt("Inserisci la tua mail")
for ( i=0 ; i < mailInvitati.length; i++){
    if (mailInvitati[i] == mail){
        emailCheck=true;
        console.log("Puoi entrare alla festa");
        break;
    }
}
if(!emailCheck){
    console.log("Non puoi entrare alla festa");
}


// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

let risultatoDado = [];
let vincitore;
risultatoDado[0]= Math.round(Math.random() *6);
risultatoDado[1]= Math.round(Math.random() *6);
console.log(`"il dado del giocatore è" ${risultatoDado[0]}`);
console.log(`"Il dado del computer è"${risultatoDado[0]}`);
if (risultatoDado[0]>risultatoDado[1]){
    console.log("il giocatore ha vinto ");
} else if(risultatoDado[0]<risultatoDado[1]){
    console.log("il computer ha vinto ");

} else{
    console.log("Il risultato è pari");
}