console.log("does this work")
const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW"
];


let boxTop = 10;
let boxLeft = 50;
let currentColumn = 1;
let cellNumber = "";
let rowNumber = "";
let gamePiece = document.createElement("div");
let pacmanDirection = "rotate(0)"
gamePiece.classList.add("gamePiece");
gamePiece.id = "gamePiece";
const main = document.getElementById("main");
// update this comment to push






// for (let rowIndex = 0; rowIndex < map.length; rowIndex++) {
//     const row = map[rowIndex]
function createMaze() {
    map.forEach((row, rowIndex) => {
        // makes row
        let displayRow = document.createElement("div");
        displayRow.classList.add("row")
        let rowNumber = displayRow.dataset.cellY = rowIndex
        main.appendChild(displayRow);
        createCell(row, displayRow);
    })
}

function createCell(row, displayRow) {
    for (let cell of row) {
        //create Div's for each cell, append into rows
        let displayCell = document.createElement("div");
        displayCell.classList.add("cell");
        displayRow.appendChild(displayCell);
        displayCell.dataset.cellX = displayRow.childElementCount;
        displayCell.dataset.cellY = displayRow.dataset.cellY

        //    console.log(displayCell.dataset.cellX)

        assignCellType(cell, displayCell);
    }
}

function assignCellType(cell, displayCell) {
    switch (cell) {
        case cell = "W":
            displayCell.classList.add("wall");
            break;

        case cell = "S":
            displayCell.id = "startPosition";
            displayCell.appendChild(gamePiece);

            break;

        case cell = "F":
            displayCell.id = "endPosition";
            break;
    }
}

function moveCell(yOffset, xOffset) {
    const yMove = parseInt(gamePiece.parentElement.dataset.cellY) + yOffset;
    const xMove = parseInt(gamePiece.parentElement.dataset.cellX) + xOffset;
    const nextCell = document.querySelector('[data-cell-y="' + yMove + '"][data-cell-x="' + xMove + '"]');
    if (!nextCell.classList.contains("wall")) {
        nextCell.appendChild(gamePiece);
    }
}

//function checkmove(event) was originally used below, why do I need event???
function checkMove() {
    event.preventDefault();
    console.log('keydown event\n\n' + 'key: ' + event.key);

    //Functionality to use 'coordinate position' I subbed in variables for hard numbers below
    //document.querySelector('[data-cell-y="10"][data-cell-x="5"])
    //refactoring use global statements to prevent redundancies i.e moveX
    //moves box down 

    switch (event.key) {
        case "ArrowDown":
            moveCell(+1, 0);
            pacmanDirection = "rotate(90deg)";
            break;

        case "ArrowUp":
            moveCell(-1, 0);
            pacmanDirection = "rotate(-90deg)";
            break;

        case "ArrowRight":
            moveCell(0, +1)
            pacmanDirection = "rotate(0)";
            break;

        case "ArrowLeft":
            moveCell(0, -1);
            pacmanDirection = "rotate(180deg)";
            break;

    }
    document.getElementById("gamePiece").style.top = boxTop + "px";
    document.getElementById("gamePiece").style.left = boxLeft + "px";
    document.getElementById("gamePiece").style.transform = pacmanDirection;
}
//original below, compare to above
    // if (keyName === "ArrowDown") {
    //     //move down
    //     // console.log("cellY:", gamePiece.parentElement.dataset.cellY)
    //     // console.log("cellX:", gamePiece.parentElement.dataset.cellX)
    //     // let moveDown = parseInt(gamePiece.parentElement.dataset.cellY) + 1;
    //     // let currentX = gamePiece.parentElement.dataset.cellX;
    //     // //checks if classname is only cell, in this case this works, also could do a 'does not contain' className.contain = 
    //     // if (document.querySelector('[data-cell-y="' + moveDown + '"][data-cell-x="' + currentX + '"]').className === "cell") {
    //     //     document.querySelector('[data-cell-y="' + moveDown + '"][data-cell-x="' + currentX + '"]').appendChild(gamePiece);
    //     // }
    //     moveCell(+1, 0);
    //     pacmanDirection = "rotate(90deg)";
    // }

    // //moves box up
    // if (keyName === "ArrowUp") {
    //     // console.log("cellY:", gamePiece.parentElement.dataset.cellY)
    //     // console.log("cellX:", gamePiece.parentElement.dataset.cellX)
    //     // let moveUp = parseInt(gamePiece.parentElement.dataset.cellY) - 1;
    //     // let currentX = gamePiece.parentElement.dataset.cellX;
    //     // if (document.querySelector('[data-cell-y="' + moveUp + '"][data-cell-x="' + currentX + '"]').className === "cell") {
    //     //     document.querySelector('[data-cell-y="' + moveUp + '"][data-cell-x="' + currentX + '"]').appendChild(gamePiece);
    //     // }
    //     moveCell(-1, 0);
    //     pacmanDirection = "rotate(-90deg)";
    // }

    // //moves box right
    // if (keyName === "ArrowRight") {
    //     //this is how to get parent element id
    //     // console.log("cellY:", gamePiece.parentElement.dataset.cellY);
    //     //console.log("cellX:", gamePiece.parentElement.dataset.cellX);
    //     // let moveRight = parseInt(gamePiece.parentElement.dataset.cellX) + 1;
    //     // let currentY = gamePiece.parentElement.dataset.cellY;
    //     // if (document.querySelector('[data-cell-y="' + currentY + '"][data-cell-x="' + moveRight + '"]').className === ("cell")) {
    //     //     //  console.log(document.querySelector('[data-cell-y="9"][data-cell-x="' + moveRight + '"]'));
    //     //     document.querySelector('[data-cell-y="' + currentY + '"][data-cell-x="' + moveRight + '"]').appendChild(gamePiece);
    //     // }
    //     moveCell(0, +1)
    //     pacmanDirection = "rotate(0)";
    // }

    // if (keyName === "ArrowLeft") {
    //     // console.log("cellY:", gamePiece.parentElement.dataset.cellY);
    //     // console.log("cellX:", gamePiece.parentElement.dataset.cellX);
    //     // let moveLeft = parseInt(gamePiece.parentElement.dataset.cellX) - 1;
    //     // let currentY = gamePiece.parentElement.dataset.cellY;
    //     // if (document.querySelector('[data-cell-y="' + currentY + '"][data-cell-x="' + moveLeft + '"]').className === "cell") {
    //     //     document.querySelector('[data-cell-y="' + currentY + '"][data-cell-x="' + moveLeft + '"]').appendChild(gamePiece);
    //     // }
    //     moveCell(0, -1);
    //     pacmanDirection = "rotate(180deg)";
    // }

    



function checkWin(event) {
    if (document.getElementById("endPosition").childElementCount === 1) {
        alert("You win")
    }
}

createMaze()
document.addEventListener('keydown', checkMove)
document.addEventListener('keyup', checkWin)
