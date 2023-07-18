const myCleaning = (Object) => {
    if (Object.name === null) {
        delete Object.name;
    } else if (Object.surname === null) {
        delete Object.surname;
    } else if (Object.age === null) {
        delete Object.age;
    } else {
        console.log('Nada a deletar!');
    }
    console.log(Object);
}

myCleaning({ name: null, surname:'Lyvyck', age: 23});