function encontrarPerla(perlas, desplazamiento = 0) {
  if (perlas.length === 1) {
    return desplazamiento;
  }

  // Dividir el array en tres partes
  let tercio = Math.floor(perlas.length / 3);

  // Crear grupos de 3
  let grupoA = perlas.slice(0, tercio);
  let grupoB = perlas.slice(tercio, 2 * tercio);
  let grupoC = perlas.slice(2 * tercio);

  // Sumar grupos

  let sumaGrupoA = grupoA.reduce((acum, val) => acum + val, 0);
  let sumaGrupoB = grupoB.reduce((acum, val) => acum + val, 0);

  // Comparacion entre suma de grupos
  if (sumaGrupoA < sumaGrupoB) {
    return encontrarPerla(grupoA, desplazamiento);
  } else if (sumaGrupoB < sumaGrupoA) {
    return encontrarPerla(grupoB, desplazamiento + tercio);
  } else {
    return encontrarPerla(grupoC, desplazamiento + 2 * tercio);
  }
}

let perlas = [2, 2, 2, 2, 2, 2, 2, 2, 1];

perlas = perlas.sort(() => Math.random() - 0.5);

console.log(perlas);

let posicionPerla = encontrarPerla(perlas);

console.log(`La perla que pesa menos es la numero: ${posicionPerla + 1}`);
