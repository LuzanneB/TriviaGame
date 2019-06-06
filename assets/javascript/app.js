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
    answer:"Shoe Salesman"
    },
    {
    question:"Who was the actress who played Kelly Bundy?",
    panswers:["Christina Applegate","Kerri Russel","Elisabeth Shue","Juliette Lewis" ],
    answer:"Christina Applegate"
    },
    {
    question:"What make of car did Al Bundy drive?",
    panswers:["Chrysler","Plymouth","Toyota","Dodge"],
    answer:"Dodge"
    },
    {
    question:"What is Peggy Bundy's maiden name?",
    panswers:["Wanker", "Smith", "Farmer","Jones"],
    answer:"Wanker"
    },
    {
    question:"What is Al's nickname for Kelly?",
    panswers:["Sugar","Pumpkin","Doll","Darling"],
    answer:"Pumpkin",
    },
    {
    question:"What is 'Bud' Bundy's real first name?",
    panswers:["Robert", "Buddy", "William", "Buderick"],
    answer:"Buderick",
    },
    {
    question:"What was the name of the Bundy's first dog?",
    panswers:["Lucky","Scooter","Buck","Lassie"],
    answer:"Buck"
    },
    {
    question:"What was the Bundy's female neighbor's name?",
    panswers:["Darcy","Lucy", "Marcy", "Rhonda"],
    answer: "Marcy"
    },
    {
    question:"abc",
    panswers:["1"],
    answer:"abc"
    },
    {
    question:"def",
    panswers:["1","2"],
    answer: "def,"
    }
]
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



 