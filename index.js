// var add = (function ( ) {
//   var counter = 0;
//   return function ( ) {
//        counter += 1; 
//        return counter;
// }
// })();    
// console.log(add());
// console.log(add());
// console.log(add());


let fun = (function(){
  var counter = 0;
  // console.log("this is iifi " + counter );
  return function(){
    counter++;
    return counter;
  };
})();

console.log(fun());