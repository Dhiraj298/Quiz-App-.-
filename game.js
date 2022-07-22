const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"))
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {}
let acceptAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "who is 1 ?",
        choice1: "one",
        choice2: "two",
        choice3: "three",
        choice4: "four",
        answer: 1
    },
    {
        question: "who is 2 ?",
        choice1: "one",
        choice2: "two",
        choice3: "three",
        choice4: "four",
        answer: 2
    },
    {
        question: "who is 3 ?",
        choice1: "one",
        choice2: "two",
        choice3: "three",
        choice4: "four",
        answer: 3
    },
    {
        question: "who is 4 ?",
        choice1: "one",
        choice2: "two",
        choice3: "three",
        choice4: "four",
        answer: 4
    },
    {
        question: "who is 5 ?",
        choice1: "one",
        choice2: "five",
        choice3: "three",
        choice4: "four",
        answer: 2
    },
    {
        question: "who is 6 ?",
        choice1: "one",
        choice2: "two",
        choice3: "three",
        choice4: "six",
        answer: 4
    },

]


/*CONSTANTS*/
const CORRECT_BONUS = 10;
const MAX_QUESTION = 6;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    // console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {

    if(availableQuestions.length == 0 || questionCounter >= MAX_QUESTION){
        localStorage.setItem("mostRecentScore" , score);
        return window.location.assign("/end.html");
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter} / ${MAX_QUESTION}`;

    /* Upadate Progress Bar */
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTION)*100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;


    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex , 1);

    acceptingAnswers = true;
};

choices.forEach(choice =>{
    choice.addEventListener('click' , e => {
        // console.log(e.target);

        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        
        
        /*giving color to answer by giving class*/
        

        let classToApply = 'incorrect';
        if(selectedAnswer == currentQuestion.answer){
            classToApply = 'correct';
        }

        if(classToApply == 'correct'){
            incrementScore(CORRECT_BONUS);
        }
        selectedChoice.parentElement.classList.add(classToApply);


        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        } , 1000);

        // console.log(selectedAnswer == currentQuestion.answer);
        // getNewQuestion();

    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

startGame();
