function input() {
    var numeroResX = document.querySelector('#num1');
    var numeroResY = document.querySelector('#num2');
    var res = document.querySelector('#res');



    const verificar = (numeroResX, numeroY) => {
        numeroResX = '-';
        numeroY = '|';
    
        if (numeroResX == 0 && numeroY == 0) {
            for(let c = 0; c < numeroResX ; c++) {
                numeroResX = numeroResX  + '-'
            }
            numeroResX = numeroResX  + '+';
            
            console.log(numeroX)
            res.textContent = '(numeroX)'
        }
    }
}









/*
Como fazer um valor de um input parar em um parametro de uma função?


   
    let numeroX = Number(numeroResX.value);
    let numeroY = Number(num2.value);
*/