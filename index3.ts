const person :  {
    name:string;
    age:number;
    isStudent:boolean;
    address:{
        country:string;
        city:string;
    }
      } = {
    name:'Muhammad Javed',
    age:44,
    isStudent:true,
    address:{
        country:'Pakistan',
        city:'Lahore'
    }
}
console.log(person)