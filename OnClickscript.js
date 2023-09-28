// Perform onclick event

// An element receives a click event when a pointing device button (such as a mouse's primary mouse button)
//  is both pressed and released while the pointer is located inside the element.

// If the button is pressed on one element and the pointer is moved outside the element before the button is released,
//  the event is fired on the most specific ancestor element that contained both elements.

const clk = document.getElementById("box");

clk.addEventListener("click", () => {
    alert("You Just Click Me");
})

const btn = document.getElementById("btn");
function hey() {
    btn.innerText = "Ok";
    btn.style.backgroundColor = "maroon";
}