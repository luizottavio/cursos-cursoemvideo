function contar() {
    let incio = document.getElementById('txt1');
    let fim = document.getElementById('txt2');
    let passo = document.getElementById('txt3');
    let res = document.getElementById('res');

    if (incio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('ERRO, verifique os dados e tente nova mente!');
    } else {
        res.innerHTML = `Contando....`;
        let i = Number(txt1.value);
        let f = Number(txt2.value);
        let p = Number (txt3.value);
        if (p <= 0 ) {
            alert('Invalido considerando PASSO 1');
            p = 1;
        }
        if (i <= f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `👉  ${c}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` 👉 ${c}`
            }
        }
       
    }
}