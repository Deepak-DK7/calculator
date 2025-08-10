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

function delLast(){
    display.value = display.value.slice(0,-1);
}


document.addEventListener('keydown', (e) => {

    const key = e.key;

    if(!isNaN(key) || key === "."){
        appendToDisplay(key)
    }
    else if(["+", "-", "*", "/", "%"].includes(key)){
        appendToDisplay(key);
    }
    else  if(key === "Backspace"){
        e.preventDefault;
        delLast();
    }
    else if(key == "Delete") {
        clearDisplay();
    }
    else if(key ==+ "Enter"){
        e.preventDefault();
        calculateEq();
    }
})





