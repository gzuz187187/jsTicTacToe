const sourceX = "./images/x_grey.png";
const sourceO = "./images/o3.png";

let actSource = "";
let pIsX = "";
let gameStatus = "";    // either w (win), d (draw) or l (lose); X is the player that is used to calculate the game status

let rnd = Math.floor(Math.random() * 2);

if (rnd == 0) {
    actSource = sourceX;
    pIsX = true;
} else {
    actSource = sourceO;
    pIsX = false;
}

let cell1 = document.querySelector("[data-cell1]");
let imageCell1 = document.querySelector("[image-cell1]");
let cell2 = document.querySelector("[data-cell2]");
let imageCell2 = document.querySelector("[image-cell2]");
let cell3 = document.querySelector("[data-cell3]");
let imageCell3 = document.querySelector("[image-cell3]");
let cell4 = document.querySelector("[data-cell4]");
let imageCell4 = document.querySelector("[image-cell4]");
let cell5 = document.querySelector("[data-cell5]");
let imageCell5 = document.querySelector("[image-cell5]");
let cell6 = document.querySelector("[data-cell6]");
let imageCell6 = document.querySelector("[image-cell6]");
let cell7 = document.querySelector("[data-cell7]");
let imageCell7 = document.querySelector("[image-cell7]");
let cell8 = document.querySelector("[data-cell8]");
let imageCell8 = document.querySelector("[image-cell8]");
let cell9 = document.querySelector("[data-cell9]");
let imageCell9 = document.querySelector("[image-cell9]");

function changePlayer() {     // checks active source and active player
    if (pIsX == true) {
        pIsX = false;
        actSource = sourceO;
    } else if (pIsX == false) {
        pIsX = true;
        actSource = sourceX;
    }
}

function checkForGameEnd() {
    // cell1, cell2, cell3
    if (imageCell1.src == imageCell2.src && imageCell2.src == imageCell3.src && imageCell1.src == imageCell3.src && Boolean(imageCell1.src) != false && Boolean(imageCell2.src) != false && Boolean(imageCell3.src) != false) {
        if (pIsX == true) {
            gameStatus = "w";
        } else {
            gameStatus = "l";
        }
    }

    // cell4, cell5, cell6
    if (imageCell4.src == imageCell5.src && imageCell5.src == imageCell6.src && imageCell4.src == imageCell6.src && Boolean(imageCell4.src) != false && Boolean(imageCell5.src) != false && Boolean(imageCell6.src) != false) {
        if (pIsX == true) {
            gameStatus = "w";
        } else {
            gameStatus = "l";
        }
    }

    // cell7, cell8, cell9
    if (imageCell7.src == imageCell8.src && imageCell8.src == imageCell9.src && imageCell7.src == imageCell9.src && Boolean(imageCell7.src) != false && Boolean(imageCell8.src) != false && Boolean(imageCell9.src) != false) {
        if (pIsX == true) {
            gameStatus = "w";
        } else {
            gameStatus = "l";
        }
    }

    // cell1, cell4, cell7
    if (imageCell1.src == imageCell4.src && imageCell4.src == imageCell7.src && imageCell1.src == imageCell7.src && Boolean(imageCell1.src) != false && Boolean(imageCell4.src) != false && Boolean(imageCell7.src) != false) {
        if (pIsX == true) {
            gameStatus = "w";
        } else {
            gameStatus = "l";
        }
    }

    // cell2, cell5, cell8
    if (imageCell2.src == imageCell5.src && imageCell5.src == imageCell8.src && imageCell2.src == imageCell8.src && Boolean(imageCell2.src) != false && Boolean(imageCell5.src) != false && Boolean(imageCell8.src) != false) {
        if (pIsX == true) {
            gameStatus = "w";
        } else {
            gameStatus = "l";
        }
    }

    // cell3, cell6, cell9
    if (imageCell3.src == imageCell6.src && imageCell6.src == imageCell9.src && imageCell3.src == imageCell9.src && Boolean(imageCell3.src) != false && Boolean(imageCell6.src) != false && Boolean(imageCell9.src) != false) {
        if (pIsX == true) {
            gameStatus = "w";
        } else {
            gameStatus = "l";
        }
    }

    // cell1, cell5, cell9
    if (imageCell1.src == imageCell5.src && imageCell5.src == imageCell9.src && imageCell1.src == imageCell9.src && Boolean(imageCell1.src) != false && Boolean(imageCell5.src) != false && Boolean(imageCell9.src) != false) {
        if (pIsX == true) {
            gameStatus = "w";
        } else {
            gameStatus = "l";
        }
    }

    // cell3, cell5, cell7
    if (imageCell3.src == imageCell5.src && imageCell5.src == imageCell7.src && imageCell3.src == imageCell7.src && Boolean(imageCell3.src) != false && Boolean(imageCell5.src) != false && Boolean(imageCell7.src) != false) {
        if (pIsX == true) {
            gameStatus = "w";
        } else {
            gameStatus = "l";
        }
    }

    // all cells set --> draw
    if (Boolean(imageCell1.src) != false && Boolean(imageCell2.src) != false && Boolean(imageCell3.src) != false && Boolean(imageCell4.src) != false && Boolean(imageCell5.src) != false && Boolean(imageCell6.src) != false && Boolean(imageCell7.src) != false && Boolean(imageCell8.src) != false && Boolean(imageCell9.src) != false) {
        gameStatus = "d";
    }
}

function checkGameStatus() {
    if (gameStatus == "w") {
        alert("Player X wins!");
    } else if (gameStatus == "l") {
        alert("Player O wins!");
    } else if (gameStatus == "d") {
        alert("It's a draw!");
    }

    if (gameStatus) {
        window.location.href = "./landingPage.html";
    }
}

cell1.addEventListener("click", () => {
    if (Boolean(imageCell1.src) == false) {
        imageCell1.src = actSource;
        checkForGameEnd();
        checkGameStatus();
        changePlayer();
    }
});

cell2.addEventListener("click", () => {
    if (Boolean(imageCell2.src) == false) {
        imageCell2.src = actSource;
        checkForGameEnd();
        checkGameStatus();
        changePlayer();
    }
});

cell3.addEventListener("click", () => {
    if (Boolean(imageCell3.src) == false) {
        imageCell3.src = actSource;
        checkForGameEnd();
        checkGameStatus();
        changePlayer();
    }
});

cell4.addEventListener("click", () => {
    if (Boolean(imageCell4.src) == false) {
        imageCell4.src = actSource;
        checkForGameEnd();
        checkGameStatus();
        changePlayer();
    }
});

cell5.addEventListener("click", () => {
    if (Boolean(imageCell5.src) == false) {
        imageCell5.src = actSource;
        checkForGameEnd();
        checkGameStatus();
        changePlayer();
    }
});

cell6.addEventListener("click", () => {
    if (Boolean(imageCell6.src) == false) {
        imageCell6.src = actSource;
        checkForGameEnd();
        checkGameStatus();
        changePlayer();
    }
});

cell7.addEventListener("click", () => {
    if (Boolean(imageCell7.src) == false) {
        imageCell7.src = actSource;
        checkForGameEnd();
        checkGameStatus();
        changePlayer();
    }
});

cell8.addEventListener("click", () => {
    if (Boolean(imageCell8.src) == false) {
        imageCell8.src = actSource;
        checkForGameEnd();
        checkGameStatus();
        changePlayer();
    }
});

cell9.addEventListener("click", () => {
    if (Boolean(imageCell9.src) == false) {
        imageCell9.src = actSource;
        checkForGameEnd();
        checkGameStatus();
        changePlayer();
    }
});