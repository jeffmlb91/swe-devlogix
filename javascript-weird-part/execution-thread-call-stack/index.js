function first() {
    console.log("first function called");
    second();
}

function second() {
    console.log("second function called");
    third()
}

function third(){
    console.log("third function called");
}

first();