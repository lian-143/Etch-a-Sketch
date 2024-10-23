const container = document.getElementById("container");
const gridItems = document.getElementsByClassName("grid-item");
console.log(gridItems);

function grid(rows, column) {
  // creating grid
  for (let i = 0; i < rows * column; i++) {
    let gridCreate = document.createElement("div");
    container.appendChild(gridCreate).className = "grid-item";
  }
}

grid(16, 16);

for (let i = 0; i < gridItems.length; i++) {
  gridItems[i].addEventListener("mousedown", function (event) {
    if (event.button === 0) {
      gridItems[i].style.backgroundColor = "black";
    }
  });
}
