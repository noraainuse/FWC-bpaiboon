const colors = ["red", "green", "blue"];
let i = 0;

function nextColor() {
    i = (i + 1) % 3;
    return colors[i];
}

function prevColor() {
    i = (i - 1 + 3) % 3;
    return colors[i];
}

$(document).ready(function() {
    $("#balloon").click(function() {
        let size = $(this).width() + 10;
        if (size > 420) {
            size = 200;
            i = 0;
            $(this).css({
                "width": size + "px",
                "height": size + "px",
                "background-color": colors[i]
            });
        } else {
            $(this).css({
                "width": size + "px",
                "height": size + "px",
                "background-color": nextColor()
            });
        }
    });

    $("#balloon").mouseleave(function() {
        let size = $(this).width();
        if (size > 200) {
            size = size - 5;
            $(this).css({
                "width": size + "px",
                "height": size + "px"
            });
        }
        $(this).css("background-color", prevColor());
    });
});
