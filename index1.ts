const currentDate = new Date();
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; 
    console.log(currentDate);
 let fullYear = currentDate.getFullYear();
 console.log(fullYear);
 let days1 = days[currentDate.getDay()];
 console.log(days1);
 let month = currentDate.getMonth()+1;
 console.log(month);
 let time = currentDate.getHours();
 console.log(time);
 let timezone = currentDate.getMinutes()
 console.log(timezone);
 let years = Math.round(Date.now() / year);
 console.log(years)
