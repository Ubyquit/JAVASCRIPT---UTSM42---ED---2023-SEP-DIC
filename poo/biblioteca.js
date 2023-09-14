class Libro {
  constructor(titulo, autor, genero, numPaginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.genero = genero;
    this.numPaginas = numPaginas;

    this.prestado = false;
  }

  prestar() {
    if (this.prestado) {
      console.log("El libro ya está prestado, no te lo puedo prestar");
    } else {
      this.prestado = true;
      console.log("El libro se ha prestado correctamente");
    }
  }

  devolver() {
    if (this.prestado) {
      this.prestado = false;
      console.log("El libro se ha devuelto correctamente");
    } else {
      console.log("El libro no está prestado, no se puede devolver");
    }
  }
}

class Biblioteca {
  constructor() {
    this.libros = [];
  }

  agregarLibro(libro) {
    this.libros.push(libro);
    console.log("El libro se ha agregado correctamente");
  }

  eliminarLibro(libro) {
    const index = this.libros.indexOf(libro);

    if (index !== -1) {
      this.libros.splice(index, 1);
      console.log("El libro se ha eliminado correctamente");
    } else {
      console.log("El libro no se ha encontrado");
    }
  }

  mostrarCatalogo() {
    console.log("Catálogo de libros");

    this.libros.forEach((libro, index) => {
      console.log(`${index + 1} Nombre: ${libro.titulo}
        Autor: ${libro.autor} Genero: ${libro.genero} 
        Paginas: ${libro.numPaginas}
        `);
    });
  }

  buscarLibro(criterio) {
    const resultado = this.libros.filter((libro) => {
      return (
        libro.titulo.toLowerCase().includes(criterio.toLowerCase()) ||
        libro.autor.toLowerCase().includes(criterio.toLowerCase()) ||
        libro.genero.toLowerCase().includes(criterio.toLowerCase())
      );
    });

    if (resultado.length > 0) {
      console.log(`Resultados de la búsqueda con ${criterio}`);

      resultado.forEach((libro, index) => {
        console.log(`${index + 1} Nombre: ${libro.titulo}
        Autor: ${libro.autor} Genero: ${libro.genero} 
        Paginas: ${libro.numPaginas}`);
      });
    } else {
      console.log(`No se han encontrado resultados con con ${criterio}`);
    }
  }
}

const biblioteca = new Biblioteca();

const libro1 = new Libro(
  "El señor de los anillos",
  "J.R.R. Tolkien",
  "Fantasía",
  1000
);
const libro2 = new Libro("El hobbit", "J.R.R. Tolkien", "Fantasía", 300);

libro1.prestar();
libro2.prestar();
libro1.devolver();

biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.mostrarCatalogo();

biblioteca.buscarLibro("fantasía");

