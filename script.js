

// STOP WATCH
var min = 0;
var sec = 0;
var milliSec = 0;
var minID = document.getElementById("minID");
var secID = document.getElementById("secID");
var milliSecID = document.getElementById("milliSecID");

var interval;

function stopWatchTimer() {
    milliSec++;
    if (milliSec == 10) {
        sec++;
        milliSec = 0;
        if (sec == 60) {
            min++;
            sec = 0;
        }
    }
    minID.innerHTML = min;
    secID.innerHTML = sec;
    milliSecID.innerHTML = milliSec;
}

function TimerStart() {
    interval = setInterval(function () {
        stopWatchTimer();
    }, 100)
}

function TimerPause() {
    clearInterval(interval);
}

function TimerStop() {
    TimerPause();
    min = 0;
    sec = 0;
    milliSec = 0;
    minID.innerHTML = min;
    secID.innerHTML = sec;
    milliSecID.innerHTML = milliSec;
}


// TIMER
var minIDtimer = document.getElementById('minIDtimer');
var secIDtimer = document.getElementById('secIDtimer');
var milliSecIDtimer = document.getElementById('milliSecIDtimer');

var inputMin = document.getElementById('inputMin');
var inputMilliSec = document.getElementById('inputMilliSec');

var minPara = document.getElementById('minPara');
var milliSecPara = document.getElementById('milliSecPara');

var milliSecTimer = 0;
var minTimer = 0;
var secTimer = 20;

var interval;

function addValue(event) {
    event.preventDefault();
    var minuteVal = inputMin.value
    if (inputMin.value > 60 || inputMin.value < 0) {
        inputMin.value = "";
        minPara.innerHTML = "Wrong minutes given";
    } else if (!minuteVal) {
        minIDtimer.innerHTML = "00"
    }
    else {
        minTimer = inputMin.value;
        minIDtimer.innerHTML = inputMin.value;
    }

    if (inputMilliSec.value > 10 || inputMilliSec.value < 0) {
        inputMilliSec.value = "";
        milliSecPara.innerHTML = "Wrong Milli seconds given";
    } else if (inputMilliSec.value == "") {
        milliSecIDtimer.innerHTML = "00";
    } else {
        milliSecIDtimer.innerHTML = inputMilliSec.value;
        milliSecTimer = inputMilliSec.value;
    }

    secIDtimer.innerHTML = "20";

}

function timer() {
    if(milliSecTimer!=0){
        milliSecTimer--;
    }else{
        milliSecTimer=10;
        if(secTimer!=0){
            secTimer--;
        }else{
            if(minTimer!=0){
                secTimer=60;
                minTimer--;
            }else{
                milliSecTimer=0;
                alert("Times up");
                pauseTimer();
            }
        }
    }

    minIDtimer.innerHTML = minTimer;
    secIDtimer.innerHTML = secTimer;
    milliSecIDtimer.innerHTML = milliSecTimer;
}

function startTimer() {
    interval = setInterval(function () {
        timer();
    }, 100);
}

function pauseTimer() {
    clearInterval(interval);
}

function resetTimer() {
    milliSecTimer = 0;
    minTimer = 0;
    secTimer = 60;
    minIDtimer.innerHTML = minTimer;
    secIDtimer.innerHTML = secTimer;
    milliSecIDtimer.innerHTML = milliSecTimer;
}



