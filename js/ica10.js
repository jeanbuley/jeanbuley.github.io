const button = document.querySelector("button");
button.addEventListener('click', changeColor);

const input = document.querySelector("input");
input.addEventListener('change', changeText);

function changeColor() {
    button.style.backgroundColor = "orange";
}

function changeText() {
    document.getElementById("name").innerHTML = "hi";
}