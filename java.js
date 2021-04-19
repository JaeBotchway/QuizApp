const Questions = document.getElementById("Questions");                                //questions should be gotten from id = Questions
const option = Array.from(document.getElementsByClassName("option-text"));            // option should hold the array of options of answer for question
// console.log(option);
 let currentQuestions = {};                                                          //current answer
 let acceptingAnswers = false;                                                              //accepted answer
 let score = 0;                                                                      //initialise score as zero
 let Questioncounter = 0;                                                                  //initialise question counter from zero
 let availableQuestions = [];    

 let questions=[
 {
   Questions: "Which sysmbol represents a boolean operation?",
   option1:"==",
   option2:"=",
   option3: "!=",
   answer: 1
 },
 {
Questions:"Which is the correct file for javascript?",
option1:".javascript",
option2:".js",
option3:".java",
answer : 2

 },
 {
    Questions:"What is function for fetching an Id in Javascript",
    option1:"document.getElementByid()",
    option2:"document.getElementById()",
    option3:"Indocument.get()",
    answer: 2
 },
{
 Questions:"What is the correct syntac for referring to an external file?",
option1:"<script src = 'xxx.js'>",
option2:"<script href = 'xxx.js'>",
option3: "<script name = 'xxx.js'>",
answer: 1
},
{
Questions:"How do you write 'Hello World' in alert",
option1:"msgBox('Hello World');",
option2:"alertBox('Hello World');",
option3: "alert('Hello World');",
answer: 3
}
 ]

 const Correct_Bonus = 20;                                                     //correct answer is 20
 const Max_Questions = 5;                                                      //max question is 5

 startGame = () =>{                                                            //starts game

    Questioncounter = 0;
    score = 0;
    availableQuestions = [...questions];                                                //when a question is answered it should move to the next set and not come again
    console.log(availableQuestions);                                                    //log answered questions
    getNewQuestion();                                                           //declares function question()
 };
 getNewQuestion = () =>{
if (availableQuestions.length ===0 || Questioncounter >= Max_Questions )                         //if  questions are all answered or no questions left
{

    return window.location.assign("/end.html");                                    //game ends
}

Questioncounter ++;                                                                     //move to the next question if question is available
const questionIndex = Math.floor(Math.random() * availableQuestions.length);                 //5 question , should start from 1st to the 5th
currentQuestions = availableQuestions[questionIndex];                                        // current question will be the next question after the previos is answered
Questions.innerText = currentQuestions.Questions;                                     //fetch the question

option.forEach(option =>{
    const number = option.dataset["number"];                                //each option is represented by its option data value (1,2 or 3 etc)
    option.innerText = currentQuestions["option" + number];                 //when an option is chosen tfor the current question it should hold/show its option data value
});

availableQuestions.splice(questionIndex, 1);
acceptinganswers = true;
 };

 option.forEach(option => 
{
option.addEventListener('click', e =>{
if (!acceptinganswers) return;

acceptinganswers = false;
const selectedoption = e.target;
const selectanswer = selectedoption.dataset["number"];

const classToApply = 
selectanswer == currentQuestions.answer ? "correct" : "incorrect";
selectedoption.parentElement.classList.add(classToApply);
setTimeout( () =>{
  selectedoption.parentElement.classList.remove(classToApply);
  getNewQuestion();
},1000);


});
});






 

 startGame();
 
