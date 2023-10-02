const equipo7 = [
  { nombre: "Naruto", chakra: 5000 },
  { nombre: "Sasuke", chakra: 4500 },
  { nombre: "Sakuraq", chakra: 500 },
  { nombre: "Kakachi", chakra: 9500 },
];

const IVA = 1.16

const chakraTotal = equipo7.reduce((acumulador, ninja ) => acumulador + ninja.chakra * IVA, 0);

console.log(chakraTotal + " con IVA"); // 19500