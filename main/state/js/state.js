class DocumentContext {

    constructor() {
        this.content = "";
        this.state = new BlankState();
    }

    setState(state) {
        this.state = state;
    }

    write(text) {
        this.state.write(this, text);
    }

}

class BlankState {

    write(documentContext, text) {
        documentContext.content = text;
        documentContext.setState(new WithContentState());
    }

}

class WithContentState {

    write(documentContext, text) {
        documentContext.content += " " + text;
    }

}

class ApprovedState {
    
    write(documentContext, text) {
        console.log("Documento aprobado ya no se modifica");
    }

}

const doc = new DocumentContext();
console.log(doc.state);
doc.write("pato");
console.log(doc.content);
console.log(doc.state);
doc.write("algo");
doc.write("mas");
console.log(doc.content);

doc.setState(new ApprovedState());
console.log(doc.state);
doc.write("otra cosa");

doc.setState(new WithContentState());
console.log(doc.state);
doc.write("no se que");
console.log(doc.content);

