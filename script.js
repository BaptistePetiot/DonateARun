const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const text = document.getElementById('text')

const axios = require('axios').default;
const url = 'localhost:8080';

let shuffledQuestions, currentQuestionIndex
//let scoring = 0



startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions
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

        switch (question){
            case 0:
                console.log("nice")
                if(answer.correct){
                    axios.get(url + '/api/nice')
                }else{
                    axios.get(url + '/api/notNice')
                }
                break;
            case 1:
                console.log("crypto")
                if(answer.correct){
                    axios.get(url + '/api/crypto')
                }else{
                    axios.get(url + '/api/notCrypto')
                }
                break;
            case 2:
                console.log("donate")
                if(answer.correct){
                    axios.get(url + '/api/donate')
                }else{
                    axios.get(url + '/api/notDonate')
                }
        }

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

const questions = [
    {
        question: 'How did you find this presentation?',
        answers: [
            { text: 'Interesting and well presented', correct: true},
            { text: 'Not really that cool', correct: false}
        ]
    },
    {
        question: 'Do you think the fact that Donate A Run is based on a blockchain and uses cryptocurrency is a plus ?',
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