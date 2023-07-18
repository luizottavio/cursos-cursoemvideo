let sHours = document.getElementById('hours');

function clock() {
    let newHours = new Date();
    let hours = newHours.getHours();
    let minutes = newHours.getMinutes();
    let seconds = newHours.getSeconds();
    let img = document.getElementById('img');
    
    if (hours >= 6 && hours <= 12) {
        //Bom Dia
        document.body.style.background = '#295073'
        img.src = 'manha.400px.png'
    } else if (hours > 12 && hours <= 18){
        //Boa tarde
        document.body.style.background = '#595736'
        img.src = 'tarde.400px.png'
    } else {
        //Boa noite
        document.body.style.background = '#026873'
        img.src = 'noite.400px.png'
    }
    
    sHours.innerHTML = `
    ${String(hours).length === 1 ? `0${hours}` : hours}:${String(minutes).length === 1 ? `0${minutes}` : minutes }:${String(seconds).length === 1 ? `0${seconds}` : seconds}`;

}

setInterval(clock, 1000);




