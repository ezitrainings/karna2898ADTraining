let timer;
let minutes = 7;
let seconds = 0;
let isPaused = false;
let newTime =  null;

const pauseAndResumeButton = document.getElementById("PauseResetButton");
const timerKey = document.getElementById("timer");

function startTimer () {
    timer = setInterval(updateTimer, 1000);
}

function updateTimer () { 
    timerKey.textContent= format(minutes, seconds);

    if(minutes === 0 && seconds === 0){
        clearInterval(timer);
        alert("Time is out");
    } else if(!isPaused) {
        if(seconds >0){
            seconds--;
        } else {
            seconds = 59;
            minutes--;
        }
    }
}
function format (minutes, seconds) {
    return `${String(minutes).padStart(2,'0')} : ${String(seconds).padStart(2,'0')}`
}

function pauseAndResumeTimer () {
 //const pauseAndResumeButton = document.getElementById("PauseResetButton");
 isPaused = !isPaused;

 if(isPaused) {
    clearInterval(timer);
    pauseAndResumeButton.textContent = "Resume";
 } else {
    startTimer();
    pauseAndResumeButton.textContent = "Pause";
 }

}

function restartTimer () {
    clearInterval(timer);
    minutes = newTime || 7;
    seconds = 0;
    isPaused = false;
    timerKey.textContent= format(minutes, seconds);
    pauseAndResumeButton.textContent = "Pause";
    startTimer();
}

function chooseTimer() {
 const DesiredTime = prompt("Enter desiered time in minutes!!");
    if(!isNaN(DesiredTime) && DesiredTime >0 ){
        minutes = parseInt(DesiredTime) || 7;
        seconds = 0;
        isPaused = false;
        timerKey.textContent= format(minutes, seconds);
        clearInterval(timer);
        pauseAndResumeButton.textContent = "Pause";
        startTimer();
    } else {
        alert('Invalid number please eneter number greater than 0')
    }
}

startTimer();