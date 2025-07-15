// Clase Producto 
class Producto {
  constructor(nombre, precio, marca) {
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
  }


  descripcion() {
    console.log("Producto: " + this.nombre + ", Precio: $" + this.precio + ", Marca: " + this.marca);
  }
}

// Clase Telefono
class Telefono extends Producto {
  constructor(nombre, precio, marca, almacenamiento, ram) {
    super(nombre, precio, marca); 
    this.almacenamiento = almacenamiento;
    this.ram = ram; 
  }

  descripcion() {
    super.descripcion();
    console.log("Almacenamiento: " + this.almacenamiento + "GB, RAM: " + this.ram + "GB");
  }
}

// Clase Laptop
class Laptop extends Producto {
  constructor(nombre, precio, marca, procesador, pulgadas) {
    super(nombre, precio, marca); 
    this.procesador = procesador;
    this.pulgadas = pulgadas; 
  }

  descripcion() {
    super.descripcion();
    console.log("Procesador: " + this.procesador + ", Pantalla: " + this.pulgadas + '"');
  }
}


const telefono1 = new Telefono("iPhone 14", 1300, "Apple", 512, 6);
const telefono2 = new Telefono("Pixel 7", 900, "Google", 128, 8);

const laptop1 = new Laptop("Dell XPS 13", 1800, "Dell", "Intel i7", 13);
const laptop2 = new Laptop("HP Spectre x360", 1600, "HP", "Intel i5", 14);


console.log("Este es un teléfono:");
telefono1.descripcion();

console.log("Este es un segundo teléfono:");
telefono2.descripcion();

console.log("Esta es una laptop:");
laptop1.descripcion();

console.log("Esta es una segunda laptop:");
laptop2.descripcion();
