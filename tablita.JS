function tablita(numero) {

   numero === 8 ? console.log(numero)  && : console.log(numero) && tablita(numero + 2); 

  if (numero === 8) {
    console.log(numero);
    console.log(numero + numero);
  } else {
    console.log(numero);
    return tablita(numero + 2);
  }
}

tablita(2);
