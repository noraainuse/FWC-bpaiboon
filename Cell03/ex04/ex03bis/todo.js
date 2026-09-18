$(document).ready(function() {
    const $list = $("#ft_list");

    function setCookie(name, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + encodeURIComponent(value)
                        + "; expires=" + d.toUTCString()
                        + "; path=/";
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
        $list.find(".todo").each(function() {
            todos.push($(this).text());
        });
        setCookie("todos", JSON.stringify(todos), 365);
    }

    function addTodo(text, onTop) {
        const $box = $("<div>").addClass("todo").text(text);
        $box.click(function() {
            if (confirm("อยากลบ todo นี้บ่อ้าย?")) {
                $box.remove();
                saveTodos();
            }
        });
        if (onTop) {
            $list.prepend($box);
        } else {
            $list.append($box);
        }
    }

    $("#new").click(function() {
        const text = prompt("Enter a new TODO:");
        if (text != null && text.trim() != "") {
            addTodo(text.trim(), true);
            saveTodos();
        }
    });

    const saved = getCookie("todos");
    if (saved !== null) {
        try {
            const todos = JSON.parse(saved);
            $.each(todos, function(index, todo) {
                addTodo(todo, false);
            });
        } catch (e) {}
    }
});
