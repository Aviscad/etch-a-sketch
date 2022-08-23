let grid = document.querySelector(".grid"),
  gridValue = document.querySelector("#grid-value"),
  showSize = document.querySelector("#show-size");

// gridValue.addEventListener("change", () => {
//   console.log(gridValue.value);
//   showSize.value = `${gridValue.value} x ${gridValue.value}`;
//   drawGrid(16);
// });

window.addEventListener("load", () => {
  drawGrid(16);
});

function drawGrid(size) {
  grid.innerHTML = "";
  for (let i = 1; i <= size; i++) {
    for (let y = 1; y <= size; y++) {
      let div = document.createElement("div");
      div.classList.add("box");
      grid.appendChild(div);
    }
  }
  let boxesArray = document.querySelectorAll(".box");
  for (let i = 0; i < boxesArray.length; i++) {
    let currentBox = boxesArray[i];
    currentBox.addEventListener("click", (e) => {
      console.log(e.target);
      let div = e.target;
      div.style.backgroundColor = "red";
    });
  }
}
