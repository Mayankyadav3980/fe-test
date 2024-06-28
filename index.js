let t1 =() =>{
    console.log(this);
    var t2=() =>{
        console.log(this);
        function t3() {
            console.log(this);
        }
        t3();
    }
    t2();
    
}
t1();

// const myFunction = () => {
//     console.log(this);
//   };
  
//   // call it
//   myFunction();

console.log(this);