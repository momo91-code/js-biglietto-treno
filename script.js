/* 
* Realizzerete il vostro primo piccolo programma, in JS.
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
*/

// aggiungo costanti per prezzo al km, km da percorrere ed età
// per età e km aggiungo prompt e convertitore
const prezzoKm = 0.21;
const totKm = parseFloat(prompt("Quanti chilometri devi percorrere?"));
const eta = parseInt(prompt("Quanti anni hai?"));

// calcolo il prezzo  con i dati dei km
let prezzoTotale = totKm * prezzoKm;

// calcolo lo sconto con i dati dell'età
if (eta < 18) {
    prezzoTotale *= 0.8;
}
else if (eta > 65) {
    prezzoTotale *= 0.6;
}

// sistemo la cifra arrotondandola con due decimali dopo la virgola
const prezzoFinale = prezzoTotale.toFixed(2);

// scrivo il risultato in un elemento di pagina <div>
document.getElementById("result").innerHTML = `Il tuo biglietto viene: ${prezzoFinale}€`;
