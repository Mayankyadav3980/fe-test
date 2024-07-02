const delay = (time) => {
  // Write the logic here
  return new Promise((res,rej) => {
      setTimeout(res,time);
  })
}
 
let counter = () => {
  let pause = false;
  return{
      start:  () => {
        for(let i=0; ; i++){
              if(pause)break;
              console.log(i);
              await delay(1000);
          }
      },

       stop: () => {
          pause = true;
      }
  }
  
}
let count = counter();
count.start()
setTimeout(() => {
  count.stop()
},6000)