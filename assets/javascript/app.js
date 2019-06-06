// create a variable score =0
let score = 0;
// create a variable correct = 0
let correct = 0;
// create a variable incorrect =0
let incorrect = 0;
// create a variable unanswered =0
let unanswered = 0;
// create an array with an object for each question, possible answers & answer

let questions = [
    {
    question:"What was Al Bundy's Profession",
    panswers:["Car Salesmen", "Shoe Salesmen", "Doctor", "Accountant"],
    answer:"Shoe Salesman",
    meme:"assets/images/shoesaleman.jpg",
    },
    {
    question:"Who was the actress who played Kelly Bundy?",
    panswers:["Christina Applegate","Kerri Russel","Elisabeth Shue","Juliette Lewis" ],
    answer:"Christina Applegate",
    meme:"assets/images/christinaapplegate.gif"
    },
    {
    question:"What make of car did Al Bundy drive?",
    panswers:["Chrysler","Plymouth","Toyota","Dodge"],
    answer:"Plymouth",
    meme:"assets/images/plymouth.jpg",

    },
    {
    question:"What is Peggy Bundy's maiden name?",
    panswers:["Wanker", "Smith", "Farmer","Jones"],
    answer:"Wanker",
    meme:"assets/images/Peggy.gif",
    },
    {
    question:"What is Al's nickname for Kelly?",
    panswers:["Sugar","Pumpkin","Doll","Darling"],
    answer:"Pumpkin",
    meme:"assets/images/alandkelly.jpg",
    },
    {
    question:"What is 'Bud' Bundy's real first name?",
    panswers:["Robert", "Buddy", "William", "Buderick"],
    answer:"Buderick",
    meme:"assets/images/bud.gif",
    },
    {
    question:"What was the name of the Bundy's first dog?",
    panswers:["Lucky","Scooter","Buck","Lassie"],
    answer:"Buck",
    meme:"assets/images/buck.gif",
    },
    {
    question:"What was the Bundy's female neighbor's name?",
    panswers:["Darcy","Lucy", "Marcy", "Rhonda"],
    answer: "Marcy",
    meme:"assets/images/marcy.gif",
    },
    {
    question:"How many seasons did Married with Children run?",
    panswers:["7","11","13","15"],
    answer:"11",
    meme:"assets/images/cast.jpg",
    },
    {
    question:"Al Bundy founded what orginazition?",
    panswers:["Yes Ma'am","No Ma'am","Bon Bon Voyage","Bowling Shoe Salesmen"],
    answer: "No Ma'am",
    meme:"assets/images/nomaam.jpg",
    }
]

// var game = {
//     score:0,
//     startGame:function(){
//         $
//     }

// }
// create a function to pass through the arrays and return coordination question, possible answer and answer
// create a function (possibly included above) to start a 30 second timer.
// create a a function so that when start is clicked:
    // "start" disapears
    // 30 second timer appears and starts coundown(function from above)
    // questions and possible answers appear
        // if user answers correct, all text disappers and new text appears congrats, with a pic
        // if user answers incorrect...new text with correct answer and pic
        // if user does not answer when timer runs out, new text with correct answer and pic
        // after 5 seconds of the info screen, new question appears
        // after all questions are answered, new text showing correct, incorrect, unanswered tally appears
            // also includes "Start Over" that when clicked should reset all the scores and start back at question 1.



 