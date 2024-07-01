// x( (a,b,c) => { return a+b+c }, 2,3,6 )
//   var str = "";
//   console.log(str);
//   function x(callback,a,b,c) {
    
//     setTimeout(() => {
//       str += "x"
//     });
  
//     str += callback(a,b,c)
//     console.log(str)
//   }

let x = "x";
console.log(x);
function fun (){
  console.log(x + 11);
}
fun();


// setTimeout(() => {
//   console.log('a')
// })

// new Promise((resolve,reject) => {
//   // setTimeout(() => {
//   //   console.log('b')
//   // })
//   console.log('b');
// })

// console.log('c');