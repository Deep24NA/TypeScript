// interfaces --> use to shape the data

interface Chai {
    flavour: string
    price: number
}

const masala:Chai = {
    flavour: "masala",
    price: 20
}


interface Shop {
    readonly id : number;
    name: string;
}

const s: Shop = {id: 1 , name: "sabjibala" }


// handling function using interfaces
interface DiscountCalculator{
    (price: number) : number
}

const apply50: DiscountCalculator = (p) => {
    return p*0.5
}

interface Teamachine {
    start() : void;
    stop(): void;
}

const machine: Teamachine = {
    start() {
        console.log('start');
    },
    stop() {
        console.log('stop')
    }
}

// index signature

interface ChaiRating {
    [flavour: string] : number
}

const ratings: ChaiRating = {
    masala : 4.5, // string : NUMBER

}

// iterface merging 

interface User {
    age:number
}
interface User {
    name:string
}

const u: User = {
    name: "Hitesh",
    age: 23,
}


// generics --> these are genrally templates


function wrapINarray<T>(item: T): T[] {
    return [item]
}

function pair<A , B>(a: A, b: B): [A ,B] {
    return [a , b]
}

pair("masala" , "test");



// generic interface

interface Box<T> {
    content: T
}

const numberBox: Box<number> = {
    content: 10
}