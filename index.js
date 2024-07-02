const delay = (time) => {
  // Write the logic here
}
 
let count = function(){
  let id = null;
  let start = () {
      let i=0;
     id = setInterval(()=>{
          console.log(i++);
      })
  }
  
  let stop = () => {
      clearInterval(id);
  }
}

count.start()
setTimeout(() => {
  count.stop()
},6000)