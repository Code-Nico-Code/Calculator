const display = document.getElementById("display");




function appendToDisplay(input){

    if (display.value === "Error") {
        display.value = "";  // Clear the error message
    }

    if (display.value.length < 15) {
        display.value += input;
    }

}

function clearDisplay(){
    display.value="";

}
function calculate(){
    try{
    display.value=eval(display.value);
}
catch(error){
    display.value="Error";
}
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

document.addEventListener("keydown", function(e){
    e.preventDefault();
    if(e.key>='0' && e.key<='9'){
        appendToDisplay(e.key);
    }
    if(e.key==='Enter'){
        calculate();
    }

    if (['+', '-', '*', '/'].includes(e.key)) {
        appendToDisplay(e.key);
    }
    if (e.key === 'Backspace') {
        backspace();
    }
    if (e.key === 'Escape') {
        clearDisplay();
    }
});