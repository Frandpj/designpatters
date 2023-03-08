function sum(a, b) {
    return a + b;
}

let res = sum(1, 2);
console.log(res);

const fSum = sum;
res = fSum(5, 6);
console.log(res);

// Función orden superior
function operation(fn, a, b) {
    console.log('Se hace algo');
    console.log(fn(a, b));
}

operation(sum, 10, 20);

console.log('------------------');

// Arrow function
operation((a, b) => a * b, 5, 5);
operation((a, b) => {
    const c = a + b;
    return c * 2;
}, 1, 2);

console.log('------------------');

// Foreach
const names = ["Fran", "Juan", "Pablo", "Ana"];
names.forEach((name) => console.log(name));
names.forEach((name) => console.log(name.toUpperCase()));
console.log(names);
names.sort();
console.log(names);

console.log('------------------');

// Map
const namesUpper = names.map((name) => name.toUpperCase());
console.log(namesUpper);
console.log(names);

console.log('------------------');

// Reduce
const numbers = [5, 4, 7, 1, 10];
const total = numbers.reduce((ac, number) => ac + number, 0);
console.log(total);

console.log('------------------');

// Programación ORIENTADA A OBJETOS
// Clase
class Drink {
    constructor(name) {
        this.name = name;
    }

    info() {
        return "La bebida es: " + this.name;
    }
}

// Funcional
function Drink2(name) {
    this.name = name;
    this.info = function() {
        return "La bebida es: " + this.name;
    }
}

const drink = new Drink("agua");

console.log(drink.info());

const drink2 = new Drink2("agua");
console.log(drink2.info());

console.log('------------------');

// Herencia
class Beer extends Drink {
    constructor(name, alcohol)  {
        super(name);
        this.alcohol = alcohol;
    }

    info() {
        return super.info() + " " + this.alcohol;
    }
}

const beer = new Beer("erginger", 8.5);
console.log(beer.info());