//keypress

// The keypress event is fired when a key that produces a character value is pressed down.

const okp = document.getElementById("inputText");
const disp = document.getElementById("disp");

okp.addEventListener("keypress", (e) => {
    disp.innerText = "You have Pressed " + e.key;
})