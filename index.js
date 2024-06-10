var a = 1;

function test1(){
    let b = 2;
    let test2 = function(){
        let c = 3;
        console.log(a,b,c);
        c++;
    }
    return test2;
}
let test2 = test1();
test2();
 test2 = test1();
test2();
// console.log(a);