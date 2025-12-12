let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");

let exp = "";

// Factorial function
function factorial(n){
    if(n < 0) return "Error";
    if(n === 0 || n === 1) return 1;
    let f = 1;
    for(let i = 2; i <= n; i++){
        f *= i;
    }
    return f;
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let value = btn.innerText;

        if(value === "="){
            try{
                exp = eval(exp);
                screen.value = exp;
            }catch{
                screen.value = "Error";
                exp = "";
            }
        }
        
        else if(value === "AC"){
            exp = "";
            screen.value = "";
        }

        else if(value === "DEL"){
            exp = exp.slice(0, -1);
            screen.value = exp;
        }

        // SCIENTIFIC FUNCTIONS
        else if(value === "sin"){
            exp = Math.sin(eval(exp));
            screen.value = exp;
        }

        else if(value === "cos"){
            exp = Math.cos(eval(exp));
            screen.value = exp;
        }

        else if(value === "tan"){
            exp = Math.tan(eval(exp));
            screen.value = exp;
        }

        else if(value === "√"){
            exp = Math.sqrt(eval(exp));
            screen.value = exp;
        }

        else if(value === "x²"){
            exp = Math.pow(eval(exp), 2);
            screen.value = exp;
        }

        else if(value === "x³"){
            exp = Math.pow(eval(exp), 3);
            screen.value = exp;
        }

        else if(value === "log"){
            exp = Math.log10(eval(exp));
            screen.value = exp;
        }

        else if(value === "ln"){
            exp = Math.log(eval(exp));
            screen.value = exp;
        }

        else if(value === "π"){
            exp += Math.PI;
            screen.value = exp;
        }

        else if(value === "e"){
            exp += Math.E;
            screen.value = exp;
        }

        else if(value === "|x|"){
            exp = Math.abs(eval(exp));
            screen.value = exp;
        }

        else if(value === "1/x"){
            exp = 1 / eval(exp);
            screen.value = exp;
        }

        else if(value === "^"){
            exp += "**"; // JS power operator
            screen.value = exp;
        }

        else if(value === "!"){
            exp = factorial(eval(exp));
            screen.value = exp;
        }

        else{
            exp += value;
            screen.value = exp;
        }
    });
});
