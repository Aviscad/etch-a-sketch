let grid = document.querySelector(".grid"),
  gridValue = document.querySelector("#grid-value"),
  showSize = document.querySelector("#show-size"),
  colorPicker = document.querySelector("#color-picker"),
  size = 10,
  normal = document.querySelector("#normal"),
  rainbow = document.querySelector("#rainbow"),
  eraser = document.querySelector("#eraser"),
  colorChanger,
  mouseDown,
  clear = document.querySelector("#clear");

window.addEventListener("load", () => {
  createGrid();
  drawInGrid(1);
});

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
  */
  if (option == 1) {
    //ADDING CLICK EVENT TO ALL DIVS
    let boxesArray = document.querySelectorAll(".box");
    for (let i = 0; i < boxesArray.length; i++) {
      let currentBox = boxesArray[i];
      currentBox.addEventListener("mousedown", (e) => {
        let div = e.target;
        div.style.backgroundColor = colorPicker.value;
      });
      currentBox.addEventListener("mouseover", (e) => {
        if (mouseDown) {
          let div = e.target;
          div.style.backgroundColor = colorPicker.value;
        }
      });
    }
  } else if (option == 2) {
    //ADDING CLICK EVENT TO ALL DIVS
    let boxesArray = document.querySelectorAll(".box");
    for (let i = 0; i < boxesArray.length; i++) {
      let currentBox = boxesArray[i];
      currentBox.addEventListener("mousedown", (e) => {
        let div = e.target;
        div.style.backgroundColor = getRandomColor();
      });
      currentBox.addEventListener("mouseover", (e) => {
        if (mouseDown) {
          let div = e.target;
          div.style.backgroundColor = getRandomColor();
        }
      });
    }
  } else if (option == 3) {
    //ADDING CLICK EVENT TO ALL DIVS
    let boxesArray = document.querySelectorAll(".box");
    for (let i = 0; i < boxesArray.length; i++) {
      let currentBox = boxesArray[i];
      currentBox.addEventListener("mousedown", (e) => {
        let div = e.target;
        div.style.backgroundColor = "#fff";
      });
      currentBox.addEventListener("mouseover", (e) => {
        if (mouseDown) {
          let div = e.target;
          div.style.backgroundColor = "#fff";
        }
      });
    }
  }
}

//CONVERT RGB TO HEX
function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return (
    "#" +
    componentToHex(parseInt(r)) +
    componentToHex(parseInt(g)) +
    componentToHex(parseInt(b))
  );
}

const rndNum = (min, max) =>
  Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
  Math.ceil(min);

function getRandomColor() {
  let r = rndNum(0, 255),
    g = rndNum(0, 255),
    b = rndNum(0, 255),
    rgb = `rgb(${r}, ${g}, ${b})`;
  return rgb;
}

grid.addEventListener("mousedown", (e) => {
  e.preventDefault();
  mouseDown = true;
});

grid.addEventListener("mouseup", (e) => {
  e.preventDefault();
  mouseDown = false;
});

colorPicker.addEventListener("change", () => {
  clearInterval(colorChanger);
  drawInGrid(1);
});

normal.addEventListener("click", () => {
  clearInterval(colorChanger);
  drawInGrid(1);
});

rainbow.addEventListener("click", () => {
  drawInGrid(2);
  colorChanger = setInterval(() => {
    let currentRGBCOlor = getRandomColor();
    let rgbArrayValues = currentRGBCOlor
      .substring(4, currentRGBCOlor.length - 1)
      .split(",");
    colorPicker.value = rgbToHex(
      rgbArrayValues[0],
      rgbArrayValues[1],
      rgbArrayValues[2]
    );
  }, 500);
});

eraser.addEventListener("click", () => {
  clearInterval(colorChanger);
  colorPicker.value = "#ffffff";
  drawInGrid(3);
});

clear.addEventListener("click", () => {
  clearInterval(colorChanger);
  createGrid(size);
  colorPicker.value = "#000000";
  drawInGrid(1);
});

gridValue.addEventListener("input", () => {
  clearInterval(colorChanger);
  size = gridValue.value;
  createGrid();
  drawInGrid(1);
});
