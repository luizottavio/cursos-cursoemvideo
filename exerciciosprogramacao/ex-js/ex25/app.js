const secondsConteiner = document.querySelector('#seconds');
const minutesConteiner = document.querySelector('#minutes');
const hoursConteiner = document.querySelector('#hours');
const daysConteiner = document.querySelector('#days')
const nextYearConteiner = document.querySelector('#year');
const spinnerLoading = document.querySelector('#loading');
//const countdownConteiner = document.querySelector('#coutdown');

//const nextHours = new Date().getHours() + 2
const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

nextYearConteiner.textContent = nextYear

const uppdateCountdown = () => {
    const currentTime = new Date();
    const difference = newYearTime - currentTime;
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);  
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;  
    const minutes = Math.floor(difference / 1000 / 60) % 60;    
    const seconds = Math.floor(difference / 1000) % 60;
    //const Mseconds = Math.floor(difference) % 1000;
    

    //console.log({days, hours, minutes, seconds});

    secondsConteiner.textContent = twoDigits(seconds);
    minutesConteiner.textContent = twoDigits(minutes);
    hoursConteiner.textContent = twoDigits(hours);
    daysConteiner.textContent = twoDigits(days);
}

function twoDigits(Digits) {
    if (Digits < 10) {
        return ('0' + Digits)
    } else {
        return (Digits)
    }
}

setTimeout(() => {
    spinnerLoading.remove();
}, 1000)

setInterval(uppdateCountdown, 100);
