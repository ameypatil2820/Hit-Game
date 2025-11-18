let hitElement = document.querySelector(".hit-value");
let timeElement = document.querySelector(".timer");
let scoreElemet = document.querySelector(".score");
let bordElement = document.querySelector(".bord-container");
let highscoreElement = document.querySelector(".highscore")

let bgAudio = new Audio("../assect/event-pop-commercial-music-420712.mp3");
let clickAudio = new Audio("./assect/sharp-pop-328170.mp3");


let hitValue;
let time = 60;
let score = 0;
console.log();


bgAudio.loop = true;

function boardFunction() {
    bordElement.innerHTML = "";
    
    for (let i = 0; i < 300; i++) {
        bgAudio.play();
        let circleElement = document.createElement("div");
        circleElement.classList.add("circle");
        let randomNumber = Math.floor(Math.random() * 10);
        circleElement.textContent = randomNumber;
        bordElement.appendChild(circleElement);
    }
}
boardFunction();

function hitFunction() {
    hitValue = Math.floor(Math.random() * 10);
    hitElement.textContent = "Hit : " + hitValue;
}
hitFunction();

function timeFunction() {
    let countdown = setInterval(() => {
        timeElement.textContent = `Time : ${time}`;
        time--;

        if (time < 1) {
            clearInterval(countdown);
          bordElement.innerHTML = "<h1 style='font-size:40px; color:#ff4f81;'>Game Over!</h1>";
          hitElement.textContent = "Hit : -";
     videoEle();

        }
    }, 1000);
}

let timer = timeFunction();


let highscoreEle = Number(localStorage.getItem("highscoreEle")) || 0;

console.log(highscoreEle);

highscoreElement.textContent=`High : ${highscoreEle}`

function scrFunction(){
bordElement.addEventListener("click", (event) => {
    clickAudio.currentTime = 0;
    clickAudio.play();
    let clickedValue = parseInt(event.target.textContent);

    if (clickedValue === hitValue) {
        score += 10;
        hitFunction();
        boardFunction();

    } else {
        score -= 5;
    }
     if(score > highscoreEle) {
     highscoreEle = score;
     localStorage.setItem("highscoreEle", highscoreEle);
    highscoreElement.textContent=`High Score : ${highscoreEle}`;
 }




    scoreElemet.textContent = "Score : " + score;
});
}
scrFunction();