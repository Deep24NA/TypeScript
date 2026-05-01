// classes declartation 

// class Chai {
//     flavour: string;
//     price: number;

//     constructor(flavour: string , price: number){
//         this.flavour = flavour
//         this.price = price
//     }
// }

// const masalachai = new Chai("ginger" , 20);
// masalachai.flavour = "masala";


// access modifier

class Chai {
    public flavour: string = "Masala Chai"

    private secertIngredients = "cardamom"

    reveal() {
        return this.secertIngredients // ok
    }

    protected shopName = "Chai corner"
}

const c = new Chai();

// c.reveal()

class Branch extends Chai {
    getName() {
        return this.shopName
    }
}

// new Branch().getName

// readonly property

class Cup {
    readonly capacity: number = 250

    constructor(capacity: number){
        this.capacity = capacity
    }
}

// control gates

class ModernChai {
    private _sugar = 2

    get sugar() {
        return this._sugar
    }

    set sugar(value: number) {
        if(value > 5) throw new Error("too sweet");
        this._sugar = value
    }
}

// use of static

class ekCHai {
    static shopName = "Chai cafe";

    constructor(public flavour: string) {

    }
}

console.log(ekCHai.shopName)