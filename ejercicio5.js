// Clase Animal
class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  emitirSonido() {
    console.log("El animal emite un sonido.");
  }
}

// Clase Perro
class Perro extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
  }

  emitirSonido() {
    console.log("El perro ladra: ¡Guau guau!");
  }
}

// Clase Gato
class Gato extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
  }

  emitirSonido() {
    console.log("El gato maúlla: ¡Miau!");
  }
}


const animalGenerico = new Animal("Animal Genérico", 3);
const perro = new Perro("Rex", 5);
const gato = new Gato("Mimi", 2);


animalGenerico.emitirSonido(); 
perro.emitirSonido(); 
gato.emitirSonido(); 