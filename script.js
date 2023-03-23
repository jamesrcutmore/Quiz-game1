let quizDB = [];
const scoreboard = [{
    name: 'gamer1',
    score: 89
}]

let timer = 0;

const timerEl = document.getElementById('timer')
function updateTimer() {
    timer--
    if (timer <0) {
        // Stop game
        return
    }
    timerEl.innerHTML= `Timer: ${timer}`
}

function startTimer(time=1) {
    timer=time
    let timerId = setInterval(() => {
        updateTimer()
    }, 1000);
    
    setTimeout(() => {
        clearInterval(timerId)
        // Stop Game
        const ans = confirm("TIME'S UP, Save score")
        final()
    }, time * 1000 +1);    
}
//  Play start
const playBtn = document.querySelector('.start_btn')

playBtn.addEventListener('click', (e) => {
    document.querySelector('.home_screen').style.display = 'none'
    document.querySelector('.inner-div').style.display = 'block'
    startTimer(30)
})
// ***
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const option5 = document.querySelector("#option5");
const option6 = document.querySelector("#option6");
const option7 = document.querySelector("#option7");
const option8 = document.querySelector("#option8");
const option9 = document.querySelector("#option9");
const option10 = document.querySelector("#option10");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");
const showscore = document.querySelector("#showscore");

let questionCount = 0;
let score = 0;

const shuffleQuizDb = (arr) => {
    return arr.sort((a, b) => 0.5 - Math.random())
}

// Randomize quizs
// shuffleQuizDb()

const loadquestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = `Q${questionCount+1}: ` + questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}


getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });

    return answer;


};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false)
}



submit.addEventListener('click', () => {

    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };

    questionCount++;
    deselectAll();

    if (questionCount < quizDB.length) {
        loadquestion();
    } else {
        final()
    }
});

function getQuestions() {
    fetch('https://the-trivia-api.com/api/questions?limit=20&categories=science,history', {
            headers: {
                'Content-Type': "application/json"
            }
        })
        .then((res) => res.json())
        .then((data) => {
            let sortedData = data.map((q) => {
                let obj = {}
                let ansCount = 0
                let abcd = ['a', 'b', 'c', 'd']
                q.incorrectAnswers.push(q.correctAnswer)
                let answers = shuffleQuizDb(q.incorrectAnswers)

                answers.forEach(i => {
                    obj[abcd[ansCount]] = i

                    if (i === q.correctAnswer) {
                        obj.ans = `ans${ansCount+1}`
                    }

                    ansCount++
                })
                return {
                    question: q.question,
                    ...obj
                }
            })
            quizDB = sortedData
            loadquestion()
        })
        .catch((err) => {
            console.log(err);
        })
}

function final() {
    document.querySelector('.inner-div').style.display = 'none'
    document.querySelector('#showscore').style.display = 'block'
    document.querySelector('.scores').innerHTML = `${score}/${quizDB.length}` 
}

function saveScores() {
    const name = document.querySelector('#name').value
    scoreboard.push({
        name,
        score
    })
    score = 0;
}
const saveBtn = document.querySelector('#save_to_scores_btn')
saveBtn.addEventListener('click', () => {
    saveScores()
})

function loadScoreboard() {
    const scoreList = document.querySelector('#scores_list')
    let playerscores = ''
    scoreboard.forEach((s) => {
        playerscores += `<li><span>${s.name} </span> <span>${s.score}</span></li>`
    })

    scoreList.innerHTML = playerscores;
}

const showscoreBtn = document.querySelector('#scoreboard')
const showInstuctionsBtn = document.querySelector('#show_instuctions')
showscoreBtn.addEventListener('click', () => {
    document.querySelector('.main-div').style.display = 'none';
    document.querySelector('#show_scoreborad').style.display = 'block';
    document.querySelector('#home').style.display = 'inline-block';
    loadScoreboard()
})
const homebtn = document.querySelector('#home')
homebtn.addEventListener('click', () => {
    document.querySelector('.main-div').style.display = 'block';
    document.querySelector('#show_scoreborad').style.display = 'none';
    document.querySelector('#home').style.display = 'none';
})



showInstuctionsBtn.addEventListener('click', () => {
    // console.log('instructionsa');
    document.querySelector('#instructions').style.display = 'flex';
    // document.querySelector('#show_scoreborad').style.display = 'none';
    // loadScoreboard()
})

const closebtn = document.querySelector('#close')

closebtn.addEventListener('click', () => {
    document.querySelector('#instructions').style.display = 'none';
})

window.onload = () => {
    getQuestions()
}