function updateDisplay() {
   co.innerHTML = counter;
}

let counter = 0;
let co = document.querySelector("#display");
co.innerHTML = counter;

function change() {
   counter++;
   return updateDisplay();
}

let incr = document.querySelector("#increment");
incr.addEventListener('click', change);

function decChange() {
   if(counter <= 0) {
      counter = 0;
      return updateDisplay();
   }
   counter--;
   return updateDisplay();
}

let dec = document.querySelector("#decrement");
dec.addEventListener('click',decChange);

function ResetCounter() {
   counter = 0;
   return updateDisplay();
}

let re = document.querySelector("#Reset");
re.addEventListener('click',ResetCounter);