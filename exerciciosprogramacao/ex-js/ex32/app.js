const objs = [
    {
        "name": "Luiz",
        "age": 19,
        "estaTrabalhando": true,
        "detalhesTrabalho": {
            "profissao": "Programador",
            "empresa": "Empresa Globo",
            "Nivel": "Júnior",
            "Aria": "Back-End"
        },
        "hobbies": ["Jogar", "Ler", "Assistir", "codar"]
    },

    {
        "name": "Noam",
        "age": 39,
        "estaTrabalhando": false,
        "detalhesTrabalho": {
            "profissao": null,
            "empresa": null,
            "Nivel": null,
            "Aria": null
        },
        "hobbies": ["Jogar",  "Assistir",]
    }
]


// JSON 
// Convertendo objeto para "JSON"
const jsonData = JSON.stringify(objs)
console.log(jsonData)
console.log(typeof jsonData)

// Convertendo "JSON" objeto
const objetoData = JSON.parse(jsonData)
console.log(objetoData)
console.log(typeof objetoData)

objetoData.forEach(person => {
    console.log(person.name)
})

objetoData.map(pessoa => {
    console.log(pessoa.age)
})