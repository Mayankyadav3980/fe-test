function Constr(name){
  // this.name = name;
  this.printT = function(){
    console.log('hi be calm');
  }
}

let obj1 = new Constr('may');
var obj2 = new Constr('yad');

console.log(Constr.hasOwnProperty.name);
// console.log(obj2);
