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

//6.
// *
// **
// * *
// *  *
// *   *
// ******
// let n=Number(prompt("Enter number"))
// for(i=1;i<=n;i++){
//     let str=" "
//     for(j=1;j<=n;j++){
//         if(i==n || j==1){
//             str+= "*"
//         }else if(j===i){
//             str+="*"
//         }
//         else{
//             str+= " "
//         }
//     }console.log(str)
// }

//7.
//     *
//    ***
//   *****
//  *******
// *********

// let h=Number(prompt("enter the height"))
// for(let i=1;i<=h;i++){
//     let str=''
//     for(let j=1;j<=h-i;j++){
//         str+=' '
//     }
//     for(let k=1;k<=(2*i)-1;k++){
//         str+='*'
//     }console.log(str)
// }

//8.
// *********
//  *******
//   *****
//    ***
//     *


// let h=Number(prompt("enter the height"))

// for(let i=0;i<=h;i++){
//     let str=""
//     for(let j=0;j<=i-1;j++){
//       str+=' '
//     }
//     for(let k=1;k<=2*(h-i)-1;k++){
//         str+="*"
//     }console.log(str)
// }

