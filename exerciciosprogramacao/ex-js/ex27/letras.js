//
function vezesLetraAparece(frase, letra) {
    var res = 0;

    for (let indiceLetra = 0; indiceLetra < frase.length; indiceLetra++) {
        if (frase[indiceLetra] === letra) {
            res++;
        }

    }
    return res;
   
}

console.log(vezesLetraAparece('otavio,otario,oval,ovo', 'o'));
//console.log('Essa letra aparece um total de ' + cont + (cont === 1 ? 'vaz' : 'vazes'))