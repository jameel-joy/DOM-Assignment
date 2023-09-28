//  mouseout event

// The mouseout event is fired at an Element when a pointing device (usually a mouse)
//  is used to move the cursor so that it is no longer contained within the element or one of its children.

const clk = document.getElementById("box");

clk.addEventListener("mouseout", () => {
    alert("you left the safe zone 🙅 (mouse out event working properly)");
})