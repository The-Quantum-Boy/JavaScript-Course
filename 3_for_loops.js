//for loop
// const prompt=require("prompt-sync")({sigint:true});
for(let i=1;i<=10;i++){
    console.log("this is ",i);
}

//program to add n natural number
let sum=0;
let n=23;
// let n = prompt("Ente the value of n ")
// n=Number.parseInt(n);
for(let i=0;i<=n;i++){
    sum += i;
}
console.log(sum);

let obj={
    harry:90,
    sumt:34,
    ram:43,
    shiv:45
}
//for in loop
for(let a in obj){
    console.log("Marks of "+a+" are "+ obj[a]);
}

//for off loog
for(let a of "sumitdhanokar"){
    console.log(a);
}

for(var j=0;j<6;j++){
    console.log("hello "+j);
}

console.log(j);