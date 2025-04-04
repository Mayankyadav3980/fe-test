// //1 way
// function fun (){
//     console.log("this is functon ");
// }

// //2 way

// const fun = () => {
//     console.log('arrow function');

// }

// //3rd way (function exp)
// const fun = function (){
//     console.log("third way")
// }

// function fun1 (){
//     let x = 1;
     
//     return function fun2(){
//         console.log(x);
//     }
// }

// let fun = fun1();
// fun();


// let pr = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         res('resolved')
//     }, 5000)
// })


// pr.then((x)=>{
//     console.log(x)
// }).catch((e)=>{
//     console.log('err', e)
// })

function fun(){
    console.log(this);
}

// fun();

var fun2 = function(){
    console.log(this);
}
// fun2();

var fun3 = () => {
    console.log(this);
    console.log("inside fun3")
}
// fun3();


// fun dec, fun exp, arrow fun as methods


const obj = {
    name: "ShriHari",
 function hello(){
        console.log(this);
    }
}

obj.fun();