const form = document.querySelector('.form')
const answers = ['C','B','D','D']
const result = document.querySelector('.result')

form.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0
    let userAnswers = [
        form.inputOpition1.value,
        form.inputOpition2.value,
        form.inputOpition3.value,
        form.inputOpition4.value
    ]

    userAnswers.forEach((userAnswer, index) => {
        if(userAnswer === answers[index]) {
            score+= 25
        }
    })

    let res = score
    console.log(result.textContent = `Você Acertou ${res}`)
    
    let conter = 0

    const timer = setInterval(() => {
        if (conter === score) {
            clearInterval(timer)
        }

        result.textContent = `Você Acertou ${conter}`
        conter++
    }, 50)
    
})