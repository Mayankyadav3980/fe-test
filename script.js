// function a( mul ){

//     // let x= 5;

//     function b(x){
//         let y= 6;
//         // console.log(x);
//         return x * mul;
//     }
//      return b;
// }

// let twoMul = a(2)
// console.log(twoMul(4));

//practicing arr.reduce method
let arr = [1, 2, 3, 4, 5];
let total = arr.reduce((acc, cv, ci, arr)=>{
    console.log(acc, cv);
    
    return acc+cv;
}, accIniValue=0);

console.log(total);


