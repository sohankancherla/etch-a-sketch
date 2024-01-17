function randomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
}

function randomColor() {
    const r = randomNumber(255);
    const g = randomNumber(255);
    const b = randomNumber(255);
    return `rgb(${r},${g},${b})`;
}

function parseColor(color) {
    const regex = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
    const match = regex.exec(color);
    return match;
}

function shade(value, dark) {
    let newValue = 0;
    if (dark) {
        newValue = value - 25
        if (newValue < 0) {
            newValue = 0;
        }  
    }
    else {
        newValue = value + 25
        if (newValue > 255) {
            newValue = 255;
        } 
    }
    return newValue
}

function darkenColor(color) {
    const match = parseColor(color);
    const r = parseInt(match[1]);
    const g = parseInt(match[2]);
    const b = parseInt(match[3]);
    return `rgb(${shade(r, true)},${shade(g, true)},${shade(b, true)})`;
}

function lightenColor(color) {
    const match = parseColor(color);
    const r = parseInt(match[1]);
    const g = parseInt(match[2]);
    const b = parseInt(match[3]);
    return `rgb(${shade(r, false)},${shade(g, false)},${shade(b, false)})`;
}

function clickedButton(button_num) {
    let newTool = 5;
    for (let i=0; i<5; i++) {
        if (i === button_num && i !== tool) {
            newTool = i;
            buttons[i].style.backgroundColor = "#121212";
            buttons[i].style.border = "2px solid #ffffff";
            buttons[i].style.color = "#ffffff";
        }
        else {
            buttons[i].style.backgroundColor = "#ffffff";
            buttons[i].style.border = "2px solid #121212";
            buttons[i].style.color = "#121212";
        }
    }
    tool = newTool;
}

function hoveredButton(button_num) {
    if (tool === button_num) {
        buttons[button_num].style.backgroundColor = "#404040";
    }
    else {
        buttons[button_num].style.backgroundColor = "#b1b1b1";
    }
}

function exitButton(button_num) {
    if (tool === button_num) {
        buttons[button_num].style.backgroundColor = "#121212";
    }
    else {
        buttons[button_num].style.backgroundColor = "#ffffff";
    }
}

function clearGrid() {
    columns = canvas.childNodes;
    for (let i=0; i<16; i++) {
        squares = columns[i].childNodes;
        for (let j=0; j<16; j++) {
            squares[j].style.backgroundColor = "#ffffff";
        }
    }
}

function toggleGridLines(toggle) {
    columns = canvas.childNodes;
    for (let i=0; i<16; i++) {
        squares = columns[i].childNodes;
        for (let j=0; j<16; j++) {
            squares[j].style.border = toggle ? "0.5px solid grey": "none";
        }
    }
}

//pen: 0, rainbow: 1, darken: 2, lighten: 3, eraser: 4, none: 5
let tool = 5;
let toggle_grid = false;
const canvas = document.querySelector(".canvas");
const color = document.querySelector("#color-picker");

for (let i=0; i<16; i++) {
    const column = document.createElement("div")
    column.style.flex = 1;
    column.style.display = "flex";
    for (let j=0; j<16; j++) {
        const square = document.createElement("div");
        square.style.backgroundColor = "#ffffff";
        square.style.flex = 1;
        column.appendChild(square);

        square.addEventListener("mouseover", () => {
            if (tool === 0) {
                square.style.backgroundColor = color.value;
            }
            else if (tool === 1) {
                square.style.backgroundColor = randomColor();
            }
            else if (tool === 2) {
                square.style.backgroundColor = darkenColor(square.style.backgroundColor);
            }
            else if (tool === 3) {
                square.style.backgroundColor = lightenColor(square.style.backgroundColor);
            }
            else if (tool === 4) {
                square.style.backgroundColor = "#ffffff";
            }
        })
    }
    canvas.appendChild(column);
}

const buttons = document.querySelectorAll("button");
const pen = document.querySelector("#pen-btn");
const rainbow = document.querySelector("#rainbow-btn");
const darken = document.querySelector("#darken-btn");
const ligthen = document.querySelector("#lighten-btn");
const erase = document.querySelector("#erase-btn");
const clear = document.querySelector("#clear-btn");
const toggle = document.querySelector("#grid-btn");

pen.addEventListener("click", () => clickedButton(0));
pen.addEventListener("mouseover", () => hoveredButton(0));
pen.addEventListener("mouseout", () => exitButton(0));
rainbow.addEventListener("click", () => clickedButton(1));
rainbow.addEventListener("mouseover", () => hoveredButton(1));
rainbow.addEventListener("mouseout", () => exitButton(1));
darken.addEventListener("click", () => clickedButton(2));
darken.addEventListener("mouseover", () => hoveredButton(2));
darken.addEventListener("mouseout", () => exitButton(2));
ligthen.addEventListener("click", () => clickedButton(3));
ligthen.addEventListener("mouseover", () => hoveredButton(3));
ligthen.addEventListener("mouseout", () => exitButton(3));
erase.addEventListener("click", () => clickedButton(4));
erase.addEventListener("mouseover", () => hoveredButton(4));
erase.addEventListener("mouseout", () => exitButton(4));
clear.addEventListener("click", () => clearGrid());
clear.addEventListener("mouseover", () => clear.style.backgroundColor = "#b1b1b1");
clear.addEventListener("mouseout", () => clear.style.backgroundColor = "#ffffff");
toggle.addEventListener("click", () => {
    if (toggle_grid) {
        toggle.style.backgroundColor = "#ffffff";
        toggle.style.border = "2px solid #121212";
        toggle.style.color = "#121212";
        toggleGridLines(false);
        toggle_grid = false;
    }
    else {
        toggle.style.backgroundColor = "#121212";
        toggle.style.border = "2px solid #ffffff";
        toggle.style.color = "#ffffff"; 
        toggleGridLines(true);
        toggle_grid = true;
    }
});
toggle.addEventListener("mouseover", () => {
    if (toggle_grid) {
        toggle.style.backgroundColor = "#404040";
    }
    else {
        toggle.style.backgroundColor = "#b1b1b1";
    }
});
toggle.addEventListener("mouseout", () => {
    if (toggle_grid) {
        toggle.style.backgroundColor = "#121212";
    }
    else {
        toggle.style.backgroundColor = "#ffffff";
    }
});

pen.click();