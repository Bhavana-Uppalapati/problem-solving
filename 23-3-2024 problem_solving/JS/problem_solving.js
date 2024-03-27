// take a string and convert even characters of it into capital letters
// let str=prompt("Enter a string")
// st1="";

// for(i=0;i<str.length;i++){
//     if(i%2===0){
//         st2=str[i].toUpperCase()
//         st1 += st2
//     }
//     else{
//         st2=str[i].toLowerCase()
//         st1 += st2
//     }
// } console.log(st1)

//remove duplicates from a string
let str = prompt("Enter string")
let result = "";

for (let i = 0; i < str.length; i++) {
    let char = str[i];
  
    if (result.includes(char) === false) {
        result += char; 
    }
}

console.log("String without duplicates:", result);

//3. convert string to object
let string5 = prompt(
    "enter properties and values in the object by dividing them by & and given equal sign between property and value  "
  );
  let keyValuePairs = string5.split("&");
  
  let obj = {};
  for (let i = 0; i < keyValuePairs.length; i++) {
    let pair = keyValuePairs[i];
    [key, value] = pair.split("=");
    obj[key] = value;
  }
  console.log(obj);
//4. convert half string into uppercase and print the count of letters
let string=prompt("Enter a string")
let count = {};
for(i=0;i<string.length; i++){
    if(i<(string.length)/2){
        console.log(string[i].toUpperCase())
    }
    else{
        console.log(string[i].toLowerCase())
    }
}

for (let i = 0; i < string.length; i++) {
    let char = string[i];
    
  
        if (!count[char]) {
            count[char] = 1;
        } else {
            
            count[char]++;
        }
    }

console.log(count);
//5.convert string into array
let str5 = prompt("enter strings");
let arr6 = [];
let word = ""; 
for (let i = 0; i < str5.length; i++) {
  if (str5[i] !== " ") {
    word += str5[i];
  } else {
    arr6.push(word);
    word = "";
  }
}
if (word !== "") {
  arr6.push(word);
}
console.log(arr6);

//Numbers
//1.check whether a number is palndrome or not
let num=Number(prompt("Enter a number"))
temp=num
let reverse=0;
while(num>0){
    reverse= (reverse*10)+ (num%10);
    num=Math.trunc(num/10);
}if(reverse===temp){
    console.log("palindrome")
}
else{
    console.log("not a palindrome")
}

//2. generate random 6 digit otp
function randomnumber(){
    let x=Math.floor(Math.random()*999999)  ;
return x
}
console.log(randomnumber())

//3. find nth fibanoci series
let n1=Number(prompt("Enter a number"))
let f1=0
let f2=1
let f3=f1+f2

for(i=1;i<=n1;i++){
    console.log(f1)
    f1=f2
    f2=f3
    f3=f1+f2
  }

//4.take values from user and find median
let size4=Number(prompt("Enter number of elements"))
let a3=[]
let median=0

for(i=0;i<size4;i++){
    a3[i]=Number(prompt("Enter element"))
}
const asc=a3.sort(function(a,b){
    return a-b
});

if(size4%2!==0){
     median = a3[Math.floor(size4/ 2)];
}
else{
  const middle1 = a3[size4 / 2 - 1];
    const middle2 = a3[size4 / 2];
    median = (middle1 + middle2) / 2;
}
console.log("median is:" + median)
//5.covert a number to binary number
let n5=Number(prompt("Enter a number"))
let bin=[]
for(i=0;n5>0;i++){
    bin[i] = n5%2
    n5=Math.floor(n5/2)
    
}
for(j=bin.length-1;j>=0;j--){
    console.log(bin[j])
}

//Arrays
//1.take a array of elements and store sum of positiove elements in one array and sum of negative elements in another array
let size=Number(prompt("Enter the size of array: "))
let arr=[]
let p=0
let n=0
let parr=[]
let narr=[]
for(i=0;i<size;i++){
   arr[i]= Number(prompt("Enter number" + i + " "))
   if(arr[i]>0){
       p += arr[i]
     
   }
   else{
       n +=arr[i]
       
   }
   
} parr.push(p)
narr.push(n)
console.log(arr)
console.log(parr)
console.log(narr)

//2.take an array of strings if the last char ends with vowel convert it into capitals and print even chars
let size1 = Number(prompt("Enter the size of array "));
let name = [];
let name1 = [];
let name3=[]


for (let i = 0; i < size1; i++) {
    name[i] = prompt("Enter name " + i + ":");
    let even = ''; 
    for (let j = 0; j < name[i].length; j++) {
       if(j%2===0){
            even += name[i][j];
       }
    }
    name3.push(even);

    if (name[i].slice(-1) === 'a' || name[i].slice(-1) === 'e' || name[i].slice(-1) === 'i' || name[i].slice(-1) === 'o' || name[i].slice(-1) === 'u') {
       name1.push(name[i].toUpperCase())
    } else {
        name1.push(name[i].toUpperCase())
    }
}

console.log(name1,name3);

//3.take an array and check if it is palandrome or not
let size5 = Number(prompt("Enter no.of words you want to enter in array"))
let plndrome=[]
let arr4=[]
for(i=0;i<size5;i++){
    arr4[i]=prompt("Enter word" +i+ ":")
      let str=""
    for(j=arr4[i].length-1;j>=0;j--){
        str += arr4[i][j]
      
    }
    if(str===arr4[i]){
        plndrome.push(str)
    }
   
}  
console.log("palindromes in the array are:" + plndrome )
console.log(arr4)

//objects
//1.
let userInput = prompt(
    'Please enter an object '
  );
  let Object = JSON.parse(userInput);
  const len = Object.name.length;
  if (
    Object.name[len - 1] === "a" ||
    Object.name[len - 1] === "e" ||
    Object.name[len - 1] === "i" ||
    Object.name[len - 1] === "o" ||
    Object.name[len - 1] === "u"
  ) {
    Object.age += 2;
  } else {
    Object.age += 1;
  }
  console.log(Object);

  //2.
  let userInput2 = prompt(
    `Please enter an object (e.g., { "name": "John", "age": 30,"subjects":{"Maths": 80, "physics": 70, "chemistry": 80 }}):`
  );
  let userObject1 = JSON.parse(userInput2);
  let total =
    userObject1.subjects.Maths +
    userObject1.subjects.physics +
    userObject1.subjects.chemistry;
  console.log(`total marks are ${total}`);
  let output = {};
  output["total"] = total;
  if (total >= 300 / 2) {
    output["result"] = "pass";
  } else {
    output["result"] = "fail";
  }
  console.log(output);


  //3.convert object to string
  let objt = {
    name : "bhavana",
    age : 24,
    id  : 4
};
const str0 = JSON.stringify(objt);
console.log(str0);

//4.check the age is string or not if string convert to number if number convert to string
let userInput1 = prompt(
    'Please enter an object '
  );
  let Object3 = JSON.parse(userInput1);
  if (typeof Object3.age === "string") {
    Object3.age = Number(Object3.age);
    console.log(Object3.age);
    console.log(typeof Object3.age);
  } else {
    Object3.age = String(Object3.age);
    console.log(Object3.age);
    console.log(typeof Object3.age);
  }


 