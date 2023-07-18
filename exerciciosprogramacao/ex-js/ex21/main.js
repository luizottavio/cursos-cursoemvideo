const btnIncrese = document.querySelector('.btn-increse');
const btnDecrease = document.querySelector('.btn-decrease');
const btnReset = document.querySelector('.btn-reset');
const counter = document.querySelector('#value');

let incremented = 0;

counter.innerHTML = incremented;

btnIncrese.addEventListener("click", () =>  {
    counter.innerHTML = ++incremented;
});

btnDecrease.addEventListener("click", () => {
    counter.innerHTML = --incremented;
});

btnReset.addEventListener("click", () => {
    counter.innerHTML = incremented = 0;
});