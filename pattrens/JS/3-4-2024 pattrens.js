//1.
// *****
// ****
// ***
// **
// *

function star1(){
    for(i=1;i<=5;i++){
        var str=""
        for(j=i;j<=5;j++){
            str += "*"
           
        } console.log(str)
    }
}
star1()

//2 .
// *
// **
// ***
// ****
// *****

function star2(){
    for(i=1;i<=5;i++){
        var str=""
        for(j=i;j>0;j--){
            str += "*"
           
        } console.log(str)
    }
}
star2()

//3.
// *****
// *****
// *****
// *****
// *****

function star3(){
    for(i=1;i<=5;i++){
        var str=""
        for(j=1;j<=5;j++){
            str += "*"
           
        } console.log(str)
    }
}
star3()

// 4.
//  *
// **
// ***
// ****
// *****
let n1=Number(prompt("enter the value")); 

for(let i=1;i<=n;i++){ 
    let str=""
    for( j=1;j<=n;j++){ 
     if(j>n-i){  
         str+="*"
     }
     else{
         str+=" "  //
     }
    }
    console.log(str)
}

//5.
// *****
// *   *
// *   *
// *   *
// *****

let n=Number(prompt("enter the value"));

for(let i=1;i<=n;i++){
    let str=""
    for( j=1;j<=n;j++){
        if(i===1||i===n){
           str+="*"
        }else if (j===1 || j===n){
            str+="*"
        }
        else{
            str+= " ";
        }
    }
    console.log(str)
}

