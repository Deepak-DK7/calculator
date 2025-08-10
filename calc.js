const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay() {
    display.value = ""
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function del(){
    display.value = display.value.slice(0,-1);
}


document.addEventListener('keydown', (e) => {
    if(e.key == "Delete") {
        clearDisplay();
    }
    else if(e.key === "Enter"){
        calculate();
    } 
})



