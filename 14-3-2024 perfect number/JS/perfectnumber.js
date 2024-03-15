let a = Number(prompt("Enter number:"));
let sum=0;
for(let i=1; i<a; i++){
    if(a%i==0){
        sum=sum+i;
    }
   
}
if(sum===a){
    console.log("Perfect number")
}else{
    console.log("not a perfect number");
}