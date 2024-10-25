const container = document.getElementById("container");
const gridSizeBtn = document.getElementById("grid-size");

gridSizeBtn.addEventListener("click", getUserInput);

function getUserInput() {
  let userInput = prompt("Enter the grid size from 1-100: ");

  container.innerHTML = "";
  createGrid(userInput, userInput);
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

    divGrid.addEventListener("mouseenter", function () {
      divGrid.style.background = "black";
    });
  }
}
