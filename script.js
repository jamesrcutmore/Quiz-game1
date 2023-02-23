let quizDB = [{
        question: "What is the full form of HTML?",
        a: "Hello to my land",
        b: "Hey text markup language",
        c: "Hypertext markup language",
        d: "Hype type markup language",
        ans: "ans3"
    },
    {
        question: "What is the full form of CSS?",
        a: "Cascading Style sheets",
        b: "Cascading Style sheeps",
        c: "Cascading Super sheets",
        d: "Cascading sign sheets",
        ans: "ans1"
    },
    {
        question: "What is the full form of HTTP?",
        a: "Hypertext transfer prototype",
        b: "Hypertext transfer product",
        c: "Hey Transfer Protocol",
        d: "Hypertext transfer protocol",
        ans: "ans4"
    },
    {
        question: "What is the full form of JS?",
        a: "Javascript",
        b: "Javasuper",
        c: "JustScript",
        d: "Jordenshoes",
        ans: "ans1"
    },
    {
        question: "HTML is what type of language ?",
        a: "Scripting Language",
        b: "Markup Language",
        c: "Programming Language",
        d: "Network Protocol",
        ans: "ans2"
    },
    {
        question: "HTML uses",
        a: "User defined Tags",
        b: "Pre-specified tags",
        c: "Fixed tags defined by the language",
        d: "tags only for linking",
        ans: "ans3"
    },
    {
        question: "What should be the first tag in any HTML document?",
        a: "<head>",
        b: "<title>",
        c: "<html>",
        d: "<document>",
        ans: "ans3"
    },
    {
        question: "Fundamental HTML Block is known as",
        a: "HTML body",
        b: "HTML Tag",
        c: "HTML Attribute",
        d: "HTML element",
        ans: "ans2"
    },
    {
        question: "How can you make a bulleted list with numbers?",
        a: "<dl>",
        b: "<ol>",
        c: "<list>",
        d: "<ul>",
        ans: "ans2"
    },
    {
        question: "What tag is used to display a picture in a HTML page?",
        a: "picture",
        b: "image",
        c: "img",
        d: "src",
        ans: "ans3"
    }

];

//  Play start
const playBtn = document.querySelector('.start_btn')
playBtn.addEventListener('click', (e) => {
    document.querySelector('.home_screen').style.display = 'none'
    document.querySelector('.inner-div').style.display = 'block'
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

loadquestion();
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
        document.querySelector('.inner-div').style.display = 'none'
        document.querySelector('#showscore').style.display = 'block'
        document.querySelector('.scores').innerHTML = `${score}/${quizDB.length}`
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
            console.log(sortedData);
        })
        .catch((err) => {
            console.log(err);
        })
}

window.onload = () => {
    getQuestions()
}