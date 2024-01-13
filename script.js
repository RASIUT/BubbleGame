var timer = 60;
var score = 0;
let hitNum = 0;

let makeBubble = () => {
    var cluster = "";
    for(var i = 0;i<102;i++) {
        cluster+=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }
    document.querySelector("#pbottom").innerHTML=cluster;
}

let runTimer = () => {
    var timerval = setInterval(()=> {
        if(timer>0) {
            timer--;
            document.querySelector("#TimerValue").textContent = timer;
        }
        else {
            clearInterval(timerval);
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000)
}

let getNewHit = () => {
    hitNum = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitNum;
}

let incScore = () => {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#pbottom").addEventListener("click", (details) => {
    let clickedNum = Number(details.target.textContent);
    if(hitNum == clickedNum) {
        incScore();
        makeBubble();
        getNewHit();
    }
});

getNewHit();

runTimer();

makeBubble();