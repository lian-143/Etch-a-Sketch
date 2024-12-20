const container = document.getElementById("container");
const gridSizeBtn = document.getElementById("grid-size");
const blackBtn = document.getElementById("black");
const rainbowBtn = document.getElementById("rainbow");
const shadeBtn = document.getElementById("shade");
const eraseBtn = document.getElementById("erase");
const clearBtn = document.getElementById("clear");
let currentMode = "black";

createGrid(16, 16);

gridSizeBtn.addEventListener("click", getUserInput);
blackBtn.addEventListener("click", () => setMode("black"));
rainbowBtn.addEventListener("click", () => setMode("rainbow"));
shadeBtn.addEventListener("click", () => setMode("shade"));
eraseBtn.addEventListener("click", () => setMode("erase"));
clearBtn.addEventListener("click", clearGrid);

function setMode(mode) {
  currentMode = mode;
}

function getUserInput() {
  let userInput = prompt("Enter the grid size from 1-100: ");
  container.innerHTML = "";

  createGrid(userInput, userInput);
}

function createGrid(rows, columns) {
  let divSize = 100 / rows;

  for (let i = 0; i < rows * columns; i++) {
    let divGrid = document.createElement("div");
    container.appendChild(divGrid);
    divGrid.className = "grid-item";

    divGrid.style.height = `${divSize}%`;
    divGrid.style.width = `${divSize}%`;

    divGrid.addEventListener("mouseenter", () => colorMode(divGrid));
  }
}

function randomNumber() {
  return Math.floor(Math.random() * 256);
}

function colorMode(divGrid) {
  if (currentMode === "black") {
    divGrid.style.background = "black";
  } else if (currentMode === "rainbow") {
    divGrid.style.background = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
  } else if (currentMode === "shade") {
    let currentOpacity = parseFloat(divGrid.style.opacity) + 0.1 || 0;
    divGrid.style.background = "black";
    divGrid.style.opacity = currentOpacity;
  } else if (currentMode === "erase") {
    divGrid.style.background = "";
    divGrid.style.opacity = "";
  }
}

function clearGrid() {
  const allGrid = document.querySelectorAll(".grid-item");
  allGrid.forEach((div) => {
    div.style.background = "";
    div.style.opacity = "";
  });
}
