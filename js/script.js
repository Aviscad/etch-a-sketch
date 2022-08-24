let grid = document.querySelector(".grid"),
  gridValue = document.querySelector("#grid-value"),
  showSize = document.querySelector("#show-size"),
  colorPicker = document.querySelector("#color-picker"),
  size = 10,
  normal = document.querySelector("#normal"),
  rainbow = document.querySelector("#rainbow"),
  eraser = document.querySelector("#eraser"),
  clear = document.querySelector("#clear");

window.addEventListener("load", () => {
  // drawGrid(size);
  createGrid();
  drawInGrid(1);
});

function getRandomColor() {
  let r = rndNum(0, 255),
    g = rndNum(0, 255),
    b = rndNum(0, 255),
    rgb = `rgb(${r}, ${g}, ${b})`;
  return rgb;
}

function createGrid() {
  showSize.textContent = `${gridValue.value} x ${gridValue.value}`;

  grid.innerHTML = "";
  //CREATING DIVS
  for (let i = 1; i <= size; i++) {
    for (let y = 1; y <= size; y++) {
      let div = document.createElement("div");
      div.classList.add("box");
      grid.appendChild(div);
    }
  }
  console.log(size);
  //CHANGING GRID SIZE
  grid.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
  grid.style.gridTemplateRows = "repeat(" + size + ", 1fr)";
}

function drawInGrid(option) {
  /*
    OPTION VALUES
    1. NORMAL
    2. RAINBOW
    3. ERASER
    4. CLEAR
  */
  if (option == 1) {
    //ADDING CLICK EVENT TO ALL DIVS
    let boxesArray = document.querySelectorAll(".box");
    for (let i = 0; i < boxesArray.length; i++) {
      let currentBox = boxesArray[i];
      currentBox.addEventListener("click", (e) => {
        let div = e.target;
        div.style.backgroundColor = colorPicker.value;
      });
    }
  } else if (option == 2) {
    //ADDING CLICK EVENT TO ALL DIVS
    let boxesArray = document.querySelectorAll(".box");
    for (let i = 0; i < boxesArray.length; i++) {
      let currentBox = boxesArray[i];
      currentBox.addEventListener("click", (e) => {
        let div = e.target;
        div.style.backgroundColor = getRandomColor();
      });
    }
  } else if (option == 3) {
    //ADDING CLICK EVENT TO ALL DIVS
    let boxesArray = document.querySelectorAll(".box");
    for (let i = 0; i < boxesArray.length; i++) {
      let currentBox = boxesArray[i];
      currentBox.addEventListener("click", (e) => {
        let div = e.target;
        div.style.backgroundColor = "#fff";
      });
    }
  }
}

//CONVERT RGB TO HEX
function componentToHex(c) {
  let hex = c.toString(16);
  console.log(hex);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

rndNum = (min, max) =>
  Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
  Math.ceil(min);

normal.addEventListener("click", () => {
  drawInGrid(1);
});
colorPicker.addEventListener("change", () => {
  drawInGrid(1);
});

rainbow.addEventListener("click", () => {
  drawInGrid(2);
  // setInterval(() => {
  //   let currentRGBCOlor = getRandomColor();
  //   console.log(currentRGBCOlor);
  //   let rgbArrayValues = currentRGBCOlor
  //     .substring(4, currentRGBCOlor.length - 1)
  //     .split(",");

  //   console.log(
  //     rgbToHex(rgbArrayValues[0], rgbArrayValues[1], rgbArrayValues[2])
  //   );
  // }, 1000);
});

eraser.addEventListener("click", () => {
  colorPicker.value = "#ffffff";
  drawInGrid(3);
});

clear.addEventListener("click", () => {
  createGrid(size);
  drawInGrid(1);
});

gridValue.addEventListener("change", () => {
  size = gridValue.value;
  console.log(size);
  createGrid();
  drawInGrid(1);
  // drawGrid(gridValue.value);
});
