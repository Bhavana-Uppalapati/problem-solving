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


//     *     1   1 
//    ***    2   3
//   *****   3   5
//  *******  4   7
// ********* 5   9
//  *******  6   7  
//   *****   7   5
//    ***    8   3
//     *     9   1    
// let n=5
// let N=2*n
// for(let i=1;i<=2*n-1;i++){
//     let str=""
//     if(i<=n){
//         s=n-i
//         c=(2*i)-1
        
//     }else{
//         s=i-n
//         c=(N-i)*2-1
//     }
//     for(let j=1;j<=s;j++){
//             str+=" "
//     }
//     for(let k=1;k<=c;k++){
//         str+="*"
//     }

//9//     *       1
//    * *      3
//   *   *     5
//  *     *    7
// *********   

// let n=5;
// for(let i=1;i<=n;i++){
//     let str=""
//     for(let j=1;j<=n-i;j++){
//         str+=" "
//     }
//     for(let k=1;k<=(2*n)-1;k++){
//         if(i===n){
//             str+="*"
//         }else if(k===1||k===(2*i-1)){
//             str+="*"
//         }else{
//             str+=" "
//         }
//     }
//     console.log(str)
// }

//10.//     *       1  4
//    * *      3  3
//   *   *     5  2
//  *     *    7  1
// *       *   9  0
//  *     *    7  1
//   *   *     5  2
//    * *      3  3
//     *       1  4    2*(N-i)-1

// let n=5;
// let N=2*n
// for(let i=1;i<=2*n-1;i++){
//     let str=""
//     if(i<=n){
//         s=n-i
//         c=(2*i)-1
//     }else{
//         s=i-n
//         c=2*(N-i)-1
//     }
//     for(let j=1;j<=s;j++){
//         str+=" "
//     }
//     for(let k=1;k<=(2*n)-1;k++){
//         if(k===1||k===c){
//             str+="*"
//         }else{
//             str+=" "
//         }
//     }
//     console.log(str)
// }

//11.// ***   0  9
//  ***    1  7  2*(n-i)+1
//   ***     2  5
//    *      3  3
//     *       4  1
//    *      3  3         (2*n-i)-1
//   **     2  5  2(i-n)+1
//  ***    1  7
// ***   0  9

// let n=5;
// for(let i=1;i<=2*n-1;i++){
//     let str=""
//     if(i<=n){
//         s=i-1
//         c=2*(n-i)+1
//     }else{
//         s=(2*n-i)-1
//         c=2*(i-n)+1
//     }
//     for(let j=1;j<=s;j++){
//         str+=" "
//     }
//     for(let k=1;k<=c;k++){
//             str+="*"
//     }
//     console.log(str)
// }

//12.
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
// let n=5;
// let N=2*n
// for(let i=1;i<=2*n-1;i++){
//     let str=""
//     if(i<=n){
//         c=i
//     }else{
//         c=N-i
//     }
//     for(let k=1;k<=c;k++){
//             str+="*"
//     }
//     console.log(str)
// }

14.
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
//  *

// let n=5;
// let N=2*n
// for(let i=1;i<=2*n-1;i++){
//     let str=""
//     if(i<=n){
//         s=n-i
//         c=i
//     }else{
//         s=i-n
//         c=N-i
//     }
//     for(let j=1;j<=s;j++){
//         str+=" "
//     }
//     for(let k=1;k<=c;k++){
//             str+="*"
//     }
//     console.log(str)
// }

15. 
// ***   ***
// ***** *****
// ***********
//  *********
//   *******
//    *****
//     ***
//      *