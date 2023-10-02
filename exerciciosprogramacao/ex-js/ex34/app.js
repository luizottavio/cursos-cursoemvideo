const json = [
    {
        "name": "Luiz",
        "age": "19",
        "color": "Blue",
        "country": "Brazil",
        "hobbies": ["Ler", "Programar", "Jogoar", "Assistir"]
    }
]

// Object
const user = JSON.stringify(json)
console.log(user)
console.log(typeof user)


// Json
const userJson = JSON.parse(user)
console.log(userJson)
console.log(typeof userJson)