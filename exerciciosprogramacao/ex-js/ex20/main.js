let seconds = 00;
let minutes = 00;
let hours = 00;
let buttonStart = document.getElementById('button-start');
let buttonStop = document.getElementById('button-stop');
let buttonReset = document.getElementById('button-reset');
let interval

function twoDigits(digit) {
    if (digit < 10) {
        return('0' + digit);
    } else {
        return(digit);
    }
}

buttonStart.onclick = function () {
    console.log(buttonStart);
    timer()
    interval = setInterval(timer, 1000);
}

buttonStop.onclick = function () {
    clearInterval(interval);
}

buttonReset.onclick = function () {
    clearInterval(interval);
    document.getElementById('timer').innerText = '00:00:00'
}


function timer() {
    seconds++

    if(seconds == 60) {
        minutes++
        seconds = 0
        if (minutes == 60) {
            hours++
            minutes = 0
            
        }
    }

    document.getElementById('timer').innerText = twoDigits(hours) + ':' + twoDigits(minutes) + ':' + twoDigits(seconds);
}

