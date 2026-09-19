const message = "There's no limit to the larp!";
const target = document.getElementById("tagline-text");
let index = 0;

function type() {
    if (index < message.length) {
        target.textContent += message[index];
        index++;
        setTimeout(type, 70);
    } else {
        const closeQuote = document.createElement("span");
        closeQuote.className = "prompt";
        closeQuote.textContent = '"';
        target.after(closeQuote);
    }
}

type();