const moldura = (fileira, coluna) => {
    let linha = '+'
    let s = '|'
    if (fileira > 0 && coluna > 0) {
        for (let c = 0; c < fileira -2; c++) {
            linha = linha + '-';
            s = s + ' ';
        }
        linha = linha + '+';
        s = s + '|';

        console.log(linha);
        for (let c = 0; c < coluna -2; c++) {
            console.log(s);
        }
        console.log(linha);
    }
}

moldura(13, 10);