let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let flag = 0;
let h = 0, m = 0, s = 0;
let arr = [];
let id;
function startWatch() {
  
  let t = 0;

   id = setInterval(() => {
    if (flag) {
      
    }
    t = t + 1;
    sec.innerHTML = `${t}`;

    if (t == 60) {
      m = m + 1;
      t = 0;
      min.innerHTML = m;
    }
    if (m == 60) {
      h = h + 1;
      m = 0;
      hr.innerHTML = h;
    }
  }, 1000);
}

function pause(){
    clearInterval(id);
}
function reset() {
//   flag = true;
    clearInterval(id);
  sec.innerHTML = "0";
  min.innerHTML = "0";
  hr.innerHTML = "0";
  m=0;
  h=0;
  s=0;
}

function split() {

}
