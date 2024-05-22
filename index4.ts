interface Employee {
    id : Number;
    name : string; 
    [key:string]:any
}
const employee1 = {} as Employee;
employee1.id = 1;
employee1.name = 'Muhammad Javed';
employee1.salary = 25000;
employee1.years = [2021,2022,2023];
const employee2 = {} as Employee;
employee2.id = 2;
employee2.name = 'Muhammad Ali';
employee2.salary = 25000;
employee2.years = [2021,2022,2023]
console.log(employee1);
console.log(employee2);