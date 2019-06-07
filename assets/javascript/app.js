// this is an object with questions, answers and images for the game



alert("test");
let questions = [
    {
        question: "What was Al Bundy's Profession",
        panswers: ["Car Salesmen", "Shoe Salesmen", "Doctor", "Accountant"],
        answer: "Shoe Salesman",
        meme: "assets/images/shoesaleman.jpg"
    },
    {
        question: "Who was the actress who played Kelly Bundy?",
        panswers: ["Christina Applegate", "Kerri Russel", "Elisabeth Shue", "Juliette Lewis"],
        answer: "Christina Applegate",
        meme: "assets/images/christinaapplegate.gif"
    },
    {
        question: "What make of car did Al Bundy drive?",
        panswers: ["Chrysler", "Plymouth", "Toyota", "Dodge"],
        answer: "Plymouth",
        meme: "assets/images/plymouth.jpg"

    },
    {
        question: "What is Peggy Bundy's maiden name?",
        panswers: ["Wanker", "Smith", "Farmer", "Jones"],
        answer: "Wanker",
        meme: "assets/images/Peggy.gif"
    },
    {
        question: "What is Al's nickname for Kelly?",
        panswers: ["Sugar", "Pumpkin", "Doll", "Darling"],
        answer: "Pumpkin",
        meme: "assets/images/alandkelly.jpg"
    },
    {
        question: "What is 'Bud' Bundy's real first name?",
        panswers: ["Robert", "Buddy", "William", "Buderick"],
        answer: "Buderick",
        meme: "assets/images/bud.gif"
    },
    {
        question: "What was the name of the Bundy's first dog?",
        panswers: ["Lucky", "Scooter", "Buck", "Lassie"],
        answer: "Buck",
        meme: "assets/images/buck.gif"
    },
    {
        question: "What was the Bundy's female neighbor's name?",
        panswers: ["Darcy", "Lucy", "Marcy", "Rhonda"],
        answer: "Marcy",
        meme: "assets/images/marcy.gif"
    },
    {
        question: "How many seasons did Married with Children run?",
        panswers: ["7", "11", "13", "15"],
        answer: "11",
        meme: "assets/images/cast.jpg"
    },
    {
        question: "Al Bundy founded what orginazition?",
        panswers: ["Yes Ma'am", "No Ma'am", "Bon Bon Voyage", "Bowling Shoe Salesmen"],
        answer: "No Ma'am",
        meme: "assets/images/nomaam.jpg"
    }
]

// this is the area of index that will change
let card = $("#quiz-area")

let counterStart = 30;
let timer;

let game = {
    question: question,
    currentQuestion: 0,
    counter: counterStart,
    correct: 0,
    incorrect: 0,

    countdown: function () {
        // * decrement counter
        this.counter --;
        // * use jquery to put dynamically put logic onto the page
       $("#counter-number").text(game.counter);
    
        if (this.counter===0)
         { this.timeUp() };

    },

    loadQuestion: function () {
        //     * set timer 
        //     * timer = setInterval(game.countdown, 1000) 
        timer = setInterval(game.countdown, 1000);
        // * dynamicatly add question into card variable
        //      * *hint* card.html ("<h2>" + "</h2>")
        card.html("<h2>" + questions[this.currentQuestion.question] + "<h2>")
        console.log(this.currentQuestion)
        // * for loop to run through the
        //     * questions
        for(i=0; i < questions[this.currentQuestion].length; i++){
          card.append("<button class='answer-button' id='button' 'data-name'"questions[this.currentQuestion].question.panswers[i]+">"+questions.[this.currentQuestion].panswers[i]+"</button>")
        }
       


        $.each(questions[i].question, function () {}
        //     * a dynamically added buttons with answer options 
        $.each(questions[i].panswers, function () {}
    },

    nextQuestion: function () {
        // * set the counter
        //  game.counter = countStartNumber
        game.counter = countStartNumber;
        // * use jquery to change the text of the game counter
        // * increment the currentQuestion by one
        this.currentQuestion++;
        // * call the loadQuestion function
        this.loadQuestion();
    },

    timeUp: function () {
        // * clearInterval(timer)
        clearInterval(timer)
        // * use jquery to change the text of the game counter
        $("#counter-number").html(game.counter);
        // * dynamically add out of time to the card
        card.html("<h2>Out of Time!</h2>")
        // * append the Correct answer to the card
        card.append("<h2> The correct answer is:" + questions[this.currentQuestion].answer);
    
        // * append image/gif to the card 
        card.append("<h2> The correct answer is:" + questions[this.currentQuestion].meme);


        if(this.currentQuestion === questions.length -1){
            setTimeout(game.results, 5 * 1000)
        }
        else{
            setTimeout(game.nextQuestion, 5*1000);

        }
    },

    results: function () {
        // * clearInterval
        clearInterval(timer);
        // *  dynamically add html to let them know of there results
        // * use jquery to add html of game.counter to the id of counter-number
        // * add how many correct answers they got
        // * add how many incorrect answer they got
        // * add how many unanswered 
        // * add a start over button
    },

    clicked: function () { 
        // * clearInterval(timer)
        // * if/ else statment for when an answer is clicked
        // * if correct run answeredCorrectly() function
        // * else run answeredIncorrectly() function
    },

    answeredIncorrectly: function () {
        // * add a point to the incorrect column
        // * clearInterval(timer)
        // * dynamically add html to let them know they are wrong
        // * add the right answer
        // * add the image 
        // * if / else statment
        // *if no more question wait three seconds then show result
        // *else wait three seconds and show next question
     },

    answeredCorrectly: function () {
        // * add a point to correct column
        // * clearInterval(timer);
        // * dynamically add html to let them know they are    correct
        // * add image
        // * if / else statment
        // *if no more question wait three seconds then show result
        // *else wait three seconds and show next question
     },

    reset: function () { },

}

$(document).on("click", "#start", function () {
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
    console.log("#start")
    game.loadQuestion();
});

$(document).on("click", ".answer-button", function (event) {
    game.clicked(event);
});

$(document).on("click", "#start-over", function () {
    game.reset();
});



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



