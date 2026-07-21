console.log("Hi");

let num = Math.random() * 10 + 1;
let randomnum = Math.floor(num);

let attemp = 0;


console.log(randomnum);

function btnAddsumbit() {
    let txtInput = document.getElementById("inputText1").value;
    let output = document.getElementById("output");
    let submitBtn = document.getElementById("btnClose");

    attemp++;

    if (randomnum == txtInput) {
        Swal.fire({
            title: "Custom width, padding, color, background.",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `
        });
        output.textContent = "You win 😍";
        submitBtn.disabled = true;
        return;
    }

    if (attemp >= 3) {
        output.textContent = "You've run out of attempts. Please try again.";
        submitBtn.disabled = true;
        return;
    }

    if (randomnum > txtInput) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Your number is less 😒",
            footer: "<a href=\"#\">Why do I have this issue?</a>"
        });
        output.textContent = "Your number is less 😒";

    } else if (randomnum < txtInput) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Your number is higher 😊",
            footer: "<a href=\"#\">Why do I have this issue?</a>"
        });
        output.textContent = "Your number is higher 😊"
    }

}
