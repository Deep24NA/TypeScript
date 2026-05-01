const chaiFlavours: string[] = ["fdf", "fds"];

const prices: number[] = [];

const rating: Array<number> = [2.3];

// declaration of the object array
type chai = {
    name: string;
    price: number;
};
const menu: chai[] = [
    {
        name: "deep",
         price: 23
    },
    {
        name:'surjit',
        price: 34
    }
]

// readonly array

const cities: readonly string[] = ["delhi" , "jaipur"];

// cities.push("")


// 2d array

const tables: number[][] = [
    [

    ],
    [

    ]
]


// tuples --> tuples are like an array but restrict the input values by types and order

let chaiTuples: [string , number] = ['deep' , 2];
// chaiTuples = [20 , 'deep2']  Allowed 
// chaiTuples = ["deep1" , 21] Not allowed

// optional tuple
let tuple: [string , number , boolean?] ;
tuple = [
    "dee",
    21,
]

// reasdonly tuples

const location: readonly [number , string] = [22 , "deep"];


// use of enum --> enum is use to only provide a choices between a certain sets

enum Pizzasize {
    SMALL,
    MEDIUM,
    LARGE,
}

const size = Pizzasize.LARGE;

// incremental enum --> it automatically increment the value of their compliment values

enum Status {
    PENDING = 100,
    SERVED, // 101
    CANCELLED, // 02
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger",
};

function makingChai(type: ChaiType) {
    console.log(`Making: ${type}`)
}

console.log(ChaiType.GINGER);

