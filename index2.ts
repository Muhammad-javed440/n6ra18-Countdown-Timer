interface Person {
    name:string;
    age:number;
    isStudent:boolean;
    address:{
        country:string;
        city:string;
    }
}

const person : Person = {
    name:'Muhammad Javed',
    age:44,
    isStudent:true,
    address:{
        country:'Pakistan',
        city:'Lahore'
    }
}
console.log(person)