
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
let mail;
let emailCheck;
for( i = 0; i < 10; i++){
    mailInvitati [i] = prompt(`Inserisci la mail dell' invitato numero ${i+1}`)
}
console.log(mailInvitati);

mail = prompt("Inserisci la tua mail")
for ( i=0 ; i < mailInvitati.length; i++){
    if (mailInvitati[i]== mail){
        emailCheck=true;
    }else{
        emailCheck=false;
    }
}
if(emailCheck == true){
    console.log("Puoi entrare alla festa");
}else{
    console.log("non puoi entrare alla festa")
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