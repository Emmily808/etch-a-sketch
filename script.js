let color = "black";

let slider = document.getElementById("slider");
let result = document.getElementById("result");

function showGridNumber() {
  result.innerHTML = `${slider.value} x ${slider.value}`;
}

showGridNumber();

slider.addEventListener("mousemove", showGridNumber);

function createGrid(size) {
  let mainContainer = document.getElementById("main-container");
  let childrensContainer = mainContainer.querySelectorAll("div");
  childrensContainer.forEach((div) => div.remove());
  mainContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  mainContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let gridChildrens = document.createElement("div");
    gridChildrens.style.backgroundColor = "white";
    mainContainer.appendChild(gridChildrens);
    gridChildrens.addEventListener("mouseover", gridColor);
  }
}

createGrid(16);

function deleteGrid(input) {
  createGrid(input);
}

function gridColor() {
  if (color === "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}

function changeColor(choice) {
  color = choice;
}

function resetGrid() {
  let mainContainer = document.getElementById("main-container");
  let childrensContainer = mainContainer.querySelectorAll("div");
  childrensContainer.forEach((div) => (div.style.backgroundColor = "white"));
}
