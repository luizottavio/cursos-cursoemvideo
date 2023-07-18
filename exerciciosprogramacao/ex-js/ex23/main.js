let segundos = 00;
let minutos = 00; 
let horas = 00;
let btnIniciar = document.getElementById('btn-iniciar');
let btnParar = document.getElementById('btn-parar');
let btnResetar = document.getElementById('btn-resetar');
let intervalo


function doisDigitos(digitos) {
    if (digitos < 10) {
        return ('0' + digitos);
    } else {
        return (digitos);
    }
}
btnIniciar.onclick = function () {
    //console.log(timer)
    timer();
    intervalo = setInterval(timer, 1000);
}

btnParar.onclick = function () {
    clearInterval(intervalo);
}

btnResetar.onclick = function () {
    clearInterval(intervalo);
    segundos = 00;
    minutos = 00;
    horas = 00;
    document.getElementById('timer').innerText = '00:00:00'
}

function timer() {
    segundos++

    if (segundos == 60) {
        minutos++;
        segundos = 0;
        if (minutos == 60) {
            horas++;
            minutos = 0;
        }
    } 

    document.getElementById('timer').innerText = doisDigitos(horas) + ':' + doisDigitos(minutos) + ':' + doisDigitos(segundos);
}

