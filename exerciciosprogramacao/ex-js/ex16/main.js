let nomeGasto = document.getElementById('text');
let valorGasto = document.getElementById('num');
let lista = document.getElementById('tab');
let res = document.getElementById('res');
let vG = Number(num.value);
let valores = []

/*function nMenorUm(n, v) {
    if (v.innerOf(Number(n) != -1)) {
        return true
    } else {
        return false
    }
} */
 

function calcular() {
    res.innerHTML = ``
    if (valorGasto.value == 0  || nomeGasto.value.length == 0) {
        alert('ERRO, tente novamente')
    } else {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Foi gasto em ${nomeGasto.value} R$ ${valorGasto.value}`
        lista.appendChild(item);
        nomeGasto.value = ` `
        nomeGasto.focus();
        valorGasto.value = ` `

    }  
} 

function finalizar() {
    if (valores.length == 0) {
        alert('Incira os dados primeiro')
    } else {
        let soma = 0;
        for (let i = 0; i < valores.length; i++) {
            soma += valores[i];
        }
        res.innerHTML = ``
        res.innerHTML += `O total que você tera que pagar esse mês é de R$${soma}.`
    }
}

