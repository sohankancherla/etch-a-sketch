const canvas = document.querySelector(".canvas")

for (let i=0; i<16; i++) {
    const column = document.createElement("div")
    column.style.flex = 1;
    column.style.display = "flex";
    for (let j=0; j<16; j++) {
        const square = document.createElement("div");
        square.style.backgroundColor = "#ffffff";
        square.style.flex = 1;
        square.style.border = "0.5px solid darkgrey";
        column.appendChild(square);
    }
    canvas.appendChild(column);
}