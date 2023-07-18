const calcular = () => {
    let anos = document.querySelector('#anos');
    let meses = document.querySelector('#meses');
    let dias = document.querySelector('#dias');
    let res = document.querySelector('#resultado');

    if (anos.value == 0 || meses.value == 0 || dias.value == 0) {
        alert('ERRO! Incira os dados antes de "Calcular"! ')
    } else {
        let anosConvertidos = Number(anos.value);
        let mesConvertidos = Number(meses.value);
        let diasConvertidos = Number(dias.value);
        let idadeCalculada = (anosConvertidos * 1000) (mesConvertidos * 3600) + diasConvertidos;


       res.innerHTML = idadeCalculada;
    }
}