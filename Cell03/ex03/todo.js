const list = document.getElementById("ft_list");
const btnNew = document.getElementById("new");

function addTodo(text, onTop) {
  const box = document.createElement("div");
  box.className = "todo";
  box.textContent = text;

  box.addEventListener("click", function () {
    if (confirm("อยากลบ todo นี้บ่อ้าย?")) {
      box.remove();
      saveTodos();
    }
  });

  if (onTop) {
    list.prepend(box);
  } else {
    list.appendChild(box);
  }
}

btnNew.addEventListener("click", function () {
  const text = prompt("Enter a new TODO:");
  if (text != null && text.trim() != "") {
    addTodo(text.trim(), true);
    saveTodos();
  }
});

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie =
    name +
    "=" +
    encodeURIComponent(value) +
    "; expires=" +
    d.toUTCString() +
    "; path=/";
}

function getCookie(name) {
  const parts = document.cookie.split("; ");
  for (let i = 0; i < parts.length; i++) {
    const pair = parts[i].split("=");
    if (pair[0] === name) {
      return decodeURIComponent(pair[1]);
    }
  }
  return null;
}

function saveTodos() {
  const todos = [];
  const boxes = list.querySelectorAll(".todo");
  for (let i = 0; i < boxes.length; i++) {
    todos.push(boxes[i].textContent);
  }
  setCookie("todos", JSON.stringify(todos), 365);
}

const saved = getCookie("todos");
if (saved !== null) {
  const todos = JSON.parse(saved);
  for (let i = 0; i < todos.length; i++) {
    addTodo(todos[i], false);
  }
}
