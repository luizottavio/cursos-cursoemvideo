let inputMinutes = document.querySelector('#minutes');
let inputSeconds = document.querySelector('#seconds');


start.onclick = function () {
    let iM = Number(minutes.value);
    let iS = Number(seconds.value);
    let interval = [iM, iS];


    if (iM <= 0 || iS <= 0)  {
        alert('ERRO')
    } else {
        for(let c = iS; c < 0; c++) {
            alert('ok')
            timer()
            setInterval(interval, 1000);
        }
    }

    console.log({inputMinutes, inputSeconds})
}

stop.onclick = function () {
    clearInterval(interval);
}

function timer() {
    inputSeconds++

    if (inputSeconds == 60) {
        inputMinutes++   
        inputSeconds = 0;
    } 

    document.getElementById(timer).innerText = (inputMinutes) (inputSeconds);
}

