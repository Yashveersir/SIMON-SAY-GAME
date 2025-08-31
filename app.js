let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let btn = document.querySelector(".btn");
let h4 = document.querySelector("h4");

let startBtn = document.querySelector("button");

startBtn.addEventListener("click", () => {
    if(started == false){
        started = true;
    } //first step completed game started
    levelUp();

})


document.addEventListener("keypress", () => {
    if(started == false){
        started = true;
    } //first step completed game started
    levelUp();

})

//game flash
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}
//flash when user click
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250);
}

//level up 
function levelUp(){
    userSeq = []; //MAKE USER SEQUENCE EMPTY
    level++;
    h4.innerText = `Level ${level}`;

    //rendom button choose
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    //storing game color sequence
    gameSeq.push(randColor);
    gameFlash(randBtn);
}

function checkAns(idx) {

    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h4.innerHTML = `Game Over! Your score is <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150)
        reset();
    }
}

//reset game after game over
    function reset(){
        started = false;
        gameSeq = [];
        userSeq =[];
        level = 0;
    }

//word to be done after bitton is pressed
function btnPress() {
    let btn = this;
    userFlash(btn);
    //storing user click color sequence
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    //checking sequences
    checkAns(userSeq.length-1);
}

//button press
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}