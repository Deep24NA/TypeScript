// use where type is valid

type name1 = {
    type: string;
    isLogin: boolean;
}

function welcome (name: name1): string {
    return `welcome ${name} `
}

function validate (name: name1): string {
    return ` is login ${name.isLogin}`
}




// condition where validate is fail
// type isOk = "ok" | "notOk";

// class condition implements isOk {
//     type: isOk = "notOk"
// }


interface isOK {
    ok: "ok" | "notOk"
}

class condition implements isOK {
    ok: "ok" | "notOk" = "notOk"
}

// another case

// type Response = {ok : true} | {ok: false}

// class myRes implements Response{
//     ok: Boolean = true
// }


// intersection concept

/* 
    type format
*/


// type Name = {
//     name: string;
// }

// type PhoneNo = {
//     phoneno: number;
// }

// type Form = Name & PhoneNo;

// const person: Form = {
//     name: "deep",
//     phoneno: 232330
// }


/* 
    Interfaces
*/

interface Name {
    name: string
}
interface PhoneNo {
    phoneno : number 
}

interface Form extends Name , PhoneNo {}

const person : Form = {
    name : "deep",
    phoneno: 32232
}

// optional value

type form = {
    username : string;
    bio? : string;
}
const user1: form = {username: 'deep'};
const user2: form = {username: 'homelander' , bio: 'hello'}



// readOnly value

type report = {
    readonly marks : number;
    name: string;
}

const ReportPerson1: report = {
    name: 'deep',
    marks: 22,
}

ReportPerson1.name = "amita";
// ReportPerson1.marks = 22;




