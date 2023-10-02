const div = document.querySelector('.div')

const mHoras = (() => {
    const data = new Date()
    const h = data.getHours()
    const m = data.getMinutes()
    const s = data.getSeconds()

    div.textContent = `${h}:`
    div.textContent += `${m}:`
    div.textContent += `${s}`

    div.textContent = `${String(h).length === 1 ? `0${h}` : h}:
    ${String(m).length === 1 ? `0${m}` : m }:
    ${String(s).length === 1 ? `0${s}` : s}
`
})

setInterval(mHoras, 1000)

mHoras()