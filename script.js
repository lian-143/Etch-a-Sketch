const container = document.getElementById("container");
const gridSizeBtn = document.getElementById("grid-size");
const blackBtn = document.getElementById("black");
const rainbowBtn = document.getElementById("rainbow");
const shadeBtn = document.getElementById("shade");

gridSizeBtn.addEventListener("click", getUserInput);
blackBtn.addEventListener("click", blackMode);
rainbowBtn.addEventListener("click", rainbowMode());
shadeBtn.addEventListener("click", shadeMode);

function getUserInput() {
  let userInput = prompt("Enter the grid size from 1-100: ");
  container.innerHTML = "";

  createGrid(userInput, userInput);
  // blackMode(divGrid);
}

function createGrid(rows, columns) {
  let divSize = 100 / rows;
  console.log(divSize);

  for (let i = 0; i < rows * columns; i++) {
    let divGrid = document.createElement("div");
    container.appendChild(divGrid);
    divGrid.className = "grid-item";

    divGrid.style.height = `${divSize}%`;
    divGrid.style.width = `${divSize}%`;

    // blackMode(divGrid);
    rainbowMode(divGrid);
    shadeMode(divGrid);
  }
}

// black mode
function blackMode(divGrid) {
  divGrid.addEventListener("mouseenter", function () {
    divGrid.style.background = "black";
  });
}

// rainbow mode
function randomNumber(min = 0, max = 255) {
  return Math.floor(Math.random() * (max - min) - min);
}

function rainbowMode(divGrid) {
  divGrid.addEventListener("mouseenter", function () {
    divGrid.style.background = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
  });
}

// darkening effect
function shadeMode(divGrid) {
  let opacityValue = 0.1;
  divGrid.addEventListener("mouseenter", function () {
    divGrid.style.background = "black";
    divGrid.style.opacity = opacityValue;
  });
}
