let input = document.querySelector("#textArea");
let buttons = document.querySelectorAll(".button");

buttons.forEach( (button) => {
    button.addEventListener("click",()=>{
        if(button.innerText==="="){
            calculate();
        }
        else if(button.innerText==="⟲"){
            reload();
        }
        else if(button.innerText==="AC"){
            input.value="";
        }
        else if(button.innerText==="2nd" || button.innerText==="deg" || button.innerText==="sin" || button.innerText==="cos" || button.innerText==="ten" || button.innerText==="x^y" || button.innerText==="lg" || button.innerText==="ln" || button.innerText==="(" || button.innerText===")" || button.innerText==="√x" || button.innerText==="←" || button.innerText==="%" || button.innerText==="x!" || button.innerText==="1/x" || button.innerText==="π" || button.innerText==="e"){
            alert("notDefined");
        }
        else{input.value+=button.innerText;}
    });
});


function calculate(){
    input.value=eval(input.value);
}

function reload(){
    location.reload();
}
