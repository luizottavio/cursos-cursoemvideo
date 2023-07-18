function calcular() {
    let peso = document.getElementById('num1');
    let altura = document.getElementById('num2');
    let res = document.getElementById('res');
    let imcPeso = Number(peso.value);
    let imcAltura = Number(altura.value);
    let imcCalculado = imcPeso / (imcAltura * imcAltura);

    if (imcPeso == 0 || imcPeso >= 200) {
        alert('ERRO, verifique o dados e tente novamente.')
    } 
    if (imcAltura == 1.00 || imcAltura >= 2.40) {
        alert('ERRO, verifique o dados e tente novamente.')
    }

    res.innerHTML = `O seu IMC(Indice de masa corporal) é ${Math.round(imcCalculado)}.`

    peso.innerHTML = ` `
    peso.focus();
}