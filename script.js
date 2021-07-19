const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const text = document.getElementById('text')

let shuffledQuestions, currentQuestionIndex
let scoring = 0

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    
    if(correct){
        scoring++
        if(scoring > questions.length){
            scoring = questions.length
        }
    }

    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')

    }else{
        text.innerText='Thank you for your participation!'
        text.classList.remove('hide')
        questionContainerElement.classList.add('hide')
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

let nice = 0;
let notNice = 0;

let crypto = 0;
let notCrypto = 0;

let donate = 0;
let NotDonate = 0;

let run = 0;
let notRun = 0;

let goodies = 0;
let notGoodies = 0;

let use = 0;
let notUse = 0;

let invest = 0;
let notInvest = 0;

const questions = [
    {
        question: 'How did you find this presentation?',
        answers: [
            { text: 'Interesting and well presented', correct: true},
            { text: 'Not really that cool', correct: false}
        ]
    },
    {
        question: 'Do you think the fact that Donate A Cry is based on a blockchain and uses cryptocurrency is a plus ?',
        answers: [
            { text: 'Yes', correct: true},
            { text: 'No', correct: false}
        ]
    },
    {
        question: "Do you think that if your were able to make a donation without spending a cent you would do it more than now?",
        answers: [
            { text: 'Yes', correct: true},
            { text: 'No', correct: false}
        ]
    },
    {
        question: "Do you like the idea of walking/running for a cause that you have chosen?",
        answers: [
            { text: 'Yes', correct: true},
            { text: 'No', correct: false}
        ]
    },
    {
        question: "Do you think you would buy our goodies?",
        answers: [
            { text: 'Yes', correct: true},
            { text: 'No', correct: false},
        ]
    },
    {
        question: "Do you think you would use our app as a customer?",
        answers: [
            { text: 'Yes', correct: true},
            { text: 'No', correct: false},
        ]
    },
    {
        question: "Finally and most importantly, WILL YOU INVEST IN OUR STARTUP and be part of a world changing company?",
        answers: [
            { text: 'Yes', correct: true},
            { text: 'No', correct: false}
        ]
    }
]