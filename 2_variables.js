// let age=19;
// if(age>10 && age<20){
//     console.log("The age is between 10 and 20");
// }

//switch case example
let color='blue';
switch(color){
    case 'blue':
        console.log("it is blue");
        break;
    
    case 'red':
        console.log("it is red");
        break;
    
    case 'white':
        console.log("it is white");
        break;
    
    default:
        console.log("you dont have choose any color");
}

let number=24;
if(number%2==0 && number%3 == 0){
    console.log("the number is divisible by 2 and 3");
}else{
    console.log("the number is not divisible by 2 and 3");
}

let age=17;
console.log(age>18? "you can drive":"you can not drive");

let number2 = 9;
if (number2 % 2 == 0 || number2 % 3 == 0) {
  console.log("the number is divisible by 2 or 3");
} else {
  console.log("the number is not divisible by 2 or 3");
}