// Clase Empleado
class Empleado {
  constructor(nombre, edad, salarioBase) {
    this.nombre = nombre;
    this.edad = edad;
    this.salarioBase = salarioBase;
  }


  calcularSalario() {
    console.log(this.nombre + " gana $" + this.salarioBase);
  }
}

// Clase Gerente
class Gerente extends Empleado {
  constructor(nombre, edad, salarioBase, bonificacion) {
    super(nombre, edad, salarioBase);
    this.bonificacion = bonificacion;
  }

  calcularSalario() {
    const total = this.salarioBase + this.bonificacion;
    console.log(this.nombre + " gana $" + total);
  }
}

// Clase Desarrollador
class Desarrollador extends Empleado {
  constructor(nombre, edad, salarioBase, lenguaje) {
    super(nombre, edad, salarioBase);
    this.lenguaje = lenguaje;
  }


  calcularSalario() {
    console.log(this.nombre + " gana $" + this.salarioBase + " y programa en " + this.lenguaje);
  }
}

const empleado1 = new Empleado("Lucía", 29, 2800);
const empleado2 = new Empleado("Andrés", 35, 3200);

const gerente1 = new Gerente("Julián", 50, 6000, 2000);
const gerente2 = new Gerente("Marta", 42, 5200, 1800);

const desarrollador1 = new Desarrollador("Luis", 31, 4200, "Java");
const desarrollador2 = new Desarrollador("Sofía", 24, 3700, "C#");

empleado1.calcularSalario();
empleado2.calcularSalario();

gerente1.calcularSalario();
gerente2.calcularSalario();

desarrollador1.calcularSalario();
desarrollador2.calcularSalario();
