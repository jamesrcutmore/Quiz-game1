document.addEventListener("DOMContentLoaded", function(event) {

const quizDB = [
    {
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
        c:"Fixed tags defined by the language",
        d:"tags only for linking",
        ans: "ans3"
    }, 
    {
       question: "What should be the first tag in any HTML document?",
       a: "<head>",
       b: "<title>",
       c:"<html>",
       d:"<document>",
       ans: "ans3"
   }, 
   {
       question: "Fundamental HTML Block is known as",
       a: "HTML body",
       b: "HTML Tag",
       c:"HTML Attribute",
       d:"HTML element",
       ans: "ans2"
   },
   {
       question: "How can you make a bulleted list with numbers?",
       a: "<dl>",
       b: "<ol>",
       c:"<list>",
       d:"<ul>",
       ans: "ans2"
   },  
   {
       question: "What tag is used to display a picture in a HTML page?",
       a: "picture",
       b: "image",
       c:"img",
       d:"src",
       ans: "ans3"
   },
   {
   question: "A page designed in HTML is called?",
       a: "Application",
       b: "cover page",
       c:"front end",
       d:"Web page",
       ans: "ans4"
   },
   {
       question: "The HTML document contains a root tag called ?",
           a: "HEAD",
           b: "Title",
           c:"Body",
           d:" HTML",
           ans: "ans4"
    },
       {
           question: "If we want to place text around an image, which CSS property should we use?",
               a: "push",
               b: "float",
               c:"align",
               d:"wrap",
               ans: "ans2"
           },
           {
               question: "Choose the correct HTML tag for a large title?",
                   a: "H1",
                   b: "Heading",
                   c:"Head",
                   d:"H6",
                   ans: "ans1"
               },
               {
               question: "If we want to use a nice green dotted border around an image, which css property are we going to use?",
                   a: "border-line",
                   b: "border-style",
                   c:"border-decoration",
                   d:"border-color",
                   ans: "ans2"
               },
               {
                   question: "An HTML document can contain",
                       a: "Attributes",
                       b: "Tags",
                       c:"Raw text",
                       d:" All the answers are true",
                       ans: "ans4"
                   },
                   {
                       question: "An HTML document is saved with the extension.",
                           a: ".htl",
                           b: ".html",
                           c:" .hml",
                           d:".htnl",
                           ans: "ans2"
                       },
                       {
                           question: "An HTML document is saved with the extension.",
                               a: ".htl",
                               b: ".html",
                               c:" .hml",
                               d:".htnl",
                               ans: "ans2"
                           },
                           {
                               question: "HTML is considered as",
                                   a: "Programming language",
                                   b: "OOP language",
                                   c:"High level language",
                                   d:"Markup language",
                                   ans: "ans4"
                               },
                               {
                                   question: "Who is the main author of the HTML",
                                       a: "Brendan Eich",
                                       b: "Tim Berners-Lee",
                                       c:"Web developer",
                                       d:" Google Inc",
                                       ans: "ans2"
                                   },
                                   {
                                       question: "A stricter type of HTML document is known as",
                                           a: "DHTML",
                                           b: "XHTML",
                                           c:"XML",
                                           d:"HTML",
                                           ans: "ans2"
                                       },
]; 

const question = document.querySelector(".question");
const option1 =document.querySelector("#option1");
const option2 =document.querySelector("#option2");
const option3 =document.querySelector("#option3");
const option4 =document.querySelector("#option4");
// const option5 =document.querySelector("#option5");
// const option6 =document.querySelector("#option6");
// const option7 =document.querySelector("#option7");
// const option8 =document.querySelector("#option8");
// const option9 =document.querySelector("#option9");
// const option10=document.querySelector("#option10");
// const option11 =document.querySelector("#option11");
// const option12 =document.querySelector("#option12");
// const option13 =document.querySelector("#option13");
// const option14 =document.querySelector("#option14");
// const option15 =document.querySelector("#option15");
// const option16 =document.querySelector("#option16");
// const option17 =document.querySelector("#option17");
// const option18 =document.querySelector("#option18");
// const option19 =document.querySelector("#option19");
// const option20 =document.querySelector("#option20");
const submit =document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");
const Showscore = document.querySelector("#Showscore");
const maxQuestion = 5;
let randomIndex = 0;
let questionCount = 0;
let score = 0;

const loadquestion = () => {
    randomIndex = Math.floor(Math.random() * (quizDB.length - 1))
    const questionList = quizDB[randomIndex];
   question.innerText = `Q${questionCount+1}: ${questionList.question}`;

   option1.innerText = questionList.a;
   option2.innerText = questionList.b;
   option3.innerText = questionList.c;
   option4.innerText = questionList.d;
}

loadquestion();
getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
                answer = curAnsElem.id;
            }
           });

            return answer; 
        

    };

    const deselectAll = () => {
        answers.forEach((curAnsElem) => curAnsElem.checked = false)


    }



submit.addEventListener('click' , () => {

    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[randomIndex].ans){
    score++;
    };

    questionCount ++;
    deselectAll();

    if(questionCount < maxQuestion){
    loadquestion();
    }else{
    Showscore.innerHTML = `
    <h3> You score ${score}/${maxQuestion}  </h3>
    <button class= "btn" onclick= "location.reload()"> Play Again! </button>
    
    `;
    Showscore.classList.remove("scorearea");
    
    


    }

});

});


