const piratas = [
  { nombre: "Luffy", recompensa: 10000000000 },
  { nombre: "Zoro", recompensa: 60000000 },
  { nombre: "Sanji", recompensa: 33000000 },
  { nombre: "Nami", recompensa: 16000000 },
  { nombre: "Usopp", recompensa: 3000000 },
  { nombre: "Chopper", recompensa: 5000 },
  { nombre: "Robin", recompensa: 80000000 },
  { nombre: "Franky", recompensa: 44000000 },
  { nombre: "Brook", recompensa: 33000000 },
  { nombre: "Jinbe", recompensa: 400000000 },
];

const grandesRecompensas = piratas.filter(pirata => pirata.recompensa > 1000000);

console.log(grandesRecompensas); // [ { nombre: 'Luffy', recompensa: 100000000 }, { nombre: 'Robin', recompensa: 80000000 }, { nombre: 'Jinbe', recompensa: 400000000 } ]
