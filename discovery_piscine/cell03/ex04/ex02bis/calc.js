$(document).ready(function() {
    $("#submit").click(function() {
        const left = $("#left").val();
        const right = $("#right").val();
        const op = $("#op").val();

        const leftNum = Number(left);
        const rightNum = Number(right);

        if (!Number.isInteger(leftNum) || !Number.isInteger(rightNum) || leftNum < 0 || rightNum < 0) {
            alert("Error :(");
            console.log("Error :(");
            return;
        }

        let result;
        if (op === "addition") {
            result = leftNum + rightNum;
        } else if (op === "subtraction") {
            result = leftNum - rightNum;
        } else if (op === "multiplication") {
            result = leftNum * rightNum;
        } else if (op === "division") {
            if (rightNum === 0) {
                alert("It's over 9000!");
                console.log("It's over 9000!");
                return;
            }
            result = leftNum / rightNum;
        } else if (op === "modulo") {
            if (rightNum === 0) {
                alert("It's over 9000!");
                console.log("It's over 9000!");
                return;
            }
            result = leftNum % rightNum;
        }

        alert(result);
        console.log(result);
    });

    setInterval(function() {
        alert("Please, use me...");
    }, 30000);
});
