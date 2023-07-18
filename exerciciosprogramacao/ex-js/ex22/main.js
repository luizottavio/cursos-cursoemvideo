function calcular () {
    let numero = document.getElementById('num');
    let tabuada = document.getElementById('tab');

    if (numero.value.length == 0 ) {
        alert('ERRO');
    } else {
        let n = Number(num.value);
        tabuada.innerHTML = ``;
        for (let c = 1; c <= 12; c++) {
            let item = document.createElement('option');
            item.text = `${c} x ${n} = ${n*c}`;
            item.value =  `tab${c}`;
            tabuada.appendChild(item);
        }
    }
}