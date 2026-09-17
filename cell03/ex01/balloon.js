const colors = ["red", "green", "blue"];
let i = 0;

function nextColor() {
    i = (i + 1) % 3
    return colors[i];
}

function prevColor() {
    i = (i - 1 + 3) % 3;
    return colors[i];
}

function increaseBalloon() {
    const balloon = document.getElementById("balloon");
    balloon.style.height = (balloon.offsetHeight + 10) + "px";
    balloon.style.width  = (balloon.offsetWidth + 10) + "px";

    if (balloon.style.width > 420 + "px" || balloon.style.height > 420 + "px") {
        balloon.style.height = 200 + "px";
        balloon.style.width = 200 + "px";
        balloon.style.backgroundColor = "red";
    }
    balloon.style.backgroundColor = nextColor();
}

function shrinkByleave () {
    const balloon = document.getElementById("balloon");
    if (balloon.style.width > 200 + "px" || balloon.style.height > 200 + "px") {
        balloon.style.height = (balloon.offsetHeight - 5) + "px";
        balloon.style.width  = (balloon.offsetWidth - 5) + "px";
    }
    balloon.style.backgroundColor = prevColor();
}

