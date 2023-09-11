/*
 * Class = clase -> fabrica.
 * contructor = maquinas de una fabrica.
 * parametros = atributos.
 * Objeto = this
 * this.propiedad = parametros.
 * instancias = class(parametros).
 */

class PikachuPC {
  constructor(
    gabinete,
    motherboard,
    procesador,
    discoDuro,
    ram,
    fuente,
    tarjetasVideo,
    precio,
  ) {
    this.gabinete = gabinete;
    this.motherboard = motherboard;
    this.procesador = procesador;
    this.discoDuro = discoDuro;
    this.ram = ram;
    this.fuente = fuente;
    this.tarjetasVideo = tarjetasVideo;
    this.precio = precio;

    this.info = `Gabinete: ${this.gabinete} Precio: $${this.precio}
    Caracteristicas principales:
    Motherboard: ${this.motherboard}, Procesador: ${this.procesador}
    Disco duro: ${this.discoDuro}, Memoria RAM: ${this.ram} GB,
    Fuente de poder: ${this.fuente}, Tarjeta de video: ${this.tarjetasVideo}.
    `;
  }
  mostrarInfo(){
    console.log(this.info);
  };
}

const pc1 = new PikachuPC(
  "Gamer",
  "Asus pro",
  "Ryzen 5 2600",
  "3Tb sdd",
  64,
  "1200w",
  "RTX 4090",
  50000,
);

const pc2 = new PikachuPC(
  "Oficina",
  "Asus",
  "core i3",
  "1Tb sdd",
  16,
  "600w",
  "N/A",
  5999,
);

pc1.mostrarInfo();
pc2.mostrarInfo();
