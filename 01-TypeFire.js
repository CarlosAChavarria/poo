class TypeFire extends Pokemon{

    constructor(name, evolutions){
        // super inicializa el constructor de pokemon
        super(name, evolutions);
    }

    message(){
        return `Hola, soy ${this.nameG} y soy de tipo ${this.type}`;
    }
}

const charmander = new TypeFire("Charmander", "Fire", ["Charmeleon", "Charizar"]);

console.log(charmander.message());