// Clase base
class Figura {
  constructor(color) {
    this.color = color;
  }

  area() {
    console.log("Área de la figura: 0");
  }
}

// Clase Rectángulo
class Rectangulo extends Figura {
  constructor(color, base, altura) {
    super(color);
    this.base = base;
    this.altura = altura;
  }

  area() {
    const resultado = this.base * this.altura;
    console.log("Área del rectángulo: " + resultado);
  }
}

// Clase Círculo
class Circulo extends Figura {
  constructor(color, radio) {
    super(color);
    this.radio = radio;
  }

  area() {
    const resultado = Math.PI * this.radio * this.radio;
    console.log("Área del círculo: " + resultado.toFixed(2));
  }
}


const figura = new Figura("rojo");
const rectangulo = new Rectangulo("azul", 10, 5);
const circulo = new Circulo("verde", 7);


figura.area();
rectangulo.area();
circulo.area();
