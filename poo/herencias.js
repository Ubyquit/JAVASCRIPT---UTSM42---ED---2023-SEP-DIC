// POO Animales

class Animal {
  constructor(especie, raza, numPatas, color) {
    this.especie = especie;
    this.raza = raza;
    this.numPatas = numPatas;
    this.color = color;

    this.info = `Mi especie es: ${this.especie} soy un ${this.raza}
    tengo ${this.numPatas} patas, soy de color ${this.color}`;
  }
  mostrarInfo() {
    console.log(this.info);
  }

  grasnar() {
    console.log("piiiii piiii piiiuu");
  }
}

class Perro extends Animal {
  constructor(raza, numPatas, color, tamano, cola) {
    super(raza, numPatas, color);
    this.tamano = tamano;
    this.cola = cola;

    this.info = `Mi raza es: ${this.raza} mi tamaño es ${this.tamano}
    tengo ${this.numPatas} patas, soy de color ${this.color}
    y mi cola es ${this.cola}}`;
  }

  mostrarInfoPerro() {
    console.log(this.info);
  }

  ladrar() {
    console.log("guau guau");
  }
  morder() {
    console.log("Ñam Ñam");
  }
}

const animal1 = new Animal("Ave", "Cardenal", 2, "Rojo");
const animal2 = new Animal("Mamifero", "Perro", 4, "Cafe");
const pitbull1 = new Perro("Pitbull", 4, "Cafe", "Grande", "Larga");

animal1.mostrarInfo();
animal1.grasnar();

pitbull1.mostrarInfo();
