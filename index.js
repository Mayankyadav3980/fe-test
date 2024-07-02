function foo(a){
  function faa(b){
      console.log(a+b); 
}
 faa;
}

// console.log(foo(2)(3));
foo(3)(2);