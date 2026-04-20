export class Mascota {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    // Exer.1
    mostrarInfo() {
        return `${this.nombre} es un ${this.tipo}`;
    }

    // Exer.2
    saludar() {
        console.log(`¡Hola! Soy un ${this.tipo} y me llamo ${this.nombre}`);
    }
}

// Exer.3
export class SuperMascota extends Mascota {
    constructor(nombre, tipo) {
        super(nombre, tipo);
    }

    usarPoder() {
        console.log("¡Estoy corriendo!");
    }
}
// Exer.4
export class Gato extends Mascota {
    constructor(nombre) {
        super(nombre, "Gato");
    }

    hacerSonido() {
        console.log("¡Miau!");
    }
}
export class Perro extends Mascota {
    constructor(nombre) {
        super(nombre, "Perro");
    }

    hacerSonido() {
        console.log("AuAu!");
    }
}