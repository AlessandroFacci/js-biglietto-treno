//chiedo quanti chilometri vuole percorrere l'utente

const kilometres = parseFloat(prompt("Dimmi quanti chilometri vuoi fare"));
console.log(kilometres);

//chiedo l'età del passeggero

const passengerAge = parseInt(prompt("Dimmi l'età del passeggero"));
console.log(passengerAge);

//definisco il prezzo del bisglietto in base ai chilometri

const ticketPrice = 0.21;
console.log(ticketPrice);

const totalPrice = kilometres * ticketPrice;
console.log(totalPrice);

let ticketDiscount = 0;

//il passeggero ha un'età < 18 anni
if (passengerAge < 18) {
  ticketDiscount = ticketPrice * 0.2;
  console.log(ticketDiscount);
}

//altrimenti se il passeggero ha un'età >= 65 anni
else if (passengerAge >= 65) {
  ticketDiscount = totalPrice * 0.4;
  console.log(ticketDiscount);
}

//calcolo prezzo finale del biglietto
const finalPrice = totalPrice - ticketDiscount;
console.log(finalPrice);
const textPrice = finalPrice.toFixed(2);
console.log(textPrice);

//mostro a schermo prezzo finale
document.getElementById("final-price").innerHTML = "€ " + textPrice;
