const buttons = document.querySelectorAll(".value");
const result = document.querySelector(".result");
const clear = document.querySelector(".clear");
const del = document.querySelector(".del");
const equals = document.querySelector(".operation");
let isresultshown = false;

/*value button functions*/

buttons.forEach(button => {
    button.addEventListener("click", () => {
        result.innerText += button.innerText; 
    })
    button.addEventListener("mouseover",() => {
    button.style.border = "3px solid #0492c2";
})
    button.addEventListener("mouseout",() => {
    button.style.border = "";
})
})

/*AC button functions*/

clear.addEventListener("click",() => {
    result.innerText = "";
})

/*delete button functions*/

del.addEventListener("click",() => {
    if(isresultshown){
        isresultshown = false;
        result.innerText = "";
    }
    else{
    result.innerText = result.innerText.slice(0,-1);
    isresultshown = false;
    }
})

/*equal button functions*/

equals.addEventListener("click",() => {
    try{
        result.innerText = eval(result.innerText);
        isresultshown = true;
    }
    catch(err){
        result.innerText = "Syntax error";
        isresultshown = true;
    }
})

/* equal button*/

equals.addEventListener("mouseover",() => {
    equals.style.border = "3px solid #ff2400"
})
equals.addEventListener("mouseout",() => {
    equals.style.border = "";
})

/* AC button*/

clear.addEventListener("mouseover",() => {
    clear.style.border = "3px solid black"
})
clear.addEventListener("mouseout",() => {
    clear.style.border = "";
})

/* delete button*/

del.addEventListener("mouseover",() => {
    del.style.border = "3px solid black"
})
del.addEventListener("mouseout",() => {
    del.style.border = "";
})

/*result area*/

result.addEventListener("mouseover",() => {
    result.style.border = "3px solid black"
})
result.addEventListener("mouseout",() => {
    result.style.border = "";
})