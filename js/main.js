const caja1 = document.getElementById("caja1");
const caja2 = document.getElementById("caja2");
// caja1.addEventListener("mouseout", changeColor)

function changeColor(element) {
    console.log(element);
    const COLOR = "#96a3ef";
    element.style.backgroundColor = COLOR;
}