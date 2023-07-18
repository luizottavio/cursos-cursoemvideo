/*function contar() {
    let parametros = ['txt1, txt2, txt3, res'];
    if (parametros[0].valueOf().length == 0 || parametros[1].valueOf().length == 0 || parametros[2].valueOf().length == 0) {
        alert('ERRO, ')
    } else {
        let para = Number[txt1.value, txt2.value, txt3.value];     
        if (para[0] <= para[1]){
            for (let c = para[0]; c <= para[1]; c += para[2]) {
                res.innerHTML += ` ${c}`
            }
        }
    }
} */


 function contar() {
    let inicio = document.getElementById('txt1');
    let fim = document.getElementById('txt2');
    let passo = document.getElementById('txt3');
    let res = document.getElementById('res');
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('ERRO');
    } else {
        res.innerHTML = `Contando....`
        let i = Number(txt1.value);
        let f = Number(txt2.value);
        let p = Number(txt3.value);
        if (p <= 0) {
            alert('ERRO, Se passo valendo 1 ')
            p = 1
        }
        if (i <= f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${ c}`
                console.log(c)
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${ c}`
                console.log(c)
            }
        }
    }  
}  

