class Pokemon{

    // atributos
    #name = ""; 
    type = ""
    evolutions = [];

    // constructor
    constructor(name, type, evolutions){
        this.#name = name;
        this.type = type;
        this.evolutions = evolutions;
    }

    // metodos get y set para acceder a los atributos designados como privados con #

    set nameS(value){
        this.#name = value;
    }

    get nameG(){
        return this.#name;
    }

    // metodos
    attack(){
        return `${this.#name}, esta atacando`;
    }

    evolve(evolution = 0) {
        // similar a un operador ternario validamos que existe con una condicion y si no, asignamos otro valor. Operador OR
        const EVOLVE = this.evolutions[evolution] || "";
        let message = "No puedo evolucionar";

        if (EVOLVE) {
            message = `${this.#name} esta evolucionando a ${EVOLVE}`;
            this.#name = EVOLVE;
        }

        // mostramos un mensaje
        return message;
    }
}

// instanciando objeto de la clase pokemon


const Charmander = new Pokemon("Charmander", "Fire", ["Charmeleon", "Charizar"]);

// implementacion del metodo get
console.log(`${Charmander.nameG} es de tipo ${Charmander.type}`);
console.log(Charmander.attack());
console.log(Charmander.evolve(0));
console.log(Charmander.attack());

const Squirtle = new Pokemon("Squirtle", "Water", ["Wartortle", "Blastoise"]);

console.log('-------------')

console.log(`${Squirtle.nameG} es de tipo ${Squirtle.type}`);
console.log(Squirtle.attack());
console.log(Squirtle.evolve(1));
console.log(Squirtle.attack());

// implementacion del metodo set
Squirtle.nameS = 'cambio de nombre';
console.log(Squirtle.nameG);

// otra clase

