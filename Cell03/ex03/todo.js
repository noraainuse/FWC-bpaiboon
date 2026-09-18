const list = document.getElementById('ft_list');
const btnNew = document.getElementById("new");

btnNew.addEventListener("click", function () {
        const text = prompt("Enter a new TODO:");
        
        if (text != null && text.trim() != "") {
            addTodo(text.trim(), true);
        }
});

function addTodo(text, onTop) {
    const box = document.createElement("div");
    box.className = "todo";
    box.textContent = text;

    box.addEventListener("click", function () {
            if (confirm("อยากลบ todo นี้บ่อ้าย?")) {
                box.remove();
            }
    });
    
    if (onTop) {
        list.prepend(box);
    } else {
        list.appendChild(box);
    }
};

function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value) + "; path=/";
}



