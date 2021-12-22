const sourceX = "./images/x.png";
const sourceO = "./images/o2.png";
let actSource = sourceX;
let playing = true;
let pIsX = true;

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

function initField() {
    ;
}

function checkActSource() {     // checks active source and active player
    if (pIsX == true) {
        pIsX = false;
        actSource = sourceO;
    } else if (pIsX == false) {
        pIsX = true;
        actSource = sourceX;
    }
}

cell1.addEventListener("click", () => {
    if (Boolean(imageCell1.src) == false) {
        imageCell1.src = actSource;
        checkActSource();
    }
});

cell2.addEventListener("click", () => {
    if (Boolean(imageCell2.src) == false) {
        imageCell2.src = actSource;
        checkActSource();
    }
});

cell3.addEventListener("click", () => {
    if (Boolean(imageCell3.src) == false) {
        imageCell3.src = actSource;
        checkActSource();
    }
});

cell4.addEventListener("click", () => {
    if (Boolean(imageCell4.src) == false) {
        imageCell4.src = actSource;
        checkActSource();
    }
});

cell5.addEventListener("click", () => {
    if (Boolean(imageCell5.src) == false) {
        imageCell5.src = actSource;
        checkActSource();
    }
});

cell6.addEventListener("click", () => {
    if (Boolean(imageCell6.src) == false) {
        imageCell6.src = actSource;
        checkActSource();
    }
});

cell7.addEventListener("click", () => {
    if (Boolean(imageCell7.src) == false) {
        imageCell7.src = actSource;
        checkActSource();
    }
});

cell8.addEventListener("click", () => {
    if (Boolean(imageCell8.src) == false) {
        imageCell8.src = actSource;
        checkActSource();
    }
});

cell9.addEventListener("click", () => {
    if (Boolean(imageCell9.src) == false) {
        imageCell9.src = actSource;
        checkActSource();
    }
});