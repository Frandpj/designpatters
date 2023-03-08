class Singleton {

    static getInstance() {
        return Singleton.instance;
    }

    constructor() {
        console.log("Entrando al constructor");
        this.random = Math.random();
        if(Singleton.instance) {
            console.log("Ya existe");
            return Singleton.instance;
        }

        console.log("No existe y se crea");
        Singleton.instance = this;
    }

}

// const singleton = new Singleton();
// const singleton2 = new Singleton();
// const singleton3 = Singleton.getInstance();

// console.log(singleton.random);
// console.log(singleton2.random);
// console.log(singleton3.random);
// console.log(singleton.random === singleton2.random);
// console.log(singleton2.random === singleton3.random);

class WeekDays {

    daysEs = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    daysEn = ["Monday", "Tuesday", "Wednesday", "Thursday ", "Friday", "Saturday", "Sunday"];

    constructor(lang) {
        this.lang = lang;

        if(WeekDays.instance) {
            return WeekDays.instance;
        }

        WeekDays.instance = this;
    }

    getDays() {
        return this.lang === "es" ? this.daysEs : this.daysEn;
    }

}

const weekDays = new WeekDays("en");
const weekDays2 = new WeekDays();

console.log(weekDays.getDays());
console.log(weekDays2.getDays());