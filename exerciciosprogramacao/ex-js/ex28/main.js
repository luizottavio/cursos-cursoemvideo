const calcular = (n1, n2) => {
    const num1 = document.querySelector('#num1');
    const num2 = document.querySelector('#num2');
    const resultado = document.querySelector('#resposta');

    if(num1.value == 0 || num2.value == 0) {
        alert('Digite um número primeiro')
    } else {
        //alert('ok')
        const n1 = Number(num1.value);
        const n2 = Number(num2.value);
        const pro = n1 / n2
        resultado.textContent = `${n1} equivale a ${pro * 100} % de ${n2}`;
    }

    num1.value = ``;
    num2.value = ``;
    num1.focus();
}