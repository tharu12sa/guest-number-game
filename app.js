console.log("Hi");

let num = Math.random() * 10 + 1;
let randomnum = Math.floor(num);

let attemp = 0;


console.log(randomnum);

function btnAddsumbit() {
    let txtInput = document.getElementById("inputText1").value;
    attemp++;

     if (attemp > 3) {
        output.textContent = "Game Over ❌";
        return;
    }
        
    if (randomnum < txtInput) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: "<a href=\"#\">Why do I have this issue?</a>"
        });
        let output = document.getElementById("output");
        output.textContent = "Your number is higher 😊"
    } else if (randomnum > txtInput) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: "<a href=\"#\">Why do I have this issue?</a>"
        });
        let output = document.getElementById("output");
        output.textContent = "Your number is less 😒"

    } else {
        let output = document.getElementById("output");
        output.textContent = "you win 🎉"
        return;
    }


   
}
