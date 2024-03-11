//Checking the alphabet is vowel or not
let a=prompt("Enter an alphabet")
if(a=='a'||a=='e'||a=='i'||a=='o'||a=='u'){
    console.log("it's a vowel")
}else if(a>=0 || a<=0){
    console.log("You entered a number please enter alphabet")
}
else{
    console.log("It's a consonent")
}

//checking the type of triangle based on sides
let side1=Number(prompt("Enter side1"))
let side2=Number(prompt("Enter side2"))
let side3=Number(prompt("Enter side3"))
switch(true){
    case (side1+side2<=side3) ||   (side1+side3<=side2) || (side2+side3<=side1) : console.log("it's not a triangle")
    break;
    case side1===side2 && side1===side3: console.log("equilateral triangle")
    break;
    case (side1===side2 && side1!==side3 ) || (side2===side3 && side2!==side1) ||  (side1===side3 && side1!==side2):
        console.log("Isosceles Triangle")
        break;
    case side1!==side2 && side1!==side3: console.log("Scalene Triangle")
    break;
    case (side1+side2<=side3) ||   (side1+side3<=side2) || (side2+side3<=side1) : console.log("it's not a triangle")
    break;
   
  default:
        console.log("Enter valid values")

}

//checking weekdays
let day=Number(prompt("enter day number from 1-7"))

day===1 ? console.log("monday") : day===2 ? console.log("tuesday") : day===3 ? console.log("wednesday") : day===4 ? console.log("Thursday"):
day===5 ? console.log("Friday") : day===6 ? console.log("Saturday") : day===7 ? console.log("Sunday") : console.log("enter valid day") ;

//Checking month
let month=Number(prompt("Enter month from 1-12"))
month===1 ? console.log("January") : month===2 ? console.log("February") : month===3 ? console.log("March") : month===4? console.log("April"):
month===5? console.log("May") : month===6 ? console.log("June") : month===7 ? console.log("July") : month===8 ? console.log("August") : month===9 ? console.log("september") : month===10 ? console.log("October") : month===11 ? console.log("November") : month===12 ? console.log("December"): console.log("enter valid day") ;

 //checking the given number is odd or even
 let num=Number(prompt("Enter a number"))
 if(num<0){
    console.log("Enter an integer")
 }else if(num%2===0){
    console.log("Even number")
 }
 else{
    console.log("odd number")
 }

//Checking weather based on temparature
let temp=Number(prompt("Enter temprature"))
if(temp>=30){
    console.log("hot")
}else if(temp>=18 && temp<=29){
    console.log("netural")
}else{
    console.log("cold(winter)")
}

//Checking the given year is leap year or not
let year=Number(prompt("Enter year"))
if((year%4===0 && year%100!==0) || (year%400===0)){
    console.log("leap year")
}
else{
  console.log("Not a leap year")
}

//checking the given number is prime or not
let x=Number(prompt("Enter a number"))
let i=2
++i;
if(x%1===0 && x%x===0 && x%i!==0) {
    console.log("prime number")
} else{
    console.log("not a prime number")
}