// declaration 

// const chai = {
//     name: "masala chai",
//     price: 20,
//     isOK: true,
// }

/* 
    Inferment : the inferament is done by the typescript means by default SET a type format of the object typescript always do that

    {
        name: string;
        price: number;
        isHot: boolean;
    }

*/


// declaring object type

let tea : {
    name: string;
    price: number;
    isHot: boolean;
}

tea = {
    name: "Ginger tea",
    price: 25,
    isHot: true
}

// 2.

type Tea = {
    name: string;
    price: number;
    ingredent: string[];
}

const chai: Tea = {
    name: "string",
    price: 25,
    ingredent: ["chaipatti" , "sugar"]
}



// type spliting

type Items = {
    name: string;
    quantity: number;
}

type Amount = {
    type : number;
    isavailable: boolean;
}

type Sales = {
    name: string;
    item: Items;
    amount: Amount;
}

// use of partial - it make all the types T partial

type Chai = {
    name: string;
    prize: number;
    isHot: boolean;
}

const updateChai = (updates: Partial<Chai>) => {
    console.log('Updating chai with', updates)
}

updateChai({prize: 25}) // does not give error for not providing a full values 
updateChai({isHot: false})
updateChai({}) // drawback --> it recieve the empty or null values because it is part of the given type

// Required use -> make all type t values required

type ChaiOrder = {
    name: string;
    quantity?: number;
};

const orderChai = (order: Required<ChaiOrder>) =>{
    console.log(`your order is ${order}`);
    return 0
}

orderChai({
    name: "Chai",
    quantity: 2
});

// use of Pick --> this gives a only option to pick
type Sports = {
    name: string;
    venue: string;
    equipments: string[];
    players: number;
}

type OnlySportsOf = Pick<Sports, "name" | "players">

const sports: OnlySportsOf = {
    name: "football",
    players: 2,
    // equipments:["dsd"]
}

// use of Omit --> is to reject one value which is extends from another type

type User = {
    name: string;
    venue: string;
    equipments: string[];
    players: number;
}


type OnlyUserWith = Omit<User, "venue">

const user3: OnlyUserWith = {
    name: "shirbg",
    equipments: ["fjdf"],
    players: 22
}