interface Component {
    getDetails(): string;
}

class ProductComponent implements Component {

    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getDetails(): string {
        return `${this.name}`;
    }

}

// decorator
abstract class ProductDecorator implements Component {

    protected component: Component;
    
    constructor(component: Component) {
        this.component = component;
    }
    
    public getDetails(): string {
        return this.component.getDetails();
    }

}

// decorator 1
class CommercialInfoProductDecorator extends ProductDecorator {

    private tradename: string;
    private brand: string;

    constructor(component: Component, tradename: string, brand: string) {
        super(component);
        
        this.tradename = tradename;
        this.brand = brand;
    }

    public getDetails(): string {
        return `${this.tradename} ${this.brand} ` + super.getDetails();
    }

}

// decorator 2
class StoreProductDecorator extends ProductDecorator {

    private price: number;

    constructor(component: Component, price: number) {
        super(component);
        
        this.price = price;
    }

    public getDetails(): string {
        return super.getDetails() +  ` ${this.price}`;
    }

}

// decorator 3
class HtmlProductDecorator extends ProductDecorator {

    public getDetails(): string {
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
const storeProduct2 = new StoreProductDecorator(commercialInfoProduct, 15.5);
console.log(storeProduct2.getDetails());

// decorator 3 con decorator 2 con decorator 1
const htmlProductDecorator = new HtmlProductDecorator(storeProduct2);
console.log(htmlProductDecorator.getDetails());
