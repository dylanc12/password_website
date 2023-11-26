var breakCounter;

window.onload=function(){
    var mb = document.getElementById("input");
    mb.addEventListener("keyup", update);
}

function update(){

    const inputValue = document.getElementById("input").value;
    
    updateCharCol(inputValue);

    updateSpecCol(inputValue);

    updateNumCol(inputValue);

    updateSpaceCol(inputValue);

    if(inputValue.length == 0){
        document.getElementById("char").style.color = "black";
        document.getElementById("spec").style.color = "black";
        document.getElementById("num").style.color = "black";
        document.getElementById("space").style.color = "black";
    }
}

function updateCharCol(inp){
    var charCol = document.getElementById("char");
    if(inp.length >= 8){
        charCol.style.color = "green";
    } else {
        charCol.style.color = "black";
    } 
}

function updateSpecCol(inp){    
    const special = "!@#$%^&*()_-.><?~";
    var specCol = document.getElementById("spec");

    for(let i = 0; i < inp.length; i++){
        breakCounter = 0;
        for(let j = 0; j < special.length; j++){
            if(inp.charAt(i) == special.charAt(j)){
                specCol.style.color = "green";
                breakCounter = 1;
                break;
            } else {
                specCol.style.color = "black";
            }
        }
        if(breakCounter == 1){
            break;
        }
    }
}

function updateNumCol(inp){
    const numbers = "0123456789";
    var numCol = document.getElementById("num");

    for(let i = 0; i < inp.length; i++){
        breakCounter = 0;
        for(let j = 0; j < numbers.length; j++){
            if(inp.charAt(i) == numbers.charAt(j)){
                numCol.style.color = "green";
                breakCounter = 1;
                break;
            } else {
                numCol.style.color = "black";
            }
        }
        if(breakCounter == 1){
            break;
        }
    }
}

function updateSpaceCol(inp){
    var spaceCol = document.getElementById("space");

    for(let i = 0; i < inp.length; i++){
        if(inp.charAt(i) == ' '){
            spaceCol.style.color = "red";
            break;
        } else {
            spaceCol.style.color = "green";
        }
    }
}