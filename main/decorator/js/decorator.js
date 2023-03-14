// component
class ProductComponent {

    constructor(name) {
        this.name = name;
    }

    getDetails() {
        return `${this.name}`;
    }

}

// main decorator
class ProductDecorator {

    constructor(productComponent) {
        this.productComponent = productComponent;
    }

    getDetails() {
        return this.productComponent.getDetails();
    }

}

// decorator 1
class CommercialInfoProductDecorator extends ProductDecorator {

    constructor(productComponent, tradename, brand) {
        super(productComponent);
        this.tradename = tradename;
        this.brand = brand;
    }

    getDetails() {
        return `${this.tradename} ${this.brand} ` + super.getDetails();
    }

}

// decorator 2
class StoreProductDecorator extends ProductDecorator {
    
    constructor(productComponent, price) {
        super(productComponent);
        this.price = price;
    }

    getDetails() {
        return super.getDetails() +  ` $${this.price}`;
    }

}

// decorator 3
class HtmlProductDecorator extends ProductDecorator {

    getDetails() {
        return `<h1>Información del producto</h1>
        <p>
            ${super.getDetails()}
        </p>`
    }

}

// Ejecución
// component
const productComponent = new ProductComponent("Cerveza");
console.log(productComponent.getDetails());

// decorator 1 con component
const commercialInfoProduct = new CommercialInfoProductDecorator(productComponent, "London Porter", "Fuller's");
console.log(commercialInfoProduct.getDetails());

// decorator 2 con component
const storeProduct = new StoreProductDecorator(productComponent, 15.5);
console.log(storeProduct.getDetails());

// decorator 2 con decorator 1
const product = new StoreProductDecorator(commercialInfoProduct, 15.5);
console.log(product.getDetails());

// decorator 3 con decorator 2 con decorator 1
const htmlProductDecorator = new HtmlProductDecorator(product);

myDiv.innerHTML = htmlProductDecorator.getDetails();