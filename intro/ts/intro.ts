console.log('Hola mundo');

class Drink {

    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    info(): string {
        return this.name;
    }

}

const drink = new Drink("agua");
console.log(drink.info());

// Interface
interface Product {
    price: number;
    getPrice(): string;
}

// Herencia
class Beer extends Drink implements Product {

    private alcohol: number;
    price: number;

    constructor(name: string, alcohol: number, price: number) {
        super(name);
        this.alcohol = alcohol;
        this.price = price;
    }

    getPrice(): string {
        return "$ " + this.price;
    }

    info(): string {
        return super.info() + " " + this.alcohol;
    }

}

// Implementación de interface
class Snack implements Product {
    
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getPrice(): string {
        return "El precio es: $ " + this.price;
    }

}

const beer = new Beer("erdinger", 8.5, 100);
console.log(beer.info());

const products: Product[] = [
    new Beer("Corona", 4.5, 1),
    new Snack("Patatas", 0.5),
    new Beer("Heineken", 5, 1.2)
]

function getPrices(items: Product[]) {
    for(const item of items) {
        console.log(item.getPrice());
    }
}

getPrices(products);