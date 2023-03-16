class EncoderTextAbstraction {

    constructor(encoder) {
        this.encoder = encoder;
    }

    encode(str) {
        return this.encoder.encode(str);
    }

    decode(str) {
        return this.encoder.decode(str);
    }

}

class Base64EncoderImplementor {

    encode(str) {
        return window.btoa(unescape(encodeURIComponent(str)));
    }

    decode(str) {
        return decodeURIComponent(escape(window.atob(str)));
    }

}

class HtmlEncoderImplementor {

    encode(str) {
        return str.split(".").reduce((ac, e) => {
            return ac + `<p>${e.trim()}</p>`;
        }, "");
    }

    decode(str) {
        return str.split("</p>").reduce((ac, e) => {
            return e !== "" ? ac + e.replace("<p>", "") + ". ": ac + "";
        }, "");
    }

}

const encoder1 = new EncoderTextAbstraction(new Base64EncoderImplementor());
console.log(encoder1.encode("pato"));
console.log(encoder1.decode("cGF0bw=="));

const encoder2 = new EncoderTextAbstraction(new HtmlEncoderImplementor());
console.log(encoder2.encode("Esto es un texto. Y aquí comienza el otro. Y aquí otro más"));
console.log(encoder2.decode("<p>Esto es un texto</p><p>Y aquí comienza el otro</p><p>Y aquí otro más</p>"));