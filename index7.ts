function sayHello(){
    console.log("ALLAH HO AKBER")
}
const intervalId = setInterval(sayHello,2000) 
console.log(intervalId);

setTimeout(()=>{
    clearInterval(intervalId);
    console.log('Stoped set interval.')
},5000);