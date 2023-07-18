var pessoas = [
    {souEu: false, adm: false, nome: "noa"},
    {souEu: false, adm: true, nome: "Otavio"},
    {souEu: false, adm:  false, nome: "Oliver"},
    {souEu: true, adm: true, nome: "Avinoam"},
    {souEu: false, adm: true, nome: "Kikio"},
    
]

const organizador = (lista) => {
    //souEU
    lista.sort((a, b) => {
        if (a.souEu === true && b.souEu === false) {
            return -1;
        }
    });
    console.log(lista);
    //adm
    lista.sort((a, b) => {
        if (a.adm === true && b.adm === false ) {
            return -1;
        }
    });
    console.log(lista);
}

organizador(pessoas);