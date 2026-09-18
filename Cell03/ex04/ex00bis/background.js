$(document).ready(function() {
    $("#changeColorBtn").click(function() {
        $("body").css("background-color", getRandomColor());
    });
});

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}
