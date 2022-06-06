const a1 = document.querySelector(".a1");
const a2 = document.querySelector(".a2");
const a3 = document.querySelector(".a3");
const box1 = document.getElementById("image1");
const box2 = document.getElementById("image2");
const box3 = document.getElementById("image3");
let i = 0;
a1.onclick = function () {
    box1.style.opacity = 1;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    a1.style.backgroundColor = "red";
    a2.style.backgroundColor = "white";
    a3.style.backgroundColor = "white";
    i = 0;
}
a2.onclick = function () {
    box1.style.opacity = 0;
    box2.style.opacity = 1;
    box3.style.opacity = 0;
    a1.style.backgroundColor = "white";
    a2.style.backgroundColor = "red";
    a3.style.backgroundColor = "white";
    i = 1;
}
a3.onclick = function () {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 1;
    a1.style.backgroundColor = "white";
    a2.style.backgroundColor = "white";
    a3.style.backgroundColor = "red";
    i = 2;
}
document.addEventListener("keydown", e => {
    if (e.keyCode == 37) {
        right();
    }
});
document.addEventListener("keydown", e => {
    if (e.keyCode == 39 ) {
        right();
    }
});
function left() {
    if (i == 0) {
        box1.style.opacity = 1;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        a1.style.backgroundColor = "red";
        a2.style.backgroundColor = "white";
        a3.style.backgroundColor = "white";
        i++
    }
    else if (i == 1) {
        box1.style.opacity = 0;
        box2.style.opacity = 1;
        box3.style.opacity = 0;
        a1.style.backgroundColor = "white";
        a2.style.backgroundColor = "red";
        a3.style.backgroundColor = "white";
        i++
    }
    else if (i == 2) {  
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 1;
        a1.style.backgroundColor = "white";
        a2.style.backgroundColor = "white";
        a3.style.backgroundColor = "red";
        i=0;
    }
}
function right() {
    if (i == 0) {
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 1;
        a1.style.backgroundColor = "white";
        a2.style.backgroundColor = "white";
        a3.style.backgroundColor = "red";
        i++
    }
    else if (i == 1) {
        box1.style.opacity = 0;
        box2.style.opacity = 1;
        box3.style.opacity = 0;
        a1.style.backgroundColor = "white";
        a2.style.backgroundColor = "red";
        a3.style.backgroundColor = "white";
        i++
    }
    else if (i == 2) {
        box1.style.opacity = 1;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        a1.style.backgroundColor = "red";
        a2.style.backgroundColor = "white";
        a3.style.backgroundColor = "white";
        i=0;
    }
}