const Questions = document.getElementById("Questions");                                //questions should be gotten from id = Questions
const option = Array.from(document.getElementsByClassName("option-text"));            // option should hold the array of options of answer for question
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");

// console.log(option);
 let currentQuestions = {};                                                          //current answer
 let acceptingAnswers = false;                                                              //accepted answer
 let score = 0;                                                                      //initialise score as zero
 let Questioncounter = 0;                                                                  //initialise question counter from zero
 let availableQuestions = [];                                                               // hold answered questions in an array


 let questions=[
 {
   Questions: "When did Ghana gain independence?",
   option1:"1957",
   option2:"1960",
   option3: "1956",
   answer: 1
 },
 {
Questions:"Which country has the longest coastline in the world?",
option1:"Indonesia",
option2:"Canada",
option3:"Australia",
answer: 2
 },
 {
    Questions:"What is the world's most populated country",
    option1:"Russia",
    option2:"China",
    option3:"India", 
    answer : 2
 },
{
 Questions:"The Great Barrier Reff is off the coast of which country?",
option1:"Australia",
option2:"Fiji",
option3: "New Zealand",
answer: 1
},
{
Questions:"What is the world's smallest country",
option1:"Lichtenstein",
option2:"Luxembourg",
option3: "Vatican City",
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
progressText.innerText =  Questioncounter + "/" + Max_Questions;
//uodate progress bar
progressBarFull.style.width = `${(Questioncounter / Max_Questions) * 100}%`;

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

if (classToApply === "correct"){
  incrementScore(Correct_Bonus);
}

selectedoption.parentElement.classList.add(classToApply);
setTimeout( () =>{
  selectedoption.parentElement.classList.remove(classToApply);
  getNewQuestion();
},500);


});
});

incrementScore = num => {
  score += num;
scoreText.innerText = score;

};




 startGame();
 
