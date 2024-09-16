console.log("Hello, TypeScript!");

// Practical Questions
// Part - 1

// Q1
let width:number = 10;

function findSquare(widthValue:number):number{
    return widthValue * widthValue;
}

console.log(findSquare(width));

// Q2
function add(no1:number, no2:number):number{
    return no1 + no2;
}

console.log(add(2,3));

// Q3
function isString(input:any):boolean{
    return typeof(input) == "string" ? true : false;
}

console.log(isString("Ajith"));

// Q4
let myDetails:[string, number] = ["Ajith", 33];

function showMyDetails(details:[string, number]):string{
    return `${details[0]} ${details[1]}`;
}

console.log(showMyDetails(myDetails));

// Q5
enum Colors {
    color1 = "Red",
    color2 = "Green",
    color3 = "White",
    color4 = "Blue"
};

let selectedColor:Colors = Colors.color2;
console.log(selectedColor);


// Part - 2

// Q1
function isEven(input:number):boolean{
    return input%2 == 0 ? true : false;
}

console.log(isEven(9));

// Q2
let Coordinate:[number, number] = [200, 300];

let point = Coordinate[0];
console.log(point);

// Q3
let Numbers:number[] = [50, 100, 150];

function getFirstNumber(value:number[]):number{
    return value[0];
}

console.log(getFirstNumber(Numbers));

// Q4
let addNumbers:number[] = [4, 5, 8, 3, 15, 9, 20];

function sumArray(numberArray:number[]):number{
    let total:number = 0;
    for(let start:number=0; start < numberArray.length; start++){
        total = total + numberArray[start];
    }
    return total;
}

console.log(sumArray(addNumbers));

// Q5
interface person {name:string, age:number, email?:string};

let Person:person = {name:"Ajith", age:33, email:""};

function printPersonInfo(randomPerson:person):string{
    return randomPerson.email ? `Name : ${randomPerson.name}\nAge : ${randomPerson.age}\nEmail : ${randomPerson.email}` : `Name : ${randomPerson.name}\nAge : ${randomPerson.age}\nEmail : "Not Provided"`;
}

console.log(printPersonInfo(Person));

// Q6
let maxArray:number[] = [4,8,1,3,55,20,7];

function findMax(anyArray:number[]):number{
    let maxNo:number = 0;
    for(let start:number=0; start < anyArray.length; start++){
        if(maxNo < anyArray[start]){
            maxNo = anyArray[start];
        }
    }
    return maxNo;
}

console.log(findMax(maxArray));

// Q7
class Rectangle{
    rHeight:number;
    rWidth:number;

    constructor(rHeight:number, rWidth:number){
        this.rHeight = rHeight;
        this.rWidth = rWidth;
    }

    getArea():string{
        return `The area is ${this.rHeight * this.rWidth}`;
    }
}

let findArea = new Rectangle(5,6);
console.log(findArea.getArea());

// Q8
let text:string = "Madam";
let lowerText:string = text.toLowerCase();


function isPalindrome(input:string):boolean{

    let answer:boolean = true;
    for(let start:number=0; start < (input.length/2); start++){
        if(input[start] != input[(input.length-1)-start]){
            answer = false;
            break;
        }
    }
    return answer;
}

console.log(isPalindrome(lowerText));

// Q9
enum Days {
    Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
};

function getDayName(day:number):string{
    return Days[day-1];
}

console.log(getDayName(1));

// Q10
let multipleArray:any[] = [5, "Ajith", 20, "Jaffna", 55, 70, "Srilanka"];

function filterByType(sampleArray:any[], input:string):any[]{
    return sampleArray.filter(r => typeof(r) == input);
}

console.log(filterByType(multipleArray, "number"));

// filter-using-for-loop

// function filterByType(sampleArray:any[], input:string):any[]{
//     let filteredArray:any[] = [];
//     for(let start:number=0; start < sampleArray.length; start++){
//         if(typeof(sampleArray[start]) == input){
//             filteredArray.push(sampleArray[start]);
//         }
//     }
//     return filteredArray;
// }

// console.log(filterByType(multipleArray,"number"));