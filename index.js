var joe = {
  name: "Joe", 
  hello: function(){
    console.log(this);
  }
}; 

new (joe.hello.bind(joe))();