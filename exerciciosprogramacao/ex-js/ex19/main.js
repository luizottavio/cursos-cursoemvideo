function tabuada() {
    let numero = document.getElementById('txt1');
    let tabuada = document.getElementById('tab');

    if (numero.value.length == 0) {
        alert('Digite um valor');
    } else {
        let n = Number(txt1.value);
        tabuada.innerHTML = ` `;
        for (let c = 1; c <= 12; c++) {
            let item = document.createElement('option');
            item.text = `${c} x ${n} = ${n*c}`;
            item.value = `tab${c}`;
            tabuada.appendChild(item);
        }
    }
    numero.value = ` `;
    numero.focus();
}


/*
let c = 1;
tabuada.innerHTML = ` `;
while (c <= 12) {
    c++
    let item = document.createElement('option');
    item.text = `${c} x ${n} = ${n*c}`;
    item.value = `tab${c}`;
    tabuada.appendChild(item); 
*/    

