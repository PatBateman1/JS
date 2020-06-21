// ES6 class

/***
 * basic usage of class
 */
class C1 {
    
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }


    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    } 

    get age() {
        return this._age;
    }
}

let c1 = new C1("John", 29);
c1.name = "Patrick";
c1.age = 30;
console.log(c1.name);   //Patrick
console.log(c1.age);    // 29, can not set age without a setter

/**
 * private variable and method
 */
class C2 {
    
    constructor(name, age) {
        this._name = name;
        this._age = age;

        let privateName = "Patrick";
        this.getPrivateName = function() { /* getter for privateName */
            return "private name: " + privateName;
        }

        /**
         * need to use arrow function here because "this"
         */
        let addAge = () => {
            this._age++;
        }
        this.useAddAge = function() {
            addAge();
        }
    }

    get age() {
        this.useAddAge();
        return this._age;
    }
}

let c2 = new C2("John", 29);
let c3 = new C2("Bateman", 22);
console.log(c2.privateName);                            // undefined
console.log(c2.getPrivateName());                       // private name: Patrick
console.log(c2.getPrivateName === c3.getPrivateName);   // false
c2.age = 40
console.log(c2.age)                                     // 30


