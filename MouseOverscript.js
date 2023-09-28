// mouseover
// The mouseover event is fired at an Element when a pointing device (such as a mouse or trackpad)
//  is used to move the cursor onto the element or one of its child elements.

const MouseOver = document.getElementById("box");

MouseOver.addEventListener("mouseover", () => {
    alert("you entered in Restricted Area 🙅 (mouse over event is working properly)");
})