console.log("Hi");

let num = Math.random() * 10 + 1;
let randomnum = Math.floor(num);

let attemp = 0;


console.log(randomnum);

function btnAddsumbit() {
    let txtInput = document.getElementById("inputText1").value;
    let output = document.getElementById("output");
    let submitbtn = document.getElementById("btnClose");
   
    attemp++;

    if(randomnum==txtInput){
        output.textContent="You win 😍";
        return;
    }

    if(attemp>=3){
        output.textContent="You've run out of attempts. Please try again.";
        return;
    }

    if(randomnum>txtInput){
        output.textContent="Your number is less 😒";
    }else if(randomnum<txtInput){
        output.textContent="Your number is higher 😊"
    }

}
