// Clase Vehiculo
class Vehiculo {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }


  obtenerDetalles() {
    console.log("Marca: " + this.marca + ", Modelo: " + this.modelo + ", Año: " + this.año);
  }
}

// Clase Coche
class Coche extends Vehiculo {
  constructor(marca, modelo, año, numeroPuertas) {
    super(marca, modelo, año);
    this.numeroPuertas = numeroPuertas;
  }

  obtenerDetalles() {
    super.obtenerDetalles();
    console.log("Puertas: " + this.numeroPuertas);
  }
}

// Clase Moto
class Moto extends Vehiculo {
  constructor(marca, modelo, año, cilindrada) {
    super(marca, modelo, año);
    this.cilindrada = cilindrada;
  }

  obtenerDetalles() {
    super.obtenerDetalles();
    console.log("Cilindrada: " + this.cilindrada + "cc");
  }
}

// Crear objetos
const coche1 = new Coche("Honda", "Civic", 2021, 4);
const coche2 = new Coche("Ford", "Mustang", 2020, 2);
const coche3 = new Coche("Chevrolet", "Onix", 2023, 4);

const moto1 = new Moto("Kawasaki", "Ninja 400", 2022, 399);
const moto2 = new Moto("Suzuki", "GSX-R600", 2021, 599);
const moto3 = new Moto("Honda", "CBR500R", 2023, 471);

// Mostrar información
console.log("Información del coche 1:");
coche1.obtenerDetalles();

console.log("Información del coche 2:");
coche2.obtenerDetalles();

console.log("Información del coche 3:");
coche3.obtenerDetalles();

console.log("Información de la moto 1:");
moto1.obtenerDetalles();

console.log("Información de la moto 2:");
moto2.obtenerDetalles();

console.log("Información de la moto 3:");
moto3.obtenerDetalles();
