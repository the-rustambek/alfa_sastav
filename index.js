// function isPower(k,n){
//     if(k>0 && Math.pow(n, x)%1===0){
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(isPower(8,2))



let k=Number(prompt("k="));
let n=Number(prompt("n="));
let a;
if(Math.pow(n,(Math.log10(k)/Math.log10(n)))==k){
    console.log("True")
}
else{
    console.log("False")
}