const number1 = Math.ceil(Math.random() * 10)
const number2 = Math.ceil(Math.random() * 10)
const question = document.getElementById('question')
const form = document.getElementById('form')
const input = document.getElementById('input')
const scoreEl = document.getElementById('score')

let score = JSON.parse(localStorage.getItem('score'))

if (!score) {
    score = 0
}

scoreEl.innerText = `Score: ${score}`

question.innerText = `What is ${number1} multiply by ${number2} ?`

const correctAnswer = number1 * number2

form.addEventListener('submit', () => {
    const userAnswer = +input.value
    if (userAnswer === correctAnswer) {
        score++
        setLocalStorage()
    } else {
        score--
        setLocalStorage()
    }
})

function setLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}
