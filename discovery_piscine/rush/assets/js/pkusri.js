function typeText(element, text, speed) {
    let i = 0;
    element.textContent = "";
    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

window.addEventListener("load", function () {
    const smallTitle = document.getElementById("typing-small");
    const name = document.getElementById("typing-name");
    const job = document.getElementById("typing-job");
    typeText(smallTitle, "Hi, I'M", 100);
    setTimeout(function () {
        typeText(name, "Punnawit Kusri", 100);
    }, 800);
    setTimeout(function () {
        typeText(job, "KMITL Student", 100);
    }, 2200);
});