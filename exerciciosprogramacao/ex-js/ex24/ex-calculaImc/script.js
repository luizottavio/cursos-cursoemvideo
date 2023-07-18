function calcular() {

    var peso = window.document.getElementById('txt1');
    var altura = window.document.getElementById('txt2');
    var res = window.document.querySelector('div#res')
    var pesoCalcular = Number(peso.value);
    var alturaCalcular = Number(altura.value);
    var imcCalcular = pesoCalcular / (alturaCalcular * alturaCalcular);
    if (peso.value.length == 0 || peso.value > 300 ) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } 
    /*if (altura.value.length == 0 || altura.value > 2.00 ) {
        alert('[ERRO] Verifique os dados e tente novamente')
    }
     else {
        (altura.value.length == 0 || altura.value > 2.00 )
        alert('[ERRO] Verifique os dados e tente novamente')

    } */

    res.innerHTML = `Seu IMC atual é ${Math.round(imcCalcular)}`


    }


   

   