import { Mascota } from "./export.js";
import { SuperMascota } from "./export.js";
import { Gato } from "./export.js";
import { Perro } from "./export.js";


//Exer.1 (Classe/Objetos)

const mascota1 = new Mascota("Iris", "Perro");
const mascota2 = new Mascota("Oliver", "Gato");

console.log(mascota1.mostrarInfo());
console.log(mascota2.mostrarInfo());


//Exer.2 (Métodos)

mascota1.saludar();
mascota2.saludar();

// Exer.3 (Herencia)

const superperro = new SuperMascota("Iris", "Perro");

console.log(superperro.mostrarInfo());
superperro.saludar();
superperro.usarPoder();

// Exer.4

const gato1 = new Gato("Oliver");
const perro1 = new Perro("Iris");

console.log(gato1.mostrarInfo());
gato1.hacerSonido();

console.log(perro1.mostrarInfo());
perro1.hacerSonido();


// Exer.5 (Callbacks)

function hacerTarea(materia, callback) {
    console.log(`Haciendo tarea de ${materia}...`);
    callback();
}

function tareaTerminada() {
    console.log("¡Tarea terminada!");
}

hacerTarea("Ciencias", tareaTerminada);
