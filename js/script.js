//pen: 0, rainbow: 1, darken: 2, lighten: 3, eraser: 4, none: 5
let tool = 5;
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
        })
    }
    canvas.appendChild(column);
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

const buttons = document.querySelectorAll("button");
const pen = document.querySelector("#pen-btn");
const rainbow = document.querySelector("#rainbow-btn");
const darken = document.querySelector("#darken-btn");
const ligthen = document.querySelector("#lighten-btn");
const erase = document.querySelector("#erase-btn");

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

pen.click();