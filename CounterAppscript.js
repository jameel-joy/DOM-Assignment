//getting the html elements
const dec = document.getElementById("decbtn");
const inc = document.getElementById("incbtn");
const res = document.getElementById("resetbtn");
const disp = document.getElementById("dispval");

// for decremnt button click
dec.addEventListener("click", () => {
    const value = Number(disp.innerText);
    if (value > 0) {
      disp.innerText = value - 1;
    } else {
      alert("Negative value not allowed");
    }
  });

// for Increment button click

inc.addEventListener("click", () => {
    const value = Number(disp.innerText);
    if(value >= 10){
        alert("10+ value not allowed");
    }else{
        disp.innerText = value + 1;
    }
})

// for reset button click

res.addEventListener("click", () => {
    disp.innerText = 0;
})
