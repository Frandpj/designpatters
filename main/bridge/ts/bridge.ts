interface ListImplementos {
    elements: number[];
    add(number: number): void;
    getElements(): number[];
}

class OrderedList implements ListImplementos {

    elements: number[] = [];

    public add(number: number): void {
        this.elements.push(number);
        this.elements.sort();
    }

    public getElements(): number[] {
        return this.elements;
    }

}

class UniqueList implements ListImplementos {

    elements: number[] = [];

    public add(number: number): void {
        if(!this.elements.includes(number)) {
            this.elements.push(number);
        }
    }

    public getElements(): number[] {
        return this.elements;
    }

}

interface DataAbstraction {
    implementor: ListImplementos;
    add(number: number): void;
    get(): number[];
    operation(fn: (n: number) => number): number[];
}

class DataRefinedAbstraction implements DataAbstraction {

    implementor: ListImplementos;

    constructor(implementor: ListImplementos) {
        this.implementor = implementor;
    }

    public add(number: number): void {
        this.implementor.add(number);
    }

    public get(): number[] {
        return this.implementor.getElements();
    }

    public operation(fn: (n: number) => number): number[] {
        return this.implementor.getElements().map(fn);
    }

}

const uniqueData = new DataRefinedAbstraction(new UniqueList());
uniqueData.add(3);
uniqueData.add(3);
uniqueData.add(1);
uniqueData.add(1);
uniqueData.add(2);
console.log(uniqueData.get());

const orderedData = new DataRefinedAbstraction(new OrderedList());
orderedData.add(3);
orderedData.add(3);
orderedData.add(1);
orderedData.add(1);
orderedData.add(2);
console.log(orderedData.get());

const uniqueItems = uniqueData.operation((e: number) => e*2)
console.log(uniqueItems);
const orderedItems = orderedData.operation((e: number) => e*2)
console.log(orderedItems);

