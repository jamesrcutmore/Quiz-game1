const quizDB = [
     {
         question: "Q1: What is the full form of HTML?",
         a: "Hello to my land",
         b: "Hey text markup language",
         c: "Hypertext markup language",
         d: "Hype type markup language",
         ans: "ans3"

     },
     {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style sheets",
        b: "Cascading Style sheeps",
        c: "Cascading Super sheets",
        d: "Cascading sign sheets",
        ans: "ans1"
     },
     {
        question: "Q3: What is the full form of HTTP?",
        a: "Hypertext transfer prototype",
        b: "Hypertext transfer product",
        c: "Hey Transfer Protocol",
        d: "Hypertext transfer protocol", 
        ans: "ans4"
     },
     {
        question: "Q4: What is the full form of JS?",
        a: "Javascript",
        b: "Javasuper",
        c: "JustScript",
        d: "Jordenshoes",
        ans: "ans1"
     },
     {
        question: "Q5: HTML is what type of language ?",
        a: "Scripting Language",
        b: "Markup Language",
        c: "Programming Language",
        d: "Network Protocol",
        ans: "ans2"
     },
     {
         question: "Q6:HTML uses",
         a: "User defined Tags",
         b: "Pre-specified tags",
         c:"Fixed tags defined by the language",
         d:"tags only for linking",
         ans: "ans3"
     }, 
     {
        question: "Q7:What should be the first tag in any HTML document?",
        a: "<head>",
        b: "<title>",
        c:"<html>",
        d:"<document>",
        ans: "ans3"
    }, 
    {
        question: "Q8:Fundamental HTML Block is known as",
        a: "HTML body",
        b: "HTML Tag",
        c:"HTML Attribute",
        d:"HTML element",
        ans: "ans2"
    },
    {
        question: "Q9:How can you make a bulleted list with numbers?",
        a: "<dl>",
        b: "<ol>",
        c:"<list>",
        d:"<ul>",
        ans: "ans2"
    },  
    {
        question: "Q10:What tag is used to display a picture in a HTML page?",
        a: "picture",
        b: "image",
        c:"img",
        d:"src",
        ans: "ans3"
    } 

 ]; 

 const question = document.querySelector(".question");
 const option1 =document.querySelector("#option1");
 const option2 =document.querySelector("#option2");
 const option3 =document.querySelector("#option3");
 const option4 =document.querySelector("#option4");
 const option5 =document.querySelector("#option5");
 const option6 =document.querySelector("#option6");
 const option7 =document.querySelector("#option7");
 const option8 =document.querySelector("#option8");
 const option9 =document.querySelector("#option9");
 const option10 =document.querySelector("#option10");
 const submit =document.querySelector("#submit");

 const answers = document.querySelectorAll(".answer");
 const Showscore = document.querySelector("#Showscore");

 let questionCount = 0;
 let score = 0;

 const loadquestion = () => {
     const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

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

if(checkedAnswer === quizDB[questionCount].ans){
    score++;
};

questionCount ++;
deselectAll();

if(questionCount < quizDB.length){
    loadquestion();
}else{
    Showscore.innerHTML = `
    <h3> You score ${score}/${quizDB.length}  </h3>
    <button class= "btn" onclick= "location.reload()"> Play Again! </button>
    
    `;
    Showscore.classList.remove("scorearea");
    
    


}



 } );