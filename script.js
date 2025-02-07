function newBubble (){
    let RandomNumGenerator = "";

    for (let i = 1; i <= 60; i++ ){
        let RandomN = Math.floor(Math.random()*10);
        RandomNumGenerator += `<div class="bubble">${RandomN}</div>`;
    }
    
    document.querySelector("#content-bottom").innerHTML = RandomNumGenerator;
}

let hit =0;
function newHit(){
    hit = Math.floor(Math.random()*10);
    document.querySelector("#newHit").textContent = hit 
}

let timer=60;
function runTimer(){
    let TimerVal = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#Timer").textContent = timer;
        } else{
            clearInterval(TimerVal);
            document.querySelector("#content-bottom").innerHTML = `<h1>GAME OVER</h1>`;
        }
    },1000)
}

let score = 0;
function UpdateScore() {
    score += 10;
    document.querySelector("#Score").textContent = score;
}

function GameOver() {
    document.querySelector("#content-bottom").innerHTML = `<h1>GAME OVER</h1> 
    <h2>You Clicked Wrong Number</h2>`;
}

document.querySelector("#content-bottom").addEventListener("click",function(num){
    let ClickedNum = Number(num.target.textContent);
    if(hit === ClickedNum){
        UpdateScore()
        newBubble()
        newHit()
    } else{
        GameOver()
    }
})

newBubble()
newHit()
runTimer()
