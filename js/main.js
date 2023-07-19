//chiedo quanti chilometri vuole percorrere l'utente

const kilometres = prompt("Dimmi quanti chilometri vuoi fare");
console.log(kilometres);

//chiedo l'età del passeggero

const passengerAge = parseInt(prompt("Dimmi l'età del passeggero"));
console.log(passengerAge);

//definisco il prezzo del bisglietto in base ai chilometri

const ticketPrice = 0.21;
console.log(ticketPrice);

const totalPrice = kilometres * ticketPrice;
console.log(totalPrice);

//il passeggero ha un'età < 18 anni
if (passengerAge < 18) {
  const discountPrice20 = (totalPrice - 20 / 100).toFixed(2);
  console.log(discountPrice20);
}

//altrimenti se il passeggero ha un'età >= 65 anni
else if (passengerAge >= 65) {
  const discountPrice40 = (totalPrice - 40 / 100).toFixed(2);
  console.log(discountPrice40);
}
//altrimenti paga il prezzo pieno
else totalPrice;

//mostro a schermo prezzo finale
document.getElementById("final-price").innerHTML = totalPrice;

//document.getElementById("final-price20").innerHTML = discountPrice20;

//document.getElementById("final-price40").innerHTML = discountPrice40;
